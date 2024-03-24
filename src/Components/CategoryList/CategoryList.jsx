import UseDonationData from "../../Hooks/UseDonationData/UseDonationData";
import CardDefault from "../CardDefault/CardDefault";


const CategoryList = () => {
    const { data, loading } = UseDonationData()
    // console.log(data)
    return (
        <div className="grid grid-cols-4 gap-8 max-w-7xl py-3 mx-auto mt-12">
            {
                data.map(item=><CardDefault  key={item.id} item={item}/>)
            }
        </div>
    );
};

export default CategoryList;