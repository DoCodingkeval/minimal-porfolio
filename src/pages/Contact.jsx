import { IconMailFilled, IconPhoneFilled } from '@tabler/icons-react';
import { useFormik, emailjs, Validation, socialLinks } from '../imports/Files';
import { motion } from 'motion/react';

const Contact = () => {
  const initialValues = {
    name: '',
    email: '',
    url: '',
    message: '',
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
          console.log('success');
        })
        .catch((error) => {
          console.log(error);
        });
    },
  });

  return (
    <section
      className="flex w-full scroll-mt-14 flex-col items-center justify-center py-10 xl:scroll-mt-0"
      id="contact"
    >
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="mb-10 text-center text-3xl lg:text-4xl xl:mb-16"
      >
        Contact
        <span className="font-extrabold"> Me</span>
      </motion.h1>
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16 xl:pl-6">
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
                className="mb-4 w-full border-2 border-black px-4 py-2 text-xs shadow-[3px_3px_0px_#000] outline-0 placeholder:text-zinc-500 xl:mb-5 xl:py-3 dark:border-zinc-800 dark:bg-zinc-900 dark:shadow-zinc-900"
              />
              {errors.name && touched.name && (
                <p className="-translate-y-3 text-xs text-red-600">
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
                className="mb-4 w-full border-2 border-black px-4 py-2 text-xs shadow-[3px_3px_0px_#000] outline-0 placeholder:text-zinc-500 xl:mb-5 xl:py-3 dark:border-zinc-800 dark:bg-zinc-900 dark:shadow-zinc-900"
              />
              {errors.email && touched.email && (
                <p className="-translate-y-3 text-xs text-red-600">
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
              className="mb-4 w-full border-2 border-black px-4 py-2 text-xs shadow-[3px_3px_0px_#000] outline-0 placeholder:text-zinc-500 xl:mb-5 xl:py-3 dark:border-zinc-800 dark:bg-zinc-900 dark:shadow-zinc-900"
            />
            <>
              <textarea
                name="message"
                value={values.message}
                onChange={handleChange}
                placeholder="How can i help?"
                rows={6}
                className="mb-4 w-full resize-none border-2 border-black px-4 py-2 text-xs shadow-[3px_3px_0px_#000] outline-0 placeholder:text-zinc-500 xl:mb-5 xl:py-3 dark:border-zinc-800 dark:bg-zinc-900 dark:shadow-zinc-900"
              ></textarea>
              {errors.message && touched.message && (
                <p className="-translate-y-4 text-xs text-red-600">
                  {errors.message}
                </p>
              )}
            </>
            <button
              type="submit"
              className="relative cursor-pointer overflow-hidden border-2 border-black px-4 py-1.5 text-sm font-medium text-black shadow-[3px_3px_0px_#000] duration-300 after:absolute after:top-0 after:-left-full after:-z-10 after:h-full after:w-full after:bg-black after:transition-all after:content-[''] hover:text-white hover:after:left-0 xl:w-3/5 xl:py-2 dark:border-zinc-800 dark:text-zinc-400 dark:shadow-zinc-900 dark:after:bg-zinc-800"
            >
              Get In Touch
            </button>
          </form>
          <div className="mt-6 flex items-center gap-5 xl:absolute xl:right-0 xl:bottom-0">
            {socialLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                target="_blank"
                className="grid size-9 place-items-center border-2 border-black shadow-[3px_3px_0px_#000] transition-all duration-200 hover:scale-110 hover:bg-black hover:text-white dark:border-zinc-800 dark:shadow-zinc-900 dark:hover:bg-zinc-900"
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
          <h1 className="text-2xl font-bold text-black md:text-3xl xl:text-5xl xl:leading-15 dark:text-[#f9fafb]">
            Let's{' '}
            <span className="text-stroke text-white dark:text-zinc-900">
              talk
            </span>{' '}
            for Something special
          </h1>
          <p className="text-gray text-xs leading-relaxed md:w-3/4 max-[376px]:pr-7 xl:text-[.9rem]">
            I seek to push the limits of creativity to create high-engaging,
            user-friendly, and memorable interactive experiences.
          </p>
          <div className="my-2 flex flex-col gap-3 text-sm xl:text-lg">
            <div className="flex items-center gap-4">
              <a
                href="mailto:gohelkeval7@gmail.com"
                className="group inline-flex items-center gap-4"
              >
                <IconMailFilled className="size-7 rounded-full p-1 group-hover:border group-hover:border-zinc-800" />{' '}
                gohelkeval7@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-4">
              <a href="" className="group inline-flex items-center gap-4">
                <IconPhoneFilled className="size-7 rounded-full p-1 group-hover:border group-hover:border-zinc-800" />{' '}
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
