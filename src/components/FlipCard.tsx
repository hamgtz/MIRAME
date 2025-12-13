import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function FlipCard({
  item,
  index,
  flippedIndex,
  setFlippedIndex,
}) {
  const isFlipped = flippedIndex === index;

  const handleClick = () => {
    if (isFlipped) {
      setFlippedIndex(null); // si la misma carta se toca, se cierra
    } else {
      setFlippedIndex(index); // abrir esta carta y cerrar las demás
    }
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
        {/* FRONT */}
        <div
          className="absolute inset-0 p-6 flex flex-col items-center justify-center"
          style={{ backfaceVisibility: "hidden" }}
        >
          <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-mostaza-5 transition-colors duration-300">
            {item.title}
          </h3>
          <p className="text-lg text-white/70 mb-6 leading-relaxed">
            {item.desc}
          </p>
          <p className="text-xl text-mostaza-5 mb-4">{item.price}</p>
          <div className="w-12 h-1 mx-auto bg-mostaza-5 rounded-full mb-2"></div>
        </div>

        {/* --- */}
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{ transform: "rotateY(180deg)", backfaceVisibility: "hidden" }}
        >
          <div className="w-[99%] h-[99%] bg-black rounded-3xl p-2 shadow-xl border border-mostaza-5/70">
            <img
              src={item.img}
              className="w-full h-full object-cover rounded-xl shadow-lg"
              alt={item.title}
            />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
