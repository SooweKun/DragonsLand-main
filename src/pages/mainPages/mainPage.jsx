/* eslint-disable react/prop-types */
import { Header } from "../../components/header/header";
import { RegBtn } from "../../components/registration/regBtn";
import { Social } from "../../components/social/social";
import { Registration } from '/src/components/registration/registration.jsx';
import { AuthBtn } from "../../components/authorization/authBtn";
import { Auth } from '/src/components/authorization/auth.jsx';
import { useState } from 'react';

export const MainPage = () => {
    const [text, setText] = useState(<RegBtn/>);
    const [show, setShow] = useState(false);
    const [auth, setAuth] = useState(false);
    const [store, setStore] = useState([]);

    const check1 = data => {
        setShow(false);
        setStore(store.push(data));
        console.log(store);
	};

    const check2 = data => {
        console.log(data);
        if(store[0] === data) {
            console.log(store);
        }
    };

    const handleAuth = () => {
        setAuth(true);
        console.log('auth');
        setShow(false);
    }

    const handleClick = () => {
        setShow(true);
        setText(<AuthBtn
            handleAuth={handleAuth}
        />);
        console.log('reg');
    }

    return (
        <div className="bg-main w-full h-[100vh] bg-center bg-no-repeat relative">
            <div className="max-w-[1520px] m-auto flex justify-center h-full">
                <Header handleClick={handleClick} text={text} />
                <div className="flex items-center">
                    {show ===true && (
                        <Registration 
                        setShow={setShow}
                        check1={check1}
                        />
                    )}
                    {auth === true && (
                        <Auth 
                        
                        
                        />
                    )}
                    {/* <Auth check2={check2}/> */}
                </div>
            </div>      
            <div className="absolute bottom-0 w-full pb-[20px] pr-[50px] flex justify-end">
                <Social />
            </div>
        </div>
    );
};