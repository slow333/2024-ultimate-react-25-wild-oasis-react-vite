import FormRow from "../../ui/FormRow.jsx";
import {useForm} from "react-hook-form";

import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import useCreateCabin from "./useCreateCabin.js";
import useEditCabin from "./useEditCabin.js";

function CreateCabinForm({cabinToEdit = {}}) {

  const {createCabin, isCreating} = useCreateCabin();
  const {editCabin, isEditing} = useEditCabin();

  const {id: editId, ...editValues} = cabinToEdit;
  const isEditSession = Boolean(editId)

  const {register, handleSubmit, reset, getValues, formState} = useForm({
    defaultValues: isEditSession ? editValues : {},
  })
  const {errors} = formState;

  const isWorking = isCreating || isEditing;

  function onSubmit(data) {
    const image = typeof data.image === 'string' ? data.image : data.image[0]

    if (isEditSession) editCabin(
         {newCabinData: {...data, image}, id: editId },
         {onSuccess: (data) => reset()}
    )
    else createCabin(
         {...data, image: image},
         {onSuccess: (data) => reset()}
    );
  }

  function onError(error) { }

  return (
       <Form onSubmit={handleSubmit(onSubmit, onError)}>
         <FormRow error={errors?.name?.message} label='name'>
           <Input type="text" id="name"
                  disabled={isWorking}
                  {...register("name", {
                    required: "This field is required"
                  })}/>
         </FormRow>

         <FormRow label='max capacity' error={errors?.maxCapacity?.message}>
           <Input type="number" id="maxCapacity"
                  disabled={isWorking}
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
                  disabled={isWorking}
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
                  disabled={isWorking}
                  {...register("discount", {
                    required: "This field is required",
                    validate: (value) => Number(value) <= Number(getValues().regularPrice)
                         || "Discount should be less than regular price."
                  })}/>
         </FormRow>

         <FormRow label='description' error={errors?.description?.message}>
           <Textarea type="text" id="description" defaultValue=""
                     disabled={isWorking}
                     {...register("description", {
                       required: "This field is required"
                     })}/>
         </FormRow>

         <FormRow label='Cabin photo' error={errors?.image?.message}>
           <FileInput id="image" accept="image/*"
                      {...register("image", {
                        required: isEditSession ? false : "This field is required"
                      })}
           />
         </FormRow>

         <FormRow>
           {/* type is an HTML attribute! */}
           <Button variation="secondary" type="reset">
             Cancel
           </Button>
           <Button disabled={isCreating}>{isEditSession ? "Edit cabin" : "Add New Cabin"}</Button>
         </FormRow>
       </Form>
  );
}

export default CreateCabinForm;
