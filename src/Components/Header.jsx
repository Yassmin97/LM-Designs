import {Link} from 'react-router-dom';

const Header = () => (
    <header className='bg-red-600 text-white p-4 flex justify-between items-center'>
        <h1 className='text-x1 font-bold'>LM Designs</h1>
        <nav className='space-x-4'>
            <Link to="/" className="hover:text-red-400">Hem</Link>
            <Link to="/produkter" className="hover:text-red-400">Produkter</Link>
            <Link to="/kontakt" className="hover:text-red-400">Kontakta oss</Link>
            <Link to="/kassa" className="hover:text-red-400">Kassa</Link>
        </nav>
    </header>
);
export default Header;