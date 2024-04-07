import React from 'react';
import MemberCard from './MemberCard';

function MemberList({ members }) {
  return (
    <div className="member-list">
      {members.map((member, index) => (
        <MemberCard key={index} member={member} />
      ))}
    </div>
  );
}

export default MemberList;
