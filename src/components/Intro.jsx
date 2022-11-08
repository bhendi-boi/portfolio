import "../styles/intro.css";

const Intro = () => {
  return (
    <section class="intro">
      <div class="image">
        <figure class="image-container"></figure>
        <div>
          <p class="name">Jyothikrishna</p>
          <p>ReactJS developer</p>
        </div>
      </div>
      <div class="links">
        <ul>
          <li>
            <img src="./assests/linkedin-1.svg" alt="" />
          </li>
          <li>
            <img src="./assests/github.svg" alt="" />
          </li>
          <li>
            <img src="./assests/instagram.svg" alt="" />
          </li>
          <li>
            <img src="./assests/link-solid.svg" alt="" />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Intro;
