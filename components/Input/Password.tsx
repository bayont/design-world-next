import { useToggle } from '../../hooks/useToggle';

type Props = {
   placeholder: string;
   setInputValue?: (value: string) => void;
};

export const Password = ({ placeholder, setInputValue }: Props) => {
   const [pwCovered, togglePwCovered] = useToggle(true);
   return (
      <>
         <input
            className="w-full border border-neutral-90 rounded-lg p-4 font-medium text-base text-neutral-60 bg-inherit;"
            type={pwCovered ? 'password' : 'text'}
            placeholder={placeholder}
            onInput={(e) =>
               setInputValue &&
               setInputValue((e.target as HTMLInputElement).value)
            }
         />
         <div>
            <span
               onClick={(e) => {
                  e.stopPropagation();
                  togglePwCovered();
               }}
               className="material-icons-round select-none absolute right-3 top-1/2 -translate-y-1/2 text-neutral-60"
            >
               {pwCovered ? 'visibility_off' : 'visibility'}
            </span>
         </div>
      </>
   );
};
