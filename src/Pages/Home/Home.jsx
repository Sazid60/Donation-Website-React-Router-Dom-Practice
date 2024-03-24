import { useEffect, useState } from "react";
import Banner from "../../Components/Banner/Banner";
import CategoryList from "../../Components/CategoryList/CategoryList";
import UseDonationData from "../../Hooks/UseDonationData/UseDonationData";

const Home = () => {
    const [value, setValue] = useState("")
    const { data, loading } = UseDonationData()
    const [filteredData, setFilteredData] = useState([]);
    // console.log(value)


    useEffect(() => {
        setFilteredData(data);
    }, [data]);

    const handleSearch = () => {
        if (value.trim() !== "") {
            const filtered = data.filter((item) =>
                item.category.toLowerCase().includes(value.toLowerCase())
            );
            setFilteredData(filtered);
        } else {
            setFilteredData(data);
        }
    }
    return (
        <div>
            <Banner value={value} setValue={setValue} handleSearch={handleSearch} />
            <CategoryList value={value}
                data={data}
                filteredData={filteredData}
                loading={loading} />
        </div>
    );
};

export default Home;