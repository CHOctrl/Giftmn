import { useState } from "react";
import { motion } from "framer-motion";

export default function GiftPage() {
  const [opened, setOpened] = useState(false);

  return (
    <div className="min-h-screen bg-pink-100 flex flex-col items-center justify-center p-6 text-center">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold mb-6 text-pink-800"
      >
        🎁 Gift for Mn
      </motion.div>

      {!opened ? (
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setOpened(true)}
          className="bg-white shadow-xl p-6 rounded-2xl text-xl font-semibold border border-pink-300"
        >
          Tap to Open 🎀
        </motion.button>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-8 rounded-3xl shadow-xl text-2xl text-pink-700 max-w-xs"
        >
          💗 Surprise! Someone is thinking of you.
        </motion.div>
      )}
    </div>
  );
}
