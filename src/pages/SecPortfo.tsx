import { useTranslation } from "react-i18next";
import { Typewriter } from "react-simple-typewriter";

const SecPortfo = ({ foto }: { foto: string }) => {
  const { t } = useTranslation();
  return (
    <section
      id="portfolio"
      className="pb-10 w-full pt-24"
    >
      <h1 className="md:text-3xl text-2xl my-2 mb-6 text-center font-extrabold text-white ">
        <Typewriter
          words={[t("header.portfolio")]}
          cursor
          cursorStyle="I"
          typeSpeed={100}
          deleteSpeed={100}
        />
      </h1>
      <p className=" font-poppins font-medium md:text-2xl text-base my-5">{t("portfo")}:</p>
      <div className="grid md:grid-cols-2 grid-cols-1">
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
      </div>
    </section>
  );
};

export default SecPortfo;
