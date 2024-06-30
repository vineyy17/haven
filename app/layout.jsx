import { Playfair_Display, Manrope } from 'next/font/google';
import '@/styles/main.scss';
import 'splitting/dist/splitting.css';
import 'splitting/dist/splitting-cells.css';
import Head from 'next/head';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
  adjustFontFallback: false,
});

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
  adjustFontFallback: false,
});

export const metadata = {
  title: 'Haven - Modern and Elegant Decor',
  description: 'Purchase your dream furniture',
  keywords: 'chairs, furniture, buy chairs, buy furniture',
};

const MainLayout = ({ children }) => {
  return (
    <html lang="en" className={`${playfair.variable} ${manrope.variable}`}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body>
        {/* <NavMenu /> */}
        <main>{children}</main>
      </body>
    </html>
  );
};

export default MainLayout;
