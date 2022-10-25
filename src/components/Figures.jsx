import React from 'react'

function Figures() {
  return (
    <>
    <div className="md:container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 lg:gap-0 md:py-16 border-y-2 border-primary border-opacity-30">
            <div className="col-span-1 pt-10 md:pt-0 text-center">
                <div className="block">
                <div className="main font-font2 text-white text-6xl font-bold " >
                    1M+
                </div>
                <div className="sub text-white text-3xl font-font2">
                    Active Users
                </div>
                </div>
            </div>
            <div className="col-span-1 text-center">
                <div className="block">
                <div className="main font-font2 text-white text-6xl font-bold " >
                    $125M
                </div>
                <div className="sub text-white text-3xl font-font2">
                    Already Earned
                </div>
                </div>

            </div>
            <div className="col-span-1 text-center">
                <div className="block">
                <div className="main font-font2 text-white text-6xl font-bold " >
                    4.8
                </div>
                <div className="sub text-white text-3xl font-font2">
                    AVG Rating
                </div>
                </div>
            </div> <div className="col-span-1 text-center pb-10 md:pb-0">
                <div className="block">
                <div className="main font-font2 text-white text-6xl font-bold " >
                    200+
                </div>
                <div className="sub text-white text-3xl font-font2">
                    Collections
                </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Figures