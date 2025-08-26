export default function GuestList({ guests, onSelectGuest }) {
  return (
    <div className="guest-list">
      {guests.map((guest) => (
        <button key={guest.id} onClick={() => onSelectGuest(guest.id)}>
          {guest.name} ({guest.email})
        </button>
      ))}
    </div>
  );
}
