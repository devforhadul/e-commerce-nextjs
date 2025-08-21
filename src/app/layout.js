import "./globals.css";
import Navbar from "@/components/Navbar";
import NextauthSessionProvider from "@/providers/NextauthSessionProvider";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // যেসব weight লাগবে
});

export const metadata = {
  title: "E-commerce",
  description: "E-commerce Website with next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <NextauthSessionProvider>
        <body
          className={poppins.className}
        >

          <Navbar />
          <main className="w-11/12 mx-auto">
            {children}
          </main>
        </body>
      </NextauthSessionProvider>
    </html>
  );
}
