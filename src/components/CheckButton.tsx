import { motion, useMotionValue, useTransform } from 'framer-motion';

type CheckButtonProps = {
  check: boolean;
  handleCheck: () => void;
};

const checkVariants = {
  checked: {
    pathLength: 1,
  },
  unchecked: {
    pathLength: 0,
  },
};

const boxVariants = {
  checked: {
    backgroundColor: '#64ffda',
    transition: { duration: 0.1 },
  },
  unchecked: {
    backgroundColor: 'rgb(136 146 176 / .30)',
    transition: { duration: 0.1 },
  },
};

function CheckButton({ check, handleCheck }: CheckButtonProps) {
  const pathLength = useMotionValue(0);
  const opacity = useTransform(pathLength, [0.05, 0.15], [0, 1]);
  return (
    <motion.div
      animate={check ? 'checked' : 'unchecked'}
      className="basis-6 shrink-0 h-6 rounded flex items-center justify-center p-1 cursor-pointer transition-colors bg-[#8892b0]/[.30] hover:bg-[#8892b0]/[.50]"
      variants={boxVariants}
      onClick={handleCheck}>
      <motion.svg
        className="w-full h-full stroke-[#0a192f] flex items-center justify-center"
        viewBox="0 0 53 38"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <motion.path
          variants={checkVariants}
          animate={check ? 'checked' : 'unchecked'}
          style={{ pathLength, opacity }}
          fill="none"
          strokeMiterlimit="10"
          strokeWidth="6"
          d="M1.5 22L16 36.5L51.5 1"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
      </motion.svg>
    </motion.div>
  );
}

export default CheckButton;
