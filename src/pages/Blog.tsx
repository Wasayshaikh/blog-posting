import React from 'react'

function Blog() {
    return (
        <>

            {/* <!-- Header (reused from main site) --> */}
            <header className="bg-white shadow-md">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex justify-between items-center">
                    <div className="text-xl font-bold text-gray-800">MyLogo</div>
                    <nav className="hidden md:flex gap-6 text-sm">
                        <a href="#" className="text-gray-600 hover:text-blue-600">Home</a>
                        <a href="#" className="text-gray-600 hover:text-blue-600">Blog</a>
                        <a href="#" className="text-gray-600 hover:text-blue-600">About</a>
                    </nav>
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

                    <h2 className="text-2xl font-semibold mt-8">Adding Images in Content</h2>
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