import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { formatCurrency } from "@/utils";
import type { Product } from "@/utils";
import { useState } from "react";

export default function CartSummary({ products }: { products: Product[] }) {
  const [discount, setDiscount] = useState<number | null>(0);
  const calculateSubtotal = (price: number, quantity: number) => {
    return price * quantity;
  };
  const cartTotal = products.reduce((total, product) => {
    const subtotal = calculateSubtotal(product.price, product.quantity);
    return total + (Number.isNaN(subtotal) ? 0 : subtotal);
  }, 0);

  const discountAmount = (cartTotal * (discount ? discount : 0)) / 100;
  const discountedTotal =
    cartTotal - (Number.isNaN(discountAmount) ? 0 : discountAmount);

  const handleDiscountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === "") {
      setDiscount(null);
      return;
    }

    const value = Number.parseFloat(e.target.value);
    if (value >= 0 && value <= 100) {
      setDiscount(value);
    }
  };
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Cart Summary</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>{formatCurrency(cartTotal)}</span>
          </div>

          <div>
            <Label htmlFor="discount">Discount (%)</Label>
            <div className="flex items-center mt-1.5">
              <Input
                id="discount"
                type="number"
                min="0"
                max="100"
                value={discount !== null ? discount : ""}
                onChange={handleDiscountChange}
                onBlur={(e) => {
                  if (e.target.value === "") {
                    setDiscount(0);
                  }
                }}
                className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              />
              <span className="ml-2">%</span>
            </div>
          </div>

          {discount !== null && discount > 0 && (
            <div className="flex justify-between text-green-600">
              <span>Discount</span>
              <span>-{formatCurrency(discountAmount)}</span>
            </div>
          )}
          <Separator />
          <div className="flex justify-between font-bold text-lg">
            <span>Total</span>
            <span
              className={cn(
                discount !== null && discount > 0 && "text-green-600"
              )}
            >
              {formatCurrency(discountedTotal)}
            </span>
          </div>

          <Button className="w-full">Checkout</Button>
        </div>
      </CardContent>
    </Card>
  );
}
