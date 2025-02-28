import MainLayout from "@/layouts/MainLayout";
import { sandwiches } from "@/utils/constants";
import React, { useEffect, useState }  from "react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/utils/type";
import { useRouter } from "next/router";


const CategoryPage = () => {
    const router = useRouter();
    const {category} = router.query;
    console.log("category",category)
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);  
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(`/api/products?category=${category}`, {
                    cache: 'no-store'
                });
                if (!res.ok) {
                    throw new Error('Failed to fetch product with category');
                }
                const fetchedData = await res.json();
                const fetchedProducts = fetchedData.map((product:Product) => ({
                    ...product,
                    price: Number(product.price),
                }));
                setProducts(fetchedProducts);
            }
            catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    },[category]);
    
    if (loading) return <div>Loading...</div>;

    return (
        <MainLayout>
        <div className="flex flex-wrap text-red-500">
            {
                products.length === 0 ? (
                    <div>No products found in this category</div>
                ) : (
                    products.map(product => (
                        <Link href={`/product/${product.id}`} key={product.id} className="w-full h-[60vh] sm:w-1/2 lg:w-1/3 p-4 flex flex-col gap-2 border-r-2 border-b-2 border-red-500 even:bg-fuchsia-100 group">
                            <div className="relative h-[80%]">
                                <Image src={product.image || '/assets/blankImage.jpg'} alt={product.title} fill className="object-contain" />
                            </div>
                            <div className="flex items-center justify-between font-bold ">
                                <h1 className="text-2xl uppercase p-2">{product.title}</h1>
                                <h2 className="text-xl group-hover:hidden font-bold">${product.price.toFixed(2)}</h2>
                                <button className="hidden group-hover:block bg-red-500 text-white px-4 py-2 rounded-md uppercase">Add to Cart</button>    
                            </div>
                        </Link>
                    ))
                )
            }
        </div>
        </MainLayout>
    )
}

export default CategoryPage;