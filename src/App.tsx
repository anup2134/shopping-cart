import { useState } from "react";
import { ShoppingCart } from "lucide-react";
import { productList } from "./utils";
import CartItems from "./components/CartItems";
import CartSummary from "./components/CartSummary";

export default function Page() {
  const [products, setProducts] = useState(productList);

  return (
    <div className="flex flex-col items-center px-4 py-8 w-full">
      <h1 className="text-3xl font-bold mb-8 flex items-center gap-2">
        <ShoppingCart className="h-8 w-8" />
        Shopping Cart
      </h1>

      <div className="flex flex-wrap justify-between w-full max-w-[1200px] md:flex-row flex-col">
        <CartItems products={products} setProducts={setProducts} />
        <div className="md:w-[30%] w-full md:pt-0 pt-5 max-w-96 mx-auto">
          <CartSummary products={products} />
        </div>
      </div>
    </div>
  );
}
