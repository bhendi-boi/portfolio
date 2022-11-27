import Title from "./Title";

const About = () => {
  return (
    <section className="px-2 min-h-[30rem] border-b-2 border-slate-50 border-opacity-20 text-slate-200">
      <Title name="about me" />
      <div>
        <p className="px-2">
          Hello 👋 I am <span>Jyothikrishna</span> from Chirala, AP. I like
          making beautiful and interactive UI.
        </p>
      </div>
    </section>
  );
};

export default About;
