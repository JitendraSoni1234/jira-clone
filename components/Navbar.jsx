import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { siteConfig } from '@/config/site';
import Image from 'next/image';
import Link from 'next/link';
import { AiFillBulb } from 'react-icons/ai';
import { BsWindowSidebar } from 'react-icons/bs';
import { FaBars } from 'react-icons/fa';
import { FaPeopleGroup } from 'react-icons/fa6';
import { LuListFilter } from 'react-icons/lu';
import { MdAdd, MdKeyboardArrowDown } from 'react-icons/md';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Button } from './ui/button';

const recentProjects = [
  {
    title: 'hub (Main)',
    type: 'Software project',
    href: 'https://picsum.photos/200',
  },
  {
    title: 'saas-team (Saas Team)',
    type: 'Software project',
    href: 'https://picsum.photos/seed/picsum/200',
  },
  {
    title: 'training (Training)',
    type: 'Software project',
    href: 'https://picsum.photos/200',
  },
  {
    title: 'operations (Operations)',
    type: 'Software project',
    href: 'https://picsum.photos/200',
  },
];

const starredFilters = [
  { id: 1, title: 'Phase 1 FE' },
  { id: 2, title: 'Phase 1 BE' },
  { id: 2, title: 'All hub issues' },
];

const recentDashboard = [
  { id: 1, title: 'Default Dashboard' },
  { id: 2, title: 'Phase 1 Dashboard' },
];

const teamMemebers = [
  { id: 1, title: 'Ansul Agrawal', short: 'AA' },
  { id: 2, title: 'Jitendra Soni', short: 'JS' },
];

function Navbar() {
  return (
    <header className="bg-white">
      <nav className="mx-auto flex items-center justify-between p-3 shadow-md" aria-label="Global">
        <div className="flex gap-1">
          <Link href="/" className="flex w-fit gap-3 align-middle">
            <Image src="https://cdn.worldvectorlogo.com/logos/jira-3.svg" alt="Jira logo" width={25} height={25} />
            <span className="text-2xl font-semibold">{siteConfig.title}</span>
          </Link>

          {/* Project */}
          <DropdownMenu className="hidden lg:flex">
            <DropdownMenuTrigger className="text-md px-2 border-none focus:outline-none flex items-center gap-0.5 hover:bg-gray-300 rounded-sm [&[data-state=open]]:bg-blue-100 [&[data-state=open]]:text-blue-700 font-[500]">
              Projects <MdKeyboardArrowDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel className="uppercase text-xs">Recent</DropdownMenuLabel>
              {recentProjects.map(project => (
                <DropdownMenuItem key={project.title} className="pe-5">
                  <Link href="#" className="flex gap-3 items-center">
                    <AiFillBulb className="h-6 w-6" />
                    <div>
                      <p>{project.title}</p>
                      <span>{project.type}</span>
                    </div>
                  </Link>
                </DropdownMenuItem>
              ))}
              <DropdownMenuSeparator />

              <DropdownMenuItem>
                <Link href="/projects" className="p-1 w-full">
                  View all Projects
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/projects/create" className="p-1 w-full">
                  Create Project
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Filters */}
          <DropdownMenu className="hidden lg:flex">
            <DropdownMenuTrigger className="text-md px-2 border-none focus:outline-none flex items-center gap-0.5 hover:bg-gray-300 rounded-sm [&[data-state=open]]:bg-blue-100 [&[data-state=open]]:text-blue-700 font-[500]">
              Filters <MdKeyboardArrowDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel className="uppercase text-xs">Starred</DropdownMenuLabel>
              {starredFilters.map(sf => (
                <DropdownMenuItem key={sf.title} className="pe-5">
                  <Link href="#" className="flex gap-3 items-center">
                    <LuListFilter />
                    <span>{sf.title}</span>
                  </Link>
                </DropdownMenuItem>
              ))}
              <DropdownMenuSeparator />

              <DropdownMenuItem>
                <Link href="/filters" className="p-1 w-full">
                  View all Filters
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/filters/create" className="p-1 w-full">
                  Create Filter
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Dashboard */}
          <DropdownMenu className="hidden lg:flex">
            <DropdownMenuTrigger className="text-md px-2 border-none focus:outline-none flex items-center gap-0.5 hover:bg-gray-300 rounded-sm [&[data-state=open]]:bg-blue-100 [&[data-state=open]]:text-blue-700 font-[500]">
              Dashboard <MdKeyboardArrowDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel className="uppercase text-xs">recent</DropdownMenuLabel>
              {recentDashboard.map(sf => (
                <DropdownMenuItem key={sf.title} className="pe-5">
                  <Link href="#" className="flex gap-3 items-center">
                    <BsWindowSidebar className="h-4 w-4" />
                    <span>{sf.title}</span>
                  </Link>
                </DropdownMenuItem>
              ))}
              <DropdownMenuSeparator />

              <DropdownMenuItem>
                <Link href="/filters" className="p-1 w-full">
                  View all Filters
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/filters/create" className="p-1 w-full">
                  Create Filter
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Teams */}
          <DropdownMenu className="hidden lg:flex">
            <DropdownMenuTrigger className="text-md px-2 border-none focus:outline-none flex items-center gap-0.5 hover:bg-gray-300 rounded-sm [&[data-state=open]]:bg-blue-100 [&[data-state=open]]:text-blue-700 font-[500]">
              Teams <MdKeyboardArrowDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel className="uppercase text-xs">your collabarators</DropdownMenuLabel>
              {teamMemebers.map(tm => (
                <DropdownMenuItem key={tm.title} className="pe-5">
                  <Link href="#" className="flex gap-3 items-center">
                    <Avatar className="w-8 h-8">
                      <AvatarImage src={`https://i2.wp.com/avatar-management--avatars.us-west-2.prod.public.atl-paas.net/initials/${tm.short}-${tm.id % 6}.png?ssl=1`} />
                      <AvatarFallback className="bg-gray-300 w-8 h-8">{tm.short}</AvatarFallback>
                    </Avatar>
                    <span>{tm.title}</span>
                  </Link>
                </DropdownMenuItem>
              ))}
              <DropdownMenuSeparator />

              <DropdownMenuItem>
                <Link href="/filters" className="p-1 w-full flex items-center gap-1">
                  <MdAdd className="h-4" /> Invite people to jira
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/filters" className="p-1 w-full flex items-center gap-1">
                  <FaPeopleGroup className="h-4" />
                  Connect to team
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link href="/filters" className="p-1 w-full flex items-center gap-1">
                  Search people and teams
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button className="bg-blue-700 hover:bg-blue-500">
            <MdAdd className="h-4" /> Create
          </Button>
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            <Avatar className="w-8 h-8">
              <AvatarImage
                src={`https://i2.wp.com/avatar-management--avatars.us-west-2.prod.public.atl-paas.net/initials/${teamMemebers[0].short}-${teamMemebers[0].id % 6}.png?ssl=1`}
              />
              <AvatarFallback className="bg-gray-300 w-8 h-8">{teamMemebers[0].short}</AvatarFallback>
            </Avatar>
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
