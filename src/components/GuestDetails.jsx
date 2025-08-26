export default function GuestDetails({ guest, onBack }) {
  return (
    <div className="guest-details">
      <h2>{guest.name}</h2>
      <p>
        <strong>Email:</strong> {guest.email}
      </p>
      <p>
        <strong>Phone:</strong> {guest.phone || "N/A"}
      </p>
      <p>
        <strong>Bio:</strong> {guest.bio || "No bio provided"}
      </p>
      <p>
        <strong>Job:</strong> {guest.job || "N/A"}
      </p>
      <button onClick={onBack}>Back</button>
    </div>
  );
}
