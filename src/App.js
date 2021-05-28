import styled from "styled-components";
import Ofertas from "./containers/Ofertas";
import "./styles/main.css"

{/** Estilo del contenedor principal */}
const Main = styled.div`
  min-height: 100vh;
`

function App() {
  return (
    <>
      <div className="App" style={{ height: "100vh" }}>
        <header className="App-header"></header>
        <Ofertas />
      </div>
    </>
  );
}
export default App;