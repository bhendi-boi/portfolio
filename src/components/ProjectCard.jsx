const ProjectCard = ({ name, stack, details, url, imageURL }) => {
  return (
    <article className="h-full sm:w-96 md:w-full relative bg-slate-800  text-slate-200 shadow-2xl  border-slate-300 rounded-md overflow-hidden">
      <div className="flex flex-col gap-2">
        <a target="_blank" href={url} className="border-none">
          <img
            src={imageURL}
            alt={`${name} photo`}
            className="w-full h-full object-cover"
          />
        </a>
        <h3 className="text-center text-3xl font-medium text-slate-50">
          {name}
        </h3>
        <p className="mx-6 min-h-[3rem] text-sm">{details}</p>
      </div>
      <ul className="flex gap-4 justify-center m-4 px-4 min-h-[2rem]">
        {stack.map((item) => {
          return (
            <li
              key={item}
              className="capitalize text-base md:text:xl text-slate-200 px-3 py-1 rounded-sm ring-2 ring-slate-100 border-opacity-70"
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
