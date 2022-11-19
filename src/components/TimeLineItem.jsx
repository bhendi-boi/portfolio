const TimeLineItem = ({ title, start, end, details, links, category }) => {
  const END = end ? end : "present";

  return (
    <article className="py-2 pl-4 border-l-2 border-slate-300">
      <div className="flex flex-col relative after:content-[''] after:w-4 after:h-4 after:rounded-full after:bg-slate-200 after:absolute after:-left-6 after:top-1.5">
        <h3 className="text-xl text-slate-50">{title}</h3>
        <p className="text-gray-300 opacity-75 text-sm capitalize">
          {category}
          {"  "}
          <span>
            {start} - {END}
          </span>
        </p>
      </div>
      <p className="text-sm text-gray-200">{details}</p>
    </article>
  );
};

export default TimeLineItem;
