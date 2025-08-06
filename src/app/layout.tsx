import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import GlobalLoader from '@/components/GlobalLoader'




export const metadata: Metadata = {
  title: "Ministry of Tertiary and Technical Education",
  description: "The Ministry of Tertiary and Technical Education in Imo State is responsible for overseeing and developing the state's higher education sector, as well as managing academic programs and institutional development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <GlobalLoader />

        <Navbar/>
        {children}
      </body>
    </html>
  );
}
