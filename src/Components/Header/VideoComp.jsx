const VideoComp = ({ videoIs }) => {
    return (
        <div className="relative">
            <div className="w-full h-full overflow-hidden ">
                <video autoPlay muted loop playsInline className="w-full">
                    <source src={videoIs} type="video/mp4" />
                </video>
            </div>
            <div className="absolute inset-0 bg-emerald-900/50 mix-blend-multiply pointer-events-none"></div>
        </div>
    )
}

export default VideoComp