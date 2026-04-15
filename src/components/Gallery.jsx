import heroimage from '../assets/images/candy.jpg'

export default function Gallery() {
  return (
    <>  
      <div className="flex items-center flex-col">
        <h2>Gallery</h2>
        <span>A Glimpse into our world of gelato.</span>
        {/* Picture of icecreams */}
        <div className="flex justify-center flex-wrap">
          <img className="w-[400px]" src={heroimage} alt="" />
          <img className="w-[400px]" src={heroimage} alt="" />
          <img className="w-[400px]"src={heroimage} alt="" />
          <img className="w-[400px]" src={heroimage} alt="" />
          <img className="w-[400px]" src={heroimage} alt="" />
          <img className="w-[400px]" src={heroimage} alt="" />
        </div>
      </div>
    </>
  )
}