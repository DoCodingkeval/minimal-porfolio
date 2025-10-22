import { PointerHighlight, socialLinks, Typed } from '../imports/Files';
import { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { IconPointFilled } from '@tabler/icons-react';

const Hero = () => {
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ['I am Keval Gohel'],
            typeSpeed: 50,
        });

        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <section
            className="relative w-full max-md:pt-25"
            id="hero"
        >
            <div className='flex items-center justify-center md:py-30'>
            <div className="grid lg:grid-cols-2">
                <motion.img
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.5 }}
                    src="hero-vector.svg"
                    className="pr-5 lg:order-1 lg:mt-10 xl:mt-0 xl:scale-110"
                    alt="hero image"
                    loading="lazy"
                />
                <motion.div
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.5 }}
                    className="mt-5 flex flex-col flex-wrap lg:mt-0"
                >
                    <div className="text-2xl leading-8 md:text-3xl md:leading-10 xl:text-5xl xl:leading-17">
                        <div className="whitespace-nowrap">
                            Hello, <span ref={el} className="font-semibold"></span>
                        </div>
                        <PointerHighlight>
                            <span className="inline-block font-extrabold text-shadow-2xs">
                                Software {' '}
                                <span className="text-stroke font-bold text-white dark:text-zinc-900">
                                    Engineer
                                </span>
                            </span>
                        </PointerHighlight>
                        Based in <span className="font-extrabold">India.</span>
                    </div>
                    <p className="text-gray mt-3 mb-4 xl:mb-6 text-xs md:text-sm leading-relaxed">
                        Passionate about technology, I specialize in Web Development and
                        Design. I focus on creating innovative solutions, growing my skills,
                        and contributing to impactful projects.
                    </p>
                    <div className="flex items-center gap-5">
                        {socialLinks.map((sociallink) => (
                            <a
                                key={sociallink.id}
                                href={sociallink.href}
                                target="_blank"
                                className="grid size-9 place-items-center border-2 relative border-black shadow-[3px_3px_0px_#000] transition-all duration-300 after:absolute after:content-[''] after:top-full after:left-0 after:w-full after:h-full after:bg-black hover:after:top-0 after:-z-10 hover:text-white after:transition-all overflow-hidden after:duration-300 dark:border-zinc-800 dark:shadow-zinc-900 dark:hover:after:bg-neutral-900"
                            >
                                {sociallink.icon}
                            </a>
                        ))}
                    </div>
                </motion.div>
                <motion.button
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="mx-auto mt-10 w-max rounded-2xl border-2 border-neutral-600 px-1.5 py-4 font-extrabold shadow-xl lg:absolute lg:left-1/2 lg:mt-0 lg:bottom-0"
                >
                    <IconPointFilled className="animate-bounce" size={10} />
                </motion.button>
            </div>
            </div>
        </section>
    );
};

export default Hero;
