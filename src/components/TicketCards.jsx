import React, { use } from "react";
import TicketCard from "./TicketCard";

const TicketCards = ({ fetchTickets, setTaskStatus, taskStatus }) => {
  const Tickets = use(fetchTickets);

  return (
    <section className="px-4 lg:px-0">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Customer Tickets
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-4">
        {/* Card */}
        {Tickets.map((t, idx) => (
          <TicketCard
            taskStatus={taskStatus}
            setTaskStatus={setTaskStatus}
            key={idx}
            t={t}
          />
        ))}
      </div>
    </section>
  );
};

export default TicketCards;
