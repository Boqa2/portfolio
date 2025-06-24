import Header from "./components/Header";
import "bootstrap-icons/font/bootstrap-icons.css";
import Video from "../public/rrrrrr.mp4";
import Sidebar from "./components/Sidebar";
import { useEffect, useRef, useState } from "react";
import React from "react";
import Foto from "../public/image.png";
import Foto1 from "../public/sonic.png";
import Foto2 from "../public/drop.png";
import Foto3 from "../public/pizza.png";
import Foto4 from "../public/finesferb.png";
import Foto5 from "../public/capitancrunch.png";
import Foto6 from "../public/monopol.png";
import Foto7 from "../public/scrath.png";
import Foto8 from "../public/xcelener.png";
import SecHello from "./pages/SecHello";
import SecSkills from "./pages/SecSkills";
import SecEduct from "./pages/SecEduct";
import SecPortfo from "./pages/SecPortfo";
import SecConts from "./pages/SecConts";
import pdf from "./components/Бобоев Бахтовар.pdf";

export default function App() {
  const [isSidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const [isOpen, setOpen] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch(() => {
        // Попробуйте запустить позже, если автозапуск не удался
        console.log(
          "Видео не смогло автозапуститься, возможно, требуется взаимодействие пользователя."
        );
      });
    }
  }, []);
  return (
    <div onClick={() => setSidebarOpen(false)}>
      <div className="container mx-auto w-full h-full">
        <div className="fixed top-0  left-0 w-full h-full -z-10">
          <video
            className="w-full h-full object-cover"
            autoPlay
            ref={videoRef}
            controls={false}
            playsInline
            loop
            muted
          >
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
            <SecPortfo
              foto={Foto}
              foto1={Foto1}
              foto2={Foto2}
              foto3={Foto3}
              foto4={Foto4}
              foto5={Foto5}
              foto6={Foto6}
              foto7={Foto7}
              foto8={Foto8}
            />
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
