import React from "react";
import "../styles/Clients.css";

const clients = ["FAB", "KPIT", "TATA", "BMW", "SONY", "HUGGIES", "ETON", "Star", "P&G"];

const Clients = () => {
  return (
    <section className="clients">
      {clients.map((client, idx) => (
        <div key={idx} className="client-logo">{client}</div>
      ))}
    </section>
  );
};

export default Clients;
