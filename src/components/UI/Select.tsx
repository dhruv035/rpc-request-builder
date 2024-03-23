import React, { CSSProperties, useState } from "react"

type Props = {
    options: FieldData[]
    selected: string | number;
    className?: string;
    listStyle?: CSSProperties | undefined;
    setSelected: ((option: any) => void);
}

type FieldData = {
    label: string;
    value: string | number;
}

const Select: React.FC<Props> = ({ options, selected, className, listStyle, setSelected }) => {

    const [isOpen, setIsOpen] = useState<boolean>(false)
    return <div className={className}>
        <p className="border-2 border-theme-orange rounded-2xl lg:max-w-[100%] p-2"
            onClick={() => { setIsOpen(!isOpen) }}>
            {options.find((option: FieldData) => { return option.value == selected })?.label}
        </p>
        {
            isOpen && <ul className={" lg:absolute bg-black w-full lg:max-w-[400px] "} style={listStyle}>
                {options.map((option: FieldData, index) => {

                    return <li key={index} className="p-2 hover:bg-theme-orange  w-full my-2" onClick={() => { setSelected(option.value), setIsOpen(false) }}>{option.label}</li>
                })}
            </ul>
        }
    </div>
}

export default Select