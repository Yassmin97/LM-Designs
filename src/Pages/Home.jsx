import CategoryCard from '../components/CategoryCard';

const categories = [
  "Tygkassar", "Nyckelring", "Välkomstskyltar", "Baby",
  "Barn", "Dekaler", "Barntavla", "Namnmössa"
];

const Home = () => (
  <section className="p-6">
    <h2 className="text-2xl font-bold mb-4">Välj en kategori</h2>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {categories.map(cat => (
        <CategoryCard key={cat} name={cat} />
      ))}
    </div>
  </section>
);

export default Home;
