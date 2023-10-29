import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateSetting as updateSettingApi } from "../../services/apiSettings";
import { toast } from "react-hot-toast";



export function useEditSetting() {

    const queryClient = useQueryClient();
    const { mutate:updateSetting, isLoading:isSetting } = useMutation({
        mutationKey: ['settings'],
        mutationFn: updateSettingApi,
        onSuccess: () => {
            toast.success("با موفقیت ویرایش شد")
            queryClient.invalidateQueries({
                queryKey:['settings']
            })
        },
        onError:(err)=>toast.error("مشکلی پیش آمد")
    })
return {isSetting,updateSetting}
}