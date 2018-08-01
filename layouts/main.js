import dynamic from 'next/dynamic';
import Router from 'next/router';
import { MyHead as Head } from '../next';
import Chatlio from '../services/Chatlio';
import { TranslationProvider } from '../i18n';

import { MyAppBar, Footer } from '../components';

const Dialog = dynamic(import('../components/MyDialog'));
const Snackbar = dynamic(import('../components/MySnackbar'));
const Drawer = dynamic(import('../components/MyDrawer'));

import ScreenSize from '../material-ui/ScreenSize';
import menuItems from '../components/menuItems';
import * as gtag from '../services/gtag';

Router.onRouteChangeComplete = url => {
  gtag.pageview(url);
};

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
