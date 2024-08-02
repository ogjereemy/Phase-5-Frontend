// // src/components/dashboard/NutritionLogs.js
// import React from 'react';

// const NutritionLogs = () => {
//     return (
//         <div className="card mb-4">
//             <div className="card-body">
//                 <h5 className="card-title">Nutrition Logs</h5>
//                 <ul className="list-group list-group-flush">
//                     <li className="list-group-item">Meal 1</li>
//                     <li className="list-group-item">Meal 2</li>
//                     <li className="list-group-item">Meal 3</li>
//                 </ul>
//             </div>
//         </div>
//     );
// };

// export default NutritionLogs;
import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';

const NutritionLogs = () => {
    return (
        <Card className="mb-4">
            <Card.Body>
                <Card.Title>Nutrition Logs</Card.Title>
                <ListGroup variant="flush">
                    <ListGroup.Item>Meal 1</ListGroup.Item>
                    <ListGroup.Item>Meal 2</ListGroup.Item>
                    <ListGroup.Item>Meal 3</ListGroup.Item>
                </ListGroup>
            </Card.Body>
        </Card>
    );
};

export default NutritionLogs;
