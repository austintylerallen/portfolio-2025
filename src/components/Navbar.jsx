// import { useEffect, useState } from 'react';

// const Navbar = () => {
//   const [visible, setVisible] = useState(false);

//   useEffect(() => {
//     const onScroll = () => {
//       setVisible(window.scrollY > window.innerHeight * 0.8);
//     };

//     window.addEventListener('scroll', onScroll);
//     return () => window.removeEventListener('scroll', onScroll);
//   }, []);

//   return (
//     <nav
//       className={`fixed top-0 left-0 w-full z-50 px-8 py-4 text-white transition-all duration-500 ease-in-out ${
//         visible
//           ? 'bg-[#000203]/80 backdrop-blur-md opacity-100 scale-100'
//           : 'opacity-0 scale-95 pointer-events-none'
//       }`}
//     >
//       <ul className="flex justify-end gap-8 text-sm font-medium tracking-wide uppercase">
//         <li>
//           <a href="#about" className="hover:text-[#cca050] transition duration-200">About</a>
//         </li>
//         <li>
//           <a href="#projects" className="hover:text-[#cca050] transition duration-200">Projects</a>
//         </li>
//         <li>
//           <a href="#tech" className="hover:text-[#cca050] transition duration-200">Tech</a>
//         </li>
//         <li>
//           <a href="#testimonials" className="hover:text-[#cca050] transition duration-200">Testimonials</a>
//         </li>
//         <li>
//           <a href="#timeline" className="hover:text-[#cca050] transition duration-200">Timeline</a>
//         </li>
//         <li>
//           <a href="#contact" className="hover:text-[#cca050] transition duration-200">Contact</a>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;



import { useEffect, useState } from 'react';

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.3);
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-50 px-6 py-3 rounded-full shadow-lg border border-white/10 backdrop-blur-md transition-all duration-500 ease-in-out ${
        visible
          ? 'bg-[#000203]/70 opacity-100 scale-100'
          : 'opacity-0 scale-95 pointer-events-none'
      }`}
    >
      <ul className="flex gap-6 text-sm font-medium tracking-wide text-white uppercase">
        <li>
          <a href="#about" className="hover:text-[#cca050] transition">About</a>
        </li>
        <li>
          <a href="#projects" className="hover:text-[#cca050] transition">Projects</a>
        </li>
        <li>
          <a href="#tech" className="hover:text-[#cca050] transition">Tech</a>
        </li>
        <li>
          <a href="#testimonials" className="hover:text-[#cca050] transition">Testimonials</a>
        </li>
        <li>
          <a href="#timeline" className="hover:text-[#cca050] transition">Timeline</a>
        </li>
        <li>
          <a href="#contact" className="hover:text-[#cca050] transition">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
