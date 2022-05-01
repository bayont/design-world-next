import type { NextPage } from 'next';
import { useSession } from 'next-auth/react';
import Link from 'next/link';

const Home: NextPage = () => {
   const { data: session } = useSession();
   return (
      <>
         {session ? (
            <>
               <Link href="/signout">
                  <button>Sign out</button>
               </Link>
            </>
         ) : (
            <>
               <Link href="/login">
                  <button>Login</button>
               </Link>
               <Link href="/register">
                  <button>Register</button>
               </Link>
            </>
         )}
      </>
   );
};

export default Home;
