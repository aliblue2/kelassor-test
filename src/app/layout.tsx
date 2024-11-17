import { ToastContainer } from "react-toastify";
import Providers from "./Providers";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import { getBootcamps } from "@/requests/getBootcamps";
import Script from "next/script";
import { getWorkShopsHeader } from "@/requests/work-shop/getWorkShops";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const  bootcamps = await getBootcamps();
  const workShops  = await getWorkShopsHeader();

  return (
    <html dir="rtl" lang="en">
      <head>
        <Script
          id="yektanet-analytics"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function (t, e, n) {
                t.yektanetAnalyticsObject = n, t[n] = t[n] || function () {
                  t[n].q.push(arguments)
                }, t[n].q = t[n].q || [];
                var a = new Date, r = a.getFullYear().toString() + "0" + a.getMonth() + "0" + a.getDate() + "0" + a.getHours(),
                    c = e.getElementsByTagName("script")[0], s = e.createElement("script");
                s.id = "ua-script-Iyb2lWBT"; s.dataset.analyticsobject = n;
                s.async = 1; s.type = "text/javascript";
                s.src = "https://cdn.yektanet.com/rg_woebegone/scripts_v3/Iyb2lWBT/rg.complete.js?v=" + r;
                c.parentNode.insertBefore(s, c)
              }(window, document, "yektanet");
            `,
          }}
        />
      </head>
      <body className="flex overflow-y-auto overflow-x-hidden flex-col w-screen text-black min-h-dvh bg-background font-vazir">
        <Providers workShops={workShops} bootcamps={bootcamps}>{children}</Providers>
        <ToastContainer />
      </body>
    </html>
  );
}
