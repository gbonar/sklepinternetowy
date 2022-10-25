import Head from "next/head";
import { Children, ReactNode } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Main } from "./Main";
import SEO from '../next-seo.config.js';

interface LayoutProps {
    children: ReactNode
  }

export const Layout = ({children} : LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Test sklepu</title>
        <meta name="description" content="Jakis opis strony"></meta>
      </Head>
      <Header />
      <div className="flex-grow">{children}</div>
      <Footer />
    </div>
  );
};
