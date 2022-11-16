const TimeLineItem = ({ title, start, end, details }) => {
  const END = end ? end : "present";

  return (
    <article className="py-2 pl-4 border-l-2 border-slate-300">
      <div className="flex gap-4 items-center relative after:content-[''] after:w-4 after:h-4 after:rounded-full after:bg-slate-200 after:absolute after:-left-6">
        <h3 className="text-xl text-slate-50">{title}</h3>
        <p className="text-gray-300 opacity-80 text-sm">
          {start} - {END}
        </p>
      </div>
      <p className="text-sm text-gray-200">{details}</p>
    </article>
  );
};

export default TimeLineItem;
