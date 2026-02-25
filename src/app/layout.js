import { Poppins } from "next/font/google";
import './globals.css';
import ThemeProvider from '@/components/ThemeProvider';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: 'AM-VERTEX | Enterprise Innovation',
  description: 'Multi-disciplinary innovation for the modern enterprise. Engineering, IT infrastructure, and creative solutions.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${poppins.className} bg-white dark:bg-dark-900 text-gray-900 dark:text-white transition-colors duration-300`}>
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}