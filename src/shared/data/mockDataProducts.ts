import { IProduct } from '@/types/product.interface';
import headphoneImage from '../../assets/images/headphone.webp';
import phoneImage from '../../assets/images/phone.png';
import cameraImage from '../../assets/images/camera.png';
import laptopImage from '../../assets/images/laptop.png';
import keyboardImage from '../../assets/images/keyboard.webp';
import tvImage from '../../assets/images/tv.png';
import airheadphoneImage from '../../assets/images/air-headphone.webp';

export const mockDataProducts: IProduct[] = [
  {
    id: '1',
    name: ' Wireless  Headphones',
    image: headphoneImage,
    description:
      'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
    brand: 'Beats',
    category: 'Accessory',
    price: 89.99,
    rating: 4.5,
  },
  {
    id: '2',
    name: 'iPhone 13 Pro 256GB',
    image: phoneImage,
    description:
      'Introducing the iPhone 13 Pro. A transformative triple-camera system that adds tons of capability without complexity. An unprecedented leap in battery life',
    brand: 'Apple',
    category: 'Phones',
    price: 599.99,
    rating: 5,
  },
  {
    id: '3',
    name: 'Cannon EOS 80D DSLR',
    image: cameraImage,
    description:
      'Characterized by versatile imaging specs, the Canon EOS 80D further clarifies itself using a pair of robust focusing systems and an intuitive design',
    brand: 'Cannon',
    category: 'Cameras',
    price: 929.99,
    rating: 5,
  },
  {
    id: '4',
    name: 'Laptop Pro White Version',
    image: laptopImage,
    description:
      'The ultimate home entertainment center starts with Laptop. Whether you are into gaming, HD movies, television, music',
    brand: 'Sony',
    category: 'Laptops',
    price: 399.99,
    rating: 4,
  },
  {
    id: '5',
    name: 'Logitech G-Series',
    image: keyboardImage,
    description: 'Get a better handle on your games with this Logitech  gaming keyboard.',
    brand: 'Logitech',
    category: 'Accessory',
    price: 49.99,
    rating: 1,
  },
  {
    id: '6',
    name: 'Tv  3rd Generation',
    image: tvImage,
    description: 'Best IPTV Service. No Freeze',
    brand: 'Amazon',
    category: 'TV',
    price: 89.99,
    rating: 3,
  },
  {
    id: '7',
    name: 'Airpods 2 Headphones',
    image: airheadphoneImage,
    description:
      'Airpods 2 Headphone High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
    brand: 'Apple',
    category: 'Accessory',
    price: 129.99,
    rating: 2,
  },
];
