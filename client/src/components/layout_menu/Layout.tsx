import React from "react";
import Header from "../header/Header";
import Busca from "./Busca";
import Footer from "./Footer";
import ComponentesFixos from "./ComponentsFixos";

type props = {
  children: React.ReactNode;
};

const Layout = ({ children }: props) => {
  return (
    <div>
      <Header />
      <Busca />
      <main>
        <ComponentesFixos/>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
