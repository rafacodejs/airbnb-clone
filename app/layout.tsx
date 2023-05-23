import './globals.css';
import { Inter } from 'next/font/google';
import { Navbar } from './components/navbar/Navbar';
import { Modal } from './components/modals/Modal';
import { RegisterModal } from './components/modals/RegisterModal';

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
        <RegisterModal />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
