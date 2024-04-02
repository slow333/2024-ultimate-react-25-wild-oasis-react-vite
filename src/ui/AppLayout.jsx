import {Outlet} from "react-router-dom";
import Sidebar from "./Sidebar.jsx";
import Header from "./Header.jsx";
import styled from "styled-components";

const Main = styled.main`
  background-color: var(--color-grey-50);
  padding: 4rem 3rem 5rem;
`
const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 22rem 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;
`
const Container = styled.div`
  max-width: 100rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`
const AppLayout = () => {
  return (
       <StyledAppLayout>
         <Header/>
         <Sidebar/>
         <Main>
           <Container>
             <Outlet/>
           </Container>
         </Main>
       </StyledAppLayout>
  );
};

export default AppLayout;