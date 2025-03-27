import { useTranslation } from "react-i18next";
import { Typewriter } from "react-simple-typewriter";
import { ForFoto } from "../types/type";

const SecPortfo = ({ foto, foto1, foto2, foto3 }: ForFoto) => {
  const { t } = useTranslation();
  return (
    <div className="space-y-4">
      <section id="portfolio" className="pb-10 w-full pt-24">
        <h1 className="md:text-3xl text-2xl my-2 mb-6 text-center font-extrabold text-white ">
          <Typewriter
            words={[t("header.portfolio")]}
            cursor
            cursorStyle="I"
            typeSpeed={100}
            deleteSpeed={100}
          />
        </h1>
        <p className=" font-poppins font-medium md:text-2xl text-base my-5">
          {t("portfo")}:
        </p>
        <div className="grid md:grid-cols-2 gap-5 grid-cols-1">
          <div className="border neons duration-500 hover:scale-105 bg-green-400 bg-opacity-55 rounded-xl border-green-500 p-3">
            <a
              target="_blank"
              className="rounded-3xl"
              href="https://v2-ostoriess.netlify.app/"
            >
              <img className="rounded-xl" src={foto} alt="" />
              <p className="text-lg font-poppins my-3 font-bold">Ostories</p>
            </a>
          </div>
          <div className="border neons duration-500 hover:scale-105 bg-green-400 bg-opacity-55 rounded-xl border-green-500 p-3">
            <a
              target="_blank"
              className="rounded-3xl"
              href="https://boqa2.github.io/game-macdonalds/"
            >
              <img className="rounded-xl" src={foto1} alt="" />
              <p className="text-lg font-poppins my-3 font-bold">
                Game Mac'Donalds
              </p>
            </a>
          </div>
          <div className="border neons duration-500 hover:scale-105 bg-green-400 bg-opacity-55 rounded-xl border-green-500 p-3">
            <a
              target="_blank"
              className="rounded-3xl"
              href="https://boqa2.github.io/drop-game/"
            >
              <img className="rounded-xl" src={foto2} alt="" />
              <p className="text-lg font-poppins my-3 font-bold">Game Drop</p>
            </a>
          </div>
          <div className="border neons duration-500 hover:scale-105 bg-green-400 bg-opacity-55 rounded-xl border-green-500 p-3">
            <a
              target="_blank"
              className="rounded-3xl"
              href="https://v0pizza-react.netlify.app/"
            >
              <img className="rounded-xl" src={foto3} alt="" />
              <p className="text-lg font-poppins my-3 font-bold">React Pizza</p>
            </a>
          </div>
        </div>
      </section>
      <div className="line"></div>
    </div>
  );
};

export default SecPortfo;
