import {useMutation, useQueryClient} from "@tanstack/react-query";
import {createEditCabin} from "../../services/apiCabins.js";
import toast from "react-hot-toast";

function useCreateCabin() {

  const queryClient = useQueryClient();

  const {mutate: createCabin, isLoading:isCreating} = useMutation({
    mutationFn: createEditCabin,
    onSuccess: () =>  {
      toast.success('New cabin successfully created! [from useCreateCabin]');
      queryClient.invalidateQueries({
        queryKey: ["cabins"] });
    },
    onError: (err) => toast.error(err.message)
  });

  return {createCabin, isCreating }
}

export default useCreateCabin;