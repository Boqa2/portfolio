import { useForm } from "react-hook-form";
import { FormData } from "../types/type";
import { useTranslation } from "react-i18next";
import Swal from "sweetalert2";
import { Typewriter } from "react-simple-typewriter";
import { useState } from "react";

const SecConts = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();
  const [isLoadimg, setLoading] = useState<boolean>(false);

  const onSubmit = async (data: FormData) => {
    const formData = {
      access_key: "5ac6645a-0113-4fb4-aaf3-e5d740736d35",
      ...data,
    };

    try {
      setLoading(true);
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (result.success) {
        console.log("Success", result);
        reset();
        Swal.fire({
          title: `Messege sent successfully, ${data.name}`,
          icon: "success",
          showClass: {
            popup: `
              animate__animated
              animate__fadeInUp
              animate__faster
            `,
          },
          hideClass: {
            popup: `
              animate__animated
              animate__fadeOutDown
              animate__faster
            `,
          },
        });
        setLoading(false);
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
        setLoading(false);
      }
    } catch (error) {
      console.error("Fetch error", error);
    }
  };

  const { t } = useTranslation();

  return (
    <div className="pb-8">
      <h1 className="text-3xl py-10 text-center font-extrabold text-white">
        <Typewriter
          words={[t("header.contact")]}
          cursor
          cursorStyle="|"
          typeSpeed={100}
          deleteSpeed={100}
        />
      </h1>
      <form
        id="contact"
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-lg neons text-black mx-auto bg-green-600 bg-opacity-70 p-5  rounded-2xl"
      >
        <div className="mb-4">
          <label className="block text-white font-bold mb-2" htmlFor="name">
            Имя
          </label>
          <input
            placeholder={t("errors.er")}
            id="name"
            type="text"
            {...register("name", { required: t("errors.er") })}
            className="inputs"
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-white font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder={t("errors.emailer")}
            {...register("email", {
              required: t("errors.emailer"),
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: t("errors.koremail"),
              },
            })}
            className="inputs"
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-white font-bold mb-2" htmlFor="message">
            Сообщение
          </label>
          <textarea
            placeholder={t("errors.messege")}
            id="message"
            {...register("message", { required: t("errors.messege") })}
            className="inputs"
            rows={4}
          />
          {errors.message && (
            <p className="text-red-500">{errors.message.message}</p>
          )}
        </div>
        <div className="w-full justify-center flex">
          <button
            type="submit"
            className={`${
              !isLoadimg ? "bg-green-600" : "bg-slate-500"
            } text-white  px-4 py-2 rounded hover:neons duration-700`}
          >
            {isLoadimg ? <> loading...</> : t("errors.but")}
          </button>
        </div>
      </form>
    </div>
  );
};

export default SecConts;
