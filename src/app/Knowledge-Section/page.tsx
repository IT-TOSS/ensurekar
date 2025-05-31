'use client';
import { useEffect, useState } from 'react';
import axios from 'axios';

type Product = {
  id: number;
  name: string;
  price: string | number;
  attributes: { name: string }[];
};

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          'https://edueye.co.in/ensurekar/wp-json/wc/v3/products?consumer_key=ck_1a163a1d803b2ed9c2c501a232692bd5ee3c2619&consumer_secret=cs_054aea9c8f7ddeef9b7ceb5fc45c56cd422ba4a2',
        );

        const filtered = response.data.filter((product: Product) =>
          product.attributes.some(attr => attr.name.toLowerCase() === 'category')
        );
        console.log('Filtered Products:', filtered);

        setProducts(filtered);
      } catch (error: any) {
        console.error('Error fetching products:', error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <p>Loading products...</p>;

  return (
    <div>
      <h1>Products with "category" Attribute</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name} — ₹{product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
