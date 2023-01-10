export default [
  {
    title: "Bachelors in Electronics and Communication",
    start: 2021,
    end: 2025,
    category: "Education",
    details: <BTechDetails />,
  },
  {
    title: "React Developer",
    start: 2022,
    end: null,
    category: "Skill",
    details: <ReactDeveloperDetails />,
  },
  {
    title: "Joint Core - PRIT",
    start: 2022,
    end: null,
    category: "Voluntering",
    details: <PritJCDetails />,
  },
];

function ReactDeveloperDetails() {
  return (
    <p className="leading-5 opacity-90">
      I am a React Developer since 2022. You can check my work by visiting
      Projects section or my{" "}
      <a
        href="https://github.com/bhendi-boi"
        target="_blank"
        className="text-blue-600 dark:text-blue-400 hover:underline hover:underline-offset-2"
      >
        Github
      </a>{" "}
      profile
    </p>
  );
}
function BTechDetails() {
  return (
    <p className="leading-5 opacity-90">
      I am my pursuing my Bachelors from{" "}
      <a
        href="https://iiitdm.ac.in/"
        target="_blank"
        className="text-blue-600 dark:text-blue-400 hover:underline hover:underline-offset-2"
      >
        IIITDM, Kancheepuram.
      </a>{" "}
      I am currently in my sophomore year.
    </p>
  );
}
function PritJCDetails() {
  return (
    <p className="leading-5 opacity-90">
      I voluntereed as a Joint Core for PRIT division (Projects and Industrial
      Talks) of{" "}
      <a
        href="https://csclub.netlify.app/"
        target="_blank"
        className="text-blue-600 dark:text-blue-400 hover:underline hover:underline-offset-2"
      >
        CS Club IIITDM, Kancheepuram.
      </a>{" "}
    </p>
  );
}
