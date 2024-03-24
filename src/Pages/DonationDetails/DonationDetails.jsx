import { useParams } from "react-router-dom";
import UseDonationData from "../../Hooks/UseDonationData/UseDonationData";
import { useEffect, useState } from "react";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Avatar,
    Tooltip,
    Button,
} from "@material-tailwind/react";

const DonationDetails = () => {
    const [singleData, setSingleData] = useState({});
    const { id } = useParams();
    const { data, loading } = UseDonationData();
    useEffect(() => {
        if (data) {
            const individualData = data.find(item => item.id === +id);
            console.log(individualData)
            setSingleData(individualData)
        }
    }, [data, id])

    const { title, category, image, cardBg, textColor, categoryBg, description,price } =
        singleData || {};

    return (
        <div>
            <Card className=" rounded-md mt-12 overflow-hidden container mx-auto shadow-none">
                <CardHeader
                    floated={false}
                    shadow={false}
                    color="transparent"
                    className="m-0 rounded-md flex justify-center items-center w-full mx-auto relative"
                >
                    <img className="w-full h-[550px] rounded-xl"
                        src={image}
                        alt="ui/ux review check"
                    />
                    <div
                        color="transparent"
                        className="absolute bottom-0 bg-opacity-40 bg-black w-full h-28 rounded-b-md flex items-center pl-8"
                    >
                        <Button
                            style={{ backgroundColor: textColor }}
                            className="rounded-sm capitalize text-xl"
                            color="red"
                        >
                            Donate {price} $
                        </Button>
                    </div>
                </CardHeader>
                <CardBody className="flex flex-col  w-full mx-auto">
                    <Typography variant="h3" color="blue-gray">
                        {title}
                    </Typography>
                    <Typography variant="lead" color="gray" className="mt-3 font-normal">
                        {description}
                    </Typography>
                </CardBody>

            </Card>
        </div>
    );
};

export default DonationDetails;