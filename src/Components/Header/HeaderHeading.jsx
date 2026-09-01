const HeaderHeading = ({ heading, subheading }) => {
    return (
        <div className="absolute inset-0 z-10 flex items-center justify-center px-4">
            <div className="w-full max-w-5xl mx-auto px-4 text-center">
                <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-white drop-shadow-lg leading-tight">{heading}</h1>
                <h3 className="mt-3 sm:mt-4 text-sm sm:text-lg md:text-xl font-medium text-emerald-300 max-w-2xl mx-auto drop-shadow-md leading-relaxed">{subheading}</h3>
            </div>
        </div>
    )
}

export default HeaderHeading