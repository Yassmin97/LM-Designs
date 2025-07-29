import { useContext, useState } from 'react';
import { CartContext } from '../Context/CartContext';

const ProductForm = ({ product }) => {
  const [customText, setCustomText] = useState('');
  const { addToCart } = useContext(CartContext);

  const handleAdd = () => {
    addToCart({ ...product, customText });
  };

  return (
    <div className="space-y-4">
      <input
        type="text"
        placeholder="Din personliga text"
        value={customText}
        onChange={e => setCustomText(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded"
      />
      <button
        onClick={handleAdd}
        className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
      >
        Lägg i kundvagn
      </button>
    </div>
  );
};

export default ProductForm;