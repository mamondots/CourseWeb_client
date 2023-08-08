import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const img_hosting_token = import.meta.env.VITE_Inage_Upload_Token

const AddCourses = () => {
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        const formData = new FormData()
        formData.append('image', data.image[0])

        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgResponse => {
                const imgURL = imgResponse.data.display_url;
                const { category, title, book, hours, minutes, rating, subtitle, price } = data
                const newCourse = { category, title, book, hours, minutes, rating, subtitle, price: parseFloat(price), image: imgURL }
                console.log(newCourse)

                fetch('http://localhost:5000/courses', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(newCourse)
                })

                    .then(res => res.json())
                    .then(data => {
                        if (data.insertedId) {
                            Swal.fire({
                                icon: 'success',
                                title: 'Your work has been saved',
                            })

                        }
                        console.log(data)
                        reset()

                    })

            })



    }
    return (
        <div>
            <div className='flex flex-col items-center text-center py-2 mt-6'>
                <h2 className='text-2xl font-semibold text-[#082A5E]'>Add New Courses</h2>
                <p className='w-[50%] py-2 text-[#082a5eb8]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam veritatis eveniet sapiente placeat fugit id.</p>
            </div>

            <div className='py-6 pb-8 px-48'>
                <form onSubmit={handleSubmit(onSubmit)} className='w-full'>
                    <div className='flex flex-col w-full'>
                        <label className='py-2 text-[#5b5a5a]'>Courses Title</label>
                        <input {...register("title", { required: true })} className='w-full px-4 py-2 outline-none border border-[#999999] rounded' type="text" placeholder='Enter Title' />
                        {errors.title && <span className="text-[red]">title is required</span>}
                    </div>

                    <div className='flex flex-col'>
                        <label className='py-2 text-[#5b5a5a]'>Upload Image</label>
                        <input {...register("image", { required: true })} className='w-full px-4 py-2 outline-none border border-[#999999] rounded' type="file" placeholder='Enter Title' />
                        {errors.image && <span className="text-[red]">image is required</span>}
                    </div>

                    <div className='flex space-x-4 w-full'>
                        <div className='flex flex-col w-full'>
                            <label className='py-2 text-[#5b5a5a]'>Category</label>
                            <select {...register("category", { required: true })} className='w-full px-4 py-2 outline-none border border-[#999999] rounded'>
                                <option>Choose Category</option>
                                <option>Front-End</option>
                                <option>Back-End</option>
                                <option>Full-Stack</option>
                                <option>React Developer</option>
                            </select>
                            {errors.category && <span className="text-[red]">category is required</span>}
                        </div>

                        <div className='flex flex-col w-full'>
                            <label className='py-2 text-[#5b5a5a]'>Book</label>
                            <input {...register("book", { required: true })} className='w-full px-4 py-2 outline-none border border-[#999999] rounded' type="text" placeholder='Number of Books' />
                            {errors.book && <span className="text-[red]">book is required</span>}
                        </div>

                    </div>

                    <div className='flex space-x-4'>
                        <div className='flex flex-col w-full'>
                            <label className='py-2 text-[#5b5a5a]'>Hours</label>
                            <input {...register("hours", { required: true })} className='w-full px-4 py-2 outline-none border border-[#999999] rounded' type="text" placeholder='Enter hours' />
                            {errors.hours && <span className="text-[red]">hours is required</span>}
                        </div>

                        <div className='flex flex-col w-full'>
                            <label className='py-2 text-[#5b5a5a]'>Minutes</label>
                            <input {...register("minutes", { required: true })} className='w-full px-4 py-2 outline-none border border-[#999999] rounded' type="text" placeholder='Enter minutes' />
                            {errors.minutes && <span className="text-[red]">minutes is required</span>}
                        </div>

                    </div>

                    <div className='flex space-x-4 w-full'>

                        <div className='flex flex-col w-full'>
                            <label className='py-2 text-[#5b5a5a]'>Rating</label>
                            <input {...register("rating", { required: true })} className='w-full px-4 py-2 outline-none border border-[#999999] rounded ' type="text" placeholder='Enter rating' />
                            {errors.rating && <span className="text-[red]">rating is required</span>}
                        </div>

                        <div className='flex flex-col w-full'>
                            <label className='py-2 text-[#5b5a5a]'>Price</label>
                            <input {...register("price", { required: true })} className='w-full px-4 py-2 outline-none border border-[#999999] rounded' type="text" placeholder='Enter price' />
                            {errors.price && <span className="text-[red]">price is required</span>}
                        </div>

                    </div>

                    <div className="py-2">
                        <label className='py-2 text-[#5b5a5a]'>Description</label>
                        <textarea {...register("subtitle", { required: true })} className='w-full px-4 py-2 outline-none border border-[#999999] rounded' placeholder='Course Description' cols="30" rows="5"></textarea>
                        {errors.subtitle && <span className="text-[red]">Description is required</span>}
                    </div>
                    <div className="px-4 py-3 rounded text-white bg-[#1363DF] hover:bg-[#061E43] duration-300 inline-block cursor-pointer">
                        <input type="submit" value="Add Course" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddCourses;