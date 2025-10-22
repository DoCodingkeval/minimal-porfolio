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
      <main className="mx-auto overflow-hidden border-[#EBEBED] px-5 md:max-w-3xl lg:border-r lg:border-l xl:max-w-5xl dark:border-zinc-800 selection:bg-black selection:text-gray">
        <Header />
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
