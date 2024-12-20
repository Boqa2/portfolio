import Header from "./components/Header";
import "bootstrap-icons/font/bootstrap-icons.css";
import Video from "../public/rrrrrr.mp4";
import Sidebar from "./components/Sidebar";
import { useState } from "react";
import React from "react";
import SecHello from "./pages/SecHello";
import SecSkills from "./pages/SecSkills";

export default function App() {
  const [isSidebarOpen, setSidebarOpen] = useState<boolean>(false);
  return (
    <div onClick={() => setSidebarOpen(false)}>
      <div className="container mx-auto w-full">
        <div className="fixed top-0  left-0 w-full h-full -z-10">
          <video className="w-full h-full object-cover" autoPlay loop muted>
            <source src={Video} type="video/mp4" />
            Ваш браузер не поддерживает тег видео.
          </video>
        </div>
        <Header
          isSidebarOpen={isSidebarOpen}
          setSidebarOpen={() => setSidebarOpen(!isSidebarOpen)}
        />
        <div className="px-10 overflow-y-hidden text-white">
          <SecHello />
          <SecSkills />
          <section
            id="portfolio"
            className="h-screen border-b-2 border-green-600 w-full pt-16"
          >
            osokdsoksksdjs
          </section>
          <section
            id="contact"
            className="h-screen  border-b-2 border-green-600  w-full pt-16"
          >
            sndjdskmsmdksds
          </section>
        </div>
      </div>
      {isSidebarOpen && (
        <Sidebar handleClick={(e: React.MouseEvent) => e.stopPropagation()} />
      )}
    </div>
  );
}
