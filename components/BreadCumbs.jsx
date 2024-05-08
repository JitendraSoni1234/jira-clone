import React, { Fragment } from 'react';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from './ui/breadcrumb';

function BreadCumbs({ items }) {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {items?.map((i, index) => (
          <Fragment key={i.id}>
            <BreadcrumbItem>
              <BreadcrumbLink className="hover:underline" href={i.href}>{i.lable}</BreadcrumbLink>
            </BreadcrumbItem>
            {index < items?.length - 1 ? <BreadcrumbSeparator>/</BreadcrumbSeparator> : null}
          </Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}

export default BreadCumbs;
