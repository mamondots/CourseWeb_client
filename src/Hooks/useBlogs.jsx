import { useQuery } from "@tanstack/react-query";


const useBlogs = () => {
    const {data: blogs=[],refetch} = useQuery({
        queryKey:['blogs'],
        queryFn:async() =>{
           const res = await fetch('https://eduvalt-server-site.vercel.app/blogs')
           return res.json()
        }
        
      })
      return[blogs,refetch]
};

export default useBlogs;