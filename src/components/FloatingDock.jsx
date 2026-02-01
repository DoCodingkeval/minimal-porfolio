import { navLinks } from '../constants';
import { motion } from 'motion/react';
import gsap from 'gsap';

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
    <nav className="fixed inset-x-0 bottom-4 z-50 mx-auto max-w-xs rounded-2xl border border-neutral-300 bg-white p-3 text-sm shadow dark:border-zinc-800 dark:bg-zinc-900">
      <div className="flex items-center justify-center">
        <motion.ul
          variants={ulVariants}
          initial="hidden"
          animate="show"
          className="flex items-center justify-between w-full"
        >
          {navLinks.map((links) => (
            <motion.li
              key={links.id}
              variants={liVariants}
              className="group relative list-none"
            >
              <a
                href={`#${links.href}`}
                className="grid size-10 place-items-center rounded-xl transition duration-300 hover:bg-neutral-200 hover:dark:bg-zinc-800"
              >
                {links.icon}
              </a>
              <span className="absolute -top-11 left-1/2 -translate-x-1/2 rounded-lg bg-zinc-700 px-3 py-1.5 text-white capitalize invisible opacity-0 translate-y-3 transition-all duration-300 delay-100 group-hover:translate-y-0 group-hover:visible group-hover:opacity-100 dark:bg-neutral-200 dark:text-black">
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
