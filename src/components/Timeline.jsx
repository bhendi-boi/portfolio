import data from "../data/TimeLine";
import Title from "./Title";
import TimeLineItem from "./TimeLineItem";

const Timeline = () => {
  return (
    <section className="h-96 px-2">
      <Title name="timeline" />
      <section className="">
        {data.map((item) => (
          <TimeLineItem
            title={item.title}
            details={item.details}
            start={item.start}
            end={item.end}
          />
        ))}
      </section>
    </section>
  );
};

export default Timeline;
