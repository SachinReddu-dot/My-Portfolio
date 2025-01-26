import React from 'react'

const ScrollCompo1 = (props) => {

    return (
        <>
            <div className='scroll2 w-[450px] max-sm:w-[250px] h-full shrink-0 flex items-center justify-around'>
                <h1 className='text-4xl max-sm:text-2xl'>{props.name}</h1>
                <i class="text-4xl max-sm:text-2xl ri-shining-2-fill"></i>
            </div>
        </>
    )
}

export default ScrollCompo1