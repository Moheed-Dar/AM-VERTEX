import { Poppins } from "next/font/google";
import "./globals.css";

import ThemeProvider from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: {
    default: "AM-VERTEX | Enterprise Innovation",
    template: "%s | AM-VERTEX",
  },

  description:
    "AM-VERTEX delivers multi-disciplinary enterprise innovation, scalable software solutions, modern web development, IT infrastructure, and creative digital experiences for modern businesses.",

  keywords: [
    "AM-VERTEX",
    "Enterprise Innovation",
    "Software Solutions",
    "Web Development",
    "Next.js",
    "React.js",
    "Node.js",
    "IT Infrastructure",
    "Creative Solutions",
    "Digital Agency",
    "Business Technology",
    "Modern Enterprise",
  ],

  authors: [{ name: "AM-VERTEX" }],

  creator: "AM-VERTEX",

  publisher: "AM-VERTEX",

  metadataBase: new URL("https://am-vertex.vercel.app"),

  openGraph: {
    title: "AM-VERTEX | Enterprise Innovation",

    description:
      "Modern enterprise software solutions, scalable web platforms, and innovative digital experiences.",

    url: "https://am-vertex.vercel.app",

    siteName: "AM-VERTEX",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AM-VERTEX",
      },
    ],

    locale: "en_US",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "AM-VERTEX | Enterprise Innovation",

    description:
      "Modern enterprise software solutions and innovative digital experiences.",

    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${poppins.className} bg-white dark:bg-dark-900 text-gray-900 dark:text-white transition-colors duration-300`}
      >
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
