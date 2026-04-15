// import icons
import { IceCreamCone } from 'lucide-react';

export default function NavBar() {
  return (
    <>
    <nav className="flex justify-between px-[100px] py-[20px] bg-[#e2dace] z-[100] w-full fixed ">
      <h1 className="font-bold text-[20px]">Un Angelo</h1>
        <ul className="flex gap-3 text-[13px] text-gray-500 tracking-[1.29px] items-center">
          <li>Start</li>
          <li>
            <div className='flex items-center'>
              <IceCreamCone className='w-[18px]'/>
              Menu 
              </div>
          </li>
          <li>Über uns</li>
          <li>Galerie</li>
          <li>Kontact</li>
        </ul>
      </nav>
    </>
  )
}