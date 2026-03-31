

export default function NavBar() {
  return (
    <>
    <nav className="flex justify-between px-[100px] py-[20px] bg-[#e2dace]">
      <h1 className="font-bold">Un Angelo</h1>
        <ul className="flex gap-3 text-[12px] text-gray-500 tracking-[1.29px]">
          <li>Home</li>
          <li>Flavors</li>
          <li>About</li>
          <li>Gallery</li>
          <li>Reviews</li>
          <li>Contact</li>
        </ul>
      </nav>
    </>
  )
}