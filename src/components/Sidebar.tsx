import { useTranslation } from "react-i18next";
import { forClick } from "../types/type";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { setActiveIndex } from "../redux/slice";

const Sidebar = ({ handleClick, handleClose }: forClick) => {
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const activeIndex = useSelector(
    (state: RootState) => state.activeItem.activeIndex
  );
  const handleItemClick = (index: number) => {
    dispatch(setActiveIndex(index));
  };
  return (
    <div
      onClick={handleClick}
      className="fixed px-4 text-wrap py-5 top-0 w-1/2 lg:w-1/4 h-screen bg-gradient-to-b z-50 from-green-800 to-green-300"
    >
        <h1 className="text-clip py-5">
            {t("menu")}
        </h1>
      <div className="my-4 text-4xl">
        <ul className="flex flex-col text-wrap  text-sm gap-5">
          <li
            className={`text-clip text-lg cursor-pointer ${
              activeIndex === 0 ? "underline font-bold" : ""
            }`}
            onClick={() => handleItemClick(0)}
          >
            <a onClick={handleClose} href="#home">{t("header.hello")} </a>
          </li>
          <li
            className={`text-clip text-lg cursor-pointer ${
              activeIndex === 1 ? "underline font-bold" : ""
            }`}
            onClick={() => handleItemClick(1)}
          >
            <a onClick={handleClose} href="#skils">{t("header.skills")}</a>
          </li>
          <li
            className={`text-clip text-lg cursor-pointer ${
              activeIndex === 2 ? "underline font-bold" : ""
            }`}
            onClick={() => handleItemClick(2)}
          >
            <a onClick={handleClose} href="#education">{t("header.education")}</a>
          </li>
          <li
            className={`text-clip text-lg cursor-pointer ${
              activeIndex === 3 ? "underline font-bold" : ""
            }`}
            onClick={() => handleItemClick(3)}
          >
            <a onClick={handleClose} href="#experience">{t("header.experience")}</a>
          </li>
          <li
            className={`text-clip text-lg cursor-pointer ${
              activeIndex === 4 ? "underline font-bold" : ""
            }`}
            onClick={() => handleItemClick(4)}
          >
            <a onClick={handleClose} href="#portfolio"> {t("header.portfolio")}</a>
          </li>
          <li
            className={`text-clip active:bg-white duration-700 text-lg cursor-pointer ${
              activeIndex === 5 ? "underline font-bold" : ""
            }`}
            onClick={() => handleItemClick(5)}
          >
            <a onClick={handleClose} href="#conatct">{t("header.contact")}</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
