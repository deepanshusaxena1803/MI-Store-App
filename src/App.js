import './App.css';
import PreNavbar from './components/PreNavbar';
import Navbar from './components/Navbar';
import {  BrowserRouter as Router,Route,Routes } from "react-router-dom"
import Slider from "./components/Slider.js"
import data from "./data/data.json"                      // here we have given variable name= data by ourselves,we can change name by our choice,using this variable "data", we can access anything inside of json file like banner,icon,etc.
import Offers from "./components/Offers.js"
import Heading from "./components/Heading.js"
import StarProduct from "./components/StarProduct.js"
import HotAccessoriesMenu from "./components/HotAccessoriesMenu.js"
import HotAccessories from "./components/HotAccessories.js"
import ProductReviews from "./components/ProductReviews.js"
import Banner from "./components/Banner.js"
import Footer from "./components/Footer.js"
import NavbarOptions from "./components/NavbarOptions.js"







function App() {

  return (
    <Router>
      <PreNavbar/>
      <Navbar/>
      <NavbarOptions miPhones={data.miPhones} redmiPhones={data.redmiPhones} tv={data.tv} laptop={data.laptop} fitnessAndLifeStyle={data.fitnessAndLifeStyle} home={data.home} audio={data.audio} accessories={data.accessories}/>
      <Slider start={data.banner.start}/>
      <Offers offer={data.offer}/>
      <Heading text="STAR PRODUCTS"/>
      <StarProduct StarProduct={data.starProduct}/>
      <Heading text="HOT ACCESSORIES"/>
      <HotAccessoriesMenu/>

      
      <Routes>
      <Route exact path="/musicStore" element=
      {<HotAccessories music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music} />}>
      </Route>
      <Route exact path="/home" element=
      {<HotAccessories home={data.hotAccessories.home} homeCover={data.hotAccessoriesCover.home} />}>
      </Route>
      <Route exact path="/smartDevices" element=
      {<HotAccessories smartDevice={data.hotAccessories.smartDevice} smartDeviceCover={data.hotAccessoriesCover.smartDevice} />}>
      </Route>
      <Route exact path="/lifestyle" element=
      {<HotAccessories lifeStyle={data.hotAccessories.lifeStyle} lifeStyleCover={data.hotAccessoriesCover.lifeStyle} />}>
      </Route>
      <Route exact path="/mobileAccessories" element=
      {<HotAccessories mobileAccessories={data.hotAccessories.mobileAccessories} mobileAccessoriesCover={data.hotAccessoriesCover.mobileAccessories} />}>
      </Route>
      </Routes>


      <Heading text="PRODUCT REVIEWS" />
      <ProductReviews ProductReviews={data.productReviews}/>
      <Heading text="IN THE PRESS" />
      <Banner banner={data.banner.end} />
      <Footer footer={data.footer} />
    </Router>

  );
}

export default App;
