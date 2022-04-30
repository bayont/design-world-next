import type { NextPage } from 'next';
import Link from 'next/link';

import { Submit, Password, Mail } from '../components/Input';

const Login: NextPage = () => {
   return (
      <>
         <form className="ml-24" action="">
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

export default Login;
