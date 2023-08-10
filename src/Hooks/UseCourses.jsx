import { useQuery } from "@tanstack/react-query";

const UseCourses = () => {
   const {data: courses=[],refetch} = useQuery({
     queryKey:['courses'],
     queryFn:async() =>{
        const res = await fetch('https://eduvalt-server-site.vercel.app/courses')
        return res.json()
     }
     
   })
   return[courses,refetch]
};

export default UseCourses;