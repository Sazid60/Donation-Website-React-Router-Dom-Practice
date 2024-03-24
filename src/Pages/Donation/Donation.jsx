import { useEffect, useState } from "react";
import { getFromLocalStorage } from "../../Utils/localStorage";
import UseLocalStorage from "../../Hooks/UseLocalStorage/UseLocalStorage";
import DonationCard from "../../Components/DonationCard/DonationCard";
import { Button } from "@material-tailwind/react";

const Donation = () => {
    const { localData } = UseLocalStorage()
    const [showAll, setShowAll] = useState(false)
    // console.log(localData)
    const handleShowAll = () => {
        setShowAll(!showAll)
    }

    if(localData.length === 0){
        return <div className="mt-20 text-center"><p className="font-bold">No Donation Is Done !</p></div>
    }
    return (
        <>
            <div className="grid grid-cols-2 gap-8 mt-10 container mx-auto">
                {
                    localData.slice(0, showAll ? localData.length : 4).map(item => <DonationCard key={item.id} item={item} />)
                }
            </div>
            {
               localData.length >2 ? <div className="mt-4 text-center">
                    <Button onClick={handleShowAll} color="green" size="lg">{showAll ? 'Show Less' : 'Show All'}</Button>
                </div> : null
            }
        </>
    );
};

export default Donation;