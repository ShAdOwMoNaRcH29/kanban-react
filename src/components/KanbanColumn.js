import React from 'react';
import Ticket from './Ticket.js';
import './KanbanColumn.css';

function KanbanColumn({ title, tickets, users }) {
  return (
    <div className="kanban-column">
      <h2>{title}</h2>
      {tickets.map(ticket => (
        <Ticket key={ticket.id} ticket={ticket} users={users} />
      ))}
    </div>
  );
}

export default KanbanColumn;