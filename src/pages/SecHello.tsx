import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Robot from "../components/Robot";
import { useTranslation } from "react-i18next";
import { Typewriter } from "react-simple-typewriter";

const SecHello = () => {
  const { t } = useTranslation();
  return (
    <section id="home" className=" border-b-2 border-green-800 w-full grid grid-cols-1 md:grid-cols-2 pt-24">
      <div className="flex flex-col gap-3">
        <h1 className="text-4xl font-extrabold bg-gradient-to-r from-[#00ef34] via-[#258425] to-[#fafff9] text-transparent bg-clip-text">
          <Typewriter
            words={[t("welcome.iam")]}
            loop={true}
            cursor
            cursorStyle="I"
            typeSpeed={100}
            deleteSpeed={100}
          />
        </h1>
        <div className="text">
          <p className="text-green-600 font-inconsolata ">
            <Typewriter
              words={[t("welcome.titles")]}
              cursor
              cursorStyle="|"
              typeSpeed={20}
              deleteSpeed={0}
            />
          </p>
        </div>
        <div className="md:w-2/3 w-full  bg-gradient-to-b from-[#00ef34] via-[#71e071] to-[#29a710] text-transparent bg-clip-text ">
          <ul className="grid gap-3">
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
              <a className="hover:text-red-500" href="https://www.instagram.com/baxtovarwox/"><i className="bi bi-instagram"></i></a>
              <a className="hover:text-blue-800" href="https://www.facebook.com/profile.php?id=100033834968209"><i className="bi bi-facebook"></i></a>
              <a className="hover:text-blue-600" href="https://www.linkedin.com/feed/"><i className="bi bi-linkedin"></i></a>
              <a className="hover:text-blue-500" href="tel:+992 902 300 300"><i className="bi bi-telegram"></i></a>
              <a className="hover:text-green-900" href="+992 902 300 300"><i className="bi bi-whatsapp"></i></a>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <Canvas
          shadows
          camera={{ position: [0, 0, 10], fov: 50 }}
          style={{ height: "80vh", width: "100%" }}
        >
          <ambientLight intensity={0.8} />
          <spotLight
            position={[10, 15, 10]}
            angle={0.3}
            penumbra={1}
            castShadow
          />
          <Robot />
          <OrbitControls />
        </Canvas>
      </div>
    </section>
  );
};

export default SecHello;
