// import { render, screen, fireEvent } from "@testing-library/react";
// import CartSummary from "@/components/CartSummary";
// import { formatCurrency } from "@/utils";

// describe("CartSummary Component", () => {
//   const products = [
//     { id: 1, name: "Product 1", price: 100, quantity: 2 },
//     { id: 2, name: "Product 2", price: 50, quantity: 1 },
//   ];

//   it("renders the cart summary correctly", () => {
//     render(<CartSummary products={products} />);

//     expect(screen.getByText("Cart Summary")).toBeInTheDocument();
//     expect(screen.getByText("Subtotal")).toBeInTheDocument();
//     expect(screen.getByText("Total")).toBeInTheDocument();
//     expect(screen.getByRole("button", { name: /checkout/i })).toBeInTheDocument();
//   });

//   it("calculates and displays the correct subtotal", () => {
//     render(<CartSummary products={products} />);
//     const expectedSubtotal = formatCurrency(100 * 2 + 50 * 1);
//     expect(screen.getByText(expectedSubtotal)).toBeInTheDocument();
//   });

//   it("applies a discount correctly", () => {
//     render(<CartSummary products={products} />);
//     const discountInput = screen.getByLabelText("Discount (%)");
//     fireEvent.change(discountInput, { target: { value: "10" } });
//     const expectedDiscount = formatCurrency((250 * 10) / 100);
//     const expectedTotal = formatCurrency(250 - (250 * 10) / 100);
//     expect(screen.getByText(`-${expectedDiscount}`)).toBeInTheDocument();
//     expect(screen.getByText(expectedTotal)).toBeInTheDocument();
//   });

//   it("handles empty or invalid discount input", () => {
//     render(<CartSummary products={products} />);
//     const discountInput = screen.getByLabelText("Discount (%)");
//     fireEvent.change(discountInput, { target: { value: "abc" } });
//     fireEvent.blur(discountInput);
//     expect(screen.getByDisplayValue("0")).toBeInTheDocument();
//   });
// });
