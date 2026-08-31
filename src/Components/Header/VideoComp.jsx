const VideoComp = ({ videoIs }) => {
    return (
        <div className="w-full h-full overflow-hidden ">
            <video autoPlay muted loop playsInline className="w-full">
                <source src={videoIs} type="video/mp4" />
            </video>
        </div>
    )
}

export default VideoComp