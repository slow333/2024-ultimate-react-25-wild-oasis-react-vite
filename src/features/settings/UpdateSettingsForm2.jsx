import Form from '../../ui/Form';
import FormRow from '../../ui/FormRow';
import Input from '../../ui/Input';
import Button from "../../ui/Button.jsx";
import useEditSettings from "./useEditSettings.js";
import {useForm} from "react-hook-form";
import Spinner from "../../ui/Spinner.jsx";

function UpdateSettingsForm({settings}) {

  const {editSettings, isSettings} = useEditSettings()


  const {id: editId, ...editValues} = settings;

  const {register, handleSubmit, reset, getValues, formState} = useForm({
    defaultValues: editValues,
  })

  if (isSettings) return <Spinner/>

  const {errors} = formState

  function onSubmit(data) {
    editSettings(
         {...data},
         {onSuccess: (data) => reset()}
    );
  }

  return (
       <Form onSubmit={handleSubmit(onSubmit)}>
         <FormRow label='Minimum nights/booking'>
           <Input type='number' id='min-nights'
                  disabled={isSettings}
                  {...register("minBookingLength", {
                    required: "This field is required",
                    min: {value:1, message:"1보다 커야함"},
                  })}
           />
         </FormRow>
         <FormRow label='Maximum nights/booking' error={errors?.maxBookingLength?.message}>
           <Input type='number' id='max-nights'
                  disabled={isSettings}
                  {...register("maxBookingLength",
                       {
                    validate: (value) => Number(value) > Number(getValues().minBookingLength)
                         || "Max should be greater than min."
                  }
                  )}
           />
         </FormRow>
         <FormRow label='Maximum guests/booking'  error={errors?.maxGuestsPerBooking?.message}>
           <Input type='number' id='max-guests'
                  disabled={isSettings}
                  {...register("maxGuestsPerBooking",{
                    min: {
                      value: 4,
                      message: "4보다 커야함"
                    },
                    max: {
                      value: 20,
                      message: "20보다 작아야함"
                    },
                  })}
           />
         </FormRow>
         <FormRow label='Breakfast price' error={errors?.breakfastPrice?.message}>
           <Input type='number' id='breakfast-price'
                  disabled={isSettings}
                  {...register("breakfastPrice",{
                    min: {
                      value: 5,
                      message: "5보다 커야합니다."
                    }
                  })}
           />
         </FormRow>
         <Button>Update Settings</Button>
       </Form>
  );
}

export default UpdateSettingsForm;
