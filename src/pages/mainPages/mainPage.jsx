/* eslint-disable react/prop-types */
import { Header } from "../../components/header/header";
import { Social } from "../../components/social/social";
import { Registration } from '/src/components/registration/registration.jsx';
import { useState } from 'react';

export const MainPage = () => {
    const [text, setText] = useState('Sing Up');
    const [show, setShow] = useState(false);

    const handleClick = () => {
        setShow(true);
        setText('Sing In');
    }

    return (
        <div className="bg-main w-full h-[100vh] bg-center bg-no-repeat relative">
            <div className="max-w-[1520px] m-auto flex justify-center h-full">
                <Header handleClick={handleClick} text={text} />
                <div className="flex items-center">
                    {show ===true && (<Registration />)}
                </div>
            </div>      
            <div className="absolute bottom-0 w-full pb-[20px] pr-[50px] flex justify-end">
                <Social />
            </div>
        </div>
    );
};