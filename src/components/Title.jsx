const Title = ({ name }) => {
  return (
    <h2
      id={name}
      className="my-4 text-4xl font-title font-semibold uppercase text-gray-700 dark:text-neutral-200"
    >
      {name}
    </h2>
  );
};

export default Title;
