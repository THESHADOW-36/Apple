// import logo from './logo.svg';
// import './App.css';
import { Route, Routes } from "react-router-dom";
import Homepage from "./Component/Homepage";
import Store from "./Component/Store/Store";
import SignIn from "./Component/Sign-in/SignIn";
import SignUp from "./Component/Sign-up/SignUp";
import IPhone15Pro from "./Component/IPhone15Pro/IPhone15Pro";
import AppleBag from "./Component/AppleBag/AppleBag";
import ShopiPhone from "./Component/ShopiPhone/ShopiPhone";
import IPhonePopUp from "./Component/ShopiPhonePopUp/IPhonePopUp";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/store" element={<Store />} />
        <Route exact path="/sign-in" element={<SignIn />} />
        <Route exact path="/sign-up" element={<SignUp />} />
        <Route exact path="/iPhone15pro" element={<IPhone15Pro />} />
        <Route exact path="/bag" element={<AppleBag />} />
        <Route exact path="/shop-iphone" element={<ShopiPhone />} />
        <Route exact path="/shop-iphone15pro" element={<IPhonePopUp />} />
      </Routes>
    </div>
  );
}

export default App;
