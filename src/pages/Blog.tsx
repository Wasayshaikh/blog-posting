import { Link } from 'react-router-dom'
import Header from '../components/Header'

function Blog() {
    return (
        <>


            <Header />


            <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">


                <img src="/images/sheet-music-8463988_960_720.jpg" className="w-full rounded-lg mb-6 object-cover" />


                <h1 className="text-3xl font-bold mb-2">The Journey of Creating a Tailwind Blog</h1>
                <div className="text-sm text-gray-500 mb-10">By <span className="font-medium text-gray-700">John Doe</span> • June 2, 2025</div>


                <article className="space-y-6 text-lg leading-relaxed">
                    <p>
                        Tailwind CSS allows developers to build beautifully designed components quickly. In this article, we’ll explore how to structure a single blog page with multiple images and sections.
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

                    {/* Existing Comments */}
                    <div className="space-y-6 mb-10">
                        <div className="border rounded-lg p-4">
                            <div className="text-sm text-gray-500 mb-2">Jane Smith • June 18, 2025</div>
                            <p className="text-gray-800">Really enjoyed this post! Tailwind makes layout so simple.</p>
                        </div>
                        <div className="border rounded-lg p-4">
                            <div className="text-sm text-gray-500 mb-2">Mike Johnson • June 19, 2025</div>
                            <p className="text-gray-800">Looking forward to implementing this structure in my blog. Thanks!</p>
                        </div>
                    </div>


                    <h3 className="text-xl font-semibold mb-4">Leave a Comment</h3>
                    <form className="space-y-4">
                        <div>
                            <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-1">Your Comment</label>
                            <textarea
                                name="comment"
                                rows={4}
                                className="w-full border rounded-lg p-3 resize-none focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                placeholder="Write your comment here..."
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-200"
                        >
                            Post Comment
                        </button>
                    </form>
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