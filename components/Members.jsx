'use client';
import React from 'react';
import { Avatar, AvatarFallback } from './ui/avatar';
import { AvatarImage } from '@radix-ui/react-avatar';

function Members({ members }) {
  return (
    <div className="flex items-center">
      {members.map(member => (
        <Avatar key={member.id}>
          <AvatarImage
            src={`https://i2.wp.com/avatar-management--avatars.us-west-2.prod.public.atl-paas.net/initials/${member.short}-${member.id % 6}.png?ssl=1`}
          />
          <AvatarFallback>JS</AvatarFallback>
        </Avatar>
      ))}
    </div>
  );
}

export default Members;
