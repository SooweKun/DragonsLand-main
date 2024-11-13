/* eslint-disable react/prop-types */
import {useForm} from 'react-hook-form';

export const Auth = ({check2}) => {
    
    const {register, handleSubmit, formState: {errors}} = useForm();

    return(
        <form 
        className="w-[400px] h-[540px] bg-[#B1AEAE]/[.50] rounded-lg 
        border-2 border-neutral-100 flex
        flex-col items-center justify-center" 
        >
            <p className="text-3xl text-black mb-[10px]">DragonsLand</p>
            <p className="text-2xl text-slate-600 mb-[50px]">Sing in</p>
            <div className='mb-7 flex flex-col items-center justify-center'>
                <input 
                type="text" 
                placeholder="login" 
                className="w-[250px] h-[35px] border-black pl-5 rounded-lg outline-none "
                {...register('Name', {required: true, minLength: 4, maxLength: 8})}
                />
                {errors?.Name?.type === 'minLength' && <p className='text-red-600 text-[15px] w-max '>Форма должна содержать минимум 4 символов</p>}
                {errors?.Name?.type === 'maxLength' && <p className='text-red-600 text-[15px] w-max h-max'>Форма должна содержать максимум 8 символов</p>}
                {errors?.Name?.type === 'required' && <p className='text-red-600 text-[15px] w-max h-max'>Форма не заполнена</p>}
            </div>
            <div className='mb-7 flex flex-col items-center justify-center'>
                <input 
                type="text" 
                placeholder="password" 
                className="w-[250px] h-[35px] border-black pl-5 rounded-lg outline-none"
                {...register('Password', {minLength: 4, maxLength: 8, required: true})}
                />
                {errors?.Password?.type === 'required' && <p className='text-red-600 text-[15px] w-max h-max'>Форма не заполнена</p>}
                {errors?.Password?.type === 'minLength' && <p className='text-red-600 text-[15px] w-max h-max'>Форма должна содержать минимум 4 символов</p>}
                {errors?.Password?.type === 'maxLength' && <p className='text-red-600 text-[15px] w-max h-max'>Форма должна содержать максимум 8 символов</p>}
            </div>
            
            <button className="bg-grays w-[95px] h-[40px] rounded-lg" onClick={handleSubmit(check2)}>sing in</button>
        </form>
    );
};