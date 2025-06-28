import { Provider } from 'react-redux';
import { persistor, store } from './reducer';
import { PersistGate } from 'redux-persist/integration/react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Notify from './Pages/global/Notify';
import Signup from './Pages/global/Signup';

function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <HashRouter>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/signup" element={<Signup/>}></Route>
            </Routes>
            <Notify/>
          </HashRouter>
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
