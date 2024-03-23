import React, { useState } from "react"

type Props = {
    options: FieldData[]
    selected: string | number
    setSelected: ((option: string) => void) | ((option: number) => void)
}

type FieldData = {
    label: string
    value: string | number
}

const Select: React.FC<Props> = ({ options, selected, setSelected }) => {

    const [isOpen, setIsOpen] = useState<boolean>(false)

    return <div className="relative">
        <p className="border-2 border-theme-orange rounded-2xl lg:max-w-[400px] p-2"
            onClick={() => { setIsOpen(!isOpen) }}>
            {options.find((option: FieldData) => { return option.value == selected })?.label}
        </p>
        {
            isOpen && <ul className=" absolute bg-black w-full lg:max-w-[400px]">
                {options.map((option: FieldData, index) => {

                    return <li key={index} className="p-2 hover:bg-theme-orange  w-full my-2" onClick={() => { setSelected(option.value), setIsOpen(false) }}>{option.label}</li>
                })}
            </ul>
        }
    </div>
}

export default Select