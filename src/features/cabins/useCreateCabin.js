import { useMutation, useQueryClient } from "@tanstack/react-query"
import toast from "react-hot-toast"
import { createCabin } from "../../services/apiCabins"




export function useCreateCabin(){
    const queryClient = useQueryClient()
    const { mutate: createCabins, isLoading: isCreating } = useMutation({
        mutationFn: createCabin
        , onSuccess: () => {
            toast.success('با موفقیت کابین جدید ایجاد شد')
            queryClient.invalidateQueries({
                queryKey: ["cabins"]
            })
        },
        onError: (err) => toast.error("اضافه کردن کابین با مشکل مواجه شد")
    })
    return {isCreating,createCabins}
} 
