import FormRow from "../../ui/FormRow.jsx";
import toast from "react-hot-toast";
import {useForm} from "react-hook-form";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {createCabin} from "../../services/apiCabins.js";

import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";

function CreateCabinForm() {

  const {register, handleSubmit, reset, getValues, formState } = useForm()
  const {errors} = formState;
  console.log(errors)

  const queryClient = useQueryClient();

  const {mutate, isLoading:isCreating} = useMutation({
    mutationFn: createCabin,
    onSuccess: () =>  {
      toast.success('New cabin successfully created! [from useMutation]');
      queryClient.invalidateQueries({
        queryKey: ["cabins"] });
      reset();
    },
    onError: (err) => toast.error(err.message)
  });

  function onSubmit(data) {
    // console.log(data)
    mutate({...data, image: data.image[0]});
  }

  function onError(error) {
    // console.log(error)
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit, onError)}>
      <FormRow error={errors?.name?.message} label='name'>
        <Input type="text" id="name"
               disabled={isCreating}
               {...register("name", {
                 required: "This field is required"
               })}/>
      </FormRow>

      <FormRow label='max capacity' error={errors?.maxCapacity?.message}>
        <Input type="number" id="maxCapacity"
               disabled={isCreating}
               {...register("maxCapacity", {
                 required: "This field is required",
                 min: {
                   value: 1,
                   message: "Capacity should be at least 1."
                 }
               })}/>
      </FormRow>

      <FormRow label='regular price' error={errors?.regularPrice?.message}>
        <Input type="number" id="regularPrice"
               disabled={isCreating}
               {...register("regularPrice", {
                 required: "This field is required",
                 min: {
                   value: 1,
                   message: "Capacity should be at least 1."
                 }
               })}/>
      </FormRow>

      <FormRow label='discount' error={errors?.discount?.message}>
        <Input type="number" id="discount" defaultValue={0}
               disabled={isCreating}
               {...register("discount", {
                 required: "This field is required",
                 validate: (value) => Number(value) <= Number(getValues().regularPrice)
                   || "Discount should be less than regular price."
               })}/>
      </FormRow>

      <FormRow  label='description' error={errors?.description?.message}>
        <Textarea type="text" id="description" defaultValue=""
                  disabled={isCreating}
                  {...register("description", {
                    required: "This field is required"
                  })}/>
      </FormRow>

      <FormRow label='Cabin photo' error={errors?.image?.message}>
        <FileInput id="image" accept="image/*"
                   {...register("image", {
                     required: "This field is required"
                   })}
        />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button variation="secondary" type="reset">
          Cancel
        </Button>
        <Button disabled={isCreating} >Add Cabin</Button>
      </FormRow>
    </Form>
  );
}

export default CreateCabinForm;
