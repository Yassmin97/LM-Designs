import { Link } from 'react-router-dom';

const CategoryCard = ({ name }) => (
  <Link to={`/produkter/${name}`} className="bg-red-100 hover:bg-red-200 p-4 rounded-2xl shadow text-center">
    <span className="text-lg font-medium text-red-800">{name}</span>
  </Link>
);

export default CategoryCard;