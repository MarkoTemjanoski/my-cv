

const PhotoBar = () => {
  return (
    <div className="sm:bg-white md:w-[300px] lg:w-[400px] bg-yellow-500  md:h-[800px] md:absolute md:top-1/2 md:-translate-y-1/2 left-1/10 flex flex-col md:px-[3%] py-[2%] items-center gap-4 justify-evenly max-sm:text-2xl">
        <img src="./img.jpeg" alt="my-img" className="w-full h-[350px] object-cover"/>
        <div className="flex flex-col text-5xl items-center font-normal gap-2">
            <h1>TEMJANOSKI</h1>
            <h1>MARKO</h1>
        </div>
        <p className="text-gray-700 font-bold">DIGITAL MARKETING SPECIALIST</p>
        <div className="w-[150px] h-[3px] bg-black mt-6"></div>
        <div className="flex flex-col items-center">
            <p>18 July, 2003</p>
            <p>Prilep, Macedonia</p>
            <p>+389 78 305 718</p>
            <p>m.temjano@gmail.com</p>
            <p className="font-bold text-xl"><a href="https://drive.google.com/drive/folders/1S0Xu0P8IAAJolfyou2aoiprXtTQZtaji?usp=sharing">Certificates</a></p>
        </div>
        <div className="w-[150px] h-[3px] bg-black"></div>
    </div>
  )
}

export default PhotoBar