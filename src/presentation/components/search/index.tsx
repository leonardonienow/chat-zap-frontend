import React from "react";
import { useDispatch } from "react-redux";
import * as contactSearchAction from "../../../data/store/contactSearch/search.action";
import styles from "./styles.module.scss";

const Search = () => {
  const dispatch = useDispatch();

  const handleSearch = (search: string) => {
    dispatch(contactSearchAction.search(search));
  };

  return (
    <div className={styles.container}>
      <input
        type="search"
        placeholder="Pesquisar"
        onChange={(event) => {
          handleSearch(event.target.value);
        }}
      />
      <i className={"fa fa-search " + styles.fasearch}></i>
    </div>
  );
};

export default Search;
