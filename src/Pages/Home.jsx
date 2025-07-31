import React from 'react';
import { Link } from 'react-router-dom';


const categories = [
  {
    name: 'Tygkassar',
    image: "/bilder/nyckelringar-med-bg/round-white.jpg", 
    slug: 'tygkassa',
  },
  {
    name: 'Nyckelring',
    image: '/bilder/nyckelringar-med-bg/round-white.jpg',
    slug: 'nyckelring',
  },
  {
    name: 'Välkomstskylter',
    image: '/bilder/skyltar/welcome-white.jpg',
    slug: 'valkomstskylt',
  },
  {
    name: 'Baby',
    image: '/bilder/bodys/henry-body.jpg',
    slug: 'baby',
  },
  {
    name: 'Barn',
    image: '/bilder/bodys/sample.jpg',
    slug: 'barn',
  },
  {
    name: 'Dekaler',
    image: '/bilder/.../sample.jpg',
    slug: 'bekaler',
  },
  {
    name: 'Barntavla',
    image: '/bilder/tavla/blå-tavla.jpg',
    slug: 'barntavla',
  },
  {
    name: 'Namnmössa',
    image: '/bilder/.../sample.jpg',
    slug: 'namnmossa',
  },
];

const Home = () => {
  return (
    <div className="py-8 px-4">
      <h1 className="text-3xl font-bold mt-10 text-center mb-10">Utforska Våra Kategorier</h1>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
      {categories.map((cat) => (
        <Link
          to={`/produkter/${cat.slug}`}
          key={cat.slug}
          className="relative group overflow-hidden rounded-lg shadow hover:shadow-xl transition"
        >
          <img
            src={cat.image}
            alt={cat.name}
            className="w-full h-60 object-cover transform group-hover:scale-105 transition duration-300"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-40 transition flex items-center justify-center">
            <h2 className="text-white text-xl font-bold text-center px-2">
              {cat.name}
            </h2>
          </div>
        </Link>
      ))}
    </div>
    </div>
  );
};


export default Home;
