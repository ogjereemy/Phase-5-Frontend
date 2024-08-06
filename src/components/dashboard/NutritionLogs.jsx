
// // import React, { useState } from 'react';


// // const NutritionLogging = () => {
// //   const [nutrition, setNutrition] = useState([{ meal: '', calories: '', protein: '', carbs: '', fats: '' }]);

// //   const handleChange = (index, e) => {
// //     const { name, value } = e.target;
// //     if (isNaN(value) && (name === 'calories' || name === 'protein' || name === 'carbs' || name === 'fats')) {
// //       return; 
// //     }
// //     const values = [...nutrition];
// //     values[index][name] = value;
// //     setNutrition(values);
// //   };

// //   const handleAdd = () => {
// //     setNutrition([...nutrition, { meal: '', calories: '', protein: '', carbs: '', fats: '' }]);
// //   };

// //   const handleRemove = (index) => {
// //     const values = [...nutrition];
// //     values.splice(index, 1);
// //     setNutrition(values);
// //   };

// //   const handleClear = () => {
// //     setNutrition([{ meal: '', calories: '', protein: '', carbs: '', fats: '' }]);
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
    
// //     localStorage.setItem('nutritionData', JSON.stringify(nutrition));
// //     console.log(nutrition);
// //   };

// //   const calculateTotal = (type) => {
// //     return nutrition.reduce((total, entry) => total + (parseFloat(entry[type]) || 0), 0);
// //   };

// //   return (
// //     <div className="nutrition-container">
// //       <form onSubmit={handleSubmit} className="nutrition-form">
// //         {nutrition.map((nutrient, index) => (
// //           <div key={index} className="nutrition-entry">
// //             <input
// //               type="text"
// //               name="meal"
// //               placeholder="Meal"
// //               value={nutrient.meal}
// //               onChange={(e) => handleChange(index, e)}
// //               required
// //             />
// //             <input
// //               type="number"
// //               name="calories"
// //               placeholder="Calories"
// //               value={nutrient.calories}
// //               onChange={(e) => handleChange(index, e)}
// //               min="0"
// //               required
// //             />
// //             <input
// //               type="number"
// //               name="protein"
// //               placeholder="Protein (g)"
// //               value={nutrient.protein}
// //               onChange={(e) => handleChange(index, e)}
// //               min="0"
// //               required
// //             />
// //             <input
// //               type="number"
// //               name="carbs"
// //               placeholder="Carbs (g)"
// //               value={nutrient.carbs}
// //               onChange={(e) => handleChange(index, e)}
// //               min="0"
// //               required
// //             />
// //             <input
// //               type="number"
// //               name="fats"
// //               placeholder="Fats (g)"
// //               value={nutrient.fats}
// //               onChange={(e) => handleChange(index, e)}
// //               min="0"
// //               required
// //             />
// //             <button type="button" onClick={() => handleRemove(index)} className="remove-button">Remove</button>
// //           </div>
// //         ))}
// //         <button type="button" onClick={handleAdd} className="add-button">Add Meal</button>
// //         <button type="button" onClick={handleClear} className="clear-button">Clear All</button>
// //         <button type="submit" className="submit-button">Submit</button>
// //       </form>
// //       <div className="nutrition-summary">
// //         <h3>Nutrition Summary</h3>
// //         <p>Total Calories: {calculateTotal('calories')}</p>
// //         <p>Total Protein: {calculateTotal('protein')} g</p>
// //         <p>Total Carbs: {calculateTotal('carbs')} g</p>
// //         <p>Total Fats: {calculateTotal('fats')} g</p>
// //       </div>
// //     </div>
// //   );
// // }

// // export default NutritionLogging;


// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import fitnessLogo from "../../../src/picsvg_download.svg";

// const NutritionLogging = () => {
//   const [nutrition, setNutrition] = useState([{ meal: '', calories: '', protein: '', carbs: '', fats: '' }]);

//   const handleChange = (index, e) => {
//     const { name, value } = e.target;
//     if (isNaN(value) && (name === 'calories' || name === 'protein' || name === 'carbs' || name === 'fats')) {
//       return; 
//     }
//     const values = [...nutrition];
//     values[index][name] = value;
//     setNutrition(values);
//   };

//   const handleAdd = () => {
//     setNutrition([...nutrition, { meal: '', calories: '', protein: '', carbs: '', fats: '' }]);
//   };

//   const handleRemove = (index) => {
//     const values = [...nutrition];
//     values.splice(index, 1);
//     setNutrition(values);
//   };

//   const handleClear = () => {
//     setNutrition([{ meal: '', calories: '', protein: '', carbs: '', fats: '' }]);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
    
//     localStorage.setItem('nutritionData', JSON.stringify(nutrition));
//     console.log(nutrition);
//   };

