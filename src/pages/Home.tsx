import { Carousel } from "@material-tailwind/react";
import ProductList from "../components/ui/ProductList";
import CategorySelect from "../components/layouts/CategorySelect";
export default function Home() {
  return (
    <div>
      <Carousel className="pt-[60px]" loop>
        <img
          src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/ab169ccf09123a96.jpg?q=20"
          alt="image 1"
          className="h-60 w-full object-cover"
        />
        <img
          src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/dc346c15d635b3eb.jpg?q=20"
          alt="image 2"
          className="h-60 w-full object-cover"
        />
        <img
          src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/579b0baa6dfcf7e2.jpg?q=20"
          alt="image 3"
          className="h-60 w-full object-cover"
        />
      </Carousel>
      <div className="flex items-center justify-between px-36 py-4">
        <h1 className="text-4xl font-bold ">Top Products For You</h1>
        <div>
          <CategorySelect />
        </div>
      </div>
      <ProductList />
    </div>
  );
}
