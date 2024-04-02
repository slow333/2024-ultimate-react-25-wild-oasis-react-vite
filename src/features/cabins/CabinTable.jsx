import styled from "styled-components";
import Spinner from "../../ui/Spinner.jsx";
import CabinRow from "./CabinRow.jsx";
import useCabins from "./useCabins.js";

const Table = styled.div`
  border: 1px solid var(--color-grey-200);

  font-size: 1.4rem;
  background-color: var(--color-grey-0);
  border-radius: 7px;
  overflow: hidden;
`;

const TableHeader = styled.header`
  display: grid;
  grid-template-columns: 0.6fr 1fr 1.4fr 1fr 1fr 1.5fr;
  column-gap: 2.4rem;
  align-items: center;

  background-color: var(--color-grey-50);
  border-bottom: 1px solid var(--color-grey-100);
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  color: var(--color-grey-600);
  padding: 1.6rem 2.4rem;
`;

function CabinTable() {
  const { cabins, isLoading } = useCabins();

  if (isLoading) return <Spinner/>

  return (
       <Table role='table'>
         <TableHeader role='row'>
           <div>View</div>
           <div>Cabin</div>
           <div>Capacity</div>
           <div>Price</div>
           <div>Discount</div>
           <div>Actions</div>
         </TableHeader>
         {cabins.map(cabin =>
              <CabinRow key={cabin.id} cabin={cabin}/>)}
       </Table>
  )
}

export default CabinTable;