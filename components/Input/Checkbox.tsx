export const Checkbox = () => {
   return (
      <>
         <input
            className="block relative appearance-none w-6 aspect-square bg-[#C4C4C4] rounded-lg border-none outline-none transition-colors 
            peer checked:bg-neutral-20"
            type="checkbox"
            name="tos-agreement"
            id="tos-agreement"
         />
         <div className="pointer-events-none opacity-0 absolute left-1/2 top-[calc(50%-2px)] h-4 w-2 border-b-2 border-r-2 border-primary-hover rotate-45 -translate-y-1/2 -translate-x-1/2 transition-opacity peer-checked:opacity-100"></div>
      </>
   );
};
