type Props = {
   placeholder: string;
   setInputValue?: (value: string) => void;
};

export const Mail = ({ placeholder, setInputValue }: Props) => {
   return (
      <>
         <input
            type="email"
            name="user-email"
            placeholder={placeholder}
            className="border border-neutral-90 rounded-lg p-4 font-medium text-base text-neutral-60 bg-inherit"
            onInput={(e) =>
               setInputValue &&
               setInputValue((e.target as HTMLInputElement).value)
            }
            required
         />
      </>
   );
};
