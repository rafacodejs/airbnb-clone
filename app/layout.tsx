import './globals.css';
import { Inter } from 'next/font/google';
import { Navbar } from './components/index';

export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb clone',
};
const font = Inter({
  subsets: ['latin'],
});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={font.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
