import { useSession } from 'next-auth/react';
import { CustomSession } from '../pages/api/auth/[...nextauth]';

export const Navbar = () => {
   const { data: sess } = useSession();
   console.log(sess);
   const session = sess as CustomSession;

   return (
      <nav className="m-[100px] mt-[64px] mb-[174px] font-bold text-lg">
         Design World{' '}
         {session &&
            ' - Hello ' +
               session.user?.name +
               "! You've visited this page " +
               session.user?.loginCounter +
               ' times'}
      </nav>
   );
};
