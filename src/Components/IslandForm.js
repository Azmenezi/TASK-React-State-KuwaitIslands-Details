import { useState } from "react";

export default function IslandForm({ island }) {
  const [phone, setPhone] = useState(0);
  const [name, setName] = useState("");

  const handlePhone = (e) => {
    setPhone(e.target.value);
  };
  const handleName = (e) => {
    setName(e.target.value);
  };
  return (
    <div className="form">
      <h2>{island.name}</h2>
      <img src={island.img} alt={island.name} />
      <h3>Book a trip to {island.name} island</h3>
      <input
        className="fullName"
        placeholder="Type Full Name"
        onChange={(e) => handleName(e)}
      />
      <input
        className="pnone"
        type="tel"
        pattern="[0-9]{8}"
        placeholder="Type Phone Number"
        onChange={(e) => handlePhone(e)}
      />
      <button
        className="book"
        onClick={() => {
          if (
            window.confirm(
              `are you sure you want to book to ${island.name}\nwith the Name: ${name} and phone Number: ${phone}`
            ) === true
          );
        }}
      >
        Book for today!
      </button>
    </div>
  );
}
