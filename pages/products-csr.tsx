import { InferGetStaticPropsType } from "next";
import { useQuery } from "react-query";
import { ProductDetails } from "../components/Product";

const getProducts = async () => {
  const res = await fetch(`https://naszsklep-api.vercel.app/api/products/`);
  const data: StoreApiResponse[] = await res.json();
  return data;
};

const ProductCSRPage = () => {
    const {isLoading, data, error} = useQuery("products", getProducts);

  if(isLoading)  {
    return <div>Loading...</div>
  }

  if(!data || error){
    return <div>Coś poszło nie tak</div>
  }

  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {data.map((product) => {
        return (
          <li key={product.id} className="shadow-xl border-2">
            <ProductDetails
              data={{
                id: product.id,
                title: product.title,
                description: product.description,
                thumbnailUrl: product.image,
                thumbnailAlt: product.title,
                rating: product.rating.rate,
                longDescription: product.longDescription
              }}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default ProductCSRPage;

interface StoreApiResponse {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  longDescription: string;
  rating: {
    rate: number;
    count: number;
  };
}
