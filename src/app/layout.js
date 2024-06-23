import { Inter } from "next/font/google";
import "./globals.scss";
import Header from './components/Header'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Maleesha Weerasinghe",
  description: "Code by Maleesha Weerasinghe",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

    <body className={inter.className}>
      <Header />
      {children}
    </body>
  </html>
  );
}
