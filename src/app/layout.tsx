import localFont from "next/font/local";
import "./globals.css";
import { Sidebar } from "@/components/SideBar/Sidebar";

const robotoSans = localFont({
  src: "./fonts/Roboto-Regular.ttf",
  variable: "--font-roboto-sans",
  weight: "100 400 700 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={robotoSans.variable}>
        <div className="layout">
          <Sidebar />
          <div className="main-content">{children}</div>
        </div>
      </body>
    </html>
  );
}
