import React  from "react";
const Notification = () =>{
    return (
        //this includes align items --> items-center
        <div className="h-12 bg-red-500 text-white px-4 flex items-center justify-center text-sm md:text-base cursor-pointer">
            Free delivery for all orders over $100. Order now!
        </div>
    )
}

export default Notification;