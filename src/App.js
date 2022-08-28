import { Navigate,Route,Routes } from "react-router-dom";
import SignIn from "../src/ComponentClass/SignIn"
import SignUp from "../src/ComponentClass/SignUp"
import LandingPage from "./ComponentClass/LandingPage";
import HomePage from "./ComponentClass/HomePage";
import NotFound from "./ComponentClass/NotFound";
import Pay from "./Pay";


const App = () => {
 
  return ( 
    <Routes>
      <Route path="/" element={<LandingPage/>} />
      <Route path="/LandingPage" element={<Navigate to="/"/>}/>
      <Route path="/SignUp" element={<SignUp/>}/>
       <Route path="/SignIn" element={<SignIn/>}/>
       <Route path="/HomePage" element={<HomePage/>}/>
       <Route path="/PaystackPop" element={<Pay/>}/>
       <Route path="*" element={<NotFound/>}/>
      </Routes>
   );
}
 
export default App;

