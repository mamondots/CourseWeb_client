import { useQuery } from "@tanstack/react-query";


const useInstructor = () => {
   const {data: instructors =[],refetch, isLoading} = useQuery({
    queryKey:['instructors'],
    queryFn:async() =>{
        const res = await fetch('http://localhost:5000/instructors')
        return res.json()
    }

   })

   return [instructors,refetch,isLoading]
};

export default useInstructor;