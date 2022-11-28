const ProjectCard = ({ name, stack, details, url, imageURL }) => {
  return (
    <article className="relative h-full overflow-hidden rounded-md shadow-2xl sm:w-96 md:w-full bg-slate-800 text-slate-200 border-slate-300">
      <div className="flex flex-col gap-2">
        <a target="_blank" href={url} className="border-none">
          <img
            src={imageURL}
            alt={`${name} photo`}
            className="object-cover w-full h-full"
          />
        </a>
        <h3 className="text-3xl font-medium text-center text-slate-50">
          {name}
        </h3>
        <p className="mx-6 min-h-[3rem] text-sm">{details}</p>
      </div>
      <ul className="flex gap-4 justify-center m-4 px-4 min-h-[2rem]">
        {stack.map((item) => {
          return (
            <li
              key={item}
              className="px-3 py-1 text-base capitalize rounded-sm md:text:xl text-slate-200 ring-2 ring-slate-100 border-opacity-70"
            >
              {item}
            </li>
          );
        })}
      </ul>
    </article>
  );
};

export default ProjectCard;
