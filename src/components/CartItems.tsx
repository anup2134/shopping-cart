import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { MinusIcon, PlusIcon } from "lucide-react";
import { formatCurrency } from "@/utils";
import type { Product } from "@/utils";

export default function CartItems({
  products,
  setProducts,
}: {
  products: Product[];
  setProducts: (products: Product[]) => void;
}) {
  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 0) return;

    setProducts(
      products.map((product) =>
        product.id === id ? { ...product, quantity: newQuantity } : product
      )
    );
  };

  const calculateSubtotal = (price: number, quantity: number) => {
    return price * quantity;
  };
  return (
    <Card className="md:w-[65%] w-full">
      <CardHeader>
        <CardTitle>Cart Items</CardTitle>
      </CardHeader>
      <CardContent className="w-full">
        <div className="flex w-full font-medium mb-2">
          <div className="flex sm:w-[50%] w-full">
            <div className="w-[60%] text-center">Product</div>
            <div className="w-[40%] text-center">Price</div>
          </div>
          <div className="sm:flex sm:w-[50%] hidden">
            <div className="w-[60%] text-center">Quantity</div>
            <div className="w-[40%] text-center">Subtotal</div>
          </div>
        </div>
        <Separator className="mb-4" />

        {products.map((product: Product, id) => (
          <div key={product.id} className="mb-6">
            <div className="sm:flex sm:flex-row flex-col w-full">
              <div className="flex sm:w-[50%] w-full md:pb-0 pb-2">
                <div className="w-[60%] text-center">{product.name}</div>
                <div className="w-[40%] text-center">
                  {formatCurrency(product.price)}
                </div>
              </div>

              <div className="flex sm:w-[50%] w-full">
                <div className="w-[60%] text-center flex justify-center">
                  <div className="flex items-center">
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8 rounded-r-none"
                      onClick={() =>
                        updateQuantity(product.id, product.quantity - 1)
                      }
                    >
                      <MinusIcon className="h-4 w-4" />
                    </Button>
                    <Input
                      type="number"
                      value={product.quantity}
                      onChange={(e) =>
                        updateQuantity(
                          product.id,
                          Number.parseInt(e.target.value) || 0
                        )
                      }
                      className="h-8 w-12 rounded-none text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                    />
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8 rounded-l-none"
                      onClick={() =>
                        updateQuantity(product.id, product.quantity + 1)
                      }
                    >
                      <PlusIcon className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div className="w-[40%] text-center">
                  <span className="font-medium text-center">
                    {formatCurrency(
                      calculateSubtotal(product.price, product.quantity)
                    )}
                  </span>
                </div>
              </div>
            </div>

            {id !== products.length && <Separator className="mt-4" />}
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
