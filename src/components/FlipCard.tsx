import { motion } from "framer-motion";
import type { Dispatch, SetStateAction } from "react";

/* ===== TIPOS ===== */
type Servicio = {
  title: string;
  desc: string;
  price: string;
  img?: string;
};

type FlipCardProps = {
  item: Servicio;
  index: number;
  flippedIndex: number | null;
  setFlippedIndex: Dispatch<SetStateAction<number | null>>;
};

/* ===== COMPONENTE ===== */
export default function FlipCard({
  item,
  index,
  flippedIndex,
  setFlippedIndex,
}: FlipCardProps) {
  const isFlipped = flippedIndex === index;

  const handleClick = () => {
    setFlippedIndex(isFlipped ? null : index);
  };

  return (
    <motion.div
      className="relative w-72 h-80 cursor-pointer"
      style={{ perspective: 1000 }}
      onClick={handleClick}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2, duration: 0.8 }}
    >
      <motion.div
        className="absolute inset-0 rounded-3xl shadow-xl bg-[#1f2937] border border-white/10"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* ===== FRENTE ===== */}
        <div
          className="absolute inset-0 p-6 flex flex-col items-center justify-center"
          style={{ backfaceVisibility: "hidden" }}
        >
          <h3 className="text-2xl font-bold mb-4 text-white transition-colors duration-300">
            {item.title}
          </h3>
          <p className="text-lg text-white/70 mb-6 leading-relaxed text-center">
            {item.desc}
          </p>
          <p className="text-xl text-mostaza-5 mb-4">{item.price}</p>
          <div className="w-12 h-1 mx-auto bg-mostaza-5 rounded-full mb-2" />
        </div>

        {/* ===== ATRÁS ===== */}
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            transform: "rotateY(180deg)",
            backfaceVisibility: "hidden",
          }}
        >
          <div className="w-[96%] h-[96%] bg-black/40 backdrop-blur-md rounded-3xl p-2 shadow-xl border border-mostaza-5/60">
            {item.img && (
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover rounded-xl shadow-lg"
              />
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
