import Head from 'next/head';
import FooterTip from './FooterTip';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Lukas Kadela</title>
        <meta name='description' content='Historic preservation specialist' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      {children}
      <FooterTip />
    </>
  );
};

export default Layout;
