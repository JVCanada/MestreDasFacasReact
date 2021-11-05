import {
  BrowserRouter as Router
} from "react-router-dom";
import { Routes } from './routes'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/template/Header/Header'
import Footer from './components/template/Footer/Footer'
import FormTest from "./pages/Register/FormTest";

function App() {
  return (
    <>
      <FormTest/>
      {/* <Header/>
      <Router>
        <Routes/>
      </Router>
      <Footer/> */}
    </>
  );
}

export default App;