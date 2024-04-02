/* eslint-disable react/prop-types */
import styled from "styled-components";
import {formatCurrency} from "../../utils/helpers.js";
import Button from "../../ui/Button.jsx";
import {useState} from "react";
import CreateCabinForm from "./CreateCabinForm.jsx";
import useDeleteCabin from "./useDeleteCabin.js";

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 0.6fr 1fr 1.4fr 1fr 1fr 1.5fr;
  column-gap: 2.4rem;
  align-items: center;
  padding: 1.4rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`;

const Img = styled.img`
  display: block;
  width: 5.5rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
`;

const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Price = styled.div`
  font-family: "Sono", serif;
  font-weight: 600;
`;

const Discount = styled.div`
  font-family: "Sono", serif;
  font-weight: 500;
  color: var(--color-green-700);
`;
const BtnAlign = styled.div`
  display: flex;
  gap: 0.7rem;
`

function CabinRow({cabin}) {
  const {id: cabinId, image, name, maxCapacity, regularPrice, discount } = cabin;
  const [showForm, setShowForm] = useState(false);

  const {deleteCabin, isDeleting} = useDeleteCabin();
  return (
       <>
         <TableRow role='row'>
           <Img src={image} alt={name}/>
           <Cabin>{name}</Cabin>
           <div>최대수용객 : {maxCapacity}</div>
           <Price>{formatCurrency(regularPrice)}</Price>
           {discount ? <Discount>{formatCurrency(discount)}</Discount> : <span>&mdash;</span>}
           <BtnAlign>
             <Button size='small' variation='secondary' onClick={() => setShowForm(show => !show)}>Edit</Button>
             <Button size='small' variation='danger'
                     onClick={() => deleteCabin(cabinId)} disabled={isDeleting}>Delete</Button>

           </BtnAlign>
         </TableRow>
         {showForm && <CreateCabinForm cabinToEdit={cabin}/>}
       </>
  )
}

export default CabinRow;