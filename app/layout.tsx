'use client';
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Subnavbar from "./components/subnavbar";
import "./globals.css";
import { usePathname } from "next/navigation";
import NotFoundLayout from "./not-found-layout/NotFoundLayout";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname: string = usePathname() || "";
  const shouldRenderFooter = !["/404", "\\404", "404"].includes(pathname);

  console.log("shouldRenderFooter", shouldRenderFooter)
  if (!shouldRenderFooter) {
    // eslint-disable-next-line react/no-children-prop
    return <NotFoundLayout children={children} />;
  }

  return (
    <html lang="en">
      <body>
        <main className="fixed w-full z-10">
          <Navbar />
          <Subnavbar />
        </main>
        {children}
        <Footer />
      </body>
    </html>
  );
}
