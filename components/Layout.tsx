import { Footer } from './Footer';
import { Navbar } from './NavBar';

export const Layout = ({ children }: { children: JSX.Element }) => {
   return (
      <div>
         <Navbar />
         {children}
         <Footer />
      </div>
   );
};
