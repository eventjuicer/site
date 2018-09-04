import dynamic from 'next/dynamic';
import { MyHead as Head } from '../next';
import Chatlio from '../services/Chatlio';
import { TranslationProvider } from '../i18n';

import { MyAppBar, Footer, 
  //MyDrawer as Drawer 
} from '../components';

const Dialog = dynamic(import('../components/MyDialog'));
const Snackbar = dynamic(import('../components/MySnackbar'));
const Drawer = dynamic(import('../components/MyDrawer'));

import ScreenSize from '../material-ui/ScreenSize';
import menuItems from '../components/menuItems';


const Layout = ({ children }) => {
  return (
    <TranslationProvider>
      <ScreenSize />

      <Head />

      <MyAppBar />

      {children}

      <Footer />

      <Dialog />

      <Snackbar />

      <Drawer items={menuItems} />

      <Chatlio button={false} />
    </TranslationProvider>
  );
};

export default Layout;
