import { NextApiHandler } from 'next';
import { signOut } from 'next-auth/react';

const logout: NextApiHandler = async (req, res) => {
   signOut({ redirect: false });
};
export default logout;
