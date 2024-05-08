'use client';
import React, { useEffect, useRef, useState } from 'react';
import { MdOutlineLock, MdOutlineViewTimeline } from 'react-icons/md';
import { SiBookstack } from 'react-icons/si';
import { FaChessPawn, FaChevronRight, FaCode, FaInbox, FaSlack } from 'react-icons/fa';
import { HiOutlineViewBoards } from 'react-icons/hi';
import { CiBoxList, CiCalendar } from 'react-icons/ci';
import { IoDiscOutline, IoCloudUploadOutline } from 'react-icons/io5';
import { BsGraphUpArrow } from 'react-icons/bs';
import { TbShip } from 'react-icons/tb';
import { IoIosArrowBack, IoIosSettings } from 'react-icons/io';
import { AiFillThunderbolt, AiOutlineIssuesClose } from 'react-icons/ai';
import { RiPagesLine, RiStickyNoteAddLine } from 'react-icons/ri';
import { NavigationMenu, NavigationMenuLink, NavigationMenuList } from './ui/navigation-menu';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Separator } from './ui/separator';

const [minWidth, maxWidth, defaultWidth] = [20, window.innerWidth / 2, 288];

function Sidebar() {
  const [width, setWidth] = useState(defaultWidth);
  const handleMouseDown = (e) => {
    const startX = e.clientX;
    const startWidth = width;
  
    const onMouseMove = (moveEvent) => {
      const movementX = moveEvent.clientX - startX;
      const newWidth = Math.max(minWidth, Math.min(maxWidth, startWidth + movementX));
      setWidth(newWidth);
    };
  
    const onMouseUp = () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };
  
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  };
  

  const planningItems = [
    {
      id: 'timeline',
      label: 'Timeline',
      icon: MdOutlineViewTimeline,
      href: `/projects/timeline`,
    },
    {
      id: 'backlog',
      label: 'Backlog',
      icon: SiBookstack,
      href: `/projects/backlog`,
    },
    {
      id: 'active-sprint',
      label: 'Active sprint',
      icon: HiOutlineViewBoards,
      href: `/projects/active-sprint`,
    },
    {
      id: 'calendar',
      label: 'Calendar',
      icon: CiCalendar,
      href: `/projects/calendar`,
    },
    {
      id: 'reports',
      label: 'Reports',
      icon: BsGraphUpArrow,
      href: `/projects/reports`,
    },
    {
      id: 'list',
      label: 'List',
      icon: CiBoxList,
      href: `/projects/list`,
    },
    {
      id: 'goals',
      label: 'Goals',
      icon: IoDiscOutline,
      href: `/projects/goals`,
    },
    {
      id: 'issues',
      label: 'Issues',
      icon: AiOutlineIssuesClose,
      href: `/projects/issues`,
    },
    {
      id: 'components',
      label: 'Components',
      icon: FaInbox,
      href: `/projects/components`,
    },
  ];

  const developmentItems = [
    {
      id: 'code',
      label: 'Code',
      icon: FaCode,
      href: `/projects/code`,
    },
    {
      id: 'security',
      label: 'Security',
      icon: MdOutlineLock,
      href: `/projects/security`,
    },
    {
      id: 'releases',
      label: 'Releases',
      icon: TbShip,
      href: `/projects/releases`,
    },
  ];

  const operationsItems = [
    {
      id: 'deployments',
      label: 'Deployments',
      icon: IoCloudUploadOutline,
      href: `/projects/deployments`,
    },
  ];

  const otherItems = [
    {
      id: 'project-pages',
      label: 'Project pages',
      icon: RiPagesLine,
      href: `/projects/projects-pages`,
    },
    {
      id: 'slak-integration',
      label: 'Slak integration',
      icon: FaSlack,
      href: `/projects/slak-integration`,
    },
    {
      id: 'testing-board',
      label: 'Testing board',
      icon: AiFillThunderbolt,
      href: `/projects/testing-board`,
    },
    {
      id: 'add-shortcut',
      label: 'Add shortcut',
      icon: RiStickyNoteAddLine,
      href: `/projects/add-shortcut`,
    },
    {
      id: 'project-settings',
      label: 'Project settings',
      icon: IoIosSettings,
      href: `/projects/projects-settings`,
    },
  ];

  const toggleResize = () => {
    if (width < defaultWidth) {
      setWidth(defaultWidth);
    } else {
      setWidth(minWidth);
    }
  };

  return (
    <>
      <div
        className="flex h-[calc(100dvh-60px)] flex-col gap-y-5 bg-gray-50 p-3 *:select-none shadow-inner overflow-hidden [&[data-min=true]_*]:hidden transition-all delay-150 w-auto"
        data-min={width === minWidth}
        style={{ width }}>
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
      <div className="w-2 cursor-col-resize border-2 border-transparent hover:border-l-blue-500 relative group" onMouseDown={handleMouseDown}>
        <div
          onClick={() => toggleResize()}
          className="top-10 absolute hidden rounded-full p-1 translate-x-[-50%] bg-white border-2 border-blue-500 border-solid cursor-pointer group-hover:flex hover:bg-blue-500 text-blue-500 hover:text-white [&[data-min=true]_svg]:rotate-180"
          data-min={width < defaultWidth}>
          <IoIosArrowBack />
        </div>
      </div>
    </>
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
