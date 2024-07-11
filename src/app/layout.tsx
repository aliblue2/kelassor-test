import { ToastContainer } from "react-toastify";
import Providers from "./Providers";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import { getBootcamps } from "@/requests/getBootcamps";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { bootcamps } = await getBootcamps();
  
  return (
    <html dir="rtl" lang="en">
      <body className="flex overflow-y-auto overflow-x-hidden flex-col w-screen text-black min-h-dvh bg-background font-vazir">
        <Providers bootcamps={bootcamps}>{children}</Providers>
        <ToastContainer />
      </body>
    </html>
  );
}
