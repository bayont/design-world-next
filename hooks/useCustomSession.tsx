import { useSession } from 'next-auth/react';
import { CustomSession } from '../pages/api/auth/[...nextauth]';

export const useCustomSession = () => {
   const customSession = useSession();

   return customSession.data as CustomSession;
};
