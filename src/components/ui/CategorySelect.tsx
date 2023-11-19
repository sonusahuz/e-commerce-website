import { getAllCategories } from "../../utils/api";
import { useQuery } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { productAction } from "../../store/productSlice";

export default function CategorySelect() {
  const dispatch = useDispatch();
  const { data: products, isLoading } = useQuery<String[]>({
    queryKey: ["products"],
    queryFn: () => getAllCategories("categories"),
  });
  return (
    <div className="w-72">
      <select
        className="w-72 p-3 border-2 border-black rounded"
        onChange={(e) =>
          dispatch(productAction.setProdCatgeory(e.target.value))
        }
      >
        {products?.map((item, index) => (
          <option value={`${item}`} key={index}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
}
