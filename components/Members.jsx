'use client';
import React, { useState } from 'react';
import { Avatar, AvatarFallback } from './ui/avatar';
import { AvatarImage } from '@radix-ui/react-avatar';
import { Button } from './ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from './ui/dropdown-menu';
import { Checkbox } from './ui/checkbox';

function Members({ members, maxItems }) {
  const [assignees, setAssignees] = useState([]);
  const handleAssigneeFilter = id =>
    setAssignees(prev => {
      if (prev.includes(id)) return prev.filter(a => a !== id);
      return [...prev, id];
    });

  return (
    <div className="flex items-center">
      {members?.slice(0, maxItems).map((member, index) => (
        <div key={member.id} style={{ zIndex: 10 - index }} className="hover:!z-10">
          <Button
            onClick={() => handleAssigneeFilter(member.id)}
            customColors
            customPadding
            data-state={assignees.includes(member.id) ? 'selected' : 'not-selected'}
            className="-mx-1 flex aspect rounded-full w-11 p-[22px] h-11 border-[3px] border-transparent hover:bg-transparent bg-white  transition-all duration-75 hover:-mt-1.5 [&[data-state=selected]]:border-blue-700">
            <Avatar key={member.id}>
              <AvatarImage src={`https://i2.wp.com/avatar-management--avatars.us-west-2.prod.public.atl-paas.net/initials/${member.short}-${member.id % 6}.png?ssl=1`} />
              <AvatarFallback>{member?.short}</AvatarFallback>
            </Avatar>
          </Button>
        </div>
      ))}
      {members?.length - maxItems > 0 ? (
        <DropdownMenu className="hidden lg:flex">
          <DropdownMenuTrigger className="text-md rounded-full border-none focus:outline-none flex items-center gap-0.5">
            <Avatar>
              <AvatarFallback>+{members?.length - maxItems}</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <div className="flex flex-col gap-1 p-1 rounded-md">
              {members?.slice(maxItems)?.map(member => (
                <div
                  key={member.id}
                  data-state={assignees.includes(member.id) ? 'selected' : 'not-selected'}
                  className="flex gap-2 place-items-center hover:bg-blue-100 p-2 rounded-md cursor-pointer [&[data-state=selected]]:bg-blue-100 [&[data-state=selected]_svg]:bg-blue-500"
                  onClick={() => handleAssigneeFilter(member.id)}>
                  <Checkbox id={member.id} checked={assignees.includes(member.id)} />
                  <Avatar key={member.id} className="w-8 h-8">
                    <AvatarImage src={`https://i2.wp.com/avatar-management--avatars.us-west-2.prod.public.atl-paas.net/initials/${member.short}-${member.id % 6}.png?ssl=1`} />
                    <AvatarFallback>{member?.short}</AvatarFallback>
                  </Avatar>
                  {member.name}
                </div>
              ))}
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : null}
    </div>
  );
}

export default Members;
