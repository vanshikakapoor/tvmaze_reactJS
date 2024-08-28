import NameList from "./NameList";
import { useState,useEffect } from "react";

export default function SearchBar() {
    const [name, setName] = useState('');
    const[names, setNames] = useState(["Alex", "Bunny", "Chuck", "Era", "Fin", "Garry", "Homes"]);
    const[originalList, setOriginalList] = useState(["Alex", "Bunny", "Chuck", "Era", "Fin", "Garry", "Homes"]);
    
    useEffect(() => {
        setNames(originalList);
        },[])

    const HandleChange = (event) => {
        
        console.log(event.target.value);
        setName(event.target.value);
        setNames(originalList); 
    }

    const onNameSubmit = (event) => {
        event.preventDefault();
        const updatedNames = names.filter( (n) => {
                if (n === "") {
                    setNames(originalList);     
                }
                   return n === name
         });
         setNames(updatedNames);
    }
    return(
        <div>
            <form onSubmit={onNameSubmit} >
                <input value={name} onChange={HandleChange} />
                <button onClick={onNameSubmit}> Search Here! </button>
            </form>

        <div>
            {
                <NameList searchContent={name} original= {names}/>
            }
            
        </div>
        </div>
    );
}