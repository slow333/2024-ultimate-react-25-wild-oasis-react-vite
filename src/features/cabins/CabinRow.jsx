/* eslint-disable react/prop-types */
import styled from "styled-components";
import {formatCurrency} from "../../utils/helpers.js";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {deleteCabin} from "../../services/apiCabins.js";
import toast from "react-hot-toast";
import Button from "../../ui/Button.jsx";

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
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
  font-family: "Sono",serif;
  font-weight: 600;
`;

const Discount = styled.div`
  font-family: "Sono",serif;
  font-weight: 500;
  color: var(--color-green-700);
`;

function CabinRow({cabin}) {
  const {id: cabinId, image, name, maxCapacity, regularPrice, discount} = cabin;

  const queryClient = useQueryClient()

  const {isLoading: isDeleting, mutate } = useMutation({
    mutationFn: deleteCabin,
    onSuccess: () => {
      toast.success("지우기 성공 입니다.");

      queryClient.invalidateQueries({
        queryKey: ['cabins']
      })
    },
    onError: (err) => toast.error(err.message)
  })
  return (
     <TableRow role='row'>
       <Img src={image} alt={name}/>
       <Cabin>{name}</Cabin>
       <div>최대수용객 : {maxCapacity}</div>
       <Price>{formatCurrency(regularPrice)}</Price>
       <Discount>{formatCurrency(discount)}</Discount>
       <Button size='medium' variation='danger' onClick={() => mutate(cabinId)} disabled={isDeleting}>Delete</Button>
     </TableRow>
  )
}

export default CabinRow;