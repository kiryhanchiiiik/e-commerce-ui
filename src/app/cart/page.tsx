import { Suspense } from "react";
import CardContent from "./CartContent";

const CartPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CardContent />
    </Suspense>
  );
};
export default CartPage;
