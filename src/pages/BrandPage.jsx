import React from 'react'

function BrandPage() {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
          <header className="w-full bg-[#000042] py-4">
            <h1 className="text-white text-center text-xl font-bold">Plixipy</h1>
          </header>
    
          <main className="flex-1  flex items-center justify-center">
            <div className="bg-white p-[6vmax] rounded-lg shadow-lg max-w-8xl w-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Name Field */}
                <div className = 'mx-[2vmax] my-[1vmax]'>
                  <label className="block text-gray-700 mb-2">Your name</label>
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-[20vmax] px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
    
                {/* Brand Name Field */}
                <div className = 'mx-[2vmax] my-[1vmax]'>
                  <label className="block text-gray-700 mb-2">Brand name</label>
                  <input
                    type="text"
                    placeholder="Brand name"
                    className="w-[20vmax] px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
    
                {/* Designation Field */}
                <div className = 'mx-[2vmax] my-[1vmax]'>
                  <label className="block text-gray-700 mb-2">Your designation</label>
                  <input
                    type="text"
                    placeholder="Marketing head"
                    className="w-[20vmax] px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
    
                {/* Upload Logo Field */}
                <div className="mx-[2vmax] my-[1vmax]">
                    <label className="block text-gray-700 mb-2">Upload your brand's logo</label>
                    <div className="relative w-[20vmax]">
                       <input
                        type="file"
                        id="fileUpload"
                        className="hidden"
                        onChange={(e) => {
                          const fileName = e.target.files[0]?.name || "Upload";
                          document.getElementById("fileLabel").innerText = fileName;
                        }}
                     />
                      <label
                        htmlFor="fileUpload"
                         id="fileLabel"
                         className="block w-full opacity-65 px-4 py-2 border border-gray-300 rounded-md cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-600"
                      >
                         Upload 
                      </label>
                </div>
            </div>

              </div>
    
              <div className="mt-[4vmax] flex justify-center">
                <button className="px-6 py-2 bg-[#000042] text-white font-semibold rounded-md hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-600">
                  Let’s go &raquo;
                </button>
              </div>
            </div>
          </main>
        </div>
      );
    
}

export default BrandPage
