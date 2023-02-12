import { FC } from 'react';
import { Search } from '@/components/ui/search-field';
import { Tabs } from '@/components/ui/tabs';
import { Select } from '@/components/ui/select';
import { ProductsList } from '@/components/ui/product-list';
import { useProducts } from '../hooks/useProducts';

const options = [
  { value: 'low', label: 'Low to High' },
  { value: 'high', label: 'High to Low' },
  { value: 'popularity', label: 'Popularity' },
];

export const Products: FC = () => {
  const {
    activeCategoryId,
    setActiveCategoryId,
    sortOption,
    setSortOption,
    searchTerm,
    handleSearch,
    categories,
    filteredProducts,
  } = useProducts();

  return (
    <>
      <div className="flex justify-between items-center">
        <Search searchTerm={searchTerm} handleSearch={handleSearch} />
        <Select
          options={options}
          value={sortOption}
          onChange={(event) => setSortOption(event.target.value)}
        />
      </div>

      <Tabs
        items={categories.map((category) => ({
          id: category,
          category,
        }))}
        activeId={activeCategoryId}
        onClick={(id) => setActiveCategoryId(id)}
      />
      {filteredProducts.length > 0 ? (
        <ProductsList products={filteredProducts} />
      ) : (
        <h2 className="text-4xl mt-10 flex justify-center  h-screen">Products not found </h2>
      )}
    </>
  );
};
