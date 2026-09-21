import ClassCompo from './Components/classcompo';
import FunctionCompo from './Components/functioncompo';
import Counterclass from './Components/counterclass'; 
import Mounting from './Components/life-cycle-method/mounting';
import UpdatingCounter from './Components/life-cycle-method/updating';
import UnMounting from './Components/life-cycle-method/unmounting';
import { BrowserRouter, Link, Route, Router, Routes } from 'react-router-dom';
import Home from './Components/reactRouterDomCpm/Home';
import About from './Components/reactRouterDomCpm/About';
import LINKcomponent from './Components/reactRouterDomCpm/LINKcomponent';
import useNavigateComp from './Components/reactRouterDomCpm/UseNavigateComp';
import UseNavigateComp from './Components/reactRouterDomCpm/UseNavigateComp';
import UseParamComp from './Components/reactRouterDomCpm/UseParamComp';
import NestedRoute from './Components/reactRouterDomCpm/NestedRoute';
import Navbar from './Components/reactRouterDomCpm/Navbar';
import UseStateHook from './Components/hooks/usestate/UseStateHook';
import ShowHide from './Components/hooks/ShowHide';

function App() {

  return (
    <>
    { /*<ClassCompo/> 
      <FunctionCompo/>
      <Counterclass/>
      <Mounting />
      <UpdatingCounter />
      <UnMounting />*/}

      <BrowserRouter>
      <Routes>
        <Route path="/" element={<ClassCompo/>} />
        <Route path="/ClassCounter" element={<Counterclass/>} />

        {/* react router dom */}

        <Route path="/Home" element={<Home/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/LINKcomponent" element={<LINKcomponent/>} />
        
        

        <Route path="/UseNavigateComp" element={<UseNavigateComp/>} />

        <Route path="/UseParamComp/:id" element={<UseParamComp/>} />

        <Route path="/nestedRoute" element={<NestedRoute/>} >
          <Route path="home" element={<Home/>} />
          <Route path="about" element={<About/>} />
        </Route>
{/* navbar */}
        <Route path="/navbar" element={<Navbar/>}>
        <Route index element={<Home/>} />
        <Route path="about" element={<About/>} />
        <Route path="Counterclass" element={<Counterclass/>} />
</Route>
        <Route path="/usestatehook" element={<UseStateHook/>} />
        <Route path="/showhide" element={<ShowHide/>} />

      </Routes>
      </BrowserRouter>

</>
)
}


 
export default App

//main.jsx -> app.jsx -> component -> browser

