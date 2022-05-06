import React,{useEffect, useState} from "react";
import data from "../data";
import ListItem from "./ListItem";

const List:React.FC = () => {
    const [planetState, setPlanetState] = useState(false);
    // const [singlePlanet, setSinglePlanet] = useState(false);
    const [DATA, setDATA] = useState(data)
    // const[visible, setVisible] = useState<boolean>(false);

    useEffect(()=>{

    })

   const showAll = () => {
       setPlanetState(true)
   }

   const hideAll = () => {
       setPlanetState(false)
    //    setVisible(false)
   }


 

    return(
        <ul>
            <button id='btn-show-all' onClick={showAll}> Show All </button>
            <button id='btn-hide-all' onClick={hideAll}>Hide All</button>
            {DATA.map((planet) => {
                return(
                    <div key={planet.title}>

                        <ListItem 
                            title ={planet.title}
                            description = {planet.description}
                            descriptionVisible = {planet.descriptionVisible}
                            planetState={planetState}
                        />
                    </div>
                  
                    
                )
            })}
        </ul>
    )
}

export default List;