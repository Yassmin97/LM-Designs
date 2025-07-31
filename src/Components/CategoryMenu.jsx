import { useState } from 'react';
import { Link } from 'react-router-dom';
import produkter from '../Data/produkter'; 

const CategoryMenu = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleDropDown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <nav className="bg-red-800 text-white">
      <ul className="flex justify-center space-x-6 px-4 py-3">
        {produkter.map((category, index) => (
          <li key={category.name} className="relative">
            <button
              onClick={() => toggleDropDown(index)}
              className="flex items-center gap-1 focus:outline-none"
            >
              {category.name} {category.subcategories.length > 0 && <span>▼</span>}
            </button>

            {openIndex === index && (
              <ul className="absolute left-0 mt-2 bg-white text-black rounded shadow z-10 min-w-[180px]">
                {category.subcategories.map((sub) => (
                  <li key={sub.name}>
                    <Link
                      to={`/produkter/${sub.name}`}
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      {sub.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default CategoryMenu;
