import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom'; 
import NavbarC from './Components/NavbarC';
import HomeC from './Components/HomeC';
import AboutC from './Components/AboutC';
import ServicesC from './Components/ServicesC';
import ContactusC from './Components/ContactusC';
import PartnerC from './Components/PartnerC';
import LoginC from './Components/LoginC';
import SignUpC from './Components/SignUpC';
import FooterC from './Components/FooterC';
import TeamDisplay from './Pages/TeamDisplay'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import EnrollmentformC from './Pages/EnrollmentformC';
import DashboardNavbar from '../src/Dashboard/Components/DashboardNavbar'
import AddServices from '../src/Dashboard/Crud/AddServices'
import  Services  from '../src/Dashboard/Crud/Services'
import ServicesList from './Dashboard/Components/ServicesList'

import Fotter from './Dashboard/Components/Footer'
import UpdateServices from './Dashboard/Crud/UpdateServices';
import  Login from './Dashboard/Users/Login';
import  Signup  from './Dashboard/Users/Signup';
import  Forgetp from './Dashboard/Users/Forgetp';
import Dashboard from './Dashboard/Components/Dashboard'
import AdminTeamManagement from './Dashboard/Components/AdminTeamManagement'



function App() {
  const location = useLocation(); // Now it's safe to use useLocation

  const isadminroute = () => {
    return location.pathname.startsWith("/A");
  }


  return (
    <>
      {isadminroute() ? <DashboardNavbar   Title='Swirl Marketing' /> : <NavbarC />}
      <Routes>
        <Route path="/" element={<HomeC />} />
        <Route path="/about" element={<AboutC />} />
        <Route path="/services" element={<ServicesC />} />
        <Route path="/partner" element={<PartnerC />} />
        <Route path="/contact" element={<ContactusC />} />
        <Route path="/login" element={<LoginC />} />
        <Route path="/enrollment" element={<EnrollmentformC />} />
        <Route path="/signup" element={<SignUpC />} />
        <Route path="/team" element={<TeamDisplay />} />


                   {/* DashBoard/Admin-Routes */}

        <Route path="/Aaddservices" element={<AddServices />} />
        <Route path="/Aservices" element={<Services />} />
        <Route path="/Aedit/:id" element={<UpdateServices />} />
        <Route path="/Asignup" element={<Signup />} />
        <Route path="/Alogin" element={<Login />} />
        <Route path="/Aforget-pass" element={<Forgetp />} />
        <Route path="/Adashboard" element={<Dashboard />} />
        <Route path="/AservicesList" element={<ServicesList />} />
        <Route path="/Aaddteam" element={<AdminTeamManagement />} />




      </Routes>
      {/* <FooterC/> */}
      {isadminroute() ? <Fotter /> : <FooterC />}

    </>
  );
}

export default App;
