import { RootState } from "../redux/slice";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { setActiveIndex } from "../redux/slice";
import { forheder } from "../types/type";

const Header = ({isSidebarOpen, setSidebarOpen}:forheder) => {
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
    <div onClick={(e) => e.stopPropagation()} className="relative">
      <header className="w-full bg-gradient-to-b from-[#21992d97] to-[#b1b0b000] mb-10 container mx-auto fixed px-5  text-white">
        <nav className="flex items-center py-4 px-2  justify-between">
          <div>
            <h1 className="items-center flex">
              <span className="text-clip neon-text">{t("title")}</span>
              <span className="text-green-900 text-4xl">.</span>
            </h1>
          </div>
          <div className="block h-full  items-center">
            <ul className="lg:flex text-wrap hidden items-center text-sm gap-5">
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
                  activeIndex === 1 ? "neon-texts border-b-2 border-green-500 font-bold" : ""
                }`}
                onClick={() => handleItemClick(1)}
              >
                <a href="#skills">{t("header.skills")}</a>
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
                <a href="#contact">{t("header.contact")}</a>
              </li>
            </ul>
          </div>
          <div className="relative flex space-x-4 z-50 ">
            <button onClick={() => setOpen(!open)}>
              <i
                className={`bi text-clip neon-text bi-globe2 ${
                  !open ? "opacity-0" : ""
                }`}
              ></i>
            </button>
            <button
              className="block lg:hidden"
              onClick={setSidebarOpen}
            >
              <i
                className={`bi text-clip neon-text bi-${
                  !isSidebarOpen ? "list" : "x-circle"
                }`}
              ></i>
            </button>
            {open ? (
              ""
            ) : (
              <div className="absolute bg-gradient-to-r rounded-lg p-4 flex flex-col from-green-600 gap-5 to-green-900 top-0 right-0">
                <button className="hover:text-green-500" onClick={() => changeLanguage("en")}>
                  {t("languege.english")}
                </button>
                <button className="hover:text-green-500" onClick={() => changeLanguage("ru")}>
                  {t("languege.russion")}
                </button>
                <button className="hover:text-green-500" onClick={() => changeLanguage("tj")}>
                  {t("languege.tajik")}
                </button>
              </div>
            )}
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
