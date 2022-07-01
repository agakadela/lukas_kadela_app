import Head from 'next/head';
import Author from './Author';
import Footer from './Footer/Footer';
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
      <Footer />
      <FooterTip />
      <Author />
    </>
  );
};

export default Layout;
