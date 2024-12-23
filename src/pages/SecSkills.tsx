import { useTranslation } from "react-i18next";
import Card from "../components/Card";
import { Typewriter } from "react-simple-typewriter";

const SecSkills = () => {
    const { t } = useTranslation();
    return (
    <section id="skills" className="h-full  space-y-10 border-green-700 pt-16">
      <div className="h-full">
        <div className="space-y-3 w-full h-full">
          <div>
            <h1 className="text-3xl my-2 mb-6 text-center font-extrabold text-white">
              <Typewriter
                words={[t("header.skills")]}
                cursor
                cursorStyle="I"
                typeSpeed={100}
                deleteSpeed={100}
              />
            </h1>
          </div>
          <div className="flex flex-col h-full gap-1 relative items-center">
            <div className="absolute w-1 shadow-[0_0_15px_5px_rgba(0,255,100,0.8),0_0_30px_10px_rgba(0,255,100,0.5)] bg-green-500 rounded-sm h-full md:left-1/2 left-[14px] transform -translate-x-1/2"></div>
            <Card
              side="left"
              text="React"
              description={t("skills.react.rt2")}
              value={100}
            />
            <Card
              side="rigth"
              text="JavaScript"
              description={t("skills.javascript.js")}
              value={80}
            />
            <Card
              side="left"
              text="TypeScript"
              description={t("skills.typescript.ts")}
              value={70}
            />
            <Card
              side="rigth"
              text="Redux"
              description={t("skills.redux.rd")}
              value={80}
            />
            <Card
              side="left"
              text="Git"
              description={t("skills.git.gt")}
              value={100}
            />
            <Card
              side="rigth"
              text="HTML"
              description={t("skills.html.htmls")}
              value={100}
            />
          </div>
        </div>
      </div>
      <div className="line"></div>
    </section>
  );
};

export default SecSkills;
