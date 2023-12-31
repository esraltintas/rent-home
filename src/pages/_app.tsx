import "@/styles/globals.css";
import { Header } from "@/layout/Header/Header";
import { Footer } from "@/layout/Footer/Footer";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-white">
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
