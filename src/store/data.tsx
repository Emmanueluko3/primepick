// import { gql, useQuery } from "@apollo/client";
import Lgtv from "../assets/Lgtv.svg";
import Lgtv2 from "../assets/Lgtv2.svg";
import Lgtv3 from "../assets/Lgtv3.svg";
import Lgtv4 from "../assets/Lgtv4.svg";
import Lgtv5 from "../assets/Lgtv5.svg";
import Studiomic from "../assets/Studiomic.svg";
import Mic2 from "../assets/mic2.jpg";
import Mic3 from "../assets/mic3.webp";
import House1 from "../assets/House1.svg";
import House2 from "../assets/House2.svg";
import House3 from "../assets/House3.svg";
import House4 from "../assets/House4.svg";
import Iphone from "../assets/Iphone.avif";
import Iphone1 from "../assets/Iphone1.avif";
import Iphone2 from "../assets/Iphone2.avif";
import Iphone3 from "../assets/Iphone3.avif";
import Home from "../assets/Home.avif";
import Home1 from "../assets/Home1.avif";
import Home2 from "../assets/Home2.avif";
import Home3 from "../assets/Home3.avif";
import Camry from "../assets/Camry.avif";
import Camry1 from "../assets/Camry1.avif";
import Camry2 from "../assets/Camry2.avif";
import Camry3 from "../assets/Camry3.avif";
import BMW from "../assets/BMW.avif";
import BMW1 from "../assets/BMW1.avif";
import BMW2 from "../assets/BMW2.avif";
import BMW3 from "../assets/BMW3.avif";
import Benz from "../assets/Benz.avif";
import Benz1 from "../assets/Benz1.avif";
import Benz2 from "../assets/Benz2.avif";
import Benz3 from "../assets/Benz3.avif";
import Nissan from "../assets/Nissan.avif";
import Nissan1 from "../assets/Nissan1.avif";
import Nissan2 from "../assets/Nissan2.avif";
import Nissan3 from "../assets/Nissan3.avif";

export interface Product {
  id: string;
  imageUrls: string[];
  title: string;
  category: string;
  condition: string;
  price: number;
  location: string;
  phone: string;
  description: string;
  specification: string[];
}

// export function allProducts() {
//   const {
//     loading: categoryLoading,
//     error: categoryError,
//     data: productCategories,
//   } = useQuery(gql`
//     query ProductCategoryCollection {
//       productCategoryCollection(last: 100) {
//         edges {
//           node {
//             name
//             id
//           }
//         }
//         pageInfo {
//           hasPreviousPage
//           hasNextPage
//         }
//       }
//     }
//   `);
//   return productCategories;
// }

