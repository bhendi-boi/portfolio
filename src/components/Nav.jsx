import "../styles/nav.css";

const Nav = () => {
  return (
    <nav class="navbar">
      <div class="icon">{/* <!-- icon for my name --> */}</div>
      <div class="hamburger" data-on="on"></div>
      <div data-visible="hidden" class="nav-dropdown">
        <ul>
          <li>skills</li>
          <li>experience</li>
          <li>accomplishments</li>
          <li>contact</li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
