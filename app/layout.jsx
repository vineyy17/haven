import { Playfair_Display, Manrope } from 'next/font/google';
import '@/styles/main.scss';
import 'splitting/dist/splitting.css';
import 'splitting/dist/splitting-cells.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '500', '600', '700', '800'],
});

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  weight: ['400', '500', '600', '700', '800'],
});

export const metadata = {
  title: 'Haven - Modern and Elegant Decor',
  description: 'Purchase your dream furniture',
  keywords: 'chairs, furniture, buy chairs, buy furniture',
};

const MainLayout = ({ children }) => {
  return (
    <html lang="en" className={`${playfair.variable} ${manrope.variable}`}>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
};

export default MainLayout;
