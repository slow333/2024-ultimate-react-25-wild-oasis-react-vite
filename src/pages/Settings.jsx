import Heading from "../ui/Heading";
import UpdateSettingsForm from "../features/settings/UpdateSettingsForm.jsx";
import {useState} from "react";
import Button from "../ui/Button.jsx";
import useSettings from "../features/settings/useSettings.js";
import Spinner from "../ui/Spinner.jsx";
import styled from "styled-components";
import {formatCurrency} from "../utils/helpers.js";

const SettingsContainer = styled.ul`
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  align-items: center;
  background-color: var(--color-grey-200);
  padding: 2rem 3rem;
  border-radius: var(--border-radius-md);
`;
const SettingsItem = styled.li`
  //border-right: 1px solid #991b1b;
  //padding-right: 1rem;
  font-size: 1.6rem;
`

function Settings() {
  const [showForm, setShowForm] = useState(false);

  const {settings, isLoading, error} = useSettings();

  if (isLoading) return <Spinner/>

  const {minBookingLength, maxBookingLength, maxGuestsPerBooking, breakfastPrice} = settings;

  return (
       <>
         <Heading as="h1"> Update hotel settings < /Heading>
         <SettingsContainer>
         <div style={{fontSize: '22px', fontWeight:'600'}}>현재 설정 상태</div>
           <SettingsItem>최소예약 가능일 : {minBookingLength}일</SettingsItem>
           <SettingsItem>최대예약 가능일 : {maxBookingLength}일</SettingsItem>
           <SettingsItem>방당 최대 인원 : {maxGuestsPerBooking}명</SettingsItem>
           <SettingsItem>아침밥 비용 : {formatCurrency(breakfastPrice)}</SettingsItem>
         </SettingsContainer>
         <Button onClick={() => setShowForm(s => !s)}>
           Show form
         </Button>
         {showForm && <UpdateSettingsForm settings={settings}/>}
       </>
  )
}

export default Settings;
