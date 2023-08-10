import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import SocialLogin from "../../../SocialLogin/SocialLogin";
import Swal from "sweetalert2";


const Singup = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || '/'

    const { CreateUser, updateUserProfile } = useContext(AuthContext)

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
        CreateUser(data.email, data.password)
            .then(result => {
                const newUser = result.useForm
                console.log(newUser)
                updateUserProfile(data.firstName, data.lastName, data.photoURL)
                    .then(() => {
                        const saveUser = { name: (data.firstName + data.lastName), image: data.photoURL, email: data.email }
                        fetch('https://eduvalt-server-site.vercel.app/users', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(saveUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    reset()
                                    Swal.fire({
                                        position: 'top-end',
                                        icon: 'success',
                                        title: 'Your work has been saved',
                                        showConfirmButton: false,
                                        timer: 500
                                    })
                                }
                            })
                    })
                    navigate(from, {replace:true})
            })
    };
    return (
        <div className='lg:px-16 md:px-12 sm:px-8 px-4 py-6 bg-[#F1F5F8]'>
            <div className="text-center">
                <h2 className="text-xl font-semibold">Let's Start Your New Begin With <span className="text-[#1363DF]">MamonDots</span> </h2>
                <p className="text-xl font-bold py-2">Sing Up Now</p>
            </div>
            <div className="flex items-center justify-center relative  lg:w-[60%] w-full lg:left-[300px] py-8">
                <form onSubmit={handleSubmit(onSubmit)} className="w-full flex-col  px-[40px] space-y-2 ">

                    <div className="flex space-x-2 w-full">
                        <div>
                            <label className="py-2 text-[#26262684]">First Name</label>
                            <input {...register("firstName", { required: true })} className="border border-[#1365df34] w-full outline-none py-2 px-2 rounded" type="text" placeholder="Enter FirstName" />
                            {errors.firstName && <span className="text-[red]">firstName is required</span>}
                        </div>

                        <div>
                            <label className="py-2 text-[#26262684]">
                                Last Name</label>
                            <input {...register("lastName", { required: true })} className="border border-[#1365df34] w-full outline-none py-2 px-2 rounded" type="text" placeholder="Enter LastName" />
                            {errors.lastName && <span className="text-[red]">lastName is required</span>}
                        </div>

                    </div>

                    <div className="flex flex-col  w-[94%]">
                        <label className="py-1 text-[#26262684]">Your Email</label>
                        <input {...register("email", { required: true })} className="border border-[#1365df34] w-full outline-none py-2 px-2 rounded" type="email" placeholder="Enter Your Email" />
                        {errors.email && <span className="text-[red]">email is required</span>}
                    </div>
                    <div className="flex space-x-2 w-[94%]">
                        <div>
                            <label className="py-2 text-[#26262684]">Your Password</label>
                            <input {...register("password", {
                                required: true,
                                minLength: 6,
                                maxLength: 20,
                            })} className="border border-[#1365df34] w-full outline-none py-2 px-2 rounded" type="password" placeholder="Enter Your Password" />
                            {errors.password?.type === 'required' && <span className='text-[red] py-1'>password reuired</span>}
                            {errors.password?.type === 'minLength' && <span className='text-[red] py-1'>password must be 6 characters</span>}
                            {errors.password?.type === 'maxLength' && <span className='text-[red] py-1'>password must be less 20 characters</span>}
                        </div>

                        <div>
                            <label className="py-2 text-[#26262684]">
                                Password</label>
                            <input {...register("conformPassword", { required: true })} className="border border-[#1365df34] w-full outline-none py-2 px-2 rounded" type="password" placeholder="Enter Conform Password" />
                            {errors.conformPassword && <span className="text-[red]">conformPassword is required</span>}
                        </div>

                    </div>

                    <div className="flex flex-col  w-[94%]">
                        <label className="py-1 text-[#26262684]">Your Photo</label>
                        <input {...register("photoURL", { required: true })} className="border border-[#1365df34] w-full outline-none py-2 px-2 rounded" type="url" placeholder="Enter Photo Url" />

                    </div>

                    <div className="py-2 cursor-pointer w-[94%]">
                        <input className="border bg-[#1363DF] hover:bg-[#0b3c84] duration-300 text-white text-lg  w-full outline-none py-2 px-2 rounded" type="submit" value="Sing Up" />
                    </div>
                    <div className="py-2 cursor-pointer w-[94%]">
                        <SocialLogin></SocialLogin>
                    </div>
                    <p className="cursor-pointer">If Your Are New Here, <Link to='/login'><span className="text-[#1363DF] hover:text-[red] duration-300">Log in</span></Link> first</p>
                </form>
            </div>
        </div>
    );
};

export default Singup;