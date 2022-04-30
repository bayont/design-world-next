import type { NextPage } from 'next';
import Link from 'next/link';

const Home: NextPage = () => {
   return (
      <>
         <Link href="/login">
            <button>Login</button>
         </Link>
         <Link href="/register">
            <button>Register</button>
         </Link>
      </>
   );
};

export default Home;
