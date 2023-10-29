import { useMutation, useQueryClient } from "@tanstack/react-query"
import toast from "react-hot-toast"
import { createCabin } from "../../services/apiCabins"

export function useEditCabin() {
    const queryClient = useQueryClient()
    const { mutate: editCabin, isLoading: isEditing } = useMutation({
        mutationFn: ({ newCabinData, id }) => createCabin(newCabinData, id)
        , onSuccess: () => {
            toast.success('با موفقیت کابین ویرایش  شد')
            queryClient.invalidateQueries({
                queryKey: ["cabins"]
            })
        },
        onError: (err) => toast.error("اضافه کردن کابین با مشکل مواجه شد")
    })
    return { isEditing, editCabin }
}