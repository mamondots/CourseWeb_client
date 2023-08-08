import { useQuery } from "@tanstack/react-query";


const useBlogs = () => {
    const {data: blogs=[],refetch} = useQuery({
        queryKey:['blogs'],
        queryFn:async() =>{
           const res = await fetch('http://localhost:5000/blogs')
           return res.json()
        }
        
      })
      return[blogs,refetch]
};

export default useBlogs;