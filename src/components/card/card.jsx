/* eslint-disable react/prop-types */
export const Card = ({text, style}) => {
    return(
        <div className="relative h-[455px] w-[325px]">
            <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm
                transition-opacity duration-300 opacity-0 
                h-[435px] w-[305px] rounded-[16px] top-[10px] left-[10px]
                hover:opacity-100 p-5"
                >
                <p className="text-white text-lg">{text}</p>
            </div>
            <div className="h-[455px] w-[325px] bg-cover bg-center border-2
              border-black rounded-[24px]" style={style}>
            </div>
      </div>
    );
}