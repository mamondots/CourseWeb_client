import Blogs from "../Blogs/Blogs";
import Category from "../Category/Category";
import CoursesConten from "../CoursesSection/CoursesConten/CoursesConten";
import Events from "../Events/Events";
import Instructor from "../InstructorSection/Instructor";
import Offer from "../Offer/Offer";
import About from "./About/About";
import Banner from "./Banner/Banner";
import Brand from "./Brand/Brand";
import ShortForm from "./ShortForm/ShortForm";


const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Brand></Brand>
           <About></About>
           <CoursesConten></CoursesConten>
           <Category></Category>
           <Offer></Offer>
           <Instructor></Instructor>
           <Events></Events>
           <Blogs></Blogs>
           <ShortForm></ShortForm>
        </div>
    );
};

export default Home;