import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useCheckin() {
    const queryclient = useQueryClient()
    const navigate = useNavigate()
    const { mutate: checkin, isLoading: isCheckIn } = useMutation({
        mutationFn: ({ bookingId, breakfast }) => updateBooking(bookingId, {
            status: 'checked-in',
            isPaid: true,
            ...breakfast
        }),
        onSuccess: (data) => {
            toast.success(`رزرو ${data.id} با موفقیت پذیرش شد`);
            queryclient.invalidateQueries({ active: true })
            navigate("/")
        },
        onError: () => toast.error('پذیرش  با خطا مواجه شد')
    })
    return { checkin, isCheckIn }
}