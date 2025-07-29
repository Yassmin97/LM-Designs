import { useContext, useState } from 'react';
import { CartContext } from '../Context/CartContext';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const { cart, clearCart } = useContext(CartContext);
  const navigate = useNavigate();
  const [form, setForm] = useState({ namn: '', email: '', telefon: '' });

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const handleSubmit = (e) => {
    e.preventDefault();
    clearCart();
    navigate('/tack');
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Din beställning</h2>

      {cart.length === 0 ? (
        <p>Kundvagnen är tom.</p>
      ) : (
        <div>
          <ul className="mb-6 space-y-2">
            {cart.map((item, index) => (
              <li key={index} className="border p-2 rounded">
                <strong>{item.name}</strong>
                {item.customText && <p>Text: {item.customText}</p>}
                <p>{item.price} kr</p>
              </li>
            ))}
          </ul>

          <p className="font-semibold mb-6">Totalt: {total} kr</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Namn"
              value={form.namn}
              onChange={(e) => setForm({ ...form, namn: e.target.value })}
              className="w-full border p-2 rounded"
              required
            />
            <input
              type="email"
              placeholder="E-post"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full border p-2 rounded"
              required
            />
            <input
              type="tel"
              placeholder="Telefonnummer"
              value={form.telefon}
              onChange={(e) => setForm({ ...form, telefon: e.target.value })}
              className="w-full border p-2 rounded"
              required
            />

            <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4">
              <p><strong>Swish:</strong> 123 456 7890</p>
              <p>Ange namn som meddelande vid betalning.</p>
              <p>Totalt att betala: <strong>{total} kr</strong></p>
            </div>

            <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
              Slutför beställning
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Checkout;