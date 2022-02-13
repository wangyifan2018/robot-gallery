import React from "react";

interface RobotProps {
    id: number,
    name: string,
    email: string
}

const Robot : React.FC<RobotProps> = ({id, name, email})=>{
    return <li>
        <img src={`https://robohash.org/${id}`} alt="robot" />
        <h2>{name}</h2>
        <head>{email}</head>
    </li>;
};

export default Robot;