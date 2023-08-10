import { useQuery } from "@tanstack/react-query";


const useProducts = () => {
    const {data: products=[],refetch} = useQuery({
        queryKey:['products'],
        queryFn:async() =>{
           const res = await fetch('https://eduvalt-server-site.vercel.app/products')
           return res.json()
        }
        
      })
      return[products,refetch]
};

export default useProducts;