import { store } from './store/Store';
import { Provider } from 'react-redux';
import { ChakraProvider } from "@chakra-ui/react"
import "./styles/main.css"
import Routes from "./routers/Routes";
import styled from 'styled-components'


const StyledContainerMain = styled.main`
  height: 100vh; 
  font-family: 'DM Sans', sans-serif;
`



function App() {
  return (
    <Provider store={store}>
      <ChakraProvider>
        <StyledContainerMain className="App-header" >
          <Routes/>
        </StyledContainerMain>
      </ChakraProvider>
    </Provider>
  );
}
export default App;