"use client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

const DeleteButton = ({id}:{id:string}) => {
    const{data:session, status} = useSession();

    const router = useRouter();

    const queryClient = useQueryClient();
    const mutation = useMutation({
        mutationFn: async ({id}:{id:string}) => {
           const res= await fetch(`/api/products/${id}`, {
                headers:{
                    "Content-Type": "application/json",
                },
                method:"DELETE"
            });  
            if (!res.ok) {
                throw new Error("Failed to delete the product");
            } 
            router.push("/");
        },
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey:["products"]});
        },
        onError: () => {
            toast.error("Error deleting the product");
        }
    })
    if(status ==="loading"){
        return <p>Loading...</p>
    }

    if(status === "unauthenticated" || !session?.user.isAdmin){
        return;
    }

    const handleDelete =(id:string) => {
        mutation.mutate({id});
        toast.success("The product has been deleted");
    }
    return (
        <button className="bg-white p-3 rounded-md absolute top-4 right-4" onClick={() => handleDelete(id)}>
            <Image src="/assets/icons8-delete-24.png" width={25} height={25} alt="delete" />
        </button>
    );
}

export default DeleteButton;