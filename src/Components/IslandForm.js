export default function IslandForm({ island }) {
  return (
    <div className="form">
      <h2>{island.name}</h2>
      <img src={island.img} alt={island.name} />
      <h3>Book a trip to {island.name} island</h3>
      <input className="fullName" placeholder="Type Full Name" />
      <input
        className="pnone"
        type="tel"
        id="phone"
        pattern="[0-9]{8}"
        placeholder="Type Phone Number"
      />
      <button className="book" onClick={() => {}}>
        Book for today!
      </button>
    </div>
  );
}
