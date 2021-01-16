import React from "react";

import "./Pagination.css";

const Pagination = ({ profilesPerPage, totalProfiles, paginate }) => {
  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(totalProfiles / profilesPerPage); i++) {
    pageNumber.push(i);
  }
  return (
    <nav className="pagination">
      {/* <p className='pagination__totalPages'>{pageNumber.toString()}</p> */}
      {pageNumber.map((no) => (
        <button key={no} onClick={() => paginate(no)} className="pagination__link">
          {no}
        </button>
      ))}
    </nav>
  );
};

export default Pagination;
