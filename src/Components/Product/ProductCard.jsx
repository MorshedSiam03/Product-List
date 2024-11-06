import { useContext } from "react";
import AddToCart from "../../assets/Svgs/AddToCart";
import { CartContext } from "../../Provider/CartProvider";
import RemoveFromCart from "../../assets/Svgs/RemoveFromCart";

function ProductCard({ product }) {
  const { image, title, category, price } = product;
  const { cart, addToCart, removeFromCart } = useContext(CartContext);

  const isInCart = cart.some((item) => item.id === product.id);

  const handleCartToggle = () => {
    if (isInCart) {
      removeFromCart(product.id);
    } else {
      addToCart(product);
    }
  };
  return (
    <div className="relative">
      <div className="aspect-h-1  aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none lg:h-80">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover object-top lg:h-full lg:w-full p-4 bg-gray-100"
        />
      </div>
      <div className="mt-4 px-3 pb-4">
        <div>
          <h3 className="text-sm font-semibold text-gray-700">{title}</h3>{" "}
        </div>
        <div className="flex  justify-between items-center">
          <p className="mt-1 text-sm text-gray-500">{category}</p>{" "}
          <p className="text-sm font-medium text-gray-900">
            $ {price.toFixed(2)}
          </p>{" "}
        </div>
      </div>
      <div
        onClick={handleCartToggle}
        className="cursor-pointer rounded-md bg-white text-[0.8125rem] font-medium leading-5 text-slate-700 ring-1 ring-slate-700/10 hover:ring-1 hover:bg-slate-50 hover:text-slate-900 items-center text-center mb-3 mx-3 flex-1"
      >
        <div className="flex px-3 py-2 justify-center">
          {isInCart ? (
            <>
              <RemoveFromCart />
              Remove From Cart
            </>
          ) : (
            <>
              <AddToCart />
              Add To Cart
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
