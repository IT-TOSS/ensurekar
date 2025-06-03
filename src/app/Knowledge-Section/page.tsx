// 'use client';
// import { useEffect, useState } from 'react';
// import axios from 'axios';

// type MetaData = {
//   id: number;
//   key: string;
//   value: string;
// };

// type Category = {
//   id: number;
//   name: string;
// };

// type Product = {
//   id: number;
//   name: string;
//   price: string | number;
//   description: string;
//   short_description: string;
//   permalink: string;
//   categories: Category[];
//   meta_data: MetaData[];
// };

// export default function ProductsPage() {
//   const [product, setProduct] = useState<Product | null>(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         const response = await axios.get(
//           'https://edueye.co.in/ensurekar/wp-json/wc/v3/products?consumer_key=ck_1a163a1d803b2ed9c2c501a232692bd5ee3c2619&consumer_secret=cs_054aea9c8f7ddeef9b7ceb5fc45c56cd422ba4a2'
//         );
//         const firstProduct = response.data[0];
//         setProduct(firstProduct);
//       } catch (error: any) {
//         console.error('Error fetching product:', error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProduct();
//   }, []);

//   const getMetaValue = (meta_data: MetaData[], key: string): string | undefined => {
//     return meta_data.find(meta => meta.key.trim().toLowerCase() === key.toLowerCase())?.value;
//   };

//   if (loading) return <p>Loading product...</p>;
//   if (!product) return <p>No product found.</p>;

//   const meta = product.meta_data;

//   return (
//     <div className="p-6 max-w-3xl mx-auto">
//       <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
//       <p className="text-gray-600 mb-2" dangerouslySetInnerHTML={{ __html: product.short_description }} />
//       <p className="mb-4">Categories: {product.categories.map(c => c.name).join(', ')}</p>
//       <a href={product.permalink} className="text-blue-600 underline mb-4 block" target="_blank">
//         View Product Page
//       </a>
//       <div className="bg-white p-4 rounded shadow">
//         <h2 className="text-xl font-semibold mb-2">Plan Details</h2>
//         <p><strong>Plan Name:</strong> {getMetaValue(meta, 'planName')}</p>
//         <p><strong>Price:</strong> ₹{getMetaValue(meta, 'price')}</p>
//         <p><strong>Discount:</strong> {getMetaValue(meta, 'discount')}</p>
//         <p><strong>After Discount:</strong> ₹{getMetaValue(meta, 'afterDiscount')}</p>
//         <p><strong>Suggestion:</strong> {getMetaValue(meta, 'suggestionText')}</p>
//         <p><strong>Happy Text:</strong> {getMetaValue(meta, 'happyText')}</p>

//         {/* Offer Section */}
//         {getMetaValue(meta, 'offerIsActive') === '1' && (
//           <div className="bg-yellow-100 p-3 rounded mt-4">
//             <p><strong>{getMetaValue(meta, 'offerHeading')}</strong></p>
//             <p>{getMetaValue(meta, 'offerSubHeading')}</p>
//             <p>{getMetaValue(meta, 'offerDescription')}</p>
//             <a
//               href={getMetaValue(meta, 'offerKnowMoreLink')}
//               className="text-blue-600 underline"
//               target="_blank"
//             >
//               {getMetaValue(meta, 'offerKnowMoreText')}
//             </a>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }


//-------------------

'use client'

import { useState } from 'react'

type ProductFormProps = {
  onSubmit?: (product: any) => void;
};

export default function ProductForm({ onSubmit }: ProductFormProps) {
  const [formData, setFormData] = useState({
    name: 'Normal',
    type: 'simple',
    regular_price: '599',
    sale_price: '499',
    description: 'Perfect for initiating company registration...',
    short_description: 'Expert assisted process, Company name reservation, Digital Signature, etc.',
    meta_data: {
      plan_id: '1',
      later_paid_text: 'Govt. fees will be as per this website...',
      offer_heading: 'offer',
      offer_subHeading: 'Unlock partner benefits Post',
      offer_description: 'Post company incorporation worth Rs 4 lakhs',
      offer_percentage: '16.69%',
      split_payment_enabled: false,
      split_payment_text: 'Split payment by 2 month with Zolvit Flex',
      recommended: true
    },
    features: [
      'Expert assisted process',
      'Your company name is reserved in just 2 - 4 days',
      'Digital Signature Certificate (DSC) in 4-7 Days',
      'SPICe+ form filing in 14 days*',
      'Incorporation Certificate in 14 - 21 days',
      'Company PAN and TAN',
      'DIN for directors',
      'MOA and AOA Certificate'
    ]
  })

  const handleChange = (e : any) => {
    const { name, value, type, checked } = e.target
    if (name.startsWith('meta_')) {
      const key = name.replace('meta_', '')
      setFormData((prev) => ({
        ...prev,
        meta_data: {
          ...prev.meta_data,
          [key]: type === 'checkbox' ? checked : value
        }
      }))
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value
      }))
    }
  }

  const handleSubmit = (e : any) => {
    e.preventDefault()
    const wooProduct = {
      name: formData.name,
      type: formData.type,
      regular_price: formData.regular_price,
      sale_price: formData.sale_price,
      description: formData.description,
      short_description: formData.short_description,
      images: [],
      meta_data: Object.entries(formData.meta_data).map(([key, value]) => ({ key, value })),
      attributes: [
        {
          name: 'Features',
          visible: true,
          variation: false,
          options: formData.features
        }
      ]
    }
    if (onSubmit) {
      onSubmit(wooProduct)
    } else {
      console.log('Submitting:', wooProduct)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 max-w-2xl mx-auto">
      <h2 className="text-xl font-bold">Create WooCommerce Product</h2>
      <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full p-2 border rounded" placeholder="Product Name" />
      <input type="text" name="regular_price" value={formData.regular_price} onChange={handleChange} className="w-full p-2 border rounded" placeholder="Regular Price" />
      <input type="text" name="sale_price" value={formData.sale_price} onChange={handleChange} className="w-full p-2 border rounded" placeholder="Sale Price" />
      <textarea name="description" value={formData.description} onChange={handleChange} className="w-full p-2 border rounded" placeholder="Description" rows={4} />
      <textarea name="short_description" value={formData.short_description} onChange={handleChange} className="w-full p-2 border rounded" placeholder="Short Description" rows={2} />

      <h3 className="font-semibold mt-4">Meta Data</h3>
      {Object.entries(formData.meta_data).map(([key, value]) => (
        <input
          key={key}
          type={typeof value === 'boolean' ? 'checkbox' : 'text'}
          name={`meta_${key}`}
          checked={typeof value === 'boolean' ? value : undefined}
          value={typeof value === 'boolean' ? undefined : value}
          onChange={handleChange}
          className="w-full p-2 border rounded mb-2"
          placeholder={key}
        />
      ))}

      <h3 className="font-semibold mt-4">Features</h3>
      <ul className="list-disc pl-5">
        {formData.features.map((feature, i) => (
          <li key={i}>{feature}</li>
        ))}
      </ul>

      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Submit Product
      </button>
    </form>
  )
}
