import React from 'react';
import bl1 from '../assets/bl1.jpg';
import bl2 from '../assets/bl2.jpg'; // Fixed file extension
import bl3 from '../assets/bl3.png';
import u1 from '../assets/u1.png';
import u2 from '../assets/u2.png';
import u3 from '../assets/u3.png';

const blogPostList = [
  {
    user: bl1,
    subheadingText: 'Design',
    headingText: 'UX review presentations',
    descriptionText: 'How do you create compelling presentations that wow your colleagues and impress your managers?',
    userIcon: u1,
    username: 'Olivia Rhye',
    dateText: '20 Jan 2024',
  },
  {
    user: bl2,
    subheadingText: 'Product',
    headingText: 'Migrating to Linear 101',
    descriptionText: 'Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.',
    userIcon: u2,
    username: 'Phoenix Baker',
    dateText: '19 Jan 2024',
  },
  {
    user: bl3,
    subheadingText: 'Development',
    headingText: 'Building Scalable Web Applications',
    descriptionText: 'Best practices for designing and deploying scalable systems.',
    userIcon: u3,
    username: 'Michael Brown',
    dateText: '20 Nov 2024',
  },
];

const Blog = () => {
  return (
    <div className="bg-white py-24 md:py-10">
      <div className="container mx-auto px-5">
        {/* Heading Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <div className="mb-5 md:mb-0">
            <h2 className="text-xl font-bold text-purple-500">Our Blog</h2>
            <h3 className="text-4xl font-semibold text-gray-900 mb-4">
              Latest blog posts
            </h3>
            <p className="text-lg text-gray-600">
              Tools and strategies modern teams need to help their companies grow.
            </p>
          </div>

          <button className="  min-w-[148px] rounded-lg border border-solid bg-purple-400 px-6 py-2 font-semibold text-white sm:order-last">
            View all posts
          </button>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPostList.map((post, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              {/* Blog Image */}
              <img
                src={post.user}
                alt={post.headingText}
                className="w-full h-48 object-cover"
              />

              {/* Blog Content */}
              <div className="p-5">
                {/* Subheading */}
                <p className="text-sm text-purple-500 font-medium mb-2">
                  {post.subheadingText}
                </p>

                {/* Heading with Right Arrow */}
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {post.headingText}
                  </h3>
                  <span className="text-purple-500 text-2xl">↗</span>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-600 mb-4">
                  {post.descriptionText}
                </p>

                {/* User Info Section */}
                <div className="flex items-start space-x-3 mt-4">
                  {/* User Image */}
                  <img
                    src={post.userIcon}
                    alt={post.username}
                    className="w-12 h-12 rounded-full"
                  />

                  {/* Username and Date */}
                  <div className="flex flex-col justify-between">
                    <span className="text-gray-800 font-medium">{post.username}</span>
                    <span className="text-gray-500 text-sm">{post.dateText}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
         
        </div>
      </div>
    </div>
  );
};

export default Blog;
