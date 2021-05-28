import { store } from './store/Store';
import { Provider } from 'react-redux';
import { ChakraProvider } from "@chakra-ui/react"
import "./styles/main.css"
import Routes from "./routers/Routes";


function App() {
  return (
    <Provider store={store}>
      <ChakraProvider>
        <header className="App-header" style={{ height: "100vh" }}>
          <Routes/>
        </header>
      </ChakraProvider>
    </Provider>
  );
}
export default App;