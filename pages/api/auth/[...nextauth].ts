import NextAuth, { ISODateString } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

type User = {
   id: string;
   name?: string | null;
   email?: string | null;
   image?: string | null;
   loginCounter?: number | null;
};

export type CustomSession = {
   user?: User;
   expires: ISODateString;
};

type Props = {
   user: User;
   session: CustomSession;
};

export default NextAuth({
   session: {
      strategy: 'jwt',
      maxAge: 30 * 24 * 60 * 60,
   },
   adapter: PrismaAdapter(prisma),
   providers: [
      GoogleProvider({
         clientId: process.env.GOOGLE_CLIENT_ID || '',
         clientSecret: process.env.GOOGLE_SECRET_ID || '',
      }),
      CredentialsProvider({
         id: 'email-auth',
         name: 'basic email/password authentication',
         async authorize(credentials: any) {
            const user = await prisma.user.findUnique({
               where: {
                  email: credentials.email,
               },
            });
            if (user === null) return null;
            if (user.password === null) return null;

            const [hashOrigin, salt] = user.password.split(':');
            const hash = await bcrypt.hash(credentials.password, salt);
            if (hashOrigin === hash) return user;
            return null;
         },
         credentials: {
            email: {
               label: 'Email',
               type: 'email',
            },
            password: {
               label: 'Password',
               type: 'password',
            },
         },
      }),
   ],
   callbacks: {
      session: async ({ session, token }) => {
         const user = await prisma.user.findUnique({
            where: {
               email: token.email || '',
            },
         });
         const newSession = { user, expires: session.expires };

         return newSession as CustomSession;
      },
   },
   events: {},
});
