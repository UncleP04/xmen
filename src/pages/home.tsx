import React from "react";
import Navbar from "@/components/navbar";
import Header from "@/components/header";
import About from "@/components/about";
import Tokens from "@/components/tokenomics";
import Sidebar from "@/components/sidebar";
import Party from "@/components/party";

const HomePage: React.FC = () => {
  return (
    <div className="bg-primary">
      <div className="">
        <Navbar />
        <Sidebar />
        <div id="home">
          <Header />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="tokens">
          <Tokens />
        </div>
        {/* <div id="party">
          <Party />
        </div> */}
      </div>
    </div>
  );
};

export default HomePage;
