import {BsSearch} from 'react-icons/bs';
import css from './Searchbar.module.css';
import PropTypes from 'prop-types';
export const Searchbar = ({changeValueSab}) => {
  const submitForm = e => {
    e.preventDefault ();
    let nameForm = e.target.name.value;
    changeValueSab (nameForm);
  };

  return (
    <header className={css.searchbar}>
      <form onSubmit={submitForm} className={css.searchForm}>
        <button type="submit" className={css.searchForm_button}>
          <span className={css.searchForm_button_label}><BsSearch /></span>
        </button>

        <input
          className={css.searchForm_input}
          type="text"
          name="name"
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};
Searchbar.propTypes = {
  changeValueSab: PropTypes.func.isRequired,
};
