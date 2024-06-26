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
    { id: 1, short: 'JS', name: 'Jitendra soni' },
    { id: 2, short: 'AG', name: 'Jitendra soni' },
    { id: 3, short: 'AK', name: 'Jitendra soni' },
    { id: 4, short: 'AA', name: 'Jitendra soni' },
    { id: 11, short: 'AA', name: 'Jitendra soni' },
    { id: 5, short: 'JS', name: 'Jitendra soni' },
    { id: 6, short: 'AG', name: 'Jitendra soni' },
    { id: 7, short: 'AK', name: 'Jitendra soni' },
    { id: 8, short: 'AA', name: 'Jitendra soni' },
    { id: 9, short: 'AA', name: 'Jitendra soni' },
  ];
  return (
    <div className="p-5 mt-5">
      <BreadCumbs items={backlogBreadcumbs} />
      <div className="font-medium text-2xl mt-1">Backlog</div>
      <div>
        <Members maxItems={6} members={memberData} />
      </div>
    </div>
  );
}

export default Backlo;
