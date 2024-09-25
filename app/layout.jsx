import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import { ThemeProvider } from "@/components/ui/ThemeContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Deepanshu Chalia",
  description: "Welcome to my website",
  image: '/title_image.jpg'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <Head>
          <title>{metadata.title}</title>
          <meta name="description" content={metadata.description} />
          <link rel="icon" href="/favicon.png" sizes="48x48" />
      </Head>
      <body className={inter.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
