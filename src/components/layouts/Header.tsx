import { Search } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { RootState } from "../../store/store";
import { productAction } from "../../store/productSlice";
import { signOut } from "firebase/auth";
import { auth } from "../../auth/firebase";
export default function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const search = useSelector((state: RootState) => state.product.searchProduct);
  const isLogin = useSelector((state: RootState) => state.product.isLogin);
  const cart = useSelector((state: RootState) => state.product.cart);
  const handleSearch = () => {
    if (search === "") {
      alert("Please enter valid value");
    } else {
      navigate(`/search/${search}`);
    }
  };
  const handleLogout = () => {
    signOut(auth).then((res) => {
      alert("Successfully Logout");
      navigate("/login");
      dispatch(productAction.setLogin(false));
    });
  };
  return (
    <header className="flex z-10 items-center justify-between flex-wrap py-2 fixed w-full px-36 bg-black">
      <div>
        <Link to={"/"}>
          <h1 className="text-3xl font-bold text-white">Shopify</h1>
        </Link>
      </div>
      <div>
        <input
          onChange={(e) =>
            dispatch(productAction.setSearchProducts(e.target.value))
          }
          value={search}
          className="px-4 w-[400px] border-none bg-sky-200 bg-light-blue-50 text-black p-2.5 rounded"
          placeholder="Search Product"
        />
        <Search
          className="absolute cursor-pointer ml-[360px] mt-[-34px]"
          onClick={handleSearch}
        />
      </div>
      <div>
        <ul className="flex items-center justify-between flex-wrap gap-10 text-white">
          <li>
            <NavLink to={"/"} className="link">
              Home
            </NavLink>
          </li>
          <ul>
            {isLogin ? (
              <ul className="flex items-center justify-between flex-wrap gap-10 text-white">
                <li>
                  <NavLink to={"/my-order"} className="link">
                    My Order
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/cart"} className="link">
                    Cart ({cart.length})
                  </NavLink>
                </li>
                <li
                  className="text-white cursor-pointer"
                  onClick={handleLogout}
                >
                  Logout
                </li>
              </ul>
            ) : (
              <ul className="flex items-center justify-between flex-wrap gap-10 text-white">
                <li>
                  <NavLink to={"/login"} className="link">
                    Login
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/signup"} className="link">
                    Signup
                  </NavLink>
                </li>
              </ul>
            )}
          </ul>
        </ul>
      </div>
    </header>
  );
}
