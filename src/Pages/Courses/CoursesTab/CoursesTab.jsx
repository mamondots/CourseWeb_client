import { useState } from 'react';
import './CoursesTab.css'
import { FaCheck,FaYoutube } from 'react-icons/fa';
import { BiLockAlt } from 'react-icons/bi';

import emtyImg from '../../../assets/img/emptystate.svg'

const CoursesTab = () => {
    const [toggle, setToggle] = useState(1)
    const toggleTab = (index) => {
        setToggle(index)
    }
    return (
        <div className="container py-12">
            <div className="block-tabs lg:flex  lg:space-x-6 cursor-pointer text-base font-medium ">
                <div
                    onClick={() => toggleTab(1)}
                    className={toggle === 1 ? "tabs active-tabs" : "tabs"}>Course Info
                </div>

                <div
                    onClick={() => toggleTab(2)}
                    className={toggle === 2 ? "tabs active-tabs" : "tabs"}>Curriculam
                </div>

                <div onClick={() => toggleTab(3)}
                    className={toggle === 3 ? "tabs active-tabs" : "tabs"}>Reviews
                </div>
                <div onClick={() => toggleTab(4)}
                    className={toggle === 4 ? "tabs active-tabs" : "tabs"}>Announcements
                </div>
            </div>
            <div className="contents-tabs mt-6">
                <div className={toggle === 1 ? "content active-content" : "content"}>
                    <h2 className='font-medium'>DESCRIPTION</h2>
                    <div className='py-2 text-[#7d7d7d]'>
                        <p className='py-1'>
                            <span className='text-[#262626] font-medium'>Are you new to React or need a refresher?</span> Then this course will help you get all the fundamentals of Procedural React, Object Oriented React, MYSQLi and ending the course by building a CMS system similar to WordPress, Joomla or Drupal.
                        </p>

                        <p className='py-1'>
                            <span className='text-[#262626] font-medium'>Knowing React has allowed me to make enough money to stay home and make courses like this one for students all over the world.</span> Being a React developer can allow anyone to make really good money online and offline, developing dynamic applications.
                            Knowing React will allow you to build web applications, websites or Content Management systems, like WordPress, Facebook, Twitter or even Google.
                        </p>

                        <p className='py-1'>
                            <span className='text-[#262626] font-medium'>My Approach</span><br />
                            Practice, practice and more practice. Every section inside this course has a practice lecture at the end, reinforcing everything with went over in the lectures. I also created a small application the you will be able to download to help you practice PHP. To top it off, we will build and awesome CMS like WordPress, Joomla or Drupal.
                        </p>

                    </div>

                    <div className='py-8'>
                        <h2 className='text-2xl font-semibold border-b-2 py-4 text-[#082A5E]'>What Will You Learn?</h2>
                        <div className='grid lg:grid-cols-2 gap-2 py-6 text-[#7d7d7d]'>
                            <div className='space-y-2'>
                                <p className='flex items-center'><span className='bg-[#1363DF] rounded-full inline-block py-2 px-2 text-white text-[12px]'><FaCheck></FaCheck></span>
                                    <span className='px-2'>Understand the fundamentals of healthy dieting (calories, protein, carbs, fat, vitamins & minerals)
                                    </span>
                                </p>
                                <p className='flex items-center'><span className='bg-[#1363DF] rounded-full inline-block py-2 px-2 text-white text-[12px]'><FaCheck></FaCheck></span>
                                    <span className='px-2'>
                                        Learn when, what and how much you should eat for optimal body composition
                                    </span>
                                </p>
                                <p className='flex items-center'><span className='bg-[#1363DF] rounded-full inline-block py-2 px-2 text-white text-[12px]'><FaCheck></FaCheck></span>
                                    <span className='px-2'>
                                        Lose fat faster by optimizing your meal plan
                                    </span>
                                </p>

                            </div>
                            <div className='space-y-2'>
                                <p className='flex items-center'><span className='bg-[#1363DF] rounded-full inline-block py-2 px-2 text-white text-[12px]'><FaCheck></FaCheck></span>
                                    <span className='px-2'>Create a diet that is perfect for your needs and lifestyle
                                    </span>
                                </p>
                                <p className='flex items-center'><span className='bg-[#1363DF] rounded-full inline-block py-2 px-2 text-white text-[12px]'><FaCheck></FaCheck></span>
                                    <span className='px-2'>
                                        Build more muscle by optimizing your meal plan
                                    </span>
                                </p>
                                <p className='flex items-center'><span className='bg-[#1363DF] rounded-full inline-block py-2 px-2 text-white text-[12px]'><FaCheck></FaCheck></span>
                                    <span className='px-2'>
                                        Improve immunity and energy levels with the right vitamins and minerals
                                    </span>
                                </p>

                            </div>
                        </div>
                    </div>
                </div>

                <div className={toggle === 2 ? "content active-content" : "content"}>
                    <h2 className='font-medium'>Course Curriculum</h2>

                    <div className="collapse collapse-arrow border my-2 bbb">
                        <input type="radio" name="my-accordion-2" checked="checked" />
                        <div className="collapse-title text-xl text-[#1363DF] font-medium bg-[#1365df15]">
                            Advance Concept
                        </div>
                        <div className="collapse-content text-[#26262682] cursor-pointer">
                            <div className='flex justify-between items-center py-2 '>
                                <h2 className='flex items-center'><FaYoutube></FaYoutube><span className='px-2'>Meal Planning Explained</span></h2>
                                <div className='flex items-center space-x-4'>
                                     <p>05:20</p>
                                     <p><BiLockAlt></BiLockAlt></p>
                                </div>
                            </div>

                            <div className='flex justify-between items-center py-2'>
                                <h2 className='flex items-center'><FaYoutube></FaYoutube><span className='px-2'>Macronutrients Explained</span></h2>
                                <div className='flex items-center space-x-4'>
                                     <p>08:20</p>
                                     <p><BiLockAlt></BiLockAlt></p>
                                </div>
                            </div>

                            <div className='flex justify-between items-center py-2'>
                                <h2 className='flex items-center'><FaYoutube></FaYoutube><span className='px-2'>Adjusting Your Diet To Build Muscle</span></h2>
                                <div className='flex items-center space-x-4'>
                                     <p>07:20</p>
                                     <p><BiLockAlt></BiLockAlt></p>
                                </div>
                            </div>

                            
                        </div>
                    </div>


                    <div className="collapse collapse-arrow border my-2 bbb">
                        <input type="radio" name="my-accordion-2" checked="checked" />
                        <div className="collapse-title text-xl text-[#1363DF] font-medium bg-[#1365df15]">
                            Basic Concept
                        </div>
                        <div className="collapse-content text-[#26262682] cursor-pointer">
                            <div className='flex justify-between items-center py-2 '>
                                <h2 className='flex items-center'><FaYoutube></FaYoutube><span className='px-2'>Meal Planning Explained</span></h2>
                                <div className='flex items-center space-x-4'>
                                     <p>05:20</p>
                                     <p><BiLockAlt></BiLockAlt></p>
                                </div>
                            </div>

                            <div className='flex justify-between items-center py-2'>
                                <h2 className='flex items-center'><FaYoutube></FaYoutube><span className='px-2'>Macronutrients Explained</span></h2>
                                <div className='flex items-center space-x-4'>
                                     <p>08:20</p>
                                     <p><BiLockAlt></BiLockAlt></p>
                                </div>
                            </div>

                            <div className='flex justify-between items-center py-2'>
                                <h2 className='flex items-center'><FaYoutube></FaYoutube><span className='px-2'>How Much Fat Should You Consume Per Day</span></h2>
                                <div className='flex items-center space-x-4'>
                                     <p>07:20</p>
                                     <p><BiLockAlt></BiLockAlt></p>
                                </div>
                            </div>

                            
                        </div>
                    </div>
                    
                    
                </div>

                <div className={toggle === 3 ? "content active-content" : "content"}>
                  
                    <div className='flex items-center justify-center flex-col'>
                        <img src={emtyImg} alt="" />
                        <p className='text-[#26262679] py-4'>No Data Available in this Section</p>
                    </div>
                </div>

                <div className={toggle === 4 ? "content active-content" : "content"}>
                <div className='flex items-center justify-center flex-col'>
                        <img src={emtyImg} alt="" />
                        <p className='text-[#26262679] py-4'>No Data Available in this Section</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CoursesTab;