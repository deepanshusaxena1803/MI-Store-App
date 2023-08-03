import React,{useState,useEffect} from 'react'
import Navcard from "./Navcard.js"
import "../styles/NavOptions.css"

const NavbarOptions = ({miPhones,redmiPhones,tv,laptop,fitnessAndLifeStyle,home,audio,accessories}) => {

   const [miPhonesToggle, setmiPhonesToggle] = useState(false);
   const [redmiPhonesToggle, setredmiPhonesToggle] = useState(false);
   const [tvToggle, settvToggle] = useState(false);
   const [laptopToggle, setlaptopToggle] = useState(false);
   const [fitnessAndLifeStyleToggle, setfitnessAndLifeStyleToggle] = useState(false);
   const [homeToggle, sethomeToggle] = useState(false);
   const [audioToggle, setaudioToggle] = useState(false);
   const [accessoriesToggle, setaccessoriesToggle] = useState(false);

   useEffect(() => {
   
       if(window.location.pathname === "/miphones"){
        return setmiPhonesToggle(true);
       }

       if(window.location.pathname === "/redmiphones"){
        return setredmiPhonesToggle(true);
       }

       if(window.location.pathname === "/tv"){
        return settvToggle(true);
       }

       if(window.location.pathname === "/laptops"){
        return setlaptopToggle(true);
       }

       if(window.location.pathname === "/lifestyle"){
        return setfitnessAndLifeStyleToggle(true);
       }

       if(window.location.pathname === "/home"){
        return sethomeToggle(true);
       }

       if(window.location.pathname === "/audio"){
        return setaudioToggle(true);
       }

       if(window.location.pathname === "/accessories"){
        return setaccessoriesToggle(true);
       }

   }, [])




  return (
    <div  className="navOptions">


        {miPhonesToggle ? miPhones.map((item,index)=>(
           <Navcard key={item.image} image={item.image} name={item.name} price={item.price} index={index} />
        )) : null } 
   

        {redmiPhonesToggle ? redmiPhones.map((item,index)=>(
           <Navcard key={item.image} image={item.image} name={item.name} price={item.price} index={index} />
        )) : null } 
   

        {tvToggle ? tv.map((item,index)=>(
           <Navcard key={item.image} image={item.image} name={item.name} price={item.price} index={index} />
        )) : null } 
   

        {laptopToggle ? laptop.map((item,index)=>(
           <Navcard key={item.image} image={item.image} name={item.name} price={item.price} index={index} />
        )) : null } 
   

        {fitnessAndLifeStyleToggle ? fitnessAndLifeStyle.map((item,index)=>(
           <Navcard key={item.image} image={item.image} name={item.name} price={item.price} index={index} />
        )) : null }
   

        {homeToggle ? home.map((item,index)=>(
           <Navcard key={item.image} image={item.image} name={item.name} price={item.price} index={index} />
        )) : null } 
  

        {audioToggle ? audio.map((item,index)=>(
           <Navcard key={item.image} image={item.image} name={item.name} price={item.price} index={index} />
        )) : null } 
    

        {accessoriesToggle ? accessories.map((item,index)=>(
           <Navcard key={item.image} image={item.image} name={item.name} price={item.price} index={index} />
        )) : null } 
    


    </div>
  )
}

export default NavbarOptions