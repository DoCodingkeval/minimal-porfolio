import { IconMailFilled, IconPhoneFilled } from '@tabler/icons-react';
import { useFormik, emailjs, Validation, socialLinks } from '../imports/Files';
import { motion } from 'motion/react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

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

      useGSAP(()=>{
      gsap.to("#contact .heading",{
        '--width':'100%',
        duration:1,
        scrollTrigger:{
          trigger:"#contact .heading",
          start:"top 80%",
          once:true,
        }
      })
    })

  return (
    <section
      className="w-full scroll-mt-14"
      id="contact"
    >
      <h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="heading p-2 w-max mx-auto mb-10 text-center text-3xl lg:text-4xl xl:text-5xl xl:mb-16"
      >
        Contact
        <span className="font-extrabold"> Me</span>
      </h2>
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, decelerate: 0.4 }}
          viewport={{ once: true }}
          className="relative mt-2.5"
        >
          <form onSubmit={handleSubmit}>
            <>
              <Input type="text" name="name" value={values.name} onChange={handleChange} placeholder="Your name" />
              {errors.name && touched.name && (
                <p className="-translate-y-3 text-xs text-red-600">
                  {errors.name}
                </p>
              )}
            </>
            <>
              <Input type="email" name="email" values={values.email} handleChange={handleChange} placeholder="Your email" />
              {errors.email && touched.email && (
                <p className="-translate-y-3 text-xs text-red-600">
                  {errors.email}
                </p>
              )}
            </>
            <Input
              type="url"
              name="url"
              value={values.url}
              onChange={handleChange}
              placeholder="Your website (If exists)"
            />
            <>
              <textarea
                name="message"
                value={values.message}
                onChange={handleChange}
                placeholder="How can i help?"
                rows={6}
                className="mb-4 w-full resize-none border-2 border-black px-4 py-2 text-xs md:text-sm shadow-[3px_3px_0px_#000] outline-0 placeholder:text-zinc-500 xl:mb-5 xl:py-3 dark:border-zinc-800 dark:bg-zinc-900 dark:shadow-zinc-900"
              ></textarea>
              {errors.message && touched.message && (
                <p className="-translate-y-4 text-xs text-red-600">
                  {errors.message}
                </p>
              )}
            </>
            <div className='flex gap-5 justify-between'>
              <button
                type="submit"
                className="relative cursor-pointer w-full! overflow-hidden border-2 border-black px-4 py-2 text-sm font-medium md:text-base text-black shadow-[3px_3px_0px_#000] duration-300 after:absolute after:top-0 after:-left-full after:-z-10 after:h-full after:w-full after:bg-black after:transition-all after:content-[''] hover:text-white hover:after:left-0 xl:w-3/5 xl:py-2 dark:border-zinc-800 dark:text-zinc-400 dark:shadow-zinc-900 dark:after:bg-zinc-800"
              >
                Get In Touch
              </button>
              <div className="flex items-center gap-5">
                {socialLinks.map((link) => (
                  link.id === 2 || link.id === 3) && (
                    <a
                      key={link.id}
                      href={link.href}
                      target="_blank"
                      className="grid size-[43.2px] xl:size-11 group place-items-center border-2 border-black shadow-[3px_3px_0px_#000] transition-all duration-200 hover:scale-110 hover:bg-black hover:text-white dark:border-zinc-800 dark:shadow-zinc-900 dark:hover:bg-zinc-900"
                    >
                      {link.icon}
                    </a>
                  ))}
              </div>
            </div>
          </form>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, decelerate: 0.6 }}
          viewport={{ once: true }}
          className=""
        >
          <h3 className="text-3xl font-bold text-black md:text-4xl xl:text-6xl xl:leading-18 dark:text-[#f9fafb]">
            Let's{' '}
            <span className="text-stroke text-white dark:text-zinc-900">
              talk
            </span>{' '}
            for Something special
          </h3>
          <p className="text-gray text-xs md:text-sm md:max-w-lg leading-relaxed max-[376px]:pr-7 lg:text-base lg:leading-8 py-5">
            I seek to push the limits of creativity to create high-engaging,
            user-friendly, and memorable interactive experiences.
          </p>
          <a
            href="mailto:gohelkeval7@gmail.com"
            className="group inline-flex items-center gap-3"
            title='Mail Me'
          >
            <img src="/Letter.svg" alt="Phone Icon" className='group-hover:border rounded-full p-1 size-7 lg:size-8' />{' '}
            gohelkeval7@gmail.com
          </a><br />
          <a href="tel:7383044088" title='Call Me' className="group inline-flex items-center gap-3">
            <img src="/Phone Rounded.svg" alt="Phone Icon" className='group-hover:border rounded-full p-1 size-7 lg:size-8' />{' '}
            7383044088
          </a>
        </motion.div>
      </div>
    </section>
  );
};

const Input = ({ type, name, values, handleChange, placeholder }) => {
  return (
    <input
      type={type}
      name={name}
      value={values}
      onChange={handleChange}
      placeholder={placeholder}
      className="mb-4 w-full border-2 border-black px-4 py-3 text-xs md:text-sm shadow-[3px_3px_0px_#000] outline-0 placeholder:text-zinc-500 xl:mb-5 xl:py-3 dark:border-zinc-800 dark:bg-zinc-900 dark:shadow-zinc-900"
    />
  )
}

export default Contact;
