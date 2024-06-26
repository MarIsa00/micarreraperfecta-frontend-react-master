import { useState } from "react"
import "./dropdown.css"

export const Dropdown = ({titleBranch, careerList, selectedCareer}) => {
    const [isDropdown, setIsDropdown] = useState(false)

    // muestra-oculta las opciones
    const handleToggle = ()=>{
        setIsDropdown(!isDropdown)
    }
    //gurada la carrera selecionada
    const selectOption = (career)=>{
        //llama a selectedCareer cuando se selecciona una opción.
        selectedCareer(career);
        setIsDropdown(false);
    }
    return (
        <div className="dropdown">
            <div className="continer_branch">
                <button className="btn_branch" onClick={handleToggle}>
                    <span className="btn_title">{titleBranch}</span>
                    <span className="btn_icon">{isDropdown ? '▲' : '▼'}</span>
                </button>
            </div>
            {/* careerList --> se recibe por parametro y se mapea para colocarlas como opcion*/
                isDropdown && (
                    <ul className="options">
                        {careerList.map(career => 
                            <li
                                key={career.id}
                                className="option"
                                onClick={()=>selectOption(career)}
                            >
                            {career.name}     
                            </li>
                         )}
                    </ul>
                )
            }
        </div>
    )
}
