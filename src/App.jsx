import {
  Header,
  FloatingDock,
  Hero,
  Skill,
  About,
  Project,
  Contact,
  Footer,
} from './imports/Files';

function App() {
  return (
    <>
      <Header />
      <main className="mx-auto overflow-hidden lg:border-[#EBEBED] px-4 md:px-10 md:max-w-3xl lg:border-r lg:border-l xl:max-w-7xl dark:border-zinc-800 selection:bg-black selection:text-gray dark:selection:bg-neutral-800 dark:selection:text-neutral-300">
        <FloatingDock />
        <Hero />
        <Skill />
        <About />
        <Project />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
