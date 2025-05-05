// import { motion, useInView } from 'framer-motion';
// import { useRef, useEffect, useState } from 'react';

// const FadeInWhenVisible = ({ children, delay = 0, direction = 'up' }) => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, {
//     triggerOnce: true,
//     margin: '0px 0px -10% 0px',
//   });

//   const [hasBeenInView, setHasBeenInView] = useState(false);

//   useEffect(() => {
//     if (isInView && !hasBeenInView) {
//       setHasBeenInView(true);
//     }
//   }, [isInView, hasBeenInView]);

//   const getInitial = () => {
//     switch (direction) {
//       case 'left':
//         return { opacity: 0, x: -50 };
//       case 'right':
//         return { opacity: 0, x: 50 };
//       case 'down':
//         return { opacity: 0, y: -50 };
//       case 'up':
//       default:
//         return { opacity: 0, y: 50 };
//     }
//   };

//   return (
//     <motion.div
//       ref={ref}
//       initial={getInitial()}
//       animate={hasBeenInView ? { opacity: 1, x: 0, y: 0 } : getInitial()}
//       transition={{ duration: 0.7, ease: 'easeOut', delay }}
//     >
//       {children}
//     </motion.div>
//   );
// };

// export default FadeInWhenVisible;



import { motion } from 'framer-motion';

const FadeInWhenVisible = ({ children, delay = 0, direction = 'up' }) => {
  const getInitial = () => {
    switch (direction) {
      case 'left': return { opacity: 0, x: -50 };
      case 'right': return { opacity: 0, x: 50 };
      case 'down': return { opacity: 0, y: -50 };
      case 'up':
      default: return { opacity: 0, y: 50 };
    }
  };

  return (
    <motion.div
      initial={getInitial()}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut', delay }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInWhenVisible;
