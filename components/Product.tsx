import Link from "next/link";
import { Rating } from "./Rating";
import Image from "next/image";
import { NextSeo } from "next-seo";
import { ZaisteReactMarkdown } from "./ZaisteReactMarkdown";
import { MarkdownResult } from "../utils";

interface ProductDetails {
  id: number;
  title: string;
  description: string;
  thumbnailUrl: string;
  thumbnailAlt: string;
  rating: number;
  longDescription: MarkdownResult;
}

interface ProductProps {
  data: ProductDetails;
}

export const ProductDetails = ({ data }: ProductProps) => {
  const {
    thumbnailUrl,
    thumbnailAlt,
    title,
    description,
    longDescription,
    rating,
  } = data;

  return (
    <>
      <NextSeo
        title={data.title}
        description={data.description}
        canonical={`https://naszsklep-api.vercel.app/api/products/${data.id}`}
        openGraph={{
          url: `https://naszsklep-api.vercel.app/api/products/${data.id}`,
          title: data.title,
          description: data.description,
          images: [
            {
              url: data.thumbnailUrl,
              width: 800,
              height: 600,
              alt: data.thumbnailAlt,
              type: "image/jpeg",
            },
          ],
          site_name: "Nasz sklep",
        }}
      />
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
      <article className="p-4 prose lg:prose-xl">
        <ZaisteReactMarkdown>{data.longDescription}</ZaisteReactMarkdown>
      </article>

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
