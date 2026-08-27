const time = new Date().getFullYear()
// const year = time.toLocaleString().getYear()
const CopyRight = () => {
    return (
        <div className="capitalize text-center p-2">
            &copy; {time} all rights reserved by
            <a href="https://saritaavsarportfolio.netlify.app/" className="text-emerald-600 font-semibold"> Avsar </a>!
        </div>
    )
}

export default CopyRight