import { PrismaClient } from '@prisma/client';
import type { NextApiHandler } from 'next';
import bcrypt from 'bcrypt';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { HTTPStatus, RegisterFailReason } from '../../../helpers/enums';

export type RequestBody = {
   firstName: string;
   lastName: string;
   email: string;
   password: string;
};

const prisma = new PrismaClient();

const register: NextApiHandler = async (req, res) => {
   const credentials: RequestBody = JSON.parse(req.body);

   if (!credentials.email && !credentials.password) {
      res.status(HTTPStatus.BAD_REQUEST).json({
         registered: false,
         reason: RegisterFailReason.UNSUFFICIENT_DATA,
      });

      return;
   }

   const salt = await bcrypt.genSalt();
   const hash = await bcrypt.hash(credentials.password, salt);

   try {
      const newUser = await prisma.user.create({
         data: {
            name: `${credentials.firstName} ${credentials.lastName}`,
            email: credentials.email,
            password: hash + ':' + salt,
         },
      });
      res.status(HTTPStatus.OK).json({
         registered: true,
         email: newUser.email,
      });
   } catch (error) {
      if (
         error instanceof PrismaClientKnownRequestError &&
         error.code === 'P2002'
      ) {
         res.status(HTTPStatus.BAD_REQUEST).json({
            registered: false,
            reason: RegisterFailReason.EMAIL_ALREADY_TAKEN,
         });
      } else {
         res.status(HTTPStatus.BAD_REQUEST).json({
            registered: false,
            reason: RegisterFailReason.UNKNOWN_ERROR,
         });
      }
   }
};

export default register;
