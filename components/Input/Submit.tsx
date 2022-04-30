type Props = {
   value: string;
};

export const Submit = ({ value }: Props) => {
   return (
      <>
         <input
            className="text-center bg-primary-main p-4 rounded-lg cursor-pointer transition-colors hover:bg-primary-hover active:bg-primary-pressed"
            type="submit"
            value={value}
         />
      </>
   );
};
