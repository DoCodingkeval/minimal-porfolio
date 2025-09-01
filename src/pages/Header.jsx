import { useEffect, useState } from 'react';
import { IconDownload, IconMoonStars, IconSunHigh } from '@tabler/icons-react';
import { motion } from 'motion/react';

const Header = () => {
  const [icon, setIcon] = useState(false);

  const handleThemeChange = () => {
    const isDark = document.documentElement.classList.contains('dark');

    if (isDark) {
      document.documentElement.classList.remove('dark');
      setIcon(false);
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      setIcon(!icon);
      localStorage.setItem('theme', 'dark');
    }
  };

  useEffect(() => {
    const theme = localStorage.getItem('theme');

    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  });

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-neutral-200 bg-white transition-all duration-200 dark:border-zinc-800 dark:bg-[#08090a]">
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="relative mx-auto flex h-16 w-full items-center justify-between border border-t-0 border-b-0 border-neutral-200 px-5 text-xs md:text-sm lg:h-20 lg:max-w-3xl xl:max-w-5xl dark:border-zinc-800"
      >
        <a href="#" className="font-alfa text-2xl">
          KG
          <span className="font-birth ml-3 text-3xl">Keval</span>
        </a>
        <div className="flex items-center gap-2">
          <button
            onClick={handleThemeChange}
            className="grid size-11 cursor-pointer place-items-center rounded-full transition duration-300 hover:bg-neutral-200 hover:dark:bg-zinc-800"
          >
            {icon ? (
              <IconMoonStars className="size-5" />
            ) : (
              <IconSunHigh className="size-5" />
            )}
          </button>
          <a
            href="/Keval_Gohel_Resume.pdf"
            download="Keval_Gohel_Resume.pdf"
            className="flex w-max items-center gap-2 border-2 border-black px-3 py-1.5 font-semibold shadow-[3px_3px_0px_#000] transition-all duration-150 hover:scale-110 hover:bg-black hover:text-white hover:shadow-none dark:border-zinc-800 dark:shadow-zinc-900 dark:hover:bg-zinc-900"
          >
            Resume
            <IconDownload size={18} />
          </a>
        </div>
      </motion.nav>
    </header>
  );
};

export default Header;
