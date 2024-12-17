import React from "react";

interface ButtonProps {
    title: string;
    style: string;
}
const Button: React.FC<ButtonProps> = ({title, style}) => {
    return (
        <button className={`px-4 py-2 font-semibold text-white bg-blue-500 hover:bg-blue-600 transition ${style}`}>
            {title}
        </button>
    )
}
export default Button