import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import FooterContainer from "./components/footer/FooterContainer";
import { CartProvider } from "./context/CartContext";
import { AuthProvider } from "./context/AuthContext";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CherryBooks",
  description: "Generated by create next app",
};

export default function RootLayout({ children, auth }) {
  return (
      <html lang="en">
          <body className={inter.className}>
              <AuthProvider>
                  <CartProvider>
                      <div className="grid grid-rows-layout-principal w-full min-h-screen">
                          <Navbar/>
                          <main className="w-full justify-self-center flex justify-center flex-col items-center">
                              {auth}
                              {children}
                          </main>
                          <FooterContainer />
                      </div>
                  </CartProvider>
              </AuthProvider>
          </body>
      </html>
  );
}
