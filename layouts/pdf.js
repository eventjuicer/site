import dynamic from 'next/dynamic';
import { MyHead as Head } from '../next';
import Chatlio from '../services/Chatlio';
import { TranslationProvider } from '../i18n';


import ScreenSize from '../material-ui/ScreenSize';
import menuItems from '../components/menuItems';


const Layout = ({ children }) => {
  return (
    <TranslationProvider>
      <ScreenSize />

      <Head />

    

      {children}

    </TranslationProvider>
  );
};

export default Layout;
