import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const ManageUser = () => {
    const {data: users =[],refetch} = useQuery({
        queryKey:['users'],
        queryFn:async() =>{
            const res = await fetch('http://localhost:5000/users')
            return res.json()
        }
    
       })

       const handleMakeAdmin = user => {
        fetch(`http://localhost:5000/users/admin/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    refetch()
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} is admin now`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

    const handleDeleteUser = user =>{
        fetch(`http://localhost:5000/users/${user._id}`,{
            method:'DELETE'
        })
        .then(res => res.json())
        .then(data =>{
            if (data.deletedCount > 0) {
                Swal.fire(
                  'Deleted!',
                  'Your file has been deleted.',
                  'success'
                )
              }
            refetch()
        })
    }

    return (
        <div>
            <div className='flex flex-col items-center text-center py-2 mt-6'>
                <h2 className='text-2xl font-semibold text-[#082A5E]'>Manage Your Users</h2>
                <p className='w-[50%] py-2 text-[#082a5eb8]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam veritatis eveniet sapiente placeat fugit id.</p>
            </div>

            <div className='px-20 py-12'>
                <div className="overflow-x-auto">
                    <table className="table text-center">
                        {/* head */}
                        <thead >
                            <tr className='bg-[#3282f9] text-white'>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map(user => <tr key={user._id}>
                                
                                    <td>
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={user.image} />
                                                </div>
                                            </div>
                                           
                                    </td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                   
                                    <th className='space-x-2'>
                                        
                                        {
                                                user.role === 'admin' ? 
                                                <>
                                                <button className="px-10 py-2 bg-[#ff9c38] text-white rounded">Admin</button>
                                                </>
                                                :
                                                <>
                                                <button onClick={() => handleMakeAdmin(user)} className="px-4 py-2 bg-[#1363DF] text-white rounded  hover:bg-[#061E43] cursor-pointer duration-300">swipe admin</button>
                                                </>
                                        }
                                        
                                        <button onClick={() => handleDeleteUser(user)}  className="px-4 py-2 bg-[#f53939] text-white rounded  hover:bg-[#6f0c0c] cursor-pointer duration-300">Delete</button>
                                    </th>
                                </tr>)
                            }
                            
                        </tbody>
                   
                    </table>
                </div>
            </div>

        </div>
    );
};

export default ManageUser;