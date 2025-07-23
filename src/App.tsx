import { motion } from 'motion/react';
import { Masonry } from './components/Masonry';
import { ScrollProgressBar } from './components/ScrollProgressBar';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <ScrollProgressBar />
      <motion.header
        className="py-8 text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <motion.h1
          className="text-4xl font-bold text-gray-800"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Art Portfolio
        </motion.h1>
        <motion.p
          className="text-gray-600 mt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          A collection of beautiful artwork
        </motion.p>
      </motion.header>
      <main>
        <Masonry />
      </main>
    </div>
  );
}

export default App;
