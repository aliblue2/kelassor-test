import type { Metadata } from "next";
import Footer from "@/components/Layout/Footer/Footer";
import AuthModal from "@/components/Auth/AuthModal/AuthModal";
import NavBar from "@/components/Layout/NavBar/NavBar";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "کلاسور",
  description: "یاد بگیر، تجربه کسب کن، تو بهترین شرکت‌ها استخدام شو.",
};

type RootLayoutProps = { children: ReactNode };
const RootLayout = async ({ children }: RootLayoutProps) => {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
      <AuthModal />
    </>
  );
};
export default RootLayout;
