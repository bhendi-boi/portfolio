import Title from "./Title";

const About = () => {
  return (
    <section className="px-2 h-96 border-b-2 border-slate-50 border-opacity-20 text-slate-200">
      <Title name="about" />
      <div>
        <p>
          Hello 👋 I am <span>Jyothikrishna</span> from Chirala, AP. I like
          making beautiful and interactive UI as a Front end Developer.
        </p>
      </div>
    </section>
  );
};

export default About;
