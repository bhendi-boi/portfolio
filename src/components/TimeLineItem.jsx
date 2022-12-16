import { motion } from "framer-motion";
const TimeLineItem = ({ title, start, end, details, links, category }) => {
  const END = end ? end : "present";

  return (
    <motion.article
      initial={{ x: "-100%" }}
      whileInView={{ x: 0 }}
      viewport={{ once: true, margin: "10px 0px 0px 0px" }}
      transition={{
        type: "tween",
        duration: 0.5,
        ease: "easeInOut",
      }}
      className="py-2 pl-4 border-l-2 border-gray-300"
    >
      <div className="flex flex-col relative after:content-[''] after:w-5 after:h-5 after:rounded-full after:bg-gray-200 after:absolute after:-left-[26px] after:top-1">
        <h3 className="text-2xl font-medium text-neutral-50">{title}</h3>
        <p className="inline-flex gap-4 text-sm text-gray-400 capitalize">
          {category}
          <span>
            {start} - {END}
          </span>
        </p>
      </div>
      <p className="text-gray-200">{details}</p>
    </motion.article>
  );
};

export default TimeLineItem;
