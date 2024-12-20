import { RootState } from "../redux/slice";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { setActiveIndex } from "../redux/slice";

const Header = () => {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState<boolean>(true);
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng); // Смена языка
    setOpen(!open);
  };

  const dispatch = useDispatch();
  const activeIndex = useSelector(
    (state: RootState) => state.activeItem.activeIndex
  );
  const handleItemClick = (index: number) => {
    dispatch(setActiveIndex(index));
  };

  return (
    <header className="w-full container mx-auto pb-10 fixed px-5  text-white">
      <nav className="flex items-center py-4 px-2  justify-between">
        <div>
          <h1 className="items-center flex">
            <span className="text-clip neon-text">{t("title")}</span>
            <span className="text-green-900 text-4xl">.</span>
          </h1>
        </div>
        <div className="block h-full  items-center">
          <ul className="flex items-center text-sm gap-5">
            <li
              className={`text-clip text-lg cursor-pointer ${
                activeIndex === 0 ? "neon-texts font-bold" : ""
              }`}
              onClick={() => handleItemClick(0)}
            >
              <a href="#home">{t("header.hello")} </a>
            </li>
            <li
              className={`text-clip text-lg cursor-pointer ${
                activeIndex === 1 ? "neon-texts font-bold" : ""
              }`}
              onClick={() => handleItemClick(1)}
            >
              <a href="#skils">{t("header.skills")}</a>
            </li>
            <li
              className={`text-clip text-lg cursor-pointer ${
                activeIndex === 2 ? "neon-texts font-bold" : ""
              }`}
              onClick={() => handleItemClick(2)}
            >
              <a href="#education">{t("header.education")}</a>
            </li>
            <li
              className={`text-clip text-lg cursor-pointer ${
                activeIndex === 3 ? "neon-texts font-bold" : ""
              }`}
              onClick={() => handleItemClick(3)}
            >
              <a href="#experience">{t("header.experience")}</a>
            </li>
            <li
              className={`text-clip text-lg cursor-pointer ${
                activeIndex === 4 ? "neon-texts font-bold" : ""
              }`}
              onClick={() => handleItemClick(4)}
            >
              <a href="#portfolio"> {t("header.portfolio")}</a>
            </li>
            <li
              className={`text-clip active:bg-white duration-700 text-lg cursor-pointer ${
                activeIndex === 5 ? "neon-texts font-bold" : ""
              }`}
              onClick={() => handleItemClick(5)}
            >
              <a href="#conatct">{t("header.contact")}</a>
            </li>
          </ul>
        </div>
        <div className="relative z-50 ">
          <button onClick={() => setOpen(!open)}>
            <i
              className={`bi text-clip neon-text bi-globe2 ${
                !open ? "opacity-0" : ""
              }`}
            ></i>
          </button>
          {open ? (
            ""
          ) : (
            <div className="absolute bg-gradient-to-r rounded-lg p-4 flex flex-col from-green-600 gap-5 hover:text-white to-green-900 top-0 right-0">
              <button className="" onClick={() => changeLanguage("en")}>
                {t("languege.english")}
              </button>
              <button onClick={() => changeLanguage("ru")}>
                {t("languege.russion")}
              </button>
              <button onClick={() => changeLanguage("tj")}>
                {t("languege.tajik")}
              </button>
            </div>
          )}
        </div>
      </nav>
      <div className="w-full shadow-2xl shadow-green-950 bg-green-800 h-0.5"></div>
    </header>
  );
};

export default Header;
