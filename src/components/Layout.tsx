import { ReactNode } from 'react';
import NavBar from './NavBar/NavBar';
import Footer from './footer/Footer';


interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;