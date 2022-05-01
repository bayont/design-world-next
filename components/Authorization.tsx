import { AuthButton } from './Button/AuthButton';
import { GoogleButton } from './Button/GoogleButton';

export const Authorization = () => {
   return (
      <div className="sm:ml-24 sm:max-w-xl w-full px-10 flex flex-col gap-y-5">
         <p className="text-primary-main font-bold text-2xl">
            Contribute Design World
         </p>
         <h1 className="font-semibold text-[64px]">Authorize</h1>
         <AuthButton href="/login" title="Login" />
         <AuthButton href="/register" title="Register" />
         <GoogleButton />
      </div>
   );
};
