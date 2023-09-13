import Link from "next/link";
import { useRouter } from "next/router";
import {usePathname} from 'next/navigation'

type PropTypes = {
  ico?: React.ReactNode;
  text: string;
  isNavOppen?:boolean
  to: string;
};

function ActiveLink({ to, ico, text,isNavOppen=true }: PropTypes) {
   
    const pathName = usePathname()
    const isActive = to === pathName
    console.log('pathName',pathName)

    
  return (
    <li className={`hover:bg-gray-800 p-2 rounded-xl cursor-pointer ${isActive && 'bg-gray-800'}`}>
      <Link
        href={to}
        className=" flex items-center gap-5 text-gray-400 font-normal "
      >
        <div className="text-2xl">{ico}</div>
        <span className={`${isNavOppen ? "" : " hidden" }`}>{text}</span>
      </Link>
    </li>
  );
}

export default ActiveLink;
