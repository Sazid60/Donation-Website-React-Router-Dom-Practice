
import CardDefault from "../CardDefault/CardDefault";


// eslint-disable-next-line react/prop-types
const CategoryList = ({filteredData}) => {
    
    // console.log(data)
    return (
        <div className="grid grid-cols-4 gap-8 max-w-7xl py-3 mx-auto mt-12">
            {
                // eslint-disable-next-line react/prop-types
                filteredData.map(item=><CardDefault  key={item.id} item={item}/>)
            }
        </div>
    );
};

export default CategoryList;