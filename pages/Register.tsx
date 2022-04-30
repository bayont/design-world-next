import type { NextPage } from 'next';
import Link from 'next/link';
import { Checkbox, Mail, Password, Submit, Text } from '../components/Input';

const Register: NextPage = () => {
   return (
      <>
         <form className="ml-24" action="">
            <p className="text-primary-main font-bold text-2xl">
               Start for free
            </p>
            <h1 className="font-semibold text-[64px]">Create new account</h1>
            <section className="max-w-xl mt-5">
               <div className="flex flex-col gap-y-5">
                  <div className="flex gap-x-5">
                     <Text placeholder="First name" />
                     <Text placeholder="Last name" />
                  </div>

                  <Mail placeholder="Email" />

                  <div className="relative">
                     <Password placeholder="Password" />
                  </div>
                  <div className="flex">
                     <div className="relative w-fit mr-3">
                        <Checkbox />
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

export default Register;
