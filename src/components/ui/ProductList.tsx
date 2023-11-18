import { ProductTypes } from "../../utils";
import { RootState } from "../../store/store";
import { useSelector } from "react-redux";
import { getSingleCatgeory } from "../../utils/api";
import { Card } from "@material-tailwind/react";
import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ProductList({ categoryValue }: any) {
  console.log(categoryValue);
  const [prodCategory, setProdcategory] = useState<ProductTypes[]>([]);
  const value = useSelector((state: RootState) => state.product.prodCategory);
  useEffect(() => {
    getSingleCatgeory(`${value}`).then((res) => {
      setProdcategory(res);
    });
  }, [value]);
  return (
    <div className="flex items-center justify-around gap-20 flex-wrap px-36">
      {prodCategory?.map((item) => (
        <Link to={`/products/${item.id}`} key={item.id}>
          <Card className="w-60 h-72 rounded-lg shadow-xl">
            <ProductCard prod={item} />
          </Card>
        </Link>
      ))}
    </div>
  );
}