//   const calculateTotal = (type) => {
//     return nutrition.reduce((total, entry) => total + (parseFloat(entry[type]) || 0), 0);
//   };

//   return (
//     <div className="dashboard">
//       <div className="sidebar">
//         <img src={fitnessLogo} className='app-logo' alt="calorie tracker logo" />
//         <Link to="/overview" className="sidebar-link">Overview</Link>
//         <Link to="/workout" className="sidebar-link">Workout</Link>
//         <Link to="/coach-dashboard" className='sidebar-link'>Coach Dashboard</Link>
//         <Link to="/diet-plan" className="sidebar-link">Diet Plan</Link>
//         <Link to="/goals" className="sidebar-link">Goals</Link>
//         <Link to="/user-dashboard" className="sidebar-link">User Dashboard</Link>
//         <Link to="/user-schedule" className="sidebar-link">My Schedule</Link>
//         <Link to="/progress" className="sidebar-link">Progress</Link>
//         <Link to="/help" className="sidebar-link">Help</Link>
//         <button className="btn btn-danger">Logout</button>
//       </div>
//       <div className="main-content">
//         <header className="header">
//           <h1>Welcome Back!</h1>
//           <div className="search-bar">
//             <input type="text" placeholder="Search" />
//           </div>
//           <div className="profile-info">
//             <Link to="/user-profile" className="sidebar-link">Profile</Link>
//           </div>
//         </header>
//         <div className="content">
//           <div className="top-section">
//             <div className="diet-plan-overview">
//               <h2>Plan Your Diet Plan This Week</h2>
//               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
//             </div>
//             <div className="week-plan">
//               <h2>Week Plan</h2>
//               <ul>
//                 <li>Monday: Breakfast</li>
//                 <li>Tuesday: Lunch</li>
//                 <li>Wednesday: Dinner</li>
//                 <li>Thursday: Snack</li>
//                 <li>Friday: Breakfast</li>
//                 <li>Saturday: Lunch</li>
//                 <li>Sunday: Dinner</li>
//               </ul>
//             </div>
//           </div>
//           <form onSubmit={handleSubmit} className="nutrition-form">
//             <div className="nutrition-entries">
//               {nutrition.map((nutrient, index) => (
//                 <div key={index} className="nutrition-entry">
//                   <input
//                     type="text"
//                     name="meal"
//                     placeholder="Meal"
//                     value={nutrient.meal}
//                     onChange={(e) => handleChange(index, e)}
//                     required
//                   />
//                   <input
//                     type="number"
//                     name="calories"
//                     placeholder="Calories"
//                     value={nutrient.calories}
//                     onChange={(e) => handleChange(index, e)}
//                     min="0"
//                     required
//                   />
//                   <input
//                     type="number"
//                     name="protein"
//                     placeholder="Protein (g)"
//                     value={nutrient.protein}
//                     onChange={(e) => handleChange(index, e)}
//                     min="0"
//                     required
//                   />
//                   <input
//                     type="number"
//                     name="carbs"
//                     placeholder="Carbs (g)"
//                     value={nutrient.carbs}
//                     onChange={(e) => handleChange(index, e)}
//                     min="0"
//                     required
//                   />
//                   <input
//                     type="number"
//                     name="fats"
//                     placeholder="Fats (g)"
//                     value={nutrient.fats}
//                     onChange={(e) => handleChange(index, e)}
//                     min="0"
//                     required
//                   />
//                   <button type="button" onClick={() => handleRemove(index)} className="remove-button">Remove</button>
//                 </div>
//               ))}
//             </div>
//             <div className="nutrition-buttons">
//               <button type="button" onClick={handleAdd} className="add-button">Add Meal</button>
//               <button type="button" onClick={handleClear} className="clear-button">Clear All</button>
//               <button type="submit" className="submit-button">Submit</button>
//             </div>
//           </form>
//           <div className="nutrition-summary">
//             <h3>Nutrition Summary</h3>
//             <p>Total Calories: {calculateTotal('calories')}</p>
//             <p>Total Protein: {calculateTotal('protein')} g</p>
//             <p>Total Carbs: {calculateTotal('carbs')} g</p>
//             <p>Total Fats: {calculateTotal('fats')} g</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default NutritionLogging;


// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
// import fitnessLogo from "../../../src/picsvg_download.svg";
// // import './NutritionLogging.css'; // Ensure you have a CSS file for custom styles

// const NutritionLogging = () => {
//   const [nutrition, setNutrition] = useState([{ meal: '', calories: '', protein: '', carbs: '', fats: '' }]);

//   useEffect(() => {
//     // Fetch existing nutrition data from the backend
//     axios.get('/api/nutrition')
//       .then(response => {
//         setNutrition(response.data);
//       })
//       .catch(error => {
//         console.error("There was an error fetching the nutrition data!", error);
//       });
//   }, []);

