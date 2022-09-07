import React from "react";
import { Box, Button } from "@mui/material";

const Pagination = ({ totalPosts, postsPerPage, setCurrentPage, currentPage }) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }

  return (
    <Box>
      {pages.map((page, index) => {
        return (
          <Button key={index} onClick={() => setCurrentPage(page)} className={page === currentPage ? "active" : ""}>
            {page}
          </Button>
        );
      })}
    </Box>
  );
};

export default Pagination;
