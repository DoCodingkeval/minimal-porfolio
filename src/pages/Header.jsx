import { useEffect, useState } from "react";
import { IconDownload, IconMoonStars, IconSunHigh } from "@tabler/icons-react";
import { motion } from "motion/react";

const Header = () => {
  const [icon, setIcon] = useState(false);

  const handleThemeChange = () => {
    const isDark = document.documentElement.classList.contains("dark");

    if (isDark) {
      document.documentElement.classList.remove("dark");
      setIcon(false);
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      setIcon(!icon);
      localStorage.setItem("theme", "dark");
    }
  };

  useEffect(() => {
    const theme = localStorage.getItem("theme");

    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  });

  return (
    <header className="fixed top-0 left-0 z-50 border-b border-neutral-200 dark:border-zinc-800 bg-white w-full dark:bg-[#08090a] transition-all duration-200">
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="w-full lg:max-w-3xl xl:max-w-5xl px-5 border border-t-0 border-b-0 border-neutral-200 dark:border-zinc-800 mx-auto text-xs md:text-sm h-16 lg:h-20 relative flex items-center justify-between"
      >
        <a href="#" className="font-alfa text-2xl">
          KG
          <span className="font-birth text-3xl ml-3">Keval</span>
        </a>
        <div className="flex items-center gap-2">
          <button
            onClick={handleThemeChange}
            className=" hover:bg-neutral-200 hover:dark:bg-zinc-800 size-11 grid place-items-center rounded-full transition duration-300 cursor-pointer"
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
            className="flex items-center gap-2 font-semibold border-2 border-black shadow-[3px_3px_0px_#000] dark:shadow-zinc-900 w-max py-1.5 px-3 hover:bg-black hover:text-white hover:scale-110 hover:shadow-none transition-all duration-150 dark:border-zinc-800 dark:hover:bg-zinc-900"
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
