import type { GetServerSideProps, NextPage } from 'next';
import { getSession, signIn } from 'next-auth/react';

import Link from 'next/link';
import { useRouter } from 'next/router';
import { FormEvent, useCallback, useMemo, useState } from 'react';
import { Error } from '../components/Error';

import { Checkbox, Mail, Password, Submit, Text } from '../components/Input';
import { HTTPStatus, RegisterFailReason } from '../helpers/enums';
import { RequestBody } from './api/auth/register';

const Register: NextPage = () => {
   const router = useRouter();

   const formSubmitHandle = useCallback(
      async (e: FormEvent<HTMLFormElement>) => {
         const inputs = (e.target as HTMLFormElement).elements;
         const newUser: RequestBody = {
            firstName: (inputs.namedItem('user-first-name') as HTMLInputElement)
               .value,
            lastName: (inputs.namedItem('user-last-name') as HTMLInputElement)
               .value,
            email: (inputs.namedItem('user-email') as HTMLInputElement).value,
            password: (inputs.namedItem('user-password') as HTMLInputElement)
               .value,
         };
         const res = await fetch('/api/auth/register', {
            method: 'post',
            body: JSON.stringify(newUser),
         });

         const resJson = await res.json();
         const { status } = res;
         if (status == HTTPStatus.BAD_REQUEST) {
            const { reason } = resJson;
            switch (reason) {
               case RegisterFailReason.EMAIL_ALREADY_TAKEN:
                  setError(RegisterFailReason.EMAIL_ALREADY_TAKEN);
                  break;
               case RegisterFailReason.UNSUFFICIENT_DATA:
                  setError(RegisterFailReason.UNSUFFICIENT_DATA);
                  break;
               case RegisterFailReason.UNKNOWN_ERROR:
                  setError(RegisterFailReason.UNKNOWN_ERROR);
                  break;
               default:
                  break;
            }
         } else if (status == HTTPStatus.OK) {
            await signIn('email-auth', {
               redirect: false,
               email: (inputs.namedItem('user-email') as HTMLInputElement)
                  .value,
               password: (inputs.namedItem('user-password') as HTMLInputElement)
                  .value,
            });
            router.push('/');
         }
      },
      [],
   );

   const [error, setError] = useState(-1);

   const errors = useMemo(
      () => [
         <Error
            title="Unsufficient Data"
            message={<>Ensure that every input is filled.</>}
         />,
         <Error
            title="Email taken"
            message={
               <>
                  Your email is already taken. You have an account?{' '}
                  <Link href="/login">Login</Link>{' '}
               </>
            }
         />,
         <Error
            title="Unknown error"
            message={<>Unknown error! Try again later!</>}
         />,
      ],
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
            {error > -1 && errors[error]}

            <p className="text-primary-main font-bold text-2xl">
               Start for free
            </p>
            <h1 className="font-semibold text-[64px]">Create new account</h1>
            <section className="max-w-xl mt-5">
               <div className="flex flex-col gap-y-5">
                  <div className="flex gap-x-5">
                     <Text
                        name="user-first-name"
                        placeholder="First name"
                        required
                     />
                     <Text
                        name="user-last-name"
                        placeholder="Last name"
                        required
                     />
                  </div>

                  <Mail placeholder="Email" />

                  <div className="relative">
                     <Password placeholder="Password" />
                  </div>
                  <div className="flex">
                     <div className="relative w-fit mr-3">
                        <Checkbox name="tos-and-pp-accept" required={true} />
                     </div>
                     <p>
                        I agree with <Link href="/tos">Terms of Service</Link>{' '}
                        and <Link href="/privacy-policy">Privacy Policy</Link>
                     </p>
                  </div>

                  <Submit value="Register" />

                  <div className="text-center">
                     Already a Member? <Link href="/login">Login</Link>
                  </div>
               </div>
            </section>
         </form>
      </>
   );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
   const { req, res } = context;
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

export default Register;
