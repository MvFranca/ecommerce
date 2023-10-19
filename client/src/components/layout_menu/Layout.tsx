import React from "react";
import Header from "../header/Header";
import Busca from "./Busca";
import Footer from "./Footer";

type props = {
  children: React.ReactNode;
};

const Layout = ({ children }: props) => {
  return (
    <div>
      <Header />
      <Busca />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
