import { useTranslation } from "react-i18next";
import { Typewriter } from "react-simple-typewriter";
import Button from "../components/Button";

type proop = {
  open: boolean;
  pdf: string;
};
const SecHello = ({ open, pdf }: proop) => {
  const { t } = useTranslation();
  return (
    <div className="space-y-10">
      <section
        id="home"
        className="w-full grid  bg-green-500 grid-cols-1 shadow-[0_0_15px_5px_rgba(0,255,100,0.8),0_0_30px_10px_rgba(0,255,100,0.5)] lg:grid-cols-2 p-7 rounded-2xl bg-opacity-50"
      >
        <div className="flex flex-col gap-3">
          <h1 className="md:text-4xl text-3xl font-extrabold text-white text-transparent bg-clip-text">
            <Typewriter
              words={[t("welcome.iam")]}
              loop={open}
              cursor
              cursorStyle="I"
              typeSpeed={100}
              deleteSpeed={0}
            />
          </h1>
          <div className="text space-y-3">
            <p className="md:text-lg font-semibold text-base text-white font-inconsolata ">
              <Typewriter
                words={[t("welcome.titles")]}
                cursor
                cursorStyle="|"
                typeSpeed={20}
                deleteSpeed={0}
              />
            </p>
            <Button className="bg-green-950">
              <a target="_blank" href={pdf}>
                {t("resume")}
              </a>
            </Button>
          </div>
          <div className="md:w-2/3 w-full font-semibold text-white ">
            <ul className="grid bottom-0 gap-3  ">
              <li className="flex justify-between">
                <span>{t("data.phone")}</span>
                <span>+992 902 30 03 00</span>
              </li>
              <li className="flex justify-between">
                <span>{t("data.email")}</span>
                <span>bobobah02@gmail.com</span>
              </li>
              <li className="flex justify-between">
                <span>{t("data.addres.for")}</span>
                <span>{t("data.addres.in")}</span>
              </li>
              <li className="flex justify-between">
                <span>{t("data.social")}</span>
                <a
                  className="hover:text-red-500"
                  href="https://www.instagram.com/baxtovarwox/"
                >
                  <i className="bi bi-instagram"></i>
                </a>
                <a
                  className="hover:text-blue-800"
                  href="https://www.facebook.com/profile.php?id=100033834968209"
                >
                  <i className="bi bi-facebook"></i>
                </a>
                <a
                  className="hover:text-blue-600"
                  href="https://www.linkedin.com/feed/"
                >
                  <i className="bi bi-linkedin"></i>
                </a>
                <a className="hover:text-blue-500" href="tel:+992 902 300 300">
                  <i className="bi bi-telegram"></i>
                </a>
                <a className="hover:text-green-900" href="+992 902 300 300">
                  <i className="bi bi-whatsapp"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div></div>
      </section>
      <div className="line"></div>
    </div>
  );
};

export default SecHello;
