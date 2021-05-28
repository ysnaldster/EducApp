import Home from './containers/Home.jsx'
import Header from './components/Header.jsx'
import { store } from './store/Store';
import { Provider } from 'react-redux';
import { ChakraProvider } from "@chakra-ui/react"


function App() {
  return (
    <Provider store={store}>
      <ChakraProvider>
        <header className="App-header">
          <Header/>
          <Home />
        </header>
      </ChakraProvider>
    </Provider>
  );
}
export default App;