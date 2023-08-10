import React, { useContext, useEffect, useState } from 'react';
import UseCourses from '../../../Hooks/UseCourses';
import useProducts from '../../../Hooks/useProducts';
import useInstructor from '../../../Hooks/useInstructor';
import { AuthContext } from '../../../providers/AuthProvider';
import { MdCastForEducation, MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { PiChalkboardTeacher } from 'react-icons/pi';
import { AiOutlineUserAdd } from 'react-icons/ai';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, } from 'recharts';

import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

const AdminHome = () => {
    const [courses] = UseCourses()
    const [products] = useProducts()
    const [instructors] = useInstructor()

    const [user, setUser] = useState([])
    useEffect(() => {
        fetch('https://eduvalt-server-site.vercel.app/users')
            .then(res => res.json())
            .then(data => {
                setUser(data)
            })
    }, [])


    const data = [
        {
            name: 'jan',
            uv: 4000,
            product: 30,
            amt: 2400,
        },
        {
            name: 'fav',
            uv: 3000,
            product: 55,
            amt: 2210,
        },
        {
            name: 'mar',
            uv: 2000,
            product: 35,
            amt: 2290,
        },
        {
            name: 'apr',
            uv: 2780,
            product: 13,
            amt: 2000,
        },
        {
            name: 'may',
            uv: 1890,
            product: 25,
            amt: 2181,
        },
        {
            name: 'jun',
            uv: 2390,
            product: 38,
            amt: 2500,
        },
        {
            name: 'july',
            uv: 3490,
            product: 43,
            amt: 2100,
        },
    ];

    const bata = [
        { name: 'jan', value: 80 },
        { name: 'fav', value: 100 },
        { name: 'mar', value: 75 },
        { name: 'apl', value: 65 },
        { name: 'may', value: 78 },
        { name: 'jon', value: 109 },
    ];

    return (
        <div className='bg-[#e1e1e7] px-10 py-16'>
            <h2 className='text-xl font-medium text-[#418af9]'>Analytic Overview</h2>
            <div className='grid lg:grid-cols-4 lg:gap-4 mt-4'>
                <div className='bg-white p-4 text-center flex flex-col items-center rounded'>
                    <p className='px-3 py-3 text-[#1363DF] rounded-full bg-[#1365df22]'><MdCastForEducation></MdCastForEducation></p>
                    <h2 className='text-xl font-semibold text-[#082A5E] pt-2'>{courses.length}.00</h2>
                    <p className='text-[#082a5eb6]'>Totla Courses</p>
                </div>

                <div className='bg-white p-4 text-center flex flex-col items-center rounded'>
                    <p className='px-3 py-3 text-[#1363DF] rounded-full bg-[#1365df22]'><MdOutlineProductionQuantityLimits></MdOutlineProductionQuantityLimits></p>
                    <h2 className='text-xl font-semibold text-[#082A5E] pt-2'>
                        {products.length}.00</h2>
                    <p className='text-[#082a5eb6]'>Totla Products</p>
                </div>

                <div className='bg-white p-4 text-center flex flex-col items-center rounded'>
                    <p className='px-3 py-3 text-[#1363DF] rounded-full bg-[#1365df22]'><PiChalkboardTeacher></PiChalkboardTeacher></p>
                    <h2 className='text-xl font-semibold text-[#082A5E] pt-2'>{instructors.length}.00</h2>
                    <p className='text-[#082a5eb6]'>Totla Instructors</p>
                </div>

                <div className='bg-white p-4 text-center flex flex-col items-center rounded'>
                    <p className='px-3 py-3 text-[#1363DF] rounded-full bg-[#1365df22]'><AiOutlineUserAdd></AiOutlineUserAdd></p>
                    <h2 className='text-xl font-semibold text-[#082A5E] pt-2'>{user.length}.00</h2>
                    <p className='text-[#082a5eb6]'>Totla Users</p>
                </div>
            </div>
            <div className='grid lg:grid-cols-2 lg:gap-4 mt-8'>
                <div className='flex rounded flex-col items-center justify-center py-2 px-20 bg-white'>
                    <h2 className='py-4 text-[#8884D8]'>Range of products sell jan - july</h2>
                    <BarChart
                        width={450}
                        height={250}
                        data={data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 0,
                            bottom: 5,
                        }}
                        barSize={30}
                    >
                        <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
                        <YAxis />
                        <Tooltip />

                        <CartesianGrid strokeDasharray="3 3" />
                        <Bar dataKey="product" fill="#8884d8" background={{ fill: '#eee' }} />
                    </BarChart>

                </div>

                <div className='flex flex-col items-center justify-center p-8 bg-white rounded'>
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart width={500} height={500}>
                            <Pie
                                dataKey="value"
                                startAngle={180}
                                endAngle={0}
                                data={bata}
                                cx="50%"
                                cy="50%"
                                outerRadius={100}
                                fill="#8884d8"
                                label
                                
                            />
                            <Tooltip />
                        </PieChart>
                        
                    </ResponsiveContainer>

                    <h2 className=' mt-[-18vh] text-[#8884D8]'>Range of user visits jan - july</h2>
                </div>
            </div>
        </div>
    );
};

export default AdminHome;