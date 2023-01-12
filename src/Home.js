import { useState } from 'react';
import BlogList from './BlogList';



const Home = () => {
    
    const [blogs, setBlog] = useState([
        {title: 'My website', body: 'ceva, ceva....', author: 'marius', id: 1},
        {title: 'Welcome !', body: 'ceva, ceva....', author: 'dorina', id: 2},
        {title: 'Tuition info', body: 'ceva, ceva....', author: 'alex', id: 3}
    ]);

    return ( 
        <div className="home">
           <BlogList blogs={blogs} title = "All Blogs !" />
        </div>
     );
}
 
export default Home;