//   const handleChange = (index, e) => {
//     const { name, value } = e.target;
//     if (isNaN(value) && (name === 'calories' || name === 'protein' || name === 'carbs' || name === 'fats')) {
//       return;
//     }
//     const values = [...nutrition];
//     values[index][name] = value;
//     setNutrition(values);
//   };

//   const handleAdd = () => {
//     setNutrition([...nutrition, { meal: '', calories: '', protein: '', carbs: '', fats: '' }]);
//   };

//   const handleRemove = (index) => {
//     const values = [...nutrition];
//     values.splice(index, 1);
//     setNutrition(values);
//   };

//   const handleClear = () => {
//     setNutrition([{ meal: '', calories: '', protein: '', carbs: '', fats: '' }]);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     axios.post('/api/nutrition', nutrition)
//       .then(response => {
//         console.log("Nutrition data successfully submitted:", response.data);
//       })
//       .catch(error => {
//         console.error("There was an error submitting the nutrition data!", error);
//       });
//   };

//   const calculateTotal = (type) => {
//     return nutrition.reduce((total, entry) => total + (parseFloat(entry[type]) || 0), 0);
//   };

//   return (
//     <div className="dashboard">
//       <div className="sidebar">
//         <img src={fitnessLogo} className='app-logo' alt="calorie tracker logo" />
//         <Link to="/overview" className="sidebar-link">Overview</Link>
//         <Link to="/workout" className="sidebar-link">Workout</Link>
//         <Link to="/coach-dashboard" className='sidebar-link'>Coach Dashboard</Link>
//         <Link to="/diet-plan" className="sidebar-link">Diet Plan</Link>
//         <Link to="/goals" className="sidebar-link">Goals</Link>
//         <Link to="/user-dashboard" className="sidebar-link">User Dashboard</Link>
//         <Link to="/user-schedule" className="sidebar-link">My Schedule</Link>
//         <Link to="/progress" className="sidebar-link">Progress</Link>
//         <Link to="/help" className="sidebar-link">Help</Link>
//         <button className="btn btn-danger">Logout</button>
//       </div>
//       <div className="main-content">
//         <header className="header">
//           <h1>Welcome Back!</h1>
//           <div className="search-bar">
//             <input type="text" placeholder="Search" />
//           </div>
//           <div className="profile-info">
//             <Link to="/user-profile" className="sidebar-link">Profile</Link>
//           </div>
//         </header>
//         <div className="content">
//           <div className="top-section">
//             <div className="diet-plan-overview">
//               <h2>Plan Your Diet Plan This Week</h2>
//               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
//             </div>
//             <div className="week-plan">
//               <h2>Week Plan</h2>
//               <ul>
//                 <li>Monday: Breakfast</li>
//                 <li>Tuesday: Lunch</li>
//                 <li>Wednesday: Dinner</li>
//                 <li>Thursday: Snack</li>
//                 <li>Friday: Breakfast</li>
//                 <li>Saturday: Lunch</li>
//                 <li>Sunday: Dinner</li>
//               </ul>
//             </div>
//           </div>
//           <form onSubmit={handleSubmit} className="nutrition-form">
//             <div className="nutrition-entries">
//               {nutrition.map((nutrient, index) => (
//                 <div key={index} className="nutrition-entry">
//                   <input
//                     type="text"
//                     name="meal"
//                     placeholder="Meal"
//                     value={nutrient.meal}
//                     onChange={(e) => handleChange(index, e)}
//                     required
//                   />
//                   <input
//                     type="number"
//                     name="calories"
//                     placeholder="Calories"
//                     value={nutrient.calories}
//                     onChange={(e) => handleChange(index, e)}
//                     min="0"
//                     required
//                   />
//                   <input
//                     type="number"
//                     name="protein"
//                     placeholder="Protein (g)"
//                     value={nutrient.protein}
//                     onChange={(e) => handleChange(index, e)}
//                     min="0"
//                     required
//                   />
//                   <input
//                     type="number"
//                     name="carbs"
//                     placeholder="Carbs (g)"
//                     value={nutrient.carbs}
//                     onChange={(e) => handleChange(index, e)}
//                     min="0"
//                     required
//                   />
//                   <input
//                     type="number"
//                     name="fats"
//                     placeholder="Fats (g)"
//                     value={nutrient.fats}
//                     onChange={(e) => handleChange(index, e)}
//                     min="0"
//                     required
//                   />
//                   <button type="button" onClick={() => handleRemove(index)} className="remove-button">Remove</button>
//                 </div>
//               ))}
//             </div>
//             <div className="nutrition-buttons">
//               <button type="button" onClick={handleAdd} className="add-button">Add Meal</button>
//               <button type="button" onClick={handleClear} className="clear-button">Clear All</button>
//               <button type="submit" className="submit-button">Submit</button>
//             </div>
//           </form>
//           <div className="nutrition-summary">
//             <h3>Nutrition Summary</h3>
//             <p>Total Calories: {calculateTotal('calories')}</p>
//             <p>Total Protein: {calculateTotal('protein')} g</p>
//             <p>Total Carbs: {calculateTotal('carbs')} g</p>
//             <p>Total Fats: {calculateTotal('fats')} g</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default NutritionLogging;

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import fitnessLogo from "../../../src/picsvg_download.svg";
// import './NutritionLogging.css';

