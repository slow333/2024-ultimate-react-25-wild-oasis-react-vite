import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles.js";
import Button from "./ui/Button.jsx";
import Input from "./ui/Input.jsx";
import Heading from "./ui/Heading.jsx";
import Row from "./ui/Row.jsx";


const StyledApp = styled.div`
   padding: 20px;
`

function App() {

  return (
    <>
      <GlobalStyles/>
      <StyledApp>
        <Row type='vertical'>
          <Heading as='h1'>Wild Oasis booking App </Heading>
          <Heading as='h2'>Check in and out </Heading>
          <Row>
            <Button
              onClick={() => console.log('버튼 클릭 시험')}>Styled button</Button>
            <Button  variation='secondary' size='small'
              onClick={() => console.log('버튼 클릭 시험')}>Styled button</Button>
          </Row>
          <Row type='vertical'>
            <Heading as='h3'>Form </Heading>
            <form>
              <Row>
                <Input type='number' value={''} placeholder='booking name'/>
                <Input type='number' value={'test'} placeholder='booking name'/>
              </Row>
            </form>
          </Row>
        </Row>
      </StyledApp>
    </>
  )
}

export default App
