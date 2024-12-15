import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "aos/dist/aos.css";
import "../styles/style.css";
import { useEffect } from "react";
import AOS from "aos";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { EventCategoryProvider } from "@/context/EventCategoryContext";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  // Initialize AOS in useEffect to ensure it runs only on the client side
  useEffect(() => {
    AOS.init({
      duration: 2000, // Animation duration (in milliseconds)
      once: true, // Animations will happen only once
    });
    // Trigger refresh on window resize to reinitialize positions
    AOS.refresh();
  }, []);

  return (
    <>
      <EventCategoryProvider>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </EventCategoryProvider>
    </>
  );
}
