const ProjectCard = ({ name, stack, details, url, imageURL }) => {
  return (
    <article className="relative h-full overflow-hidden rounded-md shadow-2xl sm:w-96 md:w-full bg-slate-800 text-slate-200 border-slate-300">
      <picture className="flex flex-col gap-2 overflow-hidden bg-yellow-300 h-60">
        <a target="_blank" href={url} className="border-none">
          <img src={imageURL} alt={`${name} photo`} className="object-cover" />
        </a>
      </picture>
      <h3 className="my-3 text-3xl font-medium text-center text-slate-50">
        {name}
      </h3>
      <p className="mx-6 min-h-[3rem] text-base">{details}</p>
      <ul className="flex gap-4 justify-center m-4 px-4 min-h-[2rem]">
        {stack.map((item) => {
          return (
            <li
              key={item}
              className="px-3 py-1 text-base font-medium text-black capitalize rounded-sm shadow-md md:text:xl bg-neutral-50 font-chips ring-2 ring-neutral-50 border-opacity-70"
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
