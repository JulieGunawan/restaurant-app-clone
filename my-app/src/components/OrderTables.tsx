"use client";
import { OrderStatus, Order } from "@/utils/type";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Image from "next/image";
import { toast } from "react-toastify";

const OrderTables = ({status, session}:OrderStatus ) => {
    const queryClient = useQueryClient();
    const mutation = useMutation({
        mutationFn: async ({id, status}:{id:string, status:string}) => {
           return fetch(`/api/orders/${id}`, {
                headers:{
                    "Content-Type": "application/json",
                },
                body:JSON.stringify({status}),
                method:"PUT"
            });            
        },
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey:["orders"]});
        },
        onError: () => {
            console.log("error updating the form");
        }
    })

    const {isLoading, error, data} = useQuery({
        queryKey: ["orders"],
        queryFn: async () => {
            const response = await fetch("/api/orders");
            if (!response.ok) {
                const error = await response.json().catch(()=>{});
                throw new Error(error.message || "Failed to fetch orders");
            } 
            const data = response.json();
            return data;
        }
    })
    if (isLoading || status==="loading") {
        return <div>Loading...</div>;
    }

    
   
    const handleUpdate = async (e:React.FormEvent<HTMLFormElement>,id:string) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const input = form.elements[0] as HTMLInputElement;
        const status = input.value;
        mutation.mutate({id, status});
        toast.success("The order status has been updated");
    }
    return (
        <div className="p-4 md:px-10 lg:px-20 xl:px-35  h-[calc(100vh-6rem)] md:h-[calc(100vh-15rem)]">
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
                            <tr key={order.id} className={`${order.status !== "Delivered" && "bg-red-50"}`} >
                                <td className="hidden md:block  py-6 px-1">{order.id}</td>
                                <td className="py-6 px-1">{order.createdAt.toString().slice(0,10)}</td>
                                <td className="py-6 px-1">${order.price}</td>
                                <td className="hidden md:block py-6 px-1">{order.products.map((product)=>product.title).join(", ") }</td>
                                {session?.user.isAdmin ? (      
                                    <td className="py-6 px-1">
                                        <form className="flex flex-row gap-4 items-center justify-center" 
                                        onSubmit={(e)=>handleUpdate(e,order.id)}>
                                            <input placeholder={order.status} className="p-2 ring-1 ring-red-1-- rounded-md"/>
                                            <button type="submit" className="p-2 rounded-full bg-red-400">
                                                <Image src="/assets/icons8-edit-24.png" height={20} width={20} alt="edit"></Image>
                                            </button>
                                        </form>
                                    </td>
                                ) : (
                                        <td className="py-6 px-1">{order.status}</td>   
                                    )
                                }
                            </tr>                       
                        )
                    })}
                
                </tbody>
            </table>
        </div>
    )
}

export default OrderTables