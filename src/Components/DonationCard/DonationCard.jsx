import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
} from "@material-tailwind/react";

const DonationCard = ({ item }) => {
    const { title, category, image, cardBg, textColor, categoryBg, description, price } =
        item || {};
    return (
        <Card style={{backgroundColor:cardBg}}className="w-full max-w-[48rem] flex-row">
            <CardHeader
                shadow={false}
                floated={false}
                className="m-0 w-2/5 shrink-0 rounded-r-none"
            >
                <img
                    src={image}
                    alt="card-image"
                    className="h-full w-full object-cover"
                />
            </CardHeader>
            <CardBody>
                <Button style={{ backgroundColor: categoryBg, color: textColor }} size="sm">{category}</Button>
                <Typography variant="h4" color="blue-gray" className="mb-4 mt-4">
                    {title}
                </Typography>
                <Button style={{ backgroundColor: textColor, color: "white" }} size="md">{category}</Button>
            </CardBody>
        </Card>
    );
};

export default DonationCard;