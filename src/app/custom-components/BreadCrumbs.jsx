import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Breadcrumb } from '@themesberg/react-bootstrap';
import React from 'react';
import { useLocation } from 'react-router-dom';

export  function BreadCrumbs({location:Location}) {
  const location  = useLocation(); 
    const breadcrumb  =  Location ? Location.split('/') : location.pathname.split('/').splice(1);
  return (
     <>
      <div className="d-xl-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-3">
        <div className="d-block mb-4 mb-xl-0">
          <Breadcrumb className="d-none d-md-inline-block" listProps={{ className: "breadcrumb-dark  breadcrumb-transparent" }}>
            <Breadcrumb.Item><FontAwesomeIcon icon={faHome} href='/' /></Breadcrumb.Item>
          {
            breadcrumb.map((breadcrumbs)=>(
              <Breadcrumb.Item>
              {breadcrumbs.charAt(0).toUpperCase() + breadcrumbs.slice(1)}
              </Breadcrumb.Item>
            ))
          }
          </Breadcrumb>
        </div>
      </div>
    </> 
  )
}
