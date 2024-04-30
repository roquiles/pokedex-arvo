import { ReactNode } from 'react';
import Header from '../Header';
import Footer from '../Footer';

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <div className="flex flex-col h-full">
    <Header />
    {children}
    <Footer />
  </div>
);

export default Layout;
