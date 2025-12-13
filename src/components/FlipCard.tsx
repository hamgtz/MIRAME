import { motion } from "framer-motion";

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
  setFlippedIndex: React.Dispatch<React.SetStateAction<number | null>>;
};

export default function FlipCard({
  item,
  index,
  flippedIndex,
  setFlippedIndex,
}: FlipCardProps) {
  const isFlipped = flippedIndex === index;

  return (
    <motion.div
      className="relative w-72 h-80 cursor-pointer"
      style={{ perspective: 1000 }}
      onClick={() =>
        setFlippedIndex(isFlipped ? null : index)
      }
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2, duration: 0.8 }}
    >
      <motion.div
        className="absolute inset-0 rounded-3xl shadow-xl bg-[#1f2937] border border-white/10"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.7 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Frente */}
        <div
          className="absolute inset-0 p-6 flex flex-col items-center justify-center"
          style={{ backfaceVisibility: "hidden" }}
        >
          <h3 className="text-2xl font-bold mb-4 text-white">
            {item.title}
          </h3>
          <p className="text-lg text-white/70 mb-6">
            {item.desc}
          </p>
          <p className="text-xl text-mostaza-5">
            {item.price}
          </p>
          <div className="w-12 h-1 mx-auto bg-mostaza-5 rounded-full mt-4" />
        </div>

        {/* Atrás */}
        <div
          className="absolute inset-0 rounded-3xl overflow-hidden"
          style={{
            transform: "rotateY(180deg)",
            backfaceVisibility: "hidden",
          }}
        >
          {item.img && (
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-full object-cover"
            />
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

