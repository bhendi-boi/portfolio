import Contact from "./Contact";

const imageSrc =
  "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

const Intro = ({ scrollRef }) => {
  return (
    <section className="h-[calc(100vh-4.5rem)] flex flex-col justify-evenly items-center border-b-2 border-slate-50 border-opacity-20">
      <div className="flex flex-col items-center gap-4">
        <picture className="bg-yellow-300 rounded-full h-52 w-52">
          {/* <img
            src={imageSrc}
            alt="Jyothikrishna image"
            className="object-contain w-full"
          /> */}
        </picture>
        <div>
          <p className="pb-2 text-3xl font-medium text-center text-white">
            Jyothikrishna
          </p>
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
