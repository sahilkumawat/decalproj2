import React from 'react';
import './Member.css';


function MemberCard({ member }) {
  return (
    <div className="member-card">
      <img src={member.image} alt={member.name} className='member-image' /> 
      <h2 className=''>{member.name}</h2>
      <p><strong>Role:</strong> {member.role}</p>
      <p>{member.bio}</p>
    </div>
  );
}

export default MemberCard;
