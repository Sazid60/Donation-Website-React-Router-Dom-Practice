import { useEffect, useState } from "react";
import { getFromLocalStorage } from "../../Utils/localStorage";

const UseLocalStorage = () => {
    const [localData,setLocalData] = useState([])

    useEffect(() => {
        const fetchedData =  getFromLocalStorage();
        setLocalData(fetchedData)
    }, [])

    return {localData}
};

export default UseLocalStorage;