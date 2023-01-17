import { useEffect, useState } from 'react';
import BlogList from './BlogList';

const Home = () => {

    const [blogs, setBlogs] = useState([
        {title: 'Best tutor ever', body: 'some, some...', author: 'marius', id: 1},
        {title: 'Genial !', body: 'some, some...', author: 'dorina', id: 2},
        {title: 'Definitely ', body: 'some, some...', author: 'marius', id: 3}
    ]);

    const [name, setName] = useState('marius')

    const handleDelete = (id) =>{
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    };

    useEffect(()=>{
        console.log('use effect ran');
        console.log(name)
    },[name]);

    return ( 
        <div className="home">
           <BlogList blogs={blogs} title = "Testimonials" handleDelete = {handleDelete} />
           <button onClick={() => setName('dorina')}>change name</button>
           <p>{name}</p>
        </div>
     );
}
 
export default Home;