import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../../../SocialLogin/SocialLogin";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";


const Login = () => {

    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || '/'
    const {SingIn} = useContext(AuthContext)

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        SingIn(data.email, data.password)
        .then(result =>{
            const user = result.user
            console.log(user)
            navigate(from, {replace:true})
        })
    };
    return (
        <div className='lg:px-16 w-full md:px-12 sm:px-8 px-4 py-6 bg-[#F1F5F8]'>
            <div className="text-center">
            <h2 className="text-xl font-semibold">Let's Start Your New Begin With <span className="text-[#1363DF]">MamonDots</span> </h2>
            <p className="text-xl font-bold py-2">Now Log In</p>
            </div>

            <div className="flex items-center justify-center relative  lg:w-[60%] w-full lg:left-80 py-12">
                <form onSubmit={handleSubmit(onSubmit)} className="w-full flex-col  px-[40px] space-y-2 ">
                     <div className="flex flex-col w-full">
                        <label className="py-1 text-[#26262684]">Your Email</label>
                        <input {...register("email", { required: true })} className="border border-[#1365df34] lg:max-w-xl outline-none py-2 px-2 rounded" type="email" placeholder="Enter Your Email"/>
                        {errors.email && <span className="text-[red]">This field is required</span>}
                     </div>
                     <div className="flex flex-col w-full">
                     <label className="py-1 text-[#26262684]">Your Password</label>
                        <input {...register("password", { required: true })} className="border border-[#1365df34] lg:max-w-xl outline-none py-2 px-2 rounded" type="password" placeholder="Enter Your Password"/>
                        {errors.password && <span className="text-[red]">password field is required</span>}
                     </div>
                     <p className="text-[#262626b8] cursor-pointer hover:text-[#1363DF] duration-300">Forget Password</p>
                     <div className="py-2 cursor-pointer w-full">
                     <input className="border bg-[#1363DF] hover:bg-[#0b3c84] duration-300 text-white text-lg lg:max-w-xl outline-none w-full py-2 px-2 rounded"  type="submit" value="Login" />
                     </div>
                     <div className="px-10 ml-[-8vh]">
                     <SocialLogin></SocialLogin>
                     </div>
                     <p className="cursor-pointer">If Your Are New Here, <Link to='/singup'><span className="text-[#1363DF] hover:text-[red] duration-300">Sing up</span></Link> first</p>
                    
                </form>
                
            </div>
        </div>
    );
};

export default Login;