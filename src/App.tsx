import Header from "./components/Header";
import "bootstrap-icons/font/bootstrap-icons.css";
import Video from "../public/rrrrrr.mp4";


export default function App() {

  return (
    <div className="relative mx-auto container w-full">
      <div className="fixed top-0  left-0 w-full h-full -z-10">
        <video className="w-full h-full object-cover" autoPlay loop muted>
          <source src={Video} type="video/mp4" />
          Ваш браузер не поддерживает тег видео.
        </video>
      </div>
      <Header />
      <div className="pt-24 px-10 text-white">
        <div className="">
          <section id="home" className="h-[calc-200px] w-full bg-slate-950">
            osokdsoks
          </section>
          <section id="portfolio" className="h-screen w-full bg-slate-950">
            osokdsoksksdjs
          </section>
          <section id="contact" className="h-screen w-full bg-slate-950">
            sndjdskmsmdksds
          </section>
        </div>
      </div>
    </div>
  );
}
