import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useSignup() {
    const { mutate: signup, isLoading: isSignup } = useMutation({
        mutationFn: ({ fullname, email, password }) => signupApi({ fullname, email, password }),
        onSuccess: () => {
            toast.success("کاربر جدید با موفقیت اضافه شد")
        }
    })
    return { signup, isSignup }
}