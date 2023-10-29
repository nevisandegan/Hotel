import { useMutation, useQueryClient } from "@tanstack/react-query"
import toast from "react-hot-toast"
import { updateCurrentUser } from "../../services/apiAuth"

export function useUpdateUser() {
    const queryClient = useQueryClient()
    const { mutate: updateUser, isLoading: isUpdating } = useMutation({
        mutationFn: updateCurrentUser
        , onSuccess: ({ user }) => {
            toast.success('با موفقیت کاربر ویرایش  شد')
            queryClient.setQueryData(['user'], user)
        },
        onError: (err) => toast.error("ویرایش  کاربر با مشکل مواجه شد")
    })
    return { isUpdating, updateUser }
}