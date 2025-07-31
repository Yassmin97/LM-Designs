import {useParams} from 'react-router-dom';
import produkter from '../Data/produkter';
import ProductCard from '../Components/ProductCard';

const Category = () => {
    const { kategori } = useParams();
    const filtered = produkter.filter(p => p.category === kategori);

    return(

    <div className='p-6'>
        <h2 className='text-2xl  font-bold mb-4'>{kategori}</h2>
        {filtered.length === 0 ? (
            <p>Inga produkter hittades i denna kategori.</p>
        ):(
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                {filtered.map(p => (
                    <ProductCard key={p.id} product={p} />
                ))}
                </div>
        )}
    </div>
    )
}
export default Category;