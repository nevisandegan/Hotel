import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";

export function useCheckout() {
    const queryclient = useQueryClient()
    const { mutate: checkout, isLoading: isCheckOut } = useMutation({
        mutationFn: (bookingId) => updateBooking(bookingId, {
            status: 'checked-out',
        }),
        onSuccess: (data) => {
            toast.success(`رزرو ${data.id} با موفقیت خارج شد`);
            queryclient.invalidateQueries({ active: true })

        },
        onError: () => toast.error(' خروج با خطا مواجه شد')
    })
    return { checkout, isCheckOut }
}