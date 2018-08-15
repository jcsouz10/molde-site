import React from 'react';
import './styled.css';

const BoxQualification = ({ qualifications }) => {
    return (
        <div className="boxQualification">
            <div>
                <img className="imgQualification" src="https://image.freepik.com/fotos-gratis/pessoa-simbolo-poder-jovem-sinal_1187-6295.jpg" />
            </div>
            <div className="itemName">
                Nome:{qualifications.id}
            </div>
            <div className="itemDescription">
                Descrição:{qualifications.description}
            </div>
            <div className="itemDate">
                Data:{qualifications.date}
            </div>
        </div>
    )
}

export default BoxQualification;