import {useMutation, useQueryClient} from "@tanstack/react-query";
import {updateSetting} from "../../services/apiSettings.js";
import toast from "react-hot-toast";

function useEditSettings() {

  const queryClient = useQueryClient();

  const {mutate: editSettings, isLoading: isSettings} = useMutation({
    mutationFn: updateSetting,
    onSuccess: () => {
      toast.success('Edit Settings success!!!! [from useMutation]');
      queryClient.invalidateQueries({
        queryKey: ["settings"]
      });
    },
    onError: (err) => toast.error(err.message)
  });
  return { editSettings, isSettings }
}

export default useEditSettings;