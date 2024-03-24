import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const CardDefault = ({ item }) => {
    const { id, title, category, image, cardBg, textColor, categoryBg } =
        item || {};
    return (
        <div>
            <Link to={`/donation-details/${id}`}>
                <Card style={{ backgroundColor: cardBg }} className="mt-6 overflow-hidden shadow-none cursor-pointer p-1">
                    <CardHeader color="blue-gray" className="rounded-xl m-0">
                        <img
                            src={image}
                            alt="card-image"
                        />
                    </CardHeader>
                    <CardBody>
                        <Button style={{ backgroundColor: categoryBg, color: textColor }} size="sm">{category}</Button>
                        <Typography variant="h5" color="blue-gray" className="mb-2 mt-2 text-lg">
                            {title}
                        </Typography>
                    </CardBody>
                </Card>
            </Link>
        </div>
    );
};

export default CardDefault;