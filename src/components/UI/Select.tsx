import React, { useState } from "react"

type Props = {
    options: FieldData[]
    selected: string
    setSelected: (option: string) => void
}

type FieldData = {
    label:string
    value:string
}

const Select: React.FC<Props> = ({ options, selected, setSelected }) => {

    const [isOpen, setIsOpen] = useState<boolean>(false)

    return <div className="p-4 relative">
        <p className="border-2 border-theme-orange rounded-2xl lg:max-w-[400px] p-2"
        onClick={() => { setIsOpen(!isOpen) }}>
            {options.find((option:FieldData)=>{return option.value==selected})?.label}
        </p>
        {
            isOpen && <ul className="p-2 absolute bg-black w-full lg:max-w-[400px]">
                {options.map((option: FieldData,index) => {

                    return <li key={index} className="p-2 hover:border-[1px] hover:border-theme-orange  w-full my-2" onClick={() => { setSelected(option.value), setIsOpen(false) }}>{option.label}</li>
                })}
            </ul>
        }
    </div>
}

export default Select