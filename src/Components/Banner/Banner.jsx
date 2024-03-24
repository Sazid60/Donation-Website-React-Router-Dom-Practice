import { Typography } from "@material-tailwind/react";
import React from "react";
import { Input, Button } from "@material-tailwind/react";


const Banner = ({value,setValue,handleSearch}) => {
    
    const clearInput = () => {
        setValue("")
    }
    return (
        <div className="h-[450px] flex flex-col justify-center items-center relative">
            <div className="absolute inset-0 bg-[url('/public/Resources/bg.png')] bg-cover bg-center bg-no-repeat opacity-10">

            </div>
            <Typography variant="h2">I Grow By Helping People In Need</Typography>
            <div className="relative flex w-full max-w-[24rem] mt-4">
                <Input
                    type="text"
                    label="Search"
                    value={value}
                    onChange = {(e)=>setValue(e.target.value)}
                    className="pr-20"
                    containerProps={{
                        className: "min-w-0",
                    }}
                />
                <Button
                    size="sm"
                    color="red"
                    className="!absolute right-1 top-1 rounded"
                    onClick={()=>{
                        handleSearch();
                        clearInput();
                    }}
                >
                    Search
                </Button>
            </div>
        </div>
    );
};

export default Banner;