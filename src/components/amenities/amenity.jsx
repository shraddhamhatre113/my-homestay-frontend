import {MdTv, MdMicrowave,MdKitchen,MdPermScanWifi,MdSmokingRooms,MdOutlineFamilyRestroom,MdFireHydrantAlt,MdCoffeeMaker,MdCleaningServices,MdIron,MdCable} from 'react-icons/md'
import{FaIntercom, FaUtensilSpoon, FaHotTub} from "react-icons/fa";
import {CgSmartHomeHeat,CgSmartHomeRefrigerator} from "react-icons/cg"
import {BiFirstAid,BiSolidWasher,BiDish, BiBlanket,BiSolidDryer,BiSolidParking} from 'react-icons/bi'
import {GiGasStove,GiChickenOven, GiSaloon} from "react-icons/gi";
import {PiCoatHanger} from "react-icons/pi";
import './amenity.css';

const amenitiesIcons = {
"TV":<MdTv></MdTv>,
"Cable TV":<MdCable></MdCable>,
"Wifi":<MdPermScanWifi></MdPermScanWifi>,
"Kitchen":<MdKitchen></MdKitchen>,
"Smoking allowed":<MdSmokingRooms></MdSmokingRooms>,
"Buzzer/wireless intercom":<FaIntercom/>,
"Heating":<CgSmartHomeHeat></CgSmartHomeHeat>,
"Family/kid friendly":<MdOutlineFamilyRestroom></MdOutlineFamilyRestroom>,
"First aid kit":<BiFirstAid></BiFirstAid>,
"Fire extinguisher":<MdFireHydrantAlt></MdFireHydrantAlt>,
"Bed linens":<BiBlanket></BiBlanket>,
"Extra pillows and blankets":<BiBlanket></BiBlanket>,
"Microwave":<MdMicrowave/>,
"Coffee maker":<MdCoffeeMaker></MdCoffeeMaker>,
"Refrigerator":<CgSmartHomeRefrigerator></CgSmartHomeRefrigerator>,
"Dishwasher":<BiSolidWasher/>,
"Dishes and silverware":<BiDish/>,
"Cooking basics":<FaUtensilSpoon/>,
"Oven":<GiChickenOven/>,
"Iron":<MdIron></MdIron>,
"Stove":<GiGasStove/>,
"Cleaning before checkout":<MdCleaningServices></MdCleaningServices>,
"Waterfront":"",
"Hangers":<PiCoatHanger/>,
"Hot water":<FaHotTub></FaHotTub>,
"Hair dryer":<GiSaloon></GiSaloon>,
"Paid parking off premises":<BiSolidParking></BiSolidParking>
}

const Amenities = (props)=> {
   
    return( 
        <div className="row mt-5">
        <div className="col-12">
          <h4>Offered Amenities</h4>

          <ul className="list-unstyled d-flex row mt-4">
            {props.offerAmenities.map((amenity)=> {
                return(<li className="col-4 amenity">
                <span className='icon'>
                  {amenitiesIcons[amenity]}
                </span>
                <span>{amenity}</span>
              </li>)
            })} 
            
            
          </ul>
        </div>
      </div>
  )
};
export default Amenities