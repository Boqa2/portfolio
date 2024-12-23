import { useForm } from "react-hook-form";
import axios from "axios";
import { FormData } from "../types/type";
import { useTranslation } from "react-i18next";


const SecConts = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      await axios.post("", data);
      alert("Сообщение успешно отправлено!");
      reset(); // Сбрасываем форму
    } catch (error) {
      console.error("Ошибка при отправке сообщения:", error);
      alert("Не удалось отправить сообщение. Попробуйте позже.");
    }
  };

  const {t}=useTranslation()

  return (
    
    <form id="contact"
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-lg text-black mx-auto p-4 border border-gray-300 rounded"
    >
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
          Имя
        </label>
        <input
          id="name"
          type="text"
          {...register("name", { required: t("errors.er") })}
          className="w-full border px-4 py-2"
        />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          type="email"
          {...register("email", {
            required: t("errors.emailer"),
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: t("errors.koremail"),
            },
          })}
          className="w-full border px-4 py-2"
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="message">
          Сообщение
        </label>
        <textarea
          id="message"
          {...register("message", { required: t("errors.messege") })}
          className="w-full border px-4 py-2"
          rows={5}
        />
        {errors.message && (
          <p className="text-red-500">{errors.message.message}</p>
        )}
      </div>

      <button
        type="submit"
        className="bg-green-600 text-white px-4 py-2 rounded"
      >
        {t("errors.but")}
      </button>
    </form>
  );
};

export default SecConts;
