import { useTranslation } from "react-i18next";
import { Item }  from "../types/type";

const Items = ({text, fors, edplace, month, obou}:Item) => {
    const {t} =useTranslation()
    return ( 
        <div className="neons duration-500  hover:scale-105 bg-opacity-80 bg-green-500 font-semibold text-base md:text-2xl p-3 md:p-10 rounded-3xl w-full">
            <div>
                <h1 className="md:text-4xl text-2xl my-4 font-poppins font-semibold">{t('kurs')} {text}</h1>
                <div className="space-y-3">
                    <p>{edplace}</p>
                    <p>{month}</p>
                    <p>{obou}</p>
                    <p>{fors}</p>
                </div>
            </div>
        </div>
     );
}
 
export default Items;