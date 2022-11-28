import data from "../data/TimeLine";
import Title from "./Title";
import TimeLineItem from "./TimeLineItem";

const Timeline = ({ scrollRef }) => {
  return (
    <section
      ref={scrollRef}
      className="px-2 border-b-2 h-96 border-slate-50 border-opacity-20"
    >
      <Title name="timeline" />
      <section className="">
        {data.map((item) => (
          <TimeLineItem
            key={item.title}
            title={item.title}
            details={item.details}
            start={item.start}
            end={item.end}
            links={item.links}
            category={item.category}
          />
        ))}
      </section>
    </section>
  );
};

export default Timeline;
