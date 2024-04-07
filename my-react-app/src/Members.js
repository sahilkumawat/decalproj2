import React from 'react';
import MemberList from './MemberList';
import membersData from './MembersData';

function Members() {
  const handleBackHome = () => {
    window.location.href = '/'; // Navigate back to the home page
  };

  return (
    <div className="members-container">
      <button className="back-button" onClick={handleBackHome}>Back to Home</button>
      <h1 className="page-title">Our Members</h1>
      <MemberList members={membersData} />
    </div>
  );
}

export default Members;
