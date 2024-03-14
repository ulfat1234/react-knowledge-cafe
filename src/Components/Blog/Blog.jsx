import { IoBookmarksOutline } from "react-icons/io5";
import PropTypes from 'prop-types';

const Blog = ({ blog, handleAddBookmark, handleMarkAsRead}) => {
    const {id, title, cover, author, author_img, posted_date, reading_time, hashtags } = blog;
    return (
        <div className='mb-20 space-y-4'>
            <img className='w-full mb-8' src={cover} alt={`Cover picture of the title ${title}`} />
            <div className='flex justify-between mb-4'>
                <div className='flex'>
                    <img className='w-14' src={author_img} alt="" />
                    <div className='ml-6'>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{posted_date} </p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                    <button
                        onClick={() => handleAddBookmark(blog)}
                        className="ml-2">
                        <IoBookmarksOutline></IoBookmarksOutline></button>
                </div>
            </div>
            <h2 className="4xl">{title}</h2>
            <p>
                {
                    hashtags.map((hashtags, idx) => <span key={idx}><a href="">#{hashtags} </a></span>)
                }
            </p>
            <button onClick={()=>handleMarkAsRead(id, reading_time)} className="text-red-500 font-bold underline">Mark As Read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddBookmark: PropTypes.func,
    handleMarkAsRead: PropTypes.func
}

export default Blog;