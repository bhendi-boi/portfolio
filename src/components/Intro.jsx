import Contact from "./Contact";

const imageSrc =
  "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

const Intro = ({ scrollRef }) => {
  return (
    <section className="h-[calc(100vh-4.5rem)] flex flex-col justify-evenly items-center border-b-2 border-slate-50 border-opacity-20">
      <div className="flex flex-col items-center gap-4">
        <picture className="overflow-hidden bg-yellow-300 rounded-full h-52 w-52 md:h-72 md:w-72">
          <img
            src={imageSrc}
            alt="Jyothikrishna image"
            className="object-cover aspect-square"
          />
        </picture>
        <div>
          <h2 className="pb-2 text-3xl font-medium text-center text-white">
            Jyothikrishna
          </h2>
          <p className="text-3xl font-medium text-center text-white">
            React Developer
          </p>
        </div>
      </div>
      <Contact scrollRef={scrollRef} />
    </section>
  );
};

export default Intro;
