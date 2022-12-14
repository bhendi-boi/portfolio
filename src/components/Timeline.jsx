import { motion } from "framer-motion";
import data from "../assets/TimeLine";
import Title from "./Title";
import TimeLineItem from "./TimeLineItem";

const Timeline = ({ scrollRef }) => {
  return (
    <motion.section
      aria-labelledby="Timeline"
      ref={scrollRef}
      initial={{ x: "-100%" }}
      whileInView={{ x: 0 }}
      viewport={{ once: true, margin: "20px 0px 0px 0px" }}
      transition={{
        type: "tween",
        duration: 0.5,
        ease: "easeInOut",
      }}
      className="px-2 border-b-2 min-h-[calc(100vh-5rem)] dark:border-slate-50 dark:border-opacity-20"
    >
      <Title name="Timeline" />
      <motion.div transition={{ staggerChildren: 1 }} className="ml-4 md:ml-8">
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
      </motion.div>
    </motion.section>
  );
};

export default Timeline;
