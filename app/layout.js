import { DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "./header/page";
// import Footer from "./footer/page";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';



const poppins = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'], // Add the weights you need here
});
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head><link rel="icon" href="/favicon.ico" /></head>
      <body className={poppins.className}>
      <Header/>
      {children}
      {/* <Footer/> */}
      </body>
    </html>
  );
}
