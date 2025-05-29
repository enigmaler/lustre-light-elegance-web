
export interface Product {
  id: string;
  name: string;
  price: number;
  category: 'rings' | 'necklaces' | 'earrings' | 'bracelets';
  image: string;
  images: string[];
  description: string;
  features: string[];
  variants?: string[];
  isBestSeller?: boolean;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Eternal Grace Diamond Ring',
    price: 2499,
    category: 'rings',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=500&h=500&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=500&h=500&fit=crop',
      'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=500&h=500&fit=crop'
    ],
    description: 'A stunning solitaire diamond ring crafted in 18k gold, featuring a brilliant-cut diamond that captures light beautifully. This timeless piece represents eternal love and commitment.',
    features: ['18k Gold Band', '1 Carat Diamond', 'Brilliant Cut', 'Conflict-Free Diamond', 'Lifetime Warranty'],
    variants: ['Size 5', 'Size 6', 'Size 7', 'Size 8', 'Size 9'],
    isBestSeller: true
  },
  {
    id: '2',
    name: 'Celestial Pearl Necklace',
    price: 1299,
    category: 'necklaces',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=500&h=500&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=500&h=500&fit=crop',
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500&h=500&fit=crop'
    ],
    description: 'Elegantly strung Akoya pearls with a delicate gold clasp. Each pearl is hand-selected for its lustrous quality and perfect spherical shape.',
    features: ['Akoya Pearls', '14k Gold Clasp', '18-inch Length', 'Hand-Strung', 'Silk Thread'],
    isBestSeller: true
  },
  {
    id: '3',
    name: 'Aurora Drop Earrings',
    price: 899,
    category: 'earrings',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500&h=500&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500&h=500&fit=crop',
      'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=500&h=500&fit=crop'
    ],
    description: 'Delicate drop earrings featuring rose gold and sparkling diamonds. The elongated design adds elegance to any outfit.',
    features: ['Rose Gold', 'Diamond Accents', 'Butterfly Backs', 'Hypoallergenic', '2-inch Drop'],
    isBestSeller: true
  },
  {
    id: '4',
    name: 'Infinity Love Bracelet',
    price: 699,
    category: 'bracelets',
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=500&h=500&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=500&h=500&fit=crop',
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500&h=500&fit=crop'
    ],
    description: 'A delicate chain bracelet featuring an infinity symbol adorned with tiny diamonds. Symbolizes eternal love and connection.',
    features: ['14k White Gold', 'Diamond Pavé', 'Adjustable Length', 'Secure Clasp', 'Gift Packaging'],
    isBestSeller: true
  },
  {
    id: '5',
    name: 'Victorian Rose Ring',
    price: 1899,
    category: 'rings',
    image: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=500&h=500&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=500&h=500&fit=crop',
      'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=500&h=500&fit=crop'
    ],
    description: 'Inspired by Victorian elegance, this rose-shaped ring features intricate gold work and a central ruby surrounded by diamonds.',
    features: ['18k Yellow Gold', 'Natural Ruby', 'Diamond Halo', 'Hand-Engraved Details', 'Vintage Design'],
    variants: ['Size 5', 'Size 6', 'Size 7', 'Size 8', 'Size 9']
  },
  {
    id: '6',
    name: 'Ocean Depths Sapphire Necklace',
    price: 3299,
    category: 'necklaces',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500&h=500&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500&h=500&fit=crop',
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=500&h=500&fit=crop'
    ],
    description: 'A magnificent sapphire pendant necklace featuring a 3-carat Ceylon sapphire surrounded by brilliant diamonds on a platinum chain.',
    features: ['Platinum Chain', '3-Carat Ceylon Sapphire', 'Diamond Halo', '16-inch Length', 'Certificate of Authenticity']
  }
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  if (category === 'all') return products;
  return products.filter(product => product.category === category);
};

export const getBestSellers = (): Product[] => {
  return products.filter(product => product.isBestSeller);
};
