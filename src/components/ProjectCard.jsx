import { motion } from "framer-motion";
const ProjectCard = ({ name, stack, details, url, imageURL, setSelectId }) => {
  // TODO!
  // making the images fit in the container
  return (
    <motion.article
      layoutId={name}
      initial={{ x: "-100%", opacity: 0.5 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true, margin: "15px" }}
      transition={{
        type: "tween",
        duration: 0.5,
        ease: "easeInOut",
        staggerChildren: 1,
      }}
      className="mx-2 overflow-hidden text-gray-800 rounded-lg shadow-2xl dark:text-gray-200 sm:w-96 bg-neutral-50 dark:bg-black project__card"
    >
      <picture className="flex flex-col gap-2 overflow-hidden bg-yellow-300 h-60">
        <img src={imageURL} alt={`${name} photo`} className="object-cover" />
      </picture>
      <h3 className="my-2 text-2xl font-medium text-center text-gray-900 font-title dark:text-neutral-50">
        {name}
      </h3>
      <span className="mx-6 text-sm">
        <a
          target="_blank"
          href={url}
          className="text-blue-600 hover:underline hover:underline-offset-2"
        >
          {url}
        </a>
      </span>
      <p
        onClick={() => setSelectId(name)}
        className="mx-6 min-h-[78px] cursor-pointer project__card-details"
      >
        {details}
      </p>
      {/* chips */}
      <ul className="flex gap-4 justify-center m-4 mb-6 px-4 min-h-[2rem]">
        {stack.map((item) => {
          return (
            <li
              key={item}
              className="px-3 py-1 text-base font-medium bg-gray-800 rounded-sm shadow-md bg:opacity-90 text-neutral-50 dark:text-black md:text:xl dark:bg-neutral-50 font-chips ring-2 ring-gray-800 dark:ring-neutral-50 border-opacity-70"
            >
              {item}
            </li>
          );
        })}
      </ul>
    </motion.article>
  );
};

export default ProjectCard;
