/* eslint-disable react/prop-types */
import {Link} from '@tanstack/react-router'

export const Header = ({handleClick, text}) => {

    return(
        <div className="flex justify-between absolute z-10  left-1/2 transform -translate-x-1/2 w-full px-[200px]">
            <div className="flex items-center gap-[23px] mt-[41px] h-max">
                <div className="w-[64px] h-[64px] bg-grays content-center justify-center flex rounded-full">
                <img src="./src/assets/logo.svg" alt="not found" className="w-[64px] h-[64px]"/>
                </div>
                <Link to='/'><b>DragonsLand</b></Link>
            </div>
            <div className="mt-[109px] flex bg-grays/[.40] w-[565px] h-[70px] items-center justify-center gap-12 rounded-lg ml-[200px]">
                <Link to='/about' className="size-6 w-max"><b>About</b></Link>
                <Link to='/dragon' className="size-6 w-max"><b>Dragons</b></Link>
                <Link to='/grimuar' className="size-6 w-max"><b>Books </b></Link>
                <Link to='/contact' className="size-6 w-max"><b>Contact</b></Link>
            </div>
            <div className="flex items-center gap-[83px] w-[343px] mt-[58px] h-max">
                <div className="size-[23px] w-max cursor-pointer" onClick={handleClick}>{text}</div>
                <input type="text" placeholder="Search here... " className="w-[205px] h-[35px] rounded-[10px] bg-grays pl-7 placeholder:text-gray-900 outline-none"/>
            </div>
        </div>
    );
}