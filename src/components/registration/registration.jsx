export const Registration = () => {

    return(
        <div 
        className="w-[400px] h-[540px] bg-[#B1AEAE]/[.50] rounded-lg 
        border-2 border-neutral-100 flex
        flex-col items-center justify-center gap-8" 
        >
            <p className="text-3xl text-black">DragonsLand</p>
            <p className="text-2xl text-slate-600">Sing Up</p>
            <input 
            type="text" 
            placeholder="login" 
            className="w-[250px] h-[35px] border-black pl-5 rounded-lg outline-none"
            />
            <input 
            type="text" 
            placeholder="password" 
            className="w-[250px] h-[35px] border-black pl-5 rounded-lg outline-none"
            />
            <button className="bg-grays w-[95px] h-[40px] rounded-lg">sing up</button>
        </div>
    );
}