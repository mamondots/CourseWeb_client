import { useQuery } from "@tanstack/react-query";

const UseCourses = () => {
   const {data: courses=[],refetch} = useQuery({
     queryKey:['courses'],
     queryFn:async() =>{
        const res = await fetch('http://localhost:5000/courses')
        return res.json()
     }
     
   })
   return[courses,refetch]
};

export default UseCourses;