import ReactPaginate from "react-paginate";
import PropTypes from "prop-types";
import styles from "./Paginate.module.css";

const Paginate = ({ total, handlePageChange, currentPage, load = false }) => {
  return (
    <ReactPaginate
      className={styles.paginate}
      activeClassName={`${styles.activePage} ${load ? styles.pageLoad : ""}`}
      previousLabel={"<<"}
      pageCount={total}
      onPageChange={handlePageChange}
      pageRangeDisplayed={2}
      marginPagesDisplayed={2}
      forcePage={currentPage}
      nextLabel={">>"}
    />
  );
};
Paginate.propTypes = {
  load: PropTypes.bool.isRequired,
  total: PropTypes.number.isRequired,
  handlePageChange: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
};

export default Paginate;
