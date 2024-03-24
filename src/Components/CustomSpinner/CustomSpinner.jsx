import { Spinner } from "@material-tailwind/react";

const CustomSpinner = () => {
    return (
        <div className="flex justify-center items-center mt-4 mb-4">
            <Spinner color="red" className="h-16 w-16 text-gray-900/50" />
        </div>
    );
};

export default CustomSpinner;