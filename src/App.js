import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar.js';
import KanbanColumn from './components/KanbanColumn.js';
import './App.css';

function App() {
  const [data, setData] = useState({ tickets: [], users: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const API_URL = 'https://api.quicksell.co/v1/internal/frontend-assignment';

    fetch(API_URL)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <Navbar />
      <div className="kanban-board">
        <div className="kanban-column">
          <KanbanColumn title="Backlog" tickets={data.tickets.filter(ticket => ticket.status === 'Backlog')} users={data.users} />
        </div>
        <div className="kanban-column">
          <KanbanColumn title="To Do" tickets={data.tickets.filter(ticket => ticket.status === 'Todo')} users={data.users} />
        </div>
        <div className="kanban-column">
          <KanbanColumn title="In Progress" tickets={data.tickets.filter(ticket => ticket.status === 'In progress')} users={data.users} />
        </div>
        <div className="kanban-column">
          <KanbanColumn title="Done" tickets={data.tickets.filter(ticket => ticket.status === 'Done')} users={data.users} />
        </div>
        <div className="kanban-column">
          <KanbanColumn title="Cancelled" tickets={data.tickets.filter(ticket => ticket.status === 'Cancelled')} users={data.users} />
        </div>
      </div>
    </div>
  );
}

export default App;