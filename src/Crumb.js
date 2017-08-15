import React from 'react';

const Crumb = ({listOfBreadcrumbs, originalUrl}) => {

  let uniqueCrumb = listOfBreadcrumbs.map((Crumbs, i) => {
    const href = Crumbs.Url ? originalUrl + Crumbs.Url : "";
    return (
      <a href={href || '#!'} className="breadcrumb" key={i}>{Crumbs["Name as breadcrumb"]}</a>
    )
  });

  return (
    <div>
      {uniqueCrumb}
    </div>
  )
}

export default Crumb;