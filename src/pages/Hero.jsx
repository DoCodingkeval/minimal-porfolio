import { PointerHighlight, socialLinks, Typed } from '../imports/Files';
import { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { IconPointFilled } from '@tabler/icons-react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Hero = () => {
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ['I am Keval Gohel'],
            typeSpeed: 50,
        });

        const header = document.querySelector('header');
        const observer = new ResizeObserver(()=>{
            document.querySelector("#hero").style.marginTop = `${header.offsetHeight}px`;
        });
        observer.observe(header);
        return () => {
            typed.destroy();
        };
    }, []);

    useGSAP(()=>{
        gsap.to(".role",{
            "--width": "100%",
            duration: 1,
        })
    })

    return (
        <section
            className="relative w-full text-center scroll-mt-18"
            id="hero"
        >
            <div className="grid md:grid-cols-2">
                <div
                    className="text-left"
                >
                    <div className="max-[400px]:text-xl leading-10 xl:leading-16">
                        <h1>
                            Hello, <span ref={el} className="font-semibold"></span>
                            <span className="inline-block role px-3 font-extrabold text-shadow-2xs">
                                Associate Software Engineer
                            </span><br/>
                            Based in <span className="font-extrabold">India.</span>
                        </h1>
                    </div>
                    <p className="text-gray mt-3 mb-7 text-sm lg:text-base xl:text-xl max-w-lg leading-relaxed xl:leading-10">
                        Passionate about web development and design. I build clean, interactive, and scalable interfaces while constantly improving my craft.
                    </p>
                    <div className="flex items-center gap-5">
                        {socialLinks.map((sociallink) => (
                            <a
                                key={sociallink.id}
                                href={sociallink.href}
                                target="_blank"
                                title={sociallink.title}
                                className="grid size-9 group xl:size-11 place-items-center border-2 relative border-black shadow-[3px_3px_0px_#000] transition-all duration-300 after:absolute after:content-[''] after:top-full after:left-0 after:w-full after:h-full after:bg-black hover:after:top-0 after:-z-10 hover:text-white hover:translate-y-0.5 after:transition-all overflow-hidden after:duration-300 dark:border-zinc-800 dark:shadow-zinc-900 dark:hover:after:bg-neutral-900"
                            >
                                {sociallink.icon}
                            </a>
                        ))}
                    </div>
                </div>
                <div className='w-full -order-1 md:order-0'>
                    <motion.img
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.7, delay: 0.5 }}
                        src="hero-vector.svg"
                        className="pr-5 w-full h-full object-contain"
                        alt="hero image"
                        loading="lazy"
                    />
                </div>
            </div>
            <motion.button
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="w-max mt-10 rounded-2xl border-2 border-neutral-600 px-1.5 py-4 font-extrabold shadow-xl"
            >
                <IconPointFilled className="animate-bounce" size={10} />
            </motion.button>
        </section>
    );
};

export default Hero;
