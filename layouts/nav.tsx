import NavLink from "./navLink";

function Nav() {
  return (
    <nav className="flex gap-5">
      <NavLink path="/3d-models">3d models</NavLink>
      <NavLink path="/about">about</NavLink>
    </nav>
  );
}

export default Nav;
