const Title = ({ name, htmlID }) => {
  return (
    <h2
      id={htmlID}
      className="capitalize mx-4 my-4 text-5xl font-medium text-blue-500"
    >
      {name}
    </h2>
  );
};

export default Title;
