import "./testResult.css"
import { Dropdown } from "../dropdown/Dropdown";
import { useState } from "react";

/*Datos de prueba*/ 
const branchs = [
    { id: 1, name: "Ciencias sociales" },
    { id: 2, name: "Medicina" },
];
const careers = [
    { id: 1, name: "Medicina", branchId: 2 },
    { id: 2, name: "Enfermería", branchId: 2 },
    { id: 3, name: "historia", branchId: 1 }
];

export const TestResult = () => {
    const [selectedCareer, setSelectedCareer] = useState(null);

    //Almacena datos de carrera seleccionada
    const handleSelectCareer = (career)=>{
      setSelectedCareer(career)
    }
    console.log(selectedCareer)

    return (
         <div className='container_result'>
            <h1 className='result_title'>RESULTADOS</h1>
                {/* map --> genera por cada rama un dropdown. CarrerList --> Enviar lista de carreras para que se muestre como opcion*/}
               {branchs.map(branch =>(
                    <Dropdown
                        key={branch.id}
                        titleBranch={branch.name}
                        careerList={careers.filter(carrer => carrer.branchId === branch.id)}
                        selectedCareer={handleSelectCareer}
                    ></Dropdown>  
               ))}  
               {/*Muestra mensaje de carrera seleccionada*/
                selectedCareer && (
                    <div className="selectedCareer">
                        Seleccionaste: {selectedCareer.name}
                    </div>
                )
               }                  
        </div>
    )
}
