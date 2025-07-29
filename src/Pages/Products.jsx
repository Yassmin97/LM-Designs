import produkter from '../Data/produkter'
import ProductCard from '../Components/ProductCard'

const Products =() => (
    <div className='p-6'>
        <h2 className='text-2xl font-bold mb-4'>Alla produkter</h2>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            {produkter.flatMap(kategori =>
                kategori.subcategories.map((product, index) => (
                  <ProductCard key={`${kategori.name}-${index}`} product={product} />
            ))
        )}
        </div>
    </div>
);

export default Products;