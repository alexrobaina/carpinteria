import Image from 'next/image'
import logo from '../../../public/assets/logo.png'

export default function Navbar() {
  return (
    <nav className=" shadow-md px-8 h-[60px]">
      <div className="bg-gray-100 px-6 flex justify-between items-center">
        <Image
          src={logo}
          alt="Carpintería Alex Robaina"
          width={80}
          height={80}
        />
        <div className="text-lg font-bold text-gray-800">
          Carpintería Alex Robaina
        </div>
      </div>
    </nav>
  )
}
