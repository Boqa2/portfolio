import { Typewriter } from "react-simple-typewriter";
import { useTranslation } from "react-i18next";
import Items from "../components/Items";

const SecEduct = () => {
  const { t } = useTranslation();

  return (
    <div id="education">
      <section
        id="skills"
        className="h-full  space-y-14 border-green-700 pt-16"
      >
        <div className="h-full">
          <div className="space-y-3 w-full h-full">
            <div>
              <h1 className="text-3xl py-10 text-center font-extrabold text-white">
                <Typewriter
                  words={[t("header.education")]}
                  cursor
                  cursorStyle="|"
                  typeSpeed={100}
                  deleteSpeed={100}
                />
              </h1>
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
              <Items
                month={t("javascript.month")}
                obou={t("javascript.obou")}
                text="JavaScript"
                fors={t("javascript.for")}
                edplace={t("javascript.edplace")}
              />

              <Items
                month={t("react.month")}
                obou={t("react.obou")}
                text="React"
                fors={t("react.for")}
                edplace={t("react.edplace")}
              />
            </div>
          </div>
        </div>
        <div className="line"></div>
      </section>
    </div>
  );
};

export default SecEduct;
