import { IProduct } from '@/types/product.interface';
import { ChangeEvent, useState, useMemo } from 'react';
import { mockDataProducts as products } from '@/shared/data/mockDataProducts';

const categories = Array.from(new Set(products.map((item) => item.category)));

export const useProducts = () => {
  const [activeCategoryId, setActiveCategoryId] = useState<string | 'all'>('all');
  const [sortOption, setSortOption] = useState<string>('low');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const filteredProducts = useMemo(() => {
    const filtered = [...products].filter((product) => {
      const matchesCategory = activeCategoryId === 'all' || product.category === activeCategoryId;
      const matchesSearch = !searchTerm || product.name.toLowerCase().includes(searchTerm);
  
      return matchesCategory && matchesSearch;
    });
  
    return filtered.sort((a, b) => {
      if (sortOption === 'high') {
        return b.price - a.price;
      } else if (sortOption === 'low') {
        return a.price - b.price;
      } else {
        return b.rating - a.rating;
      }
    });
  }, [activeCategoryId, searchTerm, products, sortOption]);
  return {
    activeCategoryId,
    setActiveCategoryId,
    sortOption,
    setSortOption,
    searchTerm,
    handleSearch,
    categories,
    filteredProducts,
  };
};
