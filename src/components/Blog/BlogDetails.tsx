import React from 'react';

const BlogDetails: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article className="bg-white rounded-lg shadow-md overflow-hidden">
          {/* Hero Section */}
          <div className="grid md:grid-cols-2 gap-8 p-8">
            {/* Left Column - Text Content */}
            <div className="space-y-6">
              <div>
                <span className="text-orange-500 font-semibold text-sm tracking-wide uppercase">
                  //- Featured Article
                </span>
                <h2 className="text-4xl font-bold text-gray-900 mt-2 leading-tight">
                  Reducing Costs with Efficient Logistics Practices
                </h2>
              </div>

              <p className="text-xl text-gray-700 font-medium leading-relaxed">
                Eum dolor sit amet consectetur. Odio ullam corper tempor laoreet neque libero posuere tempus.
              </p>

              <div className="prose prose-lg text-gray-600 leading-relaxed">
                <p>
                  Them ipsum dolor sit amet consectetur. Nibh enim ullamcorper eu nullam est maecenas ulctetur. 
                  Nibh enim ullamcorper ermy. Them ipsum dolor sit amet consectetur. Nibh enim ullamcorper eu nullam 
                  est maecenas ulctetur. Nibh enim ullamcorper ermy. Them ipsum dolor sit amet consectetur. Nibh enim 
                  ullamcorper eu nullam est maecenas ulctetur.
                </p>
                <p>
                  Nibh enim ullamcorper ermy. Them ipsum dolor sit amet consectetur. Nibh enim ullamcorper eu nullam 
                  est maecenas ulctetur. Nibh enim ullamcorper ermy. Them ipsum dolor sit amet consectetur. Nibh enim 
                  ullamcorper eu nullam est maecenas ulctetur. Nibh enim ullamcorper ermy. Them ipsum dolor sit amet 
                  consectetur.
                </p>
              </div>

              <div className="flex items-center space-x-4 pt-4">
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>November 24, 2025</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>5 min read</span>
                </div>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="relative h-full min-h-[400px]">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-100 to-blue-100 rounded-lg flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-32 h-32 mx-auto bg-white rounded-full shadow-lg flex items-center justify-center mb-4">
                    <svg className="w-16 h-16 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                    </svg>
                  </div>
                  <p className="text-gray-500 text-sm">Warehouse Automation</p>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Content */}
          <div className="px-8 pb-8 space-y-4">
            <p className="text-gray-600 leading-relaxed">
              Them ipsum dolor sit amet consectetur. Nibh enim ullamcorper eu nullam est maecenas ulctetur. 
              Nibh enim ullamcorper ermy. Them ipsum dolor sit amet consectetur. Nibh enim ullamcorper eu 
              nullam est maecenas ulctetur. Nibh enim ullamcorper ermy. Them ipsum dolor sit amet consectetur. 
              Nibh enim ullamcorper eu nullam est maecenas ulctetur. Nibh enim ullamcorper ermy. Them ipsum 
              dolor sit amet consectetur. Nibh enim ullamcorper eu nullam est maecenas ulctetur. Nibh enim 
              ullamcorper ermy. Them ipsum dolor sit amet consectetur. Nibh enim ullamcorper eu nullam est 
              maecenas ulctetur. Nibh enim ullamcorper ermy. Them ipsum dolor sit amet consectetur.
            </p>
          </div>

          {/* Tags */}
          <div className="px-8 pb-8">
            <div className="flex flex-wrap gap-2">
              <span className="px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">
                Logistics
              </span>
              <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                Cost Reduction
              </span>
              <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                Efficiency
              </span>
              <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                Automation
              </span>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
};

export default BlogDetails;