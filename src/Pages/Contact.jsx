const Contact = () => (
  <div className="p-6 max-w-xl mx-auto">
    <h2 className="text-2xl font-bold mb-4">Kontakta oss</h2>
    <p className="mb-2">Företagsnamn: TryckShoppen</p>
    <p className="mb-2">E-post: kontakt@tryckshoppen.se</p>
    <p className="mb-4">Telefon: 070-123 45 67</p>

    <form className="space-y-4">
      <input type="text" placeholder="Ditt namn" className="w-full border p-2 rounded" required />
      <input type="email" placeholder="Din e-post" className="w-full border p-2 rounded" required />
      <textarea placeholder="Ditt meddelande" rows="4" className="w-full border p-2 rounded" required></textarea>
      <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
        Skicka
      </button>
    </form>
  </div>
);

export default Contact;