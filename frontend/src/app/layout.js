import "./globals.css";
import NavBar from "@/components/common/NavBar";
import Footer from "@/components/common/Footer";
import { Suspense } from "react";
import Loading from "./loading";
import { Poppins } from "next/font/google";

const poppins = Poppins({ weight: "400", subsets: ["latin"] });

export const metadata = {
  title: "KnoPrice",
  description: "This is Knoprice",
  openGraph: {
    title: "k",
    description: "kk",
    type: "website",
    locale: "en_IE",
    url: "https://www.knoprice.com/",
    siteName: "knoprice",
  },
  twitter: {
    handle: "@handle",
    site: "@site",
    cardType: "summary_large_image",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className="!scroll-smooth"
      data-lt-installed="true"
      suppressHydrationWarning={true}
    >
      <body
        className={("min-h-screen bg-dark-300 antialiased", poppins.className)}
      >
        <main>
          <NavBar />
          <Suspense fallback={<Loading />}>{children}</Suspense>
          <Footer />
        </main>
      </body>
    </html>
  );
}
