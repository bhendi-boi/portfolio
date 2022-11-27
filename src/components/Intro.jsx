import Contact from "./Contact";
const Intro = ({ scrollRef }) => {
  return (
    <section className="h-[calc(100vh-4.5rem)] flex flex-col justify-evenly items-center border-b-2 border-slate-50 border-opacity-20">
      <div className="flex flex-col items-center gap-4">
        <figure className="h-44 w-44 bg-yellow-300 rounded-full"></figure>
        <div>
          <p className="font-medium text-center text-3xl text-white pb-2">
            Jyothikrishna
          </p>
          <p className="font-medium text-center text-3xl text-white">
            ReactJS Developer
          </p>
        </div>
      </div>
      <Contact scrollRef={scrollRef} />
    </section>
  );
};

export default Intro;
