import Form from '../../ui/Form';
import FormRow from '../../ui/FormRow';
import Input from '../../ui/Input';
import Button from "../../ui/Button.jsx";
import useEditSettings from "./useEditSettings.js";
import Spinner from "../../ui/Spinner.jsx";
import useSettings from "./useSettings.js";

function UpdateSettingsForm() {

  const {settings, isLoading} = useSettings();

  const {editSettings, isSettings} = useEditSettings();
  const {minBookingLength,  maxBookingLength, maxGuestsPerBooking,breakfastPrice}
  = settings;


  if (isLoading) return <Spinner/>

  function onUpdate(e, name) {
    const {value} = e.target;
    if(!value) return;

    editSettings({ [name] : value });
  }

  return (
       <Form>
         <FormRow label='Minimum nights/booking'>
           <Input type='number' id='min-nights'
                  disabled={isSettings}
                  defaultValue={minBookingLength}
                  onBlur={(e) => onUpdate(e, "minBookingLength")}
           />
         </FormRow>
         <FormRow label='Maximum nights/booking' >
           <Input type='number' id='max-nights'
                  disabled={isSettings}
                  defaultValue={maxBookingLength}
                  onBlur={(e) => onUpdate(e, "maxBookingLength")}
           />
         </FormRow>
         <FormRow label='Maximum guests/booking' >
           <Input type='number' id='max-guests'
                  disabled={isSettings}
                  defaultValue={maxGuestsPerBooking}
                  onBlur={(e) => onUpdate(e, "maxGuestsPerBooking")}
           />
         </FormRow>
         <FormRow label='Breakfast price'>
           <Input type='number' id='breakfast-price'
                  disabled={isSettings}
                  defaultValue={breakfastPrice}
                  onBlur={(e) => onUpdate(e, "breakfastPrice")}
           />
         </FormRow>
       </Form>
  );
}

export default UpdateSettingsForm;
