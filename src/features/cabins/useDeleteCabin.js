import {useMutation, useQueryClient} from "@tanstack/react-query";
import {deleteCabin as deleteCabinApi} from "../../services/apiCabins.js";
import toast from "react-hot-toast";

function useDeleteCabin() {
  const queryClient = useQueryClient()

  const {isLoading: isDeleting, mutate: deleteCabin} = useMutation({
    mutationFn: deleteCabinApi,
    onSuccess: () => {
      toast.success("지우기 성공 입니다.");

      queryClient.invalidateQueries({
        queryKey: ['cabins']
      })
    },
    onError: (err) => toast.error(err.message)
  })
  return {isDeleting, deleteCabin }
}
export default useDeleteCabin;