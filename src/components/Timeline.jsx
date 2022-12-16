import { motion } from "framer-motion";
import data from "../data/TimeLine";
import Title from "./Title";
import TimeLineItem from "./TimeLineItem";

const Timeline = ({ scrollRef }) => {
  return (
    <motion.section
      ref={scrollRef}
      initial={{ x: "-100%" }}
      whileInView={{ x: 0 }}
      viewport={{ once: true, margin: "20px 0px 0px 0px" }}
      transition={{
        type: "tween",
        duration: 0.5,
        ease: "easeInOut",
      }}
      className="px-2 border-b-2 min-h-[calc(100vh-5rem)] border-slate-50 border-opacity-20"
    >
      <Title name="timeline" />
      <section className="ml-2">
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
    </motion.section>
  );
};

export default Timeline;
