import React from 'react';
import './Ticket.css';

function Ticket({ ticket, users }) {
  const user = users.find(user => user.id === ticket.userId);

  return (
    <div className="ticket">
      <div className="ticket-header">
        <span className="user-id">{user ? user.name : "Unknown User"}</span>
        <img src={`https://ui-avatars.com/api/?name=${user ? user.name : 'User'}`} alt="User Avatar" className="profile-picture" />
      </div>
      <h3 className="ticket-title">{ticket.title}</h3>
      <button className="expand-button">Expand</button>
      <div className="ticket-tag">{ticket.tag.join(', ')}</div>
    </div>
  );
}

export default Ticket;