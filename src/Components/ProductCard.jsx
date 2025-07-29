import {Link} from 'react-router-dom'

const ProductCard = ({product}) => (
    <Link to={`/produkt/${product.slug}`} className="block border rounded-xl p-4 shadow hover:shadow-md">
        <img src={product.image} alt={product.name} className='mb-2 rounded' />
        <h3 className='font-semibold text-lg'>{product.name}</h3>
        <p className='text-red-600 font-semibold'>{product.price} kr</p>
    </Link>
);

export default ProductCard;