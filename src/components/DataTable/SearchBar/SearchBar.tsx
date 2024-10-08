import styles from "./SearchBar.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { setSearchQuery } from "@/features/usersSlice";
import { ChangeEvent } from "react";
import { SearchIcon } from "@/components/icons/SearchIcon";
import { CancelIcon } from "@/components/icons/CancelIcon";
import { RootState } from "@/features/store";

interface SearchBarProps {
  onShowForm: () => void;
}

export const SearchBar = ({ onShowForm }: SearchBarProps) => {
  const dispatch = useDispatch();
  const { searchQuery } = useSelector((state: RootState) => state.users);

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchQuery(e.target.value));
  };

  const onInputClear = () => {
    dispatch(setSearchQuery(""));
  };

  return (
    <section className={styles.searchBar}>
      <div className={styles.dataTable}>
        <h1>Data Table</h1>
      </div>
      <div className={styles.searcher}>
        <div className={styles.inputWrapper}>
          <SearchIcon className={styles.iconLeft} />

          <input
            type="text"
            placeholder="Search Employee"
            value={searchQuery}
            onChange={(e) => onInputChange(e)}
          />
          <CancelIcon
            className={styles.iconRight}
            onInputClear={onInputClear}
          />
        </div>
        <button onClick={onShowForm}>Add Employee</button>
      </div>
    </section>
  );
};
