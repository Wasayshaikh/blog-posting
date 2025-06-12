import { Link } from 'react-router-dom'

function Blog() {
    return (
        <>

            {/* <!-- Header (reused from main site) --> */}
            <header className="bg-gray-900 text-white shadow-md">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">

                        {/* <!-- Left: Logo --> */}
                        <div className="flex-shrink-0">
                            <Link to={"/"} title='MyLogo' className="text-xl font-bold " >MyLogo</Link>

                        </div>

                        {/* <!-- Center: Navigation Links --> */}
                        <nav className="hidden md:flex space-x-8">
                            <Link to={"/"}  >Home</Link>
                            <Link to={"/blog"}  >Blog</Link>
                            <Link to={"/"}  >About</Link>
                            <Link to={"/blog"} >Contact</Link>

                        </nav>

                        {/* <!-- Right: Login Icon --> */}
                        <div className="flex-shrink-0">
                            <Link to={"/"} title='Home'>
                                {/* <!-- Example icon (you can use your own) --> */}
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2"
                                    viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M5.121 17.804A6.978 6.978 0 0112 15c1.657 0 3.182.57 4.379 1.525M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path d="M19 21v-2a4 4 0 00-4-4H9a4 4 0 00-4 4v2" />
                                </svg>
                            </Link>
                        </div>

                    </div>
                </div>
            </header>

            {/* <!-- Main Blog Content --> */}
            <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

                {/* <!-- Featured Image --> */}
                <img src="https://via.placeholder.com/900x400" alt="Featured" className="w-full rounded-lg mb-6 object-cover" />

                {/* <!-- Title & Meta --> */}
                <h1 className="text-3xl font-bold mb-2">The Journey of Creating a Tailwind Blog</h1>
                <div className="text-sm text-gray-500 mb-10">By <span className="font-medium text-gray-700">John Doe</span> • June 2, 2025</div>

                {/* <!-- Article Content --> */}
                <article className="space-y-6 text-lg leading-relaxed">
                    <p>
                        Tailwind CSS allows developers to build beautifully designed components quickly. In this article, we’ll explore how to structure a single blog page with multiple images and sections.
                    </p>

                    <img src="https://via.placeholder.com/800x300" alt="Step 1" className="w-full rounded-lg" />

                    <p>
                        First, we start with a responsive layout that adapts well to all devices. Using Tailwind’s utility classes, we can manage spacing, typography, and images with ease.
                    </p>
                    <img src="/images/sheet-music-8463988_960_720.jpg" alt="Blog Image" className="w-full h-40 object-cover" />

                    <p>
                        You can place images in between your text to illustrate ideas, showcase products, or break up long sections of content.
                    </p>

                    <img src="https://via.placeholder.com/750x300" alt="Step 2" className="w-full rounded-lg" />

                    <p>
                        Responsive image handling is key. Use the <code>object-cover</code> and <code>rounded-lg</code> classes for a polished look.
                    </p>

                    <blockquote className="border-l-4 border-blue-600 pl-4 italic text-gray-600">
                        “Design is not just what it looks like and feels like. Design is how it works.” – Steve Jobs
                    </blockquote>

                    <p>
                        Whether you're writing tutorials, opinion pieces, or tech deep-dives, a clean structure with flexible media makes your blog more readable and visually appealing.
                    </p>

                    <img src="https://via.placeholder.com/700x250" alt="Closing" className="w-full rounded-lg" />

                    <p>
                        That’s it! With Tailwind CSS, your blog can look modern, fast, and mobile-friendly in just a few lines of code.
                    </p>
                </article>

                {/* <!-- Tags / Categories (optional) --> */}
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