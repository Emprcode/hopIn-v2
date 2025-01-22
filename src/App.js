import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LandingPage from "./user/pages/LandingPage";
import SignIn from "./admin/pages/SignIn";
import AddCar from "./admin/pages/AddCar";
import AdminCarList from "./admin/pages/AdminCarList";
import Cars from "./user/pages/Cars";
import Features from "./user/pages/Features";
import Company from "./user/pages/Company";
import Services from "./user/pages/Services";
import AdminHome from "./admin/pages/AdminHome";
import Login from "./user/pages/Login";
import { useEffect, useState } from "react";
import { getAllCars } from "./components/helper/axioHelper";

const App = () => {
  const [cars, setCars] = useState([]);
  const [carsList, setCarsList] = useState(cars);
  const [carsBrandList, setCarsBrandList] = useState([]);

  const fetchCar = async () => {
    const { result } = await getAllCars();
    setCars(result);
    setCarsBrandList(result);
  };
  useEffect(() => {
    fetchCar();
  }, []);

  const filterCarBrand = (brand) => {
    console.log(brand);
    if (brand === "Manufactural") {
      setCarsList(cars);
    } else {
      const filterList = carsBrandList?.filter((item) => item.manufacture === brand);
      setCarsList(filterList);
    }
  };

  const filteredCarPrice = (order) => {
    const sortedData = [...carsBrandList].sort((a, b) =>
      order === -1 ? a.price - b.price : b.price - a.price
    );
    setCarsList(sortedData);
  };
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={
              <LandingPage
                cars={cars}
                carsList={carsList}
                setCarBrand={(value) => filterCarBrand(value)}
                orderCarList={(value) => filteredCarPrice(value)}
              />
            }
          />
          <Route
            path='/cars'
            element={
              <Cars
                cars={cars}
                carsList={carsList}
                setCarBrand={(value) => filterCarBrand(value)}
              />
            }
          />
          <Route path='/features' element={<Features />} />
          <Route path='/company' element={<Company />} />
          <Route path='/services' element={<Services />} />
          <Route path='/sign-in' element={<Login />} />

          {/* admin */}
          <Route path='/admin/sign-in' element={<SignIn />} />
          <Route path='/admin' element={<AdminHome />} />
          <Route path='/admin/addcar' element={<AddCar />} />
          <Route path='/admin/carlist' element={<AdminCarList />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
};

export default App;
