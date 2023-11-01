// import React from 'react';
// import logo from '../../images/Skill Service Ltd-01.png';

// const Footer = () => {
//   return (
//     <footer className="bg-sky-600 text-white py-8">
//       <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
//         <div className="flex-1">
//           <div className="flex items-center">
//             <img src={logo} alt="Logo" className="w-72 mr-2" />
//           </div>
//         </div>
//         <div className="flex-1 mt-4 md:mt-0">
//           <h3 className="text-lg font-semibold">Services</h3>
//           <ul className="list-none">
//             <li><a href="#"></a></li>
//             <li><a href="#">Branding</a></li>
//             <li><a href="#">Design</a></li>
//             <li><a href="#">Marketing</a></li>
        
//           </ul>
//         </div>
//         <div className="flex-1 mt-4 md:mt-0">
//           <h3 className="text-lg font-semibold">Company</h3>
//           <ul className="list-none">
//             <li><a href="#">About us</a></li>
//             <li><a href="#">Contact</a></li>
//             <li><a href="#">Jobs</a></li>
//           </ul>
//         </div>
//         <div className="flex-1 mt-4 md:mt-0">
//           <h3 className="text-lg font-semibold">Legal</h3>
//           <ul className="list-none">
//             <li><a href="#">Terms of use</a></li>
//             <li><a href="#">Privacy policy</a></li>
//             <li><a href="#">Cookie policy </a></li>
//           </ul>
//         </div>
//       </div>
//       <div className="text-center mt-6">
//         <p className="text-lg">
//           Copyright © {new Date().getFullYear()} All rights reserved.
//         </p>
//         <p className="text-lg">Skill Graphics</p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


// import React from "react";


import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-sky-600 text-white py-8">
      <div className="container mx-auto text-center">
      
        <p className="text-lg mb-2">Copyright © {new Date().getFullYear()} All rights reserved.</p>
        <p className="text-lg">Skill Service Ltd.</p>
      </div>
    </footer>
  );
};

export default Footer;
