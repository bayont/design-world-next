type Props = {
   placeholder: string;
   setInputValue?: (value: string) => void;
};

export const Text = ({ placeholder, setInputValue }: Props) => {
   return (
      <>
         <input
            type="text"
            onInput={(e) =>
               setInputValue &&
               setInputValue((e.target as HTMLInputElement).value || '')
            }
            className="w-full border border-neutral-90 rounded-lg p-4 font-medium text-base text-neutral-60 bg-inherit;"
            placeholder={placeholder}
            name=""
            id=""
         />
      </>
   );
};
