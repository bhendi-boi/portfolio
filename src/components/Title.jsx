const Title = ({ name }) => {
  return (
    <h2
      id={name}
      className="my-4 text-4xl font-chips font-semibold uppercase tracking-wider text-gray-800 dark:text-neutral-200"
    >
      {name}
    </h2>
  );
};

export default Title;
