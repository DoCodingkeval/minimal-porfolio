import { IconMailFilled, IconPhoneFilled } from "@tabler/icons-react";
import { useFormik, emailjs, Validation, socialLinks } from "../imports/Files";
import { motion } from "motion/react";

const Contact = () => {
  const initialValues = {
    name: "",
    email: "",
    url: "",
    message: "",
  };

  const { errors, values, handleChange, handleSubmit, touched } = useFormik({
    initialValues,
    validationSchema: Validation,
    onSubmit: (values, action) => {
      action.resetForm();

      const userValues = {
        name: values.name,
        email: values.email,
        url: values.url,
        message: values.message,
      };

      const Service_Id = import.meta.env.VITE_SERVICE_ID;
      const Public_Key = import.meta.env.VITE_PUBLIC_KEY;
      const Template_Id = import.meta.env.VITE_TEMPLATE_ID;

      emailjs
        .send(Service_Id, Template_Id, userValues, Public_Key)
        .then(() => {
          console.log("success");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  });

  return (
    <section
      className="w-full min-h-screen flex items-center justify-center flex-col py-10 scroll-mt-14 xl:scroll-mt-0"
      id="contact"
    >
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-3xl lg:text-4xl text-center mb-10 xl:mb-16"
      >
        Contact
        <span className="font-extrabold"> Me</span>
      </motion.h1>
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 xl:gap-16 xl:pl-6">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, decelerate: 0.4 }}
          viewport={{ once: true }}
          className="relative"
        >
          <form onSubmit={handleSubmit}>
            <>
              <input
                type="text"
                name="name"
                value={values.name}
                onChange={handleChange}
                placeholder="Your name"
                className="border-2 border-black dark:bg-zinc-900 py-2 text-xs px-4 w-full mb-4 shadow-[3px_3px_0px_#000] outline-0 xl:py-3 xl:mb-5 dark:border-zinc-800 dark:shadow-zinc-900 placeholder:text-zinc-500"
              />
              {errors.name && touched.name && (
                <p className="text-xs text-red-600 -translate-y-3">
                  {errors.name}
                </p>
              )}
            </>
            <>
              <input
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                placeholder="Email"
                className="border-2 border-black dark:bg-zinc-900 py-2 text-xs px-4 w-full mb-4 shadow-[3px_3px_0px_#000] outline-0 xl:py-3 xl:mb-5 dark:border-zinc-800 dark:shadow-zinc-900 placeholder:text-zinc-500"
              />
              {errors.email && touched.email && (
                <p className="text-xs text-red-600 -translate-y-3">
                  {errors.email}
                </p>
              )}
            </>
            <input
              type="url"
              name="url"
              value={values.url}
              onChange={handleChange}
              placeholder="Your website (If exists)"
              className="border-2 border-black dark:bg-zinc-900 py-2 text-xs px-4 w-full mb-4 shadow-[3px_3px_0px_#000] outline-0 xl:py-3 xl:mb-5 dark:border-zinc-800 dark:shadow-zinc-900 placeholder:text-zinc-500"
            />
            <>
              <textarea
                name="message"
                value={values.message}
                onChange={handleChange}
                placeholder="How can i help?"
                rows={6}
                className="resize-none border-2 border-black dark:bg-zinc-900 py-2 text-xs px-4 w-full mb-4 shadow-[3px_3px_0px_#000] outline-0 xl:py-3 xl:mb-5 dark:border-zinc-800 dark:shadow-zinc-900 placeholder:text-zinc-500"
              ></textarea>
              {errors.message && touched.message && (
                <p className="text-xs text-red-600 -translate-y-4">
                  {errors.message}
                </p>
              )}
            </>
            <button
              type="submit"
              className="text-black text-sm dark:text-zinc-400 py-1.5 xl:py-2 px-4 border-2 border-black shadow-[3px_3px_0px_#000] font-medium relative after:absolute after:content-[''] after:top-0 after:-left-full after:w-full after:h-full after:bg-black after:-z-10 cursor-pointer hover:after:left-0 hover:text-white overflow-hidden after:transition-all duration-300 xl:w-3/5 dark:after:bg-zinc-800 dark:border-zinc-800 dark:shadow-zinc-900"
            >
              Get In Touch
            </button>
          </form>
          <div className="flex items-center gap-5 mt-6 xl:absolute xl:bottom-0 xl:right-0">
            {socialLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                target="_blank"
                className="border-2 border-black size-9 grid place-items-center shadow-[3px_3px_0px_#000] hover:bg-black hover:text-white hover:scale-110 transition-all duration-200 dark:border-zinc-800 dark:shadow-zinc-900 dark:hover:bg-zinc-900"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, decelerate: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col gap-3 xl:justify-center"
        >
          <h1 className="text-2xl md:text-3xl xl:text-5xl xl:leading-15 font-bold text-black dark:text-[#f9fafb]">
            Let's{" "}
            <span className="text-stroke text-white dark:text-zinc-900">
              talk
            </span>{" "}
            for Something special
          </h1>
          <p className="text-xs text-gray leading-relaxed xl:text-[1rem]">
            I seek to push the limits of creativity to create high-engaging,
            user-friendly, and memorable interactive experiences.
          </p>
          <div className="flex flex-col gap-3 text-sm my-2 xl:text-lg">
            <div className="flex items-center gap-4">
              <a
                href="mailto:gohelkeval7@gmail.com"
                className="inline-flex items-center gap-4 group"
              >
                <IconMailFilled className="size-7 rounded-full p-1 group-hover:border-zinc-800 group-hover:border" />{" "}
                gohelkeval7@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-4">
              <a href="" className="inline-flex items-center gap-4 group">
                <IconPhoneFilled className="size-7 rounded-full p-1 group-hover:border-zinc-800 group-hover:border" />{" "}
                7383044088
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
