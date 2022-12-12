import { BiLinkExternal } from "react-icons/bi";

const imageSrc =
  "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

const Intro = () => {
  return (
    <section className="flex flex-col items-center min-h-screen border-b-2 justify-evenly border-slate-50 border-opacity-20">
      <div className="flex flex-col items-center gap-4">
        <picture className="overflow-hidden bg-yellow-300 rounded-full h-52 w-52 md:h-72 md:w-72">
          <img
            src={imageSrc}
            alt="Jyothikrishna image"
            className="object-cover aspect-square"
          />
        </picture>
        <div className="font-logo">
          <h2 className="pb-2 text-3xl font-medium text-center text-white">
            Jyothikrishna
          </h2>
          <p className="text-3xl font-medium text-center text-white">
            React Developer
          </p>
        </div>
      </div>
      <a
        className="inline-flex items-center gap-2 px-4 py-2 font-bold uppercase border-2 rounded-md outline-none cursor-pointer text-nav-background border-neutral-50 bg-neutral-50 hover:bg"
        href="../assets/cv.pdf"
        download
      >
        full cv as pdf <BiLinkExternal className="text-lg font-medium" />
      </a>
    </section>
  );
};

export default Intro;
