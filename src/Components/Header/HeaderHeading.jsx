const HeaderHeading = ({ heading, subheading }) => {
    return (
        <div className="absolute top-1/2 left-1/2 
            -translate-x-1/2 -translate-y-1/2 text-center whitespace-nowrap p-2">
            <h1 className="bg-black text-2xl p-2 font-bold text-gray-300 md:text-3xl lg:text-5xl">{heading}</h1>
            <h3 className="bg-gray-300 text-sm mt-2 md:text-2xl lg:text-2xl">{subheading}</h3>
        </div>
    )
}

export default HeaderHeading