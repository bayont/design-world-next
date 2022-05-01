import { NextPage } from 'next';
import Link from 'next/link';

type Props = {
   href: string;
   title: string;
};

export const AuthButton = ({ href, title }: Props) => {
   return (
      <>
         <Link href={href}>
            <button className="w-full text-center bg-primary-main p-4 rounded-lg cursor-pointer transition-colors hover:bg-primary-hover active:bg-primary-pressed">
               {title}
            </button>
         </Link>
      </>
   );
};
