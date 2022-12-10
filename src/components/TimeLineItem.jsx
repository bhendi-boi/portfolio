const TimeLineItem = ({ title, start, end, details, links, category }) => {
  const END = end ? end : "present";

  return (
    <article className="py-2 pl-4 border-l-2 border-neutral-300">
      <div className="flex flex-col relative after:content-[''] after:w-4 after:h-4 after:rounded-full after:bg-neutral-200 after:absolute after:-left-6 after:top-1.5">
        <h3 className="text-xl font-medium text-slate-50">{title}</h3>
        <p className="inline-flex gap-4 text-sm capitalize opacity-50 text-slate-200">
          {category}
          <span>
            {start} - {END}
          </span>
        </p>
      </div>
      <p className="text-sm text-slate-200">{details}</p>
    </article>
  );
};

export default TimeLineItem;
