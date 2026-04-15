// import Hero Images
import heroimage from '../assets/images/candy.jpg'

export default function Hero() {

  return (
    <>
    {/* Banner */}
    <div className='h-[50px] flex justify-center items-center bg-[#defdca]'>
      <span className='text-[18px]'>Handwerklich hergestelltes italienisches Eis in Erfurt</span>
    </div>
      <section
        className="relative w-full h-[91.8vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${heroimage})` }}
      >
        <div>
          <h1 className="absolute top-[25%] left-[50%] -translate-x-1/2
          -translate-y-1/2 text-white text-[45px] font-bold flex text-center">
            Artisanal Gelato <br/> Made Fresh Every <br/> Day
          </h1>
          <span className='absolute top-[45%] left-[50%] -translate-x-1/2 
          -translate-y-1/2 text-white text-[18px] flex text-center'>
            Authentic Italian flavors with natural ingredients
          </span>
          <button className='absolute top-[55%] left-[50%] -translate-x-1/2 
          -translate-y-1/2 text-white border font-bold flex text-center'>
            Discover our flavors
          </button>
        </div>
      </section>
    </>
  )
}