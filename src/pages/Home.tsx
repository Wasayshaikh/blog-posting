import Slider from "react-slick";
import 'react-multi-carousel/lib/styles.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import Header from "../components/Header";
import { useEffect, useState } from "react";
import { getNewPost, getTrendingPost } from "../redux/thunkFunctions/Posts";


function Home() {
  const [posts, setPosts] = useState<{status:number, data:{posts:Array<{slug:string,title:string,content:string}>}} | null>(null);
  const [newPosts, setNewPosts] = useState<{status:number, data:{posts:Array<Object>}} | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [newLoading, setNewLoading] = useState(true);
  const [newError, setNewError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTrending = async () => {
      try {
        const data = await getTrendingPost();
        setPosts(data.posts || data); // Adjust based on your API response structure
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    const fetchNewPost = async () => {
      try {
        const data = await getNewPost();
        setNewPosts(data.posts || data); // Adjust based on your API response structure
      } catch (err: any) {
        setNewError(err.message);
      } finally {
        setNewLoading(false);
      }
    };

    fetchNewPost();
    fetchTrending();
  }, []);
  console.log(newPosts)

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipe: true,
    draggable: true,
    touchMove: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  if (loading || newLoading) return (<><Header /><p>Loading posts...</p></>);
  if (error || newError) return (<><Header /><p>Error: {error}</p></>);
  return (

    <>
      <Header />
      <main className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-6">


          <div className="md:col-span-2 bg-white rounded-lg shadow-md overflow-hidden">
            <img src="/images/premium_photo-1720744786849-a7412d24ffbf.avif" alt="Blog Image" className="w-full h-[380px] object-cover" />
            <div className="p-6">
              <Link to={'/blog/'+posts?.data.posts[0].slug} ><h2 className="text-2xl font-bold text-gray-800 mb-2">  {posts?.data.posts[0].title}</h2></Link>
              <p className="text-gray-600 line-clamp-2">{posts?.data.posts[0].content}</p>
            </div>
          </div>


          <div className="flex flex-col gap-6">


            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src="/images/photo-1551103782-8ab07afd45c1.avif" alt="Blog Image" className="w-full h-40 object-cover" />
              <div className="p-4">
                <Link to={'/blog/'+posts?.data.posts[1].title}><h3 className="text-xl font-semibold text-gray-800 mb-1">{posts?.data.posts[1].title}</h3></Link>
                <p className="text-gray-600 text-sm line-clamp-1">{posts?.data.posts[1].title}</p>
              </div>
            </div>


            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src="/images/photo-1551103782-8ab07afd45c1.avif" alt="Blog Image" className="w-full h-40 object-cover" />
              <div className="p-4">
                <Link to={'/blog/'+posts?.data.posts[2].slug}><h3 className="text-xl font-semibold text-gray-800 mb-1">{posts?.data.posts[2].title}</h3></Link>
                <p className="text-gray-600 text-sm line-clamp-1">{posts?.data.posts[2].content}</p>
              </div>
            </div>

          </div>
        </div>

        <section className="mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <h2 className="text-2xl font-bold text-gray-800 border-1 border-gray-900 border-x-0 py-2 mb-6">Latest Articles</h2>

            <Slider {...settings}>
              {/* <!-- Article Card 1 --> */}

                {/* <!-- Trending Article 1 --> */}
              {newPosts?.data.posts.map((post: any) => (
               <div className='p-3' key={post.id}>
                <div className="min-w-[300px] max-w-sm bg-white rounded-lg hover:shadow-md ">
                  <img src="/images/photo-1551103782-8ab07afd45c1.avif" alt="Article 3" className="w-full h-40 object-cover rounded-t-lg" />
                  <div className="p-4">
                    <Link to={'/blog/'+post.slug}><h3 className="text-lg font-semibold text-gray-800">{post.title}</h3></Link>
                    <p className="text-sm text-gray-600 mt-1 line-clamp-1">{post.content}</p>
                  </div>
                </div>
              </div>


              ))}
             
            </Slider>


            <div className="">


            </div>


          </div>
        </section>

        {/* <!-- Trending Articles Section --> */}
        <section className="mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <h2 className="text-2xl font-bold text-gray-800 border-1 border-gray-900 border-x-0 py-2 mb-6">Trending Articles</h2>

            <div className="space-y-6">

              {/* <!-- Trending Article 1 --> */}
              {posts?.data.posts.map((post: any) => (
                <div key={post.id} className="bg-white rounded-lg hover:shadow-md overflow-hidden flex flex-col md:flex-row">
                  <img src="/images/photo-1551103782-8ab07afd45c1.avif" alt="Trending 1" className="w-full md:w-[200px] h-48 object-cover object-bottom-left" />
                  <div className="p-6 flex flex-col justify-center">
                    <Link to={'/blog/'+post.slug}><h3 className="text-xl font-semibold text-gray-800">{post.title}</h3></Link>
                    <p className="text-gray-600 mt-2 line-clamp-1">{post.content}</p>
                  </div>
                </div>

              ))}


            </div>
          </div>
        </section>


        {/* <!-- Newsletter Subscribe Section --> */}
        <section className="mt-20 bg-white py-12">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">Subscribe to our Newsletter</h2>
            <p className="text-gray-600 mb-6">Get the latest articles and updates directly to your inbox.</p>

            <form className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full sm:w-auto flex-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition"
              >
                Subscribe
              </button>
            </form>

          </div>
        </section>
        {/* <!-- Footer --> */}
        <footer className="bg-gray-900 text-gray-300 mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

            <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-6">

              {/* <!-- Logo / Brand --> */}
              <div>
                <a href="#" className="text-2xl font-bold text-white">MyLogo</a>
                <p className="text-gray-400 mt-2 text-sm">Sharing stories, insights, and inspiration.</p>
              </div>

              {/* <!-- Navigation Links --> */}
              <div className="flex flex-wrap gap-6 text-sm text-gray-400">
                <a href="#" className="hover:text-white">Home</a>
                <a href="#" className="hover:text-white">Blog</a>
                <a href="#" className="hover:text-white">About</a>
                <a href="#" className="hover:text-white">Contact</a>
              </div>

              {/* <!-- Social Icons (example with SVGs) --> */}
              <div className="flex space-x-4">
                <a href="#" className="hover:text-white">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.54 6.42a8.9 8.9 0 01-2.58.71 4.52 4.52 0 001.98-2.49 8.91 8.91 0 01-2.83 1.08 4.48 4.48 0 00-7.63 4.09A12.7 12.7 0 013 4.79a4.48 4.48 0 001.39 5.97 4.41 4.41 0 01-2.03-.56v.06a4.49 4.49 0 003.59 4.4 4.52 4.52 0 01-2.02.08 4.49 4.49 0 004.2 3.12A9 9 0 012 19.54a12.65 12.65 0 006.84 2" />
                  </svg>
                </a>
                <a href="#" className="hover:text-white">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.04c-5.5 0-9.96 4.45-9.96 9.96 0 4.4 3.6 8.07 8.23 9.5v-6.72H7.89v-2.78h2.38v-2.1c0-2.35 1.4-3.63 3.52-3.63.7 0 1.44.13 1.44.13v1.6h-.81c-.8 0-1.05.5-1.05 1.01v1.2h1.8l-.29 2.78h-1.51v6.72c4.63-1.43 8.23-5.1 8.23-9.5 0-5.51-4.46-9.96-9.96-9.96z" />
                  </svg>
                </a>
                <a href="#" className="hover:text-white">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M21.6 0H2.4C1.08 0 0 1.08 0 2.4v19.2C0 22.92 1.08 24 2.4 24h19.2c1.32 0 2.4-1.08 2.4-2.4V2.4C24 1.08 22.92 0 21.6 0zM7.2 20.4H3.6V9.6h3.6v10.8zm-1.8-12.3a2.1 2.1 0 110-4.2 2.1 2.1 0 010 4.2zm15 12.3h-3.6v-5.4c0-1.29-.03-2.94-1.8-2.94-1.8 0-2.07 1.41-2.07 2.85v5.49h-3.6V9.6h3.45v1.47h.05c.48-.91 1.65-1.86 3.4-1.86 3.63 0 4.3 2.39 4.3 5.49v5.7z" />
                  </svg>
                </a>
              </div>

            </div>

            {/* <!-- Bottom --> */}
            <div className="mt-8 text-center text-sm text-gray-500 border-t border-gray-700 pt-6">
              &copy; 2025 MyLogo. All rights reserved.
            </div>
          </div>
        </footer>


      </main>
    </>
  )
}

export default Home