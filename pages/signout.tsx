import type { NextPage } from 'next';
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const SignOut: NextPage = () => {
   signOut({ redirect: false });
   return <></>;
};

export default SignOut;
