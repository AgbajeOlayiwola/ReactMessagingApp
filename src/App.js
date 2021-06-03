import './App.css';
import { Box, Signin } from './Disp';
import { UserContextProvider } from '././Component/cont';
import {useCollectionData} from 'react-firebase-hooks/firestore'

function App() {
  return (
    <UserContextProvider>
    <div className="App">
      <Signin/>
      <Box/>
    </div>
    </UserContextProvider>
  );
}

export default App;
