type Props = {
   message: JSX.Element;
   title: string;
};

export const Error = ({ message, title }: Props) => {
   return (
      <div className="error my-3">
         <div className="flex items-center gap-x-3 border-2 border-red-300 w-fit p-5 rounded-xl bg-red-500/20">
            <div className="p-1 px-3 bg-red-500 rounded-3xl">{title}</div>
            <p className="text-red-300">{message}</p>
         </div>
      </div>
   );
};
