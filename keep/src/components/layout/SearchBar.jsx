import { useRef } from "react";
import classes from "./SearchBar.module.css";
import { ReactComponent as Search } from "../../icons/search_black_24dp.svg";

const SearchBar = () => {
  const searchInputRef = useRef();

  const fromSubmitHandler = (event) => {
    event.preventDefault();
    searchInputRef.current.value = "";
  };

  const searchHandler = (event) => {
    console.log(searchInputRef.current.value);
    const searchedTerm = searchInputRef.current.value;
    console.log(searchedTerm);
    // filtering, validity , search_part -> logic
  };

  return (
    <form onSubmit={fromSubmitHandler} className={classes.form}>
      {/* <label>🔍🕵</label> */}
      <label>
        <Search />
      </label>
      <input 
        id="search"
        type="text"
        placeholder="search"
        onChange={searchHandler}
        ref={searchInputRef}
      ></input>
      <button>❌</button>
    </form>
  );
};

export default SearchBar;
