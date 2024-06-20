import Providers from "./Providers";
import "./globals.css";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html dir="rtl" lang="en">
      <body className="flex overflow-y-auto overflow-x-hidden flex-col w-screen text-black min-h-dvh bg-background font-vazir">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
