const Title = ({ name, htmlID }) => {
  return (
    <h2 id={htmlID} className="capitalize text-center text-5xl text-white my-2">
      {name}
    </h2>
  );
};

export default Title;
