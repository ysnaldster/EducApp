import styled from "styled-components";
import "./styles/main.css"
import Routes from "./routers/Routes";

{/** Estilo del contenedor principal */ }
const Main = styled.div`
  min-height: 100vh;
  background-color: #f8f5f1;
`

function App() {
  return (
    <>
      <div className="App" style={{ height: "100vh" }}>
        {/* <header className="App-header">
          <Home />
          <h1>EducApp</h1>
        </header>
         */}
        <Routes/>
      </div>
    </>
  )
}
export default App;