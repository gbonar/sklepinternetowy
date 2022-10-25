import Link from "next/link";
import { useRouter } from "next/router";
import { InferGetStaticPropsType } from "next/types";
import { ProductDetails } from "../../components/Product";
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'

const ProductIdPage = ({data}: InferGetStaticPropsType<typeof getStaticProps>) => {
    const router = useRouter();
    
    if(!data){
        return <div>Coś poszło nie tak</div>
    }

    return (
    <div>
        <Link href="/products">
            <a>Wróc na stronę główną</a>
        </Link>

            <ProductDetails data={{
                id: data.id,
                title: data.title,
                thumbnailUrl: data.image,
                thumbnailAlt: data.title,
                description: data.description,
                rating: data.rating.rate,
                longDescription: data.longDescription
            }}/>
        </div>
)};

export default ProductIdPage;

export const getStaticPaths = async () => {
  const response = await fetch("https://naszsklep-api.vercel.app/api/products");
  const json: StoreApiResponse[] = await response.json();
  const data = json.map((product) => {
    return { params: { productId: `${product.id}` } };
  });
  return {
    paths: data,
    fallback: false,
  };
};

export const getStaticProps = async ({params} : InferGetStaticPaths<typeof getStaticPaths>) => {
    if(!params?.productId){
        return {
            props: {},
            notFound: true
        }
    }
    
    const res = await fetch(`https://naszsklep-api.vercel.app/api/products/${params?.productId}`);
    const data: StoreApiResponse | null = await res.json();

    if(!data){
        return {
            props: {},
            notFound: true
        }
    }    

    return {
        props: {
            data: {
                ...data,
                longDescription: await serialize(data.description)
            }
        }
    }
};

export type InferGetStaticPaths<T> = T extends () => Promise<{
    paths: Array<{ params: infer R }>;
  }>
    ? { params?: R }
    : never;

interface StoreApiResponse {
    id:          number;
    title:       string;
    price:       number;
    description: string;
    category:    string;
    image:       string;
    longDescription: string;
    rating: {
        rate:  number;
        count: number;
    }
}
