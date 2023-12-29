import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar';
import MainRoutes from './components/MainRoutes';

function App() {
  return (
    <>
   <Sidebar>
    <MainRoutes/>
   </Sidebar>
    </>
  );
}

export default App;
