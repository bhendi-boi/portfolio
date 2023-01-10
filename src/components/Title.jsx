const Title = ({ name }) => {
  return (
    <h2
      id={name}
      className="my-4 text-4xl font-semibold font-title tracking-wide text-gray-900 dark:text-neutral-50"
    >
      {name}
    </h2>
  );
};

export default Title;
