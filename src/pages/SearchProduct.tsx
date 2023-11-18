import React, { useEffect, useState } from "react";
import { getSearchProducts } from "../utils/api";
import { Link, useParams } from "react-router-dom";
import { ProductTypes } from "../utils";
import ProductCard from "../components/ui/ProductCard";
import { Card } from "@material-tailwind/react";

export default function SearchProduct() {
  const [searchItem, setSearchItem] = useState<ProductTypes[]>([]);
  const { query } = useParams();
  useEffect(() => {
    getSearchProducts(`${query}`).then((res) => {
      setSearchItem(res);
    });
  }, []);
  return (
    <div className="flex items-center justify-around gap-4 flex-wrap px-36 pt-20">
      {searchItem?.map((item) => (
        <Link to={`/products/${item.id}`} key={item.id}>
          <Card className="w-60 h-72 rounded-lg shadow-xl">
            <ProductCard prod={item} />
          </Card>
        </Link>
      ))}
    </div>
  );
}
