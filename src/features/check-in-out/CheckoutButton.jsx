import Button from "../../ui/Button";
import { useCheckout } from './useCheckout'



function CheckoutButton({ bookingId }) {
  const { checkout, isLoading } = useCheckout()
  return (
    <Button variation="primary" size="small" onClick={() => checkout(bookingId)} disabled={isLoading}>
      خروج
    </Button>
  );
}

export default CheckoutButton;
