const Heading = ({ heading, subHeading, paragraph }) => {
    return (
        <div className="pt-20 px-10">
            <h1 className='text-3xl lg:text-5xl font-bold text-center pb-2 text-gray-900 font-heading'>{heading}</h1>
            <h3 className="font-subHeading text-center lg:text-xl p-2 text-gray-700">{subHeading}</h3>
            <p className="w-20 m-auto border-b-2" />
            <p className='w-full text-gray-600 pt-6 font-para text-sm lg:text-md text-center'>{paragraph}</p>
        </div >
    )
}

export default Heading