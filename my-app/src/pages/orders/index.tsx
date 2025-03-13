"user client";

import OrderTables from "@/components/OrderTables";
import MainLayout from "@/layouts/MainLayout";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React  from "react";

const Orders = () =>{
    const {data:session, status} = useSession();
    const router = useRouter();
    if(status === "unauthenticated"){
        router.push("/");
    }

    return (
        <MainLayout>
           <OrderTables status={status} session={session}  />
        </MainLayout>
    )
}

export default Orders;
