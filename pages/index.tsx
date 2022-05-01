import type { NextPage } from 'next';
import { useSession } from 'next-auth/react';
import { Authorization } from '../components/Authorization';
import { AuthButton } from '../components/Button/AuthButton';
import { GoogleButton } from '../components/Button/GoogleButton';
import { SignOut } from '../components/Button/SignOut';

const Home: NextPage = () => {
   const { data: session } = useSession();
   return (
      <>
         {session ? (
            <>
               <SignOut />
            </>
         ) : (
            <Authorization />
         )}
      </>
   );
};

export default Home;
