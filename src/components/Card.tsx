import { Progress } from "antd";
import { ICard } from "../types/type";

const Card = ({ text, value, description, side }: ICard) => {
  return (
    <div className="flex items-center w-full mb-8">
      {side === "left" ? (
        <>
          <div className="w-full flex items-center  gap-5">
            <div className="clik">
              <p className="w-1/2 text-2xl  pr-4">{text}</p>
              <p>{description}</p>
              <Progress percent={value} size={"small"} />
            </div>
            <div className="flex items-center relative justify-center min-h-screen">
              <div className="neon"></div>
            </div>

            <div className="w-1/2"></div>
          </div>
        </>
      ) : (
        <>
          <div className="w-full e flex items-center gap-5">
            <div className="w-1/2"></div>
            <div className="relative">
              <div className="neon"></div>
            </div>
            <div className="w-1/2">
              <div className="clik w-full">
                <p className="w-1/2 text-2xl pr-4">{text}</p>
                <p>{description}</p>
                <Progress style={{color: "white"}} percent={value} size={"small"} />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Card;
