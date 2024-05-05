import BreadCumbs from '@/components/BreadCumbs';
import Members from '@/components/Members';
import React from 'react';

function Backlo() {
  const backlogBreadcumbs = [
    {
      id: 'projects',
      lable: 'Projects',
      href: '/projects',
    },
    {
      id: 'project_name',
      lable: 'ga_hub',
      href: '/projects',
    },
    {
      id: 'sprint',
      lable: 'Phase 2',
      href: '/projects',
    },
  ];

  const memberData = [
    { id: 1, short: 'JS' },
    { id: 2, short: 'AG' },
    { id: 3, short: 'AK' },
    { id: 4, short: 'AA' },
    { id: 4, short: 'AA' },
    { id: 5, short: 'JS' },
    { id: 6, short: 'AG' },
    { id: 7, short: 'AK' },
    { id: 8, short: 'AA' },
    { id: 9, short: 'AA' },
  ];
  return (
    <div className="p-5 mt-5">
      <BreadCumbs items={backlogBreadcumbs} />
      <div className="font-medium text-2xl mt-1">Backlog</div>
      <div>
        <Members members={memberData} />
      </div>
    </div>
  );
}

export default Backlo;
