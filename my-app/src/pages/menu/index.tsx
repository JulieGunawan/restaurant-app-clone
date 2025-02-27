import MainLayout from "@/layouts/MainLayout";
import { Menu } from "@/utils/type";
// import { menus } from "@/utils/constants";
import Link from "next/link";
import React, { useEffect, useState }  from "react";

const MenuPage = () => {
    const [menus, setMenus] = useState<Menu[]>([]);
    
    useEffect(() => {
        const fetchData = async () => {
            try{
                const res = await fetch('/api/categories',{
                    cache:'no-store'
                });
            
                if(!res.ok){
                    throw new Error('Failed to fetch data');
                }
            
                const data = await res.json();
                setMenus(data);
            }
            catch (err){
                console.log(err);
            }
        };
        fetchData();
    },[]);

    return (
    <MainLayout>
        <div className = "p-4 lg:px-20 xl:px-40 h-[calc(100vh-6rem)] md:h-[calc(100vh-15rem)] flex flex-col md:flex-row">
            {menus.map(menu => (
                <Link href={`/menu/${menu.slug}`} key={menu.id} className="w-full h-1/4 md:h-1/2 xl:h-full p-8 bg-cover" style={{backgroundImage:`url(${menu.img})`}}>
                    <div className={`text-${menu.color}`}>
                        <h1 className="uppercase font-bold text-3xl">{menu.title}</h1>
                        <p className="text-sm my-4 pb-2">{menu.desc}</p>
                        <button className="hidden 2xl:block bg-red-500 text-white px-4 py-2 rounded-md">Explore</button>    
                    </div>
                </Link>
            ))}
        </div>
    </MainLayout>
)
}

export default MenuPage;