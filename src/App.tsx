import Header from "./components/Header";
import "bootstrap-icons/font/bootstrap-icons.css";
import Video from "../public/rrrrrr.mp4";
import Sidebar from "./components/Sidebar";
import { useState } from "react";
import React from "react";
import Foto from "../public/image.png";
import SecHello from "./pages/SecHello";
import SecSkills from "./pages/SecSkills";
import SecEduct from "./pages/SecEduct";
import SecPortfo from "./pages/SecPortfo";
import SecConts from "./pages/SecConts";
import pdf from "./components/Бобоев Бахтовар.pdf"

export default function App() {
  const [isSidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const [isOpen, setOpen] = useState<boolean>(false);
  return (
    <div onClick={() => setSidebarOpen(false)}>
      <div className="container mx-auto w-full h-full">
        <div className="fixed top-0  left-0 w-full h-full -z-10">
          <video className="w-full h-full object-cover" autoPlay loop muted>
            <source src={Video} type="video/mp4" />
            Ваш браузер не поддерживает тег видео.
          </video>
        </div>
        <div className=" h-full text-white">
          <Header
            setOpens={() => setOpen(!isOpen)}
            isSidebarOpen={isSidebarOpen}
            setSidebarOpen={() => setSidebarOpen(!isSidebarOpen)}
          />
          <div className="md:px-10 px-4">
            <SecHello pdf={pdf} open={isOpen} />
            <SecSkills />
            <SecEduct />
            <SecPortfo foto={Foto} />
            <SecConts />
          </div>
        </div>
      </div>
      {isSidebarOpen && (
        <Sidebar
          handleClose={() => setSidebarOpen(false)}
          handleClick={(e: React.MouseEvent) => e.stopPropagation()}
        />
      )}
    </div>
  );
}
