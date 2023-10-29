import { useMutation, useQueryClient } from "@tanstack/react-query"
import toast from "react-hot-toast"
import { deleteBooking as deleteBookingApi } from "../../services/apiBookings";


export function useDeleteBooking() {
    const queryClient = useQueryClient()

    const { mutate: deleteBooking, isLoading: isDeleting } = useMutation({
        mutationFn: deleteBookingApi,
        onSuccess: () => {
            toast.success(` با موفقیت حذف شد`)
            queryClient.invalidateQueries({ active: true })
           
        },
        onError: () => toast.error(`حذف رزرو  با مشکل مواجه شد`)
    })
    return { deleteBooking, isDeleting }
}


