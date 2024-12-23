import { Progress } from "antd";
import { ICard } from "../types/type";

const Card = ({ text, value, description, side }: ICard) => {
  return (
    <div className="flex items-center w-full mb-8">
      {side === "left" ? (
        <>
          <div className="w-full  flex items-center  gap-5">
            <div className="clik  duration-500  hover:scale-105  md:order-none order-1  ">
              <p className="md:w-1/2 w-full text-2xl  pr-4">{text}</p>
              <p  className="text-lg">{description}</p>
              <Progress percent={value} size={"small"} />
            </div>
            <div className="flex items-center relative justify-center min-h-screen">
              <div className="neon"></div>
            </div>
            <div className="w-1/2 md:block hidden"></div>
          </div>
        </>
      ) : (
        <>
          <div className="w-full  flex items-center gap-5">
            <div className="w-1/2 md:block hidden"></div>
            <div className="relative">
              <div className="neon"></div>
            </div>
            <div className="md:w-1/2 w-full">
              <div className="clik duration-500  hover:scale-105 w-full">
                <p className="w-1/2 text-2xl pr-4">{text}</p>
                <p className="text-lg">{description}</p>
                <Progress
                  style={{ color: "white" }}
                  percent={value}
                  size={"small"}
                />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Card;
