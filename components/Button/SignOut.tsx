import { signOut } from 'next-auth/react';
import { useState } from 'react';

export const SignOut = () => {
   const [openPopup, setOpenPopup] = useState(false);
   return (
      <>
         <button onClick={() => setOpenPopup(true)}>Sign out</button>
         {openPopup && (
            <>
               <div className="absolute left-0 top-0 w-screen h-screen backdrop-brightness-[0.3]"></div>
               <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary-focus rounded-xl shadow-sm shadow-primary-main">
                  <header className="pt-10 px-10">
                     Do you want to sign out?
                  </header>
                  <div className="w-full flex justify-center my-5">
                     <button
                        onClick={() => {
                           signOut({ redirect: false });
                           setOpenPopup(false);
                        }}
                        className="py-1 w-16 bg-primary-main rounded-l-md hover:bg-primary-hover"
                     >
                        Yes
                     </button>
                     <button
                        onClick={() => setOpenPopup(false)}
                        className="py-1 w-16 bg-primary-main rounded-r-md hover:bg-primary-hover"
                     >
                        No
                     </button>
                  </div>
               </div>
            </>
         )}
      </>
   );
};
