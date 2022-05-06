import React,{useEffect, useState} from "react";

interface listProps {
    title: string,
    description: string,
    descriptionVisible: boolean,
    planetState: boolean,
}

const ListItem:React.FC<listProps> = ({title, description, descriptionVisible,planetState}) => {
    const[visible, setVisible] = useState<boolean>(false);


    return(
        <div>
          <header>{title}</header>
            {planetState || visible ? <article>{description}</article>:<span></span> }
                    
            <button
                onClick={()=>( setVisible(!visible))}
            >
                toggle description
            </button>
        </div>
    )

}

export default ListItem;