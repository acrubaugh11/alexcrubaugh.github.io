// import React, { useState, useEffect } from 'react';
// import './Welcome.css'; 

// function Welcome() {
//   const texts = ['Welcome', 'Bienvenue', 'Akwaaba', 'Mulibwanji', 'Karibu'];
  
//   // State to hold the index of the current word
//   const [currentIndex, setCurrentIndex] = useState(0);

//   // Use effect to change the word every 2 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       // Update currentIndex to cycle through the texts array
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
//     }, 2000); // Change word every 2 seconds

//     // Cleanup the interval on component unmount
//     return () => clearInterval(interval);
//   }, []); // Empty dependency array to only run on mount

//   return (
//     <div className="welcome-container">
//       <h1>{texts[currentIndex]}</h1>
//     </div>
//   );
// }

// export default Welcome;
