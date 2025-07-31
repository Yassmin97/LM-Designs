import {Link} from 'react-router-dom';
import { useContext, useState } from 'react';
import {CartContext} from '../Context/CartContext';
import { FaShoppingCart, FaBars, FaSearch } from 'react-icons/fa';
import CategoryMenu from './CategoryMenu';



const Header = () => {
    const {cartItems} = useContext(CartContext);
    const cartCount = cartItems.length;
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (e) => {
        e.preventDefault();
        console.log("Söker efter:", searchTerm);
        //lägg sök logik eller navigation
    };

    return (
        <header className='w-full bg-white shadow-md sticky top-8 z-50'>
            <div className='flex items-center justify-between px-4 py-3 md:px-8'>
                <Link to="/" className='text-xl font-bold text-red-800'>
                <img src="/bilder/logo.jpg" alt="LM Designs"  className='h-20'/>
                </Link>

                <form onSubmit={handleSearch} className='hidden md:flex flex-1 mx-4 max-w-md'>
                    <input type="text" placeholder='Sök...' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className='flex-1 border border-gray-300 rounded-1 px-4 py-2' />
                    <button type='submit' className='bg-red-800 text-white px-4 rounded-r'>
                        <FaSearch />
                    </button>
                </form>

                {/*ikoner*/}
                <div className='flex items-center space-x-4'>
                    <Link to="/Checkout" className='relative text-black text-xl'>
                    <FaShoppingCart />
                    {cartCount > 0 && (
                         <span className='absolute -top-2 -right-2 bg-red-800 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center'>
                        {cartCount}
                    </span>
                )}
                    </Link>

                 {/* Mobilmeny knapp */}
                 <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className='md:hidden text-xl'>
                    <FaBars />
                 </button>

                </div>
            </div>

            {/* Sökfält (mobil) */}
            <form onSubmit={handleSearch} className='flex md:hidden px-4 pb-3'>
                <input type="text" placeholder='Sök...' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className='flex-1 border border-gray-300 rounded-1 px-4 py-2' />
                <button type='submit' className='bg-red-800 text-white px-4 rounded-r'>
                    <FaSearch />
                </button>
            </form>

        {/* Kategorimeny (desktop) */}
      <div className="hidden md:block">
        <CategoryMenu />
      </div>

      {/* Kategorimeny (mobil) */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <CategoryMenu />
        </div>
      )}
        </header>
    )

}
export default Header;