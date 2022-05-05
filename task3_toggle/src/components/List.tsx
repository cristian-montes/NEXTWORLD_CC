import React,{useEffect, useState} from "react";
import data from "../data";

const List:React.FC = () => {
    const [planetState, setPlanetState] = useState(false);
    // const [singlePlanet, setSinglePlanet] = useState(false);
    const [DATA, setDATA] = useState(data)

    useEffect(()=>{

    })

   const showAll = () => {
       setPlanetState(true)
   }

   const hideAll = () => {
       setPlanetState(false)
   }


 const togglePlanetDescription = (titleOfplanet:string) => {
    for(let i = 0; i<DATA.length; i++){
        if(titleOfplanet === data[i].title){
            if(!DATA[i].descriptionVisible){
                data[i].descriptionVisible = true
                console.log('1', data[i].descriptionVisible )
             
            } else{
                // data[i].descriptionVisible = false
                // console.log('2', data[i].descriptionVisible )
        

            }

        }
    }
 }



    return(
        <ul>
            <button id='btn-show-all' onClick={showAll}> Show All </button>
            <button id='btn-hide-all' onClick={hideAll}>Hide All</button>
            {DATA.map((planet) => {
                return(
                    <div key={planet.title}>
                        <header>{planet.title}</header>
                        {planetState ? <article>{planet.description}</article>:<span></span> }
                    
                        <button
                            onClick={()=>( togglePlanetDescription(planet.title))}
                        >
                            toggle description
                        </button>
                    </div>
                  
                    
                )
            })}
        </ul>
    )
}

export default List;