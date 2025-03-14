import { useEffect, useState } from "react";
import { ShoppingCart } from "lucide-react";
import { productList, Product } from "./utils";
import CartItems from "./components/CartItems";
import CartSummary from "./components/CartSummary";

export default function Page() {
  const [products, setProducts] = useState<Product[]>(() => {
    const storedCart = localStorage.getItem("shopping cart");
    if (!storedCart) return productList;
    const parsedCart = JSON.parse(storedCart) as Product[];
    for (const item of parsedCart) {
      if (!item.quantity) {
        item.quantity = 0;
      }
    }
    return parsedCart;
  });

  useEffect(() => {
    localStorage.setItem("shopping cart", JSON.stringify(products));
  }, [products, setProducts]);

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
