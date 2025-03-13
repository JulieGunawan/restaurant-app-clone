"use client";
import { OrderStatus, Order } from "@/utils/type";
import { useQuery } from "@tanstack/react-query";


const OrderTables = ({status}:OrderStatus ) => {
    const {isLoading, error, data} = useQuery({
        queryKey: ["orders"],
        queryFn: async () => {
            const response = await fetch("/api/orders");
            console.log("response", response);
            if (!response.ok) {
                const error = await response.json().catch(()=>{});
                console.log("error", error);
                throw new Error(error.message || "Failed to fetch orders");
            } 
            const data = response.json();
            return data;
        }
    })
    if (isLoading || status==="loading") {
        return <div>Loading...</div>;
    }

    return (
        <div className="p-4 md:px-10 lg:px-20 xl:px-35  h-[calc(100vh-6rem)] md:h-[calc(100vh-15rem)] ">
            <table className="w-full border-separate border-spacing-2">
                <thead>
                    <tr className="text-left">
                        <th className="hidden md:block">Order ID</th>
                        <th>Date</th>
                        <th>Price</th>
                        <th className="hidden md:block">Product</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((order:Order) => {
                        return (
                            <tr key={order.id} className="text-sm md:text-base bg-red-50">
                                <td className="hidden md:block  py-6 px-1">{order.id}</td>
                                <td className="py-6 px-1">{order.createdAt.toString().slice(0,10)}</td>
                                <td className="py-6 px-1">${order.price}</td>
                                <td className="hidden md:block py-6 px-1">{order.products.map((product)=>product.title).join(", ") }</td>
                                <td className="py-6 px-1">{order.status}</td>
                            </tr>                       
                        )
                    })}
                
                </tbody>
            </table>
        </div>
    )
}

export default OrderTables