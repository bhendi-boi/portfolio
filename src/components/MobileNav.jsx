const MobileNav = ({ links, handleClick }) => {
  return (
    <div className="sticky left-0 z-10 transition border-b-2 border-opacity-25 top-16 md:hidden border-slate-50 duration-250">
      <ul className="flex flex-col items-center h-screen gap-10 list-none py-14 bg-nav-background">
        {links.map((link) => {
          return (
            <li
              key={link}
              data-media="sm"
              onClick={(e) => handleClick(e)}
              className="text-4xl font-semibold capitalize transition-opacity duration-500 cursor-pointer opacity-60 text-logo-text hover:opacity-100 focus:opacity-100"
            >
              {link}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MobileNav;
