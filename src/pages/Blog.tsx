import { Link, useParams } from 'react-router-dom'
import Header from '../components/Header'
import { useEffect, useState } from 'react';
import { getSinglePost } from '../redux/thunkFunctions/Posts';
import { getPostComment, putPostComment } from '../redux/thunkFunctions/Comments';
import { useSelector } from 'react-redux';
import type { RootState } from '../redux/store';

function Blog() {
    const isLogged = useSelector((state: RootState) => state.auth.isLogged);
    const logged_username = useSelector((state: RootState) => state.auth.user?.username)
    const token = useSelector((state:RootState)=> state.auth.token);
    const { slug } = useParams();
    const [post, setPost] = useState(null);
    const [comments, setComments] = useState<Array<object>|null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [commentsLoading, setCommentsLoading] = useState(true);
    const [CommentsError, setCommentsError] = useState<string | null>(null);
    useEffect(() => {
        const getPost = async () => {
            try {
                const data = await getSinglePost(slug);
                setPost(data || data); // Adjust based on your API response structure
            } catch (err: any) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        getPost();
        // getComments();
    }, [])
    const [formData, setFormData] = useState<{content:string,user_name:string|undefined,post_slug:string}>({
        content: "",
        user_name: logged_username,
        post_slug: ""

    });
    const getComments = async () => {
        try {
            const data = await getPostComment(slug);
            setComments(data.comments); // Adjust based on your API response structure
        } catch (err: any) {
            setCommentsError(err.message);
        } finally {
            setCommentsLoading(false);
        }
        console.log(comments)
    };
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        formData.post_slug = post?.data.authors.slug;
        console.log(formData)
        // const result = await dispatch(login(formData));
        // email: "abc@abc.abc", password: "Admin!23456" }
        // const result = dispatch(register(formData))
        // if (register.fulfilled.match(result)) {
        //     navigate('/');
        // }
        const data = await putPostComment(formData,token);
        console.log(data)
        if (data) {
            setComments((prev) => [...prev, data.comments]); 
            setFormData({
            content: "",
            user_name: logged_username,
            post_slug: ""
        });
        }


    };
    if (loading) return (<><Header /><p>Loading posts...</p></>);
    if (error) return (<><Header /><p>Error: {error}</p></>);


    return (

        <>


            <Header />


            <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">


                <img src="/images/sheet-music-8463988_960_720.jpg" className="w-full rounded-lg mb-6 object-cover" />


                <h1 className="text-3xl font-bold mb-2">{post?.data.authors.metadata.title}</h1>
                <div className="text-sm text-gray-500 mb-10">By <span className="font-medium text-gray-700">{post.data.authors.author}</span> • {post.data.authors.publish_date}</div>


                <article className="space-y-6 text-lg leading-relaxed">
                    <p>
                        {post?.data.authors.metadata.content}
                    </p>

                    <img src="/images/sheet-music-8463988_960_720.jpg" className="w-full rounded-lg" />

                    <p>
                        First, we start with a responsive layout that adapts well to all devices. Using Tailwind’s utility classes, we can manage spacing, typography, and images with ease.
                    </p>
                    <img src="/images/sheet-music-8463988_960_720.jpg" alt="Blog Image" className="w-full h-40 object-cover" />

                    <p>
                        You can place images in between your text to illustrate ideas, showcase products, or break up long sections of content.
                    </p>

                    <img src="/images/sheet-music-8463988_960_720.jpg" className="w-full rounded-lg" />

                    <p>
                        Responsive image handling is key. Use the <code>object-cover</code> and <code>rounded-lg</code> classes for a polished look.
                    </p>

                    <blockquote className="border-l-4 border-blue-600 pl-4 italic text-gray-600">
                        “Design is not just what it looks like and feels like. Design is how it works.” – Steve Jobs
                    </blockquote>

                    <p>
                        Whether you're writing tutorials, opinion pieces, or tech deep-dives, a clean structure with flexible media makes your blog more readable and visually appealing.
                    </p>

                    <img src="/images/sheet-music-8463988_960_720.jpg" className="w-full rounded-lg" />

                    <p>
                        That’s it! With Tailwind CSS, your blog can look modern, fast, and mobile-friendly in just a few lines of code.
                    </p>
                </article>
                <div className="mt-16 border-t pt-10">
                    <h2 className="text-2xl font-bold mb-6">Comments</h2>


                    <div className="space-y-6 mb-10">

                        {comments == null ? (<>   <button
                            onClick={() => { getComments() }}
                            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-200"
                        >
                            Get Comment
                        </button></>) : (
                            comments.map((comment: any) => (
                                <div key={comment.id} className="border rounded-lg p-4">
                                    <div className="text-sm text-gray-500 mb-2">{comment.users.name} • {
                                        new Date(comment.created_at).toLocaleDateString('en-US', {
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric',
                                        })}</div>
                                    <p className="text-gray-800">{comment.content}</p>
                                </div>)
                            )
                        )}


                    </div>
                    {/* <button onClick={() => { getComments() }}> get Comments</button> */}

                    <h3 className="text-xl font-semibold mb-4">Leave a Comment</h3>

                    {!isLogged ? (<Link to={"/login"}><button
                        type="submit"
                        className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-200"
                    >
                        Login to Comment
                    </button></Link>) : (<form className="space-y-4" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-1">Your Comment</label>
                            <textarea
                                onChange={handleChange}
                                name="content"
                                value={formData.content}
                                rows={4}
                                className="w-full border rounded-lg p-3 resize-none focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                placeholder="Write your comment here..."
                                required
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-200"
                        >
                            Post Comment
                        </button>
                    </form>)

                    }

                </div>


                <div className="mt-10">
                    <h3 className="font-semibold text-sm uppercase text-gray-500 mb-2">Tags</h3>
                    <div className="flex flex-wrap gap-2">
                        <span className="bg-blue-100 text-blue-600 text-sm px-3 py-1 rounded-full">Tailwind</span>
                        <span className="bg-blue-100 text-blue-600 text-sm px-3 py-1 rounded-full">CSS</span>
                        <span className="bg-blue-100 text-blue-600 text-sm px-3 py-1 rounded-full">Web Design</span>
                    </div>
                </div>
            </main>

            {/* <!-- Footer (reuse or simple version) --> */}
            <footer className="bg-gray-900 text-gray-400 text-sm py-6 mt-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    &copy; 2025 MyLogo. All rights reserved.
                </div>
            </footer>
        </>
    )
}

export default Blog