const ProjectCard = ({ name, stack, details, url, imageURL }) => {
  return (
    <article className="sm:w-96 relative bg-slate-800  text-slate-300 shadow-2xl  border-slate-300 rounded-md overflow-hidden">
      <div className="flex flex-col gap-2">
        <a target="_blank" href={url} className="border-none bg-slate-500">
          <img
            src={imageURL}
            alt={`${name} photo`}
            className="object-cover w-full "
          />
        </a>
        <h3 className="text-center text-3xl text-slate-50">{name}</h3>
        <p className="mx-6">{details}</p>
      </div>
      <ul className="flex gap-4 justify-center m-4 sm:absolute sm:bottom-4">
        {stack.map((item) => {
          return (
            <li
              key={item}
              className="capitalize text-lg px-2 py-[2px] rounded-md border-2 border-slate-100"
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
