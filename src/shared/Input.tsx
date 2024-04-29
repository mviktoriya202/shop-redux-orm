import React from "react";
import {IInputProps} from "../entities/types";

const Input: React.FC<IInputProps> = ({
                                          label,
                                          type,
                                          id,
                                          register,
                                          validation,
                                          errors,
                                      }) => {
    return (
        <div className="mb-[18px]  flex flex-col w-full ">
            <label
                htmlFor={id}
                className="text-base mb-[10px] font-semibold leading-[22.4px] text-left">
                {label}
            </label>
            <input
                {...register(id, {...validation})}
                id={id}
                type={type}
                className="border p-1 border-backgroundSecondary rounded-[45px] h-[40px] min-w-[292px] max-780:w-full"
            />
            {errors[id] && <p className="text-red-500 ">{errors[id].message}</p>}
        </div>
    )
}

export default Input