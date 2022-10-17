import Link from "next/link";
import { Rating } from "./Rating";
import Image from "next/image";

interface ProductDetails {
  id: number;
  title: string;
  description: string;
  thumbnailUrl: string;
  thumbnailAlt: string;
  rating: number;
}

interface ProductProps {
  data: ProductDetails;
}

export const ProductDetails = ({ data }: ProductProps) => {
  const { thumbnailUrl, thumbnailAlt, title, description, rating} = data;
  
  return (
    <>
    <div className="bg-white p-4">
      <Image
          src={thumbnailUrl}
          alt={thumbnailAlt}
          layout="responsive"
          width={16}
          height={9}
          objectFit="contain"
        />
        </div>
      <h2 className="p-4 text-3xl font-bold">{title}</h2>
      <p className="p-4">{description}</p>
      <Rating rating={rating} />
      
    </>
  );
};

interface ProductListItemProps {
  data: ProductListItem;
}

type ProductListItem = Pick<
  ProductDetails,
  "id" | "title" | "thumbnailAlt" | "thumbnailUrl"
>;

export const ProductListItem = ({ data }: ProductListItemProps) => {
  const { id, thumbnailAlt, thumbnailUrl, title } = data;

  return (
    <>
      <div className="bg-white p-4">
        <Image
          src={thumbnailUrl}
          alt={thumbnailAlt}
          layout="responsive"
          width={16}
          height={9}
          objectFit="contain"
        />
      </div>

      <Link href={`/products/${id}`}>
        <a>
          <h2 className="font-bold text-2xl mt-4 mb-2">{title}</h2>
        </a>
      </Link>
    </>
  );
};
