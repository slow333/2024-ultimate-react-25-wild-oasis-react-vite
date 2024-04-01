// noinspection JSValidateTypes

import styled from "styled-components";

import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import {useForm} from "react-hook-form";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {createCabin} from "../../services/apiCabins.js";
import toast from "react-hot-toast";
import FormRow from "../../ui/FormRow.jsx";

/*const FormRow = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 24rem 1fr 1.2fr;
  gap: 2.4rem;

  padding: 1rem 0;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }

  &:has(button) {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`;

const Label = styled.label`
  font-weight: 500;
`;

const Error = styled.span`
  font-size: 1.4rem;
  color: var(--color-red-700);
`;*/

function CreateCabinForm() {

  const {register, handleSubmit, reset, getValues, formState } = useForm()
  const {errors} = formState;
  console.log(errors)

  const queryClient = useQueryClient();

  const {mutate, isLoading:isCreating} = useMutation({
    mutationFn: (newCabin) => createCabin(newCabin),
    onSuccess: () =>  {
      toast.success('New cabin successfully created!');
      queryClient.invalidateQueries({
        queryKey: ["cabins"] });
      reset();
    },
    onError: (err) => toast.error(err.message)
  });

  function onSubmit(data) {
    // console.log(data)
    mutate(data);
  }

  function onError(error) {
    // console.log(error)
  }

  // if(isCreating) return <Spinner/>

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
                 validate: (value) => value <= getValues().regularPrice
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

      <FormRow label='Cabin photo' error={errors?.description?.message}>
        <FileInput id="image" accept="image/*"
                   disabled={isCreating}/>
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
