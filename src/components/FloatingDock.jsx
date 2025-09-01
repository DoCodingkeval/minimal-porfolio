import { navLinks } from "../constants";
import { motion } from "motion/react";

const FloatingDock = () => {
  const ulVariants = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const liVariants = {
    hidden: {
      opacity: 0,
      y: -14,
    },
    show: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <nav className="fixed bottom-4 inset-x-0 border border-neutral-300 max-w-max mx-auto p-1 rounded-full bg-white text-xs z-50 shadow dark:bg-zinc-900 dark:border-zinc-800">
      <div className="flex items-center justify-center">
        <motion.ul
          variants={ulVariants}
          initial="hidden"
          animate="show"
          className="flex items-center gap-2 justify-center"
        >
          {navLinks.map((links) => (
            <motion.li
              variants={liVariants}
              className="list-none relative group"
            >
              <a
                href={`#${links.href}`}
                className=" hover:bg-neutral-200 hover:dark:bg-zinc-800 size-11 grid place-items-center rounded-full transition duration-300"
              >
                {links.icon}
              </a>
              <span className="absolute -top-9 left-1/2 -translate-x-1/2 bg-zinc-700 dark:bg-neutral-200 dark:text-black text-white capitalize py-1 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition duration-500 delay-200">
                {links.name}
              </span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </nav>
  );
};

export default FloatingDock;
