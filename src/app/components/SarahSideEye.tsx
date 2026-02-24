import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'motion/react';
import sarahImage from 'figma:asset/96d683e8c8339a3a8510df07e7b28181d6348d93.png';

export function SarahSideEye() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="relative"
    >
      {/* Mascot illustration container with vintage frame effect */}
      <div className="relative">
        <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-[#493751] shadow-xl bg-[#F8F1F2] p-2">
          <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-[#E0DAE7] to-[#F8F1F2] flex items-center justify-center">
            {/* Sarah Side-Eye illustration */}
            <img
              src={sarahImage}
              alt="Sarah Side-Eye - SchoolhouseBot Mascot"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        {/* Handwritten annotation */}
        <motion.div
          initial={{ opacity: 0, rotate: -15 }}
          animate={{ opacity: 1, rotate: -8 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="absolute -bottom-6 -right-8 handwritten text-[#493751] text-2xl rotate-[-8deg] bg-white px-4 py-2 rounded border-2 border-[#493751] shadow-md"
        >
          Meet Sarah →
        </motion.div>
      </div>

      {/* Additional snarky note */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        className="mt-12 handwritten text-[#3B3B58] text-lg text-center max-w-[200px]"
      >
        <p className="rotate-[2deg]">She's seen it all. She's not impressed.</p>
      </motion.div>
    </motion.div>
  );
}