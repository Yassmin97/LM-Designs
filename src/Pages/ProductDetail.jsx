import { useParams } from 'react-router-dom';
import { Products } from '../Data/Products';
import ProductForm from '../components/ProductForm';

const ProductDetail = () => {
  const { slug } = useParams();
  const product = Products.find(p => p.slug === slug);

  if (!product) return <div className="p-6">Produkten hittades inte.</div>;

  return (
    <div className="p-6 grid md:grid-cols-2 gap-8">
      <img src={Product.image} alt={Product.name} className="rounded-xl shadow" />
      <div>
        <h2 className="text-2xl font-bold mb-2">{Product.name}</h2>
        <p className="mb-4 text-gray-700">{Product.description}</p>
        <p className="mb-4 text-red-600 font-semibold text-lg">{Product.price} kr</p>
        <ProductForm Product={Product} />
      </div>
    </div>
  );
};

export default ProductDetail;