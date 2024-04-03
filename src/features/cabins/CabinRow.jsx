/* eslint-disable react/prop-types */
import {useState} from "react";
import styled from "styled-components";
import CreateCabinForm from "./CreateCabinForm.jsx";
import useDeleteCabin from "./useDeleteCabin.js";
import {formatCurrency} from "../../utils/helpers.js";
import Button from "../../ui/Button.jsx";
import {HiOutlineDocumentDuplicate, HiOutlinePencil, HiOutlineTrash} from "react-icons/hi2";
import useCreateCabin from "./useCreateCabin.js";

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
  gap: 0.4rem;
`;

function CabinRow({cabin}) {
  const {id: cabinId, image, name, maxCapacity, regularPrice, discount, description} = cabin;

  const {deleteCabin, isDeleting} = useDeleteCabin();
  const {createCabin, isCreating} = useCreateCabin();

  function handleDuplicate() {
    createCabin({
      name: `Copy of ${name}`, image,
      maxCapacity, regularPrice, discount, description
    })
  }

  const [showForm, setShowForm] = useState(false);

  return (
       <>
         <TableRow role='row'>
           <Img src={image} alt={name}/>
           <Cabin>{name}</Cabin>
           <div>최대수용객 : {maxCapacity}</div>
           <Price>{formatCurrency(regularPrice)}</Price>
           {discount ? <Discount>{formatCurrency(discount)}</Discount> : <span>&mdash;</span>}
           <BtnAlign>
             <Button size='small' variation='secondary' name='duplicate'
                     onClick={handleDuplicate} disabled={isCreating}>
               <HiOutlineDocumentDuplicate/>
             </Button>
             <Button size='small' variation='secondary' name='edit'
                     onClick={() => setShowForm(show => !show)}>
               <HiOutlinePencil/>
             </Button>
             <Button size='small' variation='danger' name='delete'
                     onClick={() => deleteCabin(cabinId)} disabled={isDeleting}>
               <HiOutlineTrash/>
             </Button>

           </BtnAlign>
         </TableRow>
         {showForm && <CreateCabinForm cabinToEdit={cabin}/>}
       </>
  )
}

export default CabinRow;