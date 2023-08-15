import Lgtv from "../assets/Lgtv.svg";
import Lgtv2 from "../assets/Lgtv2.svg";
import Lgtv3 from "../assets/Lgtv3.svg";
import Lgtv4 from "../assets/Lgtv4.svg";
import Lgtv5 from "../assets/Lgtv5.svg";

export interface Product {
  id: number;
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

const products: Product[] = [
  {
    id: 0,
    imageUrls: [Lgtv, Lgtv2, Lgtv3, Lgtv4, Lgtv5],
    title: "LG Tv",
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
    id: 1,
    imageUrls: [Lgtv, Lgtv2, Lgtv3, Lgtv4, Lgtv5],
    title: "LG Tv",
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
    id: 2,
    imageUrls: [Lgtv, Lgtv2, Lgtv3, Lgtv4, Lgtv5],
    title: "LG Tv",
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
    id: 3,
    imageUrls: [Lgtv, Lgtv2, Lgtv3, Lgtv4, Lgtv5],
    title: "LG Tv",
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
    id: 4,
    imageUrls: [Lgtv, Lgtv2, Lgtv3, Lgtv4, Lgtv5],
    title: "LG Tv",
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
];

export default products;
