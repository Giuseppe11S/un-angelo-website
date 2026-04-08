
import heroimage from '../assets/images/about.jpg'

export default function About(){
  return (
    <>
    <section className='mt-[50px]'>
      <div className='flex justify-center items-center gap-5 border p-[100px]'>
        <img src={heroimage} alt="Chef making cookies" 
        className='w-[500px]'/>
        <div className='flex flex-col'>
          <h2 className='font-bold text-[50px]'>Our Story</h2>
          <div className='grow '>
          <p className='mt-[20px]'>
            At <strong>Un Angelo</strong>, gelato is more than a dessert — it's a labor of love. Since 2015, 
            we've been crafting authentic Italian gelato using only the freshest, <br /> locally 
            sourced ingredients and time-honored techniques passed down <br /> through generations.
          </p>
          <p className='mt-[20px]'>
            Every morning, our artisans prepare each flavor from scratch — no artificial 
            colors, no preservatives, just pure, honest ingredients. From Sicilian <br />
            pistachios to Madagascar vanilla, we travel the world to bring you the finest <br/> flavors.</p>
        </div>
        <div className='flex gap-10 mt-[30px]'>
          <div className='flex flex-col items-start'>
            <span className='text-[23px] font-bold'>10+</span>
            <span className='text-sm text-gray-600'>Years of Craft</span>
          </div>
          <div className='flex flex-col items-start'>
            <span className='text-[23px] font-bold'>30+</span>
            <span className='text-sm text-gray-600'>Unique Flavours</span>
          </div>
          <div className='flex flex-col items-start'>
            <span className='text-[23px] font-bold'>100%</span>
            <span className='text-sm text-gray-600'>Natural</span>
          </div>
        </div>
        </div>
      </div>
    </section>
    </>
  )
}