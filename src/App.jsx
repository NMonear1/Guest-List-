import { useState } from "react";
import useGuests from "./components/useGuests";
import GuestList from "./components/GuestList";
import GuestDetails from "./components/GuestDetails";
import useGuestDetails from "./components/useGuestDetails";

export default function App() {
  const { guests, loading } = useGuests(
    "https://fsa-crud-2aa9294fe819.herokuapp.com/api/2505-ftb-ct-web-pt/guests"
  );
  const [selectedGuestId, setSelectedGuestId] = useState(null);
  const guest = useGuestDetails(selectedGuestId);

  if (loading) return <p>Loading guests...</p>;

  return (
    <div>
      <h1>Guest List</h1>
      {selectedGuestId && guest ? (
        <GuestDetails guest={guest} onBack={() => setSelectedGuestId(null)} />
      ) : (
        <GuestList guests={guests} onSelectGuest={setSelectedGuestId} />
      )}
    </div>
  );
}
