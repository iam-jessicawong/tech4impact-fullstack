import Card from "./components/Card";
import styled from "styled-components";

const Wrapper = styled.div`
  min-height: 90vh;
  display: flex;
  justify-content: center; 
  align-items: center;
  flex-direction: column;
`

export default function App() {
  return (
    <Wrapper>
      <Card></Card>
    </Wrapper>
  )
}
