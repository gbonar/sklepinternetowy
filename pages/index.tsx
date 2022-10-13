import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Main } from "../components/Main";
import { Product } from "../components/Product";
import ProductPage from "./products";

const DATA = {
  title: `aaa`,
  description: `AALorem ipsum dolor sit amet. Qui sapiente reprehenderit rem expedita
  omnis quo temporibus sunt aut incidunt possimus qui dolores nesciunt
  et laborum rerum vel perferendis accusamus? Aut voluptas modi ab Quis
  dolore qui ratione assumenda et cupiditate earum. Ut animi vero eos
  harum repellendus At voluptas ipsam qui omnis consequatur.`,
  thumbnailUrl: `https://i.picsum.photos/id/1/200/300.jpg?hmac=jH5bDkLr6Tgy3oAg5khKCHeunZMHq0ehBZr6vGifPLY`,
  thumbnailAlt: `worker`,
  rating: 4.5,
};

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Main>
         {<Product data={DATA}/>}
      </Main>
      <Footer />
    </div>
  );
};

export default Home;
