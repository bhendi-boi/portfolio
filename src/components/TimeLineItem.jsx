import { motion } from "framer-motion";
const TimeLineItem = ({ title, start, end, details, category }) => {
  const END = end ? end : "Present";

  return (
    <motion.article
      initial={{ x: "-100%" }}
      whileInView={{ x: 0 }}
      viewport={{ once: true, margin: "15px" }}
      transition={{
        type: "tween",
        duration: 0.5,
        ease: "easeInOut",
      }}
      className="py-2 pl-4 text-gray-800 border-l-2 border-gray-800 dark:border-gray-300 dark:text-gray-200"
    >
      <div className="flex flex-col relative after:content-[''] after:w-5 after:h-5 after:rounded-full after:bg-gray-800 dark:after:bg-gray-200 after:absolute after:-left-[26px] after:top-1">
        <h3 className="text-2xl font-medium text-gray-900 dark:text-neutral-50">
          {title}
        </h3>
        <span className="inline-flex gap-4 text-sm opacity-50">
          {category}
          <span>
            {start} - {END}
          </span>
        </span>
      </div>
      <p className="leading-6 opacity-90">{details}</p>
    </motion.article>
  );
};

export default TimeLineItem;
