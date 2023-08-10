
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import useProducts from '../../../Hooks/useProducts';

const ManageProducts = () => {
    const [products, refetch] = useProducts()

    const handleDeleteCourse = product =>{
        fetch(`https://eduvalt-server-site.vercel.app/products/${product._id}`,{
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
                <h2 className='text-2xl font-semibold text-[#082A5E]'>Manage the Courses</h2>
                <p className='w-[50%] py-2 text-[#082a5eb8]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam veritatis eveniet sapiente placeat fugit id.</p>
            </div>

            <div className='px-20 py-12'>
                <div className="overflow-x-auto">
                    <table className="table text-center">
                        {/* head */}
                        <thead >
                            <tr className='bg-[#3282f9] text-white'>
                                <th>Image</th>
                                <th>Title</th>
                                <th>Category</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                products.map(product => <tr key={product._id}>
                                
                                    <td>
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={product.image} />
                                                </div>
                                            </div>
                                           
                                    </td>
                                    <td>{product.title}</td>
                                    <td>{product.category}</td>
                                    <td>{product.price}</td>
                                    <th className='space-x-2'>
                                        <Link>
                                        <button className="px-4 py-2 bg-[#1363DF] text-white rounded">Update</button>
                                        </Link>
                                        <button onClick={() => handleDeleteCourse(product)} className="px-4 py-2 bg-[#f53939] text-white rounded hover:bg-[#6f0c0c] cursor-pointer duration-300">Delete</button>
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

export default ManageProducts;