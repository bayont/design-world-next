import type { GetServerSideProps, NextPage } from 'next';
import Link from 'next/link';
import { getSession, signIn } from 'next-auth/react';

import { Submit, Password, Mail } from '../components/Input';
import { FormEvent, useCallback } from 'react';

const Login: NextPage = () => {
   const formSubmitHandle = useCallback(
      async (e: FormEvent<HTMLFormElement>) => {
         const inputs = (e.target as HTMLFormElement).elements;
         const signed = await signIn('email-auth', {
            email: (inputs.namedItem('user-email') as HTMLInputElement).value,
            password: (inputs.namedItem('user-password') as HTMLInputElement)
               .value,
         });
         console.log(signed);
      },
      [],
   );

   return (
      <>
         <form
            className="ml-24"
            onSubmit={(e) => {
               e.preventDefault();
               formSubmitHandle(e);
            }}
         >
            <h1 className="font-semibold text-[64px]">Login</h1>
            <section className="max-w-xl mt-5">
               <div className="flex flex-col gap-y-5">
                  <Mail placeholder="Email" />

                  <div className="relative">
                     <Password placeholder="Password" />
                  </div>

                  <Submit value="Login" />

                  <div className="text-center">
                     Don't have an account yet?{' '}
                     <Link href="/register">Register</Link>
                  </div>
               </div>
            </section>
         </form>
      </>
   );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
   const { req } = context;
   const session = await getSession({ req });
   if (session)
      return {
         redirect: {
            destination: '/',
            permanent: false,
         },
      };
   return {
      props: {},
   };
};

export default Login;
