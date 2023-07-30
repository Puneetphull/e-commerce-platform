import React from 'react';
import { usePagination } from './usePagination';
import {Nav, Pagination } from "@themesberg/react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
const CustomPagination = props => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
  } = props;
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize
  });

  // If there are less than 2 times in pagination range we shall not render the component
  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    if( currentPage < lastPage){
    onPageChange(currentPage + 1);
    }
  };

  const onPrevious = () => {
    if(currentPage > 1){
    onPageChange(currentPage - 1);
    }
  };

  let lastPage = paginationRange[paginationRange.length - 1];
  return (

  
               
              
                
           

            <Nav>
            <Pagination className="mb-2 mb-lg-0">
       {/* Left navigation arrow */}
       {currentPage !== 1 ?
        <Pagination.Prev >
        <FontAwesomeIcon role='button'  disabled={currentPage === 1 ? true : false} onClick={onPrevious}  icon={faChevronLeft} />
      </Pagination.Prev>
      :""}
      {paginationRange.map((pageNumber,index) => {
        // Render our Page Pills
        return (
            <Pagination.Item role='button' active={pageNumber === currentPage ? true : false} onClick={() => onPageChange(pageNumber)} >{pageNumber}</Pagination.Item>
           
        );
      })}
      {/*  Right Navigation arrow */}
      {currentPage !== lastPage ?
      <Pagination.Next >
      <FontAwesomeIcon  role='button' disabled={ currentPage === lastPage ? true : false}  onClick={onNext}  icon={faChevronRight} />
    </Pagination.Next>
    
:''}
       </Pagination>
            </Nav>
  );
};

export default CustomPagination;