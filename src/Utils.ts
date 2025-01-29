import { Attributes } from "react"
import Attribute from "./components/Attribute";


export const characterMeetsMinReq = (characterAttributes: Attributes,Class) => {
   const temp = Object.keys(characterAttributes).every(element => {
        return (characterAttributes[element] >= Class[element]);
   })
   return temp;
}

export const calculateAttributeModifier = (attributeValue) => {
   return Math.floor((attributeValue - 10)/2);
}