const products: Product[] = [
  {
    id: "0",
    imageUrls: [Lgtv, Lgtv2, Lgtv3, Lgtv4, Lgtv5],
    title: "LG Tv",
    category: "Electronics",
    condition: "New",
    price: 86000,
    location: "Lagos",
    phone: "+2347041982590",
    description: "Description of Product 1 and just some random text",
    specification: [
      "SKU: SA948EA29N628NAFAMZ",
      "Product Line: Kaylas Mart Electronics",
      " Model: Samsung 5300",
      "Size (L x W x H cm): 1145.0 x 659.0 x 136.0‎",
      "Weight (kg): 11",
      "Color: Black",
      "Main Material: N/A",
    ],
  },

  {
    id: "1",
    imageUrls: [Studiomic, Mic2, Mic3],
    title: "Studio Condenser Microphone",
    category: "Electronics",
    condition: "New",
    price: 20000,
    location: "Lagos",
    phone: "+2347041982590",
    description: "Description of Product 1 and just some random text",
    specification: [
      "SKU: SA948EA29N628NAFAMZ",
      "Product Line: Kaylas Mart Electronics",
      " Model: Samsung 5300",
      "Size (L x W x H cm): 1145.0 x 659.0 x 136.0‎",
      "Weight (kg): 11",
      "Color: Black",
      "Main Material: N/A",
    ],
  },

  {
    id: "2",
    imageUrls: [House1, House2, House3, House4],
    title: "4 bedroom duplex",
    category: "Home Goods",
    condition: "New",
    price: 2000000,
    location: "Lagos",
    phone: "+2347041982590",
    description: "Description of Product 1 and just some random text",
    specification: [
      "SKU: SA948EA29N628NAFAMZ",
      "Product Line: Kaylas Mart Electronics",
      " Model: Samsung 5300",
      "Size (L x W x H cm): 1145.0 x 659.0 x 136.0‎",
      "Weight (kg): 11",
      "Color: Black",
      "Main Material: N/A",
    ],
  },

  {
    id: "3",
    imageUrls: [Iphone, Iphone1, Iphone2, Iphone3],
    title: "Iphone 14",
    category: "Electronics",
    condition: "New",
    price: 800000,
    location: "Lagos",
    phone: "+2347041982590",
    description: "Description of Product 1 and just some random text",
    specification: [
      "SKU: SA948EA29N628NAFAMZ",
      "Product Line: Kaylas Mart Electronics",
      " Model: Samsung 5300",
      "Size (L x W x H cm): 1145.0 x 659.0 x 136.0‎",
      "Weight (kg): 11",
      "Color: Black",
      "Main Material: N/A",
    ],
  },

  {
    id: "4",
    imageUrls: [Home, Home1, Home2, Home3],
    title: "5 bedroom bongalow",
    category: "Home Goods",
    condition: "New",
    price: 8000000,
    location: "Lagos",
    phone: "+2347041982590",
    description: "Description of Product 1 and just some random text",
    specification: [
      "SKU: SA948EA29N628NAFAMZ",
      "Product Line: Kaylas Mart Electronics",
      " Model: Samsung 5300",
      "Size (L x W x H cm): 1145.0 x 659.0 x 136.0‎",
      "Weight (kg): 11",
      "Color: Black",
      "Main Material: N/A",
    ],
  },

  {
    id: "443",
    imageUrls: [Camry, Camry1, Camry2, Camry3],
    title: "2018 Toyota Camry",
    category: "Vehicle",
    condition: "New",
    price: 32000000,
    location: "Abuja",
    phone: "+2347041982590",
    description: "Description of Product 1 and just some random text",
    specification: [
      "SKU: SA948EA29N628NAFAMZ",
      "Product Line: Kaylas Mart Electronics",
      " Model: Samsung 5300",
      "Size (L x W x H cm): 1145.0 x 659.0 x 136.0‎",
      "Weight (kg): 11",
      "Color: Black",
      "Main Material: N/A",
    ],
  },
  {
    id: "4234543",
    imageUrls: [Nissan, Nissan1, Nissan2, Nissan3],
    title: "2018 Nissan GT",
    category: "Vehicle",
    condition: "New",
    price: 32000000,
    location: "Abuja",
    phone: "+2347041982590",
    description: "Description of Product 1 and just some random text",
    specification: [
      "SKU: SA948EA29N628NAFAMZ",
      "Product Line: Kaylas Mart Electronics",
      " Model: Samsung 5300",
      "Size (L x W x H cm): 1145.0 x 659.0 x 136.0‎",
      "Weight (kg): 11",
      "Color: Black",
      "Main Material: N/A",
    ],
  },
  {
    id: "555",
    imageUrls: [BMW, BMW1, BMW2, BMW3],
    title: "2018 BMW M6",
    category: "Vehicle",
    condition: "New",
    price: 67000000,
    location: "Abuja",
    phone: "+2347041982590",
    description: "Description of Product 1 and just some random text",
    specification: [
      "SKU: SA948EA29N628NAFAMZ",
      "Product Line: Kaylas Mart Electronics",
      " Model: Samsung 5300",
      "Size (L x W x H cm): 1145.0 x 659.0 x 136.0‎",
      "Weight (kg): 11",
      "Color: Black",
      "Main Material: N/A",
    ],
  },
  {
    id: "434455",
    imageUrls: [Benz, Benz1, Benz2, Benz3],
    title: "2020 Mercedes Benz AMG",
    category: "Vehicle",
    condition: "New",
    price: 62000000,
    location: "Abuja",
    phone: "+2347041982590",
    description: "Description of Product 1 and just some random text",
    specification: [
      "SKU: SA948EA29N628NAFAMZ",
      "Product Line: Kaylas Mart Electronics",
      " Model: Samsung 5300",
      "Size (L x W x H cm): 1145.0 x 659.0 x 136.0‎",
      "Weight (kg): 11",
      "Color: Black",
      "Main Material: N/A",
    ],
  },
];

export default products;
