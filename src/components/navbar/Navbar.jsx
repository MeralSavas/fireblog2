import { IconDiv, NavBarCon } from "./Navbar-styled";

function Navbar() {
  return (
    <NavBarCon>
      <img src="assets/cw.jpeg" alt="" />
      <h1>{"<WeAreBored/>Blog"}</h1>
      <IconDiv />
    </NavBarCon>
  );
}

export default Navbar;
