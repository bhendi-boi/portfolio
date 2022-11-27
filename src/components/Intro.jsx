import Contact from "./Contact";

const imageSrc =
  "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

const Intro = ({ scrollRef }) => {
  return (
    <section className="h-[calc(100vh-4.5rem)] flex flex-col justify-evenly items-center border-b-2 border-slate-50 border-opacity-20">
      <div className="flex flex-col items-center gap-4">
        <picture className="h-52 w-52 bg-yellow-300 rounded-full">
          {/* <img
            src={imageSrc}
            alt="Jyothikrishna image"
            className="w-full object-contain"
          /> */}
        </picture>
        <div>
          <p className="font-medium text-center text-3xl text-white pb-2">
            Jyothikrishna
          </p>
          <p className="font-medium text-center text-3xl text-white">
            React Developer
          </p>
        </div>
      </div>
      <Contact scrollRef={scrollRef} />
    </section>
  );
};

export default Intro;
