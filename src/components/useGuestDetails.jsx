import { useState, useEffect } from "react";

export default function useGuestDetails(guestId) {
  const [guest, setGuest] = useState(null);

  useEffect(() => {
    if (!guestId) return;

    async function fetchGuest() {
      try {
        const res = await fetch(
          `https://fsa-crud-2aa9294fe819.herokuapp.com/api/2505-ftb-ct-web-pt/guests/${guestId}`
        );
        const data = await res.json();
        setGuest(data.data);
      } catch (err) {
        console.error("Error fetching guest details:", err);
      }
    }

    fetchGuest();
  }, [guestId]);

  return guest;
}