const NutritionLogging = () => {
  const [nutrition, setNutrition] = useState([{ meal: '', calories: '', protein: '', carbs: '', fats: '' }]);

  useEffect(() => {
    // Fetch existing nutrition data from the backend
    axios.get('/api/nutrition')
      .then(response => {
        setNutrition(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the nutrition data!", error);
      });
  }, []);

  const handleChange = (index, e) => {
    const { name, value } = e.target;
    if (isNaN(value) && (name === 'calories' || name === 'protein' || name === 'carbs' || name === 'fats')) {
      return;
    }
    const values = [...nutrition];
    values[index][name] = value;
    setNutrition(values);
  };

  const handleAdd = () => {
    setNutrition([...nutrition, { meal: '', calories: '', protein: '', carbs: '', fats: '' }]);
  };

  const handleRemove = (index) => {
    const values = [...nutrition];
    values.splice(index, 1);
    setNutrition(values);
  };

  const handleClear = () => {
    setNutrition([{ meal: '', calories: '', protein: '', carbs: '', fats: '' }]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('/api/nutrition', nutrition)
      .then(response => {
        console.log("Nutrition data successfully submitted:", response.data);
      })
      .catch(error => {
        console.error("There was an error submitting the nutrition data!", error);
      });
  };

  const calculateTotal = (type) => {
    return nutrition.reduce((total, entry) => total + (parseFloat(entry[type]) || 0), 0);
  };

  return (
    <div className="dashboard">
      <div className="main-content">
        <header className="header">
          <h1>Welcome Back!</h1>
          <div className="profile-info">
            <Link to="/user-profile" className="sidebar-link">Profile</Link>
          </div>
        </header>
        <div className="content">
          <div className="top-section">
            <div className="diet-plan-overview">
              <h2>Plan Your Diet Plan This Week</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <img src="https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="diet-plan" />
            </div>
            <div className="week-plan">
              <h2>Week Plan</h2>
              <ul>
                <li>Monday: Breakfast</li>
                <li>Tuesday: Lunch</li>
                <li>Wednesday: Dinner</li>
                <li>Thursday: Snack</li>
                <li>Friday: Breakfast</li>
                <li>Saturday: Lunch</li>
                <li>Sunday: Dinner</li>
              </ul>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="nutrition-form">
            <div className="nutrition-entries">
              {nutrition.map((nutrient, index) => (
                <div key={index} className="nutrition-entry">
                  <input
                    type="text"
                    name="meal"
                    placeholder="Meal"
                    value={nutrient.meal}
                    onChange={(e) => handleChange(index, e)}
                    required
                  />
                  <input
                    type="number"
                    name="calories"
                    placeholder="Calories"
                    value={nutrient.calories}
                    onChange={(e) => handleChange(index, e)}
                    min="0"
                    required
                  />
                  <input
                    type="number"
                    name="protein"
                    placeholder="Protein (g)"
                    value={nutrient.protein}
                    onChange={(e) => handleChange(index, e)}
                    min="0"
                    required
                  />
                  <input
                    type="number"
                    name="carbs"
                    placeholder="Carbs (g)"
                    value={nutrient.carbs}
                    onChange={(e) => handleChange(index, e)}
                    min="0"
                    required
                  />
                  <input
                    type="number"
                    name="fats"
                    placeholder="Fats (g)"
                    value={nutrient.fats}
                    onChange={(e) => handleChange(index, e)}
                    min="0"
                    required
                  />
                  <button type="button" onClick={() => handleRemove(index)} className="remove-button">Remove</button>
                </div>
              ))}
            </div>
            <div className="nutrition-buttons">
              <button type="button" onClick={handleAdd} className="add-button">Add Meal</button>
              <button type="button" onClick={handleClear} className="clear-button">Clear All</button>
              <button type="submit" className="submit-button">Submit</button>
            </div>
          </form>
          <div className="nutrition-summary">
            <h3>Nutrition Summary</h3>
            <p>Total Calories: {calculateTotal('calories')}</p>
            <p>Total Protein: {calculateTotal('protein')} g</p>
            <p>Total Carbs: {calculateTotal('carbs')} g</p>
            <p>Total Fats: {calculateTotal('fats')} g</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NutritionLogging;
