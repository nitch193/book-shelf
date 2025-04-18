import Logo from "./assets/books-and-people-svgrepo-com.svg";
import SearchIcon from "./assets/search_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg";
const Header = () => {
  return (
    <div className="banner">
      <div className="logo-div">
        <Logo />
      </div>
      <h2 className="page_name">Book-shelf</h2>
      <div className="page_actions">
        <span>
          <SearchIcon />
        </span>
        <h2>About</h2>
      </div>
    </div>
  );
};
export default Header;
