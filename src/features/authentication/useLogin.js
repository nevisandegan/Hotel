import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";


export function useLogin() {
    const queryClient = useQueryClient();
    const navigate = useNavigate()
    const { mutate: login, isLoading } = useMutation({
        mutationFn: ({ email, password }) => loginApi({ email, password }),
        onSuccess: (user) => {
            queryClient.setQueryData(['user'], user.user);
            toast.success('ورود با موفقیت انجام شد')
            navigate('/dashboard', { replace: true })
        },
        onError: (err) => toast.error("نام کاربری یا رمزعبور اشتباه است")


    })
    return { login, isLoading }
}