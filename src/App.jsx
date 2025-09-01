import {
  Header,
  FloatingDock,
  Hero,
  Skill,
  About,
  Project,
  Contact,
  Footer,
} from "./imports/Files";

function App() {
  return (
    <>
      <main className="lg:border-l lg:border-r border-[#EBEBED] dark:border-zinc-800 lg:max-w-3xl xl:max-w-5xl mx-auto px-5 overflow-hidden">
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
