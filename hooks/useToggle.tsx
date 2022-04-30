import { useState } from 'react';

export const useToggle = (init?: boolean): [boolean, () => void] => {
   const [toggleVal, setToggle] = useState<boolean>(
      init === undefined ? true : init,
   );

   function toggle() {
      setToggle((prev) => !prev);
   }

   return [toggleVal, toggle];
};
