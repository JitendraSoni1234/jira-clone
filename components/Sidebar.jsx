'use client';
import React, { useState } from 'react';
import { MdOutlineLock, MdOutlineViewTimeline } from 'react-icons/md';
import { SiBookstack } from 'react-icons/si';
import { FaChessPawn, FaChevronRight, FaCode, FaInbox, FaSlack } from 'react-icons/fa';
import { HiOutlineViewBoards } from 'react-icons/hi';
import { CiBoxList, CiCalendar } from 'react-icons/ci';
import { IoDiscOutline, IoCloudUploadOutline } from 'react-icons/io5';
import { BsGraphUpArrow } from 'react-icons/bs';
import { TbShip } from 'react-icons/tb';
import { IoIosSettings } from 'react-icons/io';
import { AiFillThunderbolt, AiOutlineIssuesClose } from 'react-icons/ai';
import { RiPagesLine, RiStickyNoteAddLine } from 'react-icons/ri';
import { NavigationMenu, NavigationMenuLink, NavigationMenuList } from './ui/navigation-menu';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Separator } from './ui/separator';

function Sidebar() {
  const planningItems = [
    {
      id: 'timeline',
      label: 'Timeline',
      icon: MdOutlineViewTimeline,
      href: `/project/timeline`,
    },
    {
      id: 'backlog',
      label: 'Backlog',
      icon: SiBookstack,
      href: `/project/timeline`,
    },
    {
      id: 'active-sprint',
      label: 'Active sprint',
      icon: HiOutlineViewBoards,
      href: `/project/active-sprint`,
    },
    {
      id: 'calendar',
      label: 'Calendar',
      icon: CiCalendar,
      href: `/project/calendar`,
    },
    {
      id: 'reports',
      label: 'Reports',
      icon: BsGraphUpArrow,
      href: `/project/reports`,
    },
    {
      id: 'list',
      label: 'List',
      icon: CiBoxList,
      href: `/project/list`,
    },
    {
      id: 'goals',
      label: 'Goals',
      icon: IoDiscOutline,
      href: `/project/goals`,
    },
    {
      id: 'issues',
      label: 'Issues',
      icon: AiOutlineIssuesClose,
      href: `/project/issues`,
    },
    {
      id: 'components',
      label: 'Components',
      icon: FaInbox,
      href: `/project/components`,
    },
  ];

  const developmentItems = [
    {
      id: 'code',
      label: 'Code',
      icon: FaCode,
      href: `/project/code`,
    },
    {
      id: 'security',
      label: 'Security',
      icon: MdOutlineLock,
      href: `/project/security`,
    },
    {
      id: 'releases',
      label: 'Releases',
      icon: TbShip,
      href: `/project/releases`,
    },
  ];

  const operationsItems = [
    {
      id: 'deployments',
      label: 'Deployments',
      icon: IoCloudUploadOutline,
      href: `/project/deployments`,
    },
  ];

  const otherItems = [
    {
      id: 'project-pages',
      label: 'Project pages',
      icon: RiPagesLine,
      href: `/project/project-pages`,
    },
    {
      id: 'slak-integration',
      label: 'Slak integration',
      icon: FaSlack,
      href: `/project/slak-integration`,
    },
    {
      id: 'testing-board',
      label: 'Testing board',
      icon: AiFillThunderbolt,
      href: `/project/testing-board`,
    },
    {
      id: 'add-shortcut',
      label: 'Add shortcut',
      icon: RiStickyNoteAddLine,
      href: `/project/add-shortcut`,
    },
    {
      id: 'project-settings',
      label: 'Project settings',
      icon: IoIosSettings,
      href: `/project/project-settings`,
    },
  ];

  return (
    <div className="flex h-full w-72 flex-col gap-y-5 bg-gray-50 p-3 shadow-inner">
      <div className="my-5 flex items-center gap-x-2 px-3">
        <div className="mt-1 flex items-center justify-center rounded-sm bg-[#FF5630] p-1 text-xs font-bold text-white">
          <FaChessPawn className="aspect-square text-2xl" />
        </div>
        <div>
          <h2 className="-mb-[0.5px] text-sm font-semibold text-gray-600">Project Name</h2>
          <p className="text-xs text-gray-500">Software Project</p>
        </div>
      </div>
      <div className="flex-1 flex flex-col gap-6 overflow-y-auto overflow-x-hidden">
        <NavList label={'PLANNING'} items={planningItems} />
        <NavList label={'DEVELOPMENT'} items={developmentItems} />
        <NavList label={'OPERATIONS'} items={operationsItems} />
        <Separator />
        <NavList label={'OTHERS'} items={otherItems} />
      </div>
      <div className="text-xs text-center">
        You are in a company-managed project
        <br />
        <Link href="about" className="underline">
          Learn more
        </Link>
      </div>
    </div>
  );
}

const NavList = ({ items, label }) => {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <div className="flex flex-col gap-y-2">
      <NavListHeader label={label} isVisible={isVisible} setIsVisible={setIsVisible} />
      <NavigationMenu data-state={isVisible ? 'open' : 'closed'} className="hidden w-full max-w-full [&[data-state=open]]:block">
        <NavigationMenuList className="flex-col">
          {items.map(item => (
            <NavItem key={item.id} item={item} />
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

const NavListHeader = ({ label, isVisible, setIsVisible }) => (
  <div className="group flex items-center gap-x-1">
    <button data-state={isVisible ? 'open' : 'closed'} onClick={() => setIsVisible(!isVisible)} className="invisible group-hover:visible [&[data-state=open]>svg]:rotate-90">
      <FaChevronRight className="text-xs transition-transform" />
    </button>
    <span className="text-xs font-bold text-gray-700">{label}</span>
  </div>
);

const NavItem = ({ item, disabled = false }) => {
  const currentPath = usePathname();
  if (disabled) {
    return (
      <div className="w-full rounded-lg text-gray-600 hover:cursor-not-allowed ">
        <div className="flex w-full items-center gap-x-3 border-l-4 border-transparent px-2 py-2">
          <item.icon />
          <span className="text-sm">{item.label}</span>
        </div>
      </div>
    );
  }
  return (
    <Link href={item.href} className="w-full rounded-lg text-gray-600" passHref legacyBehavior>
      <NavigationMenuLink
        active={currentPath === item.href}
        className="flex w-full rounded-sm border-transparent py-2 hover:bg-blue-100 [&[data-active]]:border-l-blue-700 [&[data-active]]:bg-blue-100 [&[data-active]]:text-blue-700">
        <div className="flex w-full items-center gap-x-3 border-l-4 border-inherit bg-inherit px-2">
          <item.icon />
          <span className="text-sm">{item.label}</span>
        </div>
      </NavigationMenuLink>
    </Link>
  );
};

export default Sidebar;
