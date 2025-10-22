import { navLinks } from '../constants';
import { motion } from 'motion/react';

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
    <nav className="fixed inset-x-0 bottom-4 z-50 mx-auto max-w-max rounded-full border border-neutral-300 bg-white py-2 px-3 text-xs shadow dark:border-zinc-800 dark:bg-zinc-900">
      <div className="flex items-center justify-center">
        <motion.ul
          variants={ulVariants}
          initial="hidden"
          animate="show"
          className="flex items-center justify-center gap-2"
        >
          {navLinks.map((links) => (
            <motion.li
              key={links.id}
              variants={liVariants}
              className="group relative list-none"
            >
              <a
                href={`#${links.href}`}
                className="grid size-9 place-items-center rounded-full transition duration-300 hover:bg-neutral-200 hover:dark:bg-zinc-800"
              >
                {links.icon}
              </a>
              <span className="absolute -top-9 left-1/2 -translate-x-1/2 rounded-lg bg-zinc-700 px-3 py-1 text-white capitalize opacity-0 transition delay-200 duration-500 group-hover:opacity-100 dark:bg-neutral-200 dark:text-black">
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
