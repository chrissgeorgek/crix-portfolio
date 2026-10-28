import { motion } from 'framer-motion'
import { ArrowDown, MousePointer2 } from 'lucide-react'

export default function ExplorePrompt() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.5 }}
      className="flex flex-col items-center gap-3 text-center"
    >
      {/* <div className="flex items-center gap-2 text-sm text-gray-300">
        <MousePointer2
          size={16}
          className="text-purple-400"
        />

        <span>Ready to Explore?</span>
      </div> */}

      {/* <motion.div
        animate={{ y: [0, 5, 0] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="flex h-9 w-9 items-center justify-center rounded-full border border-purple-400/30 bg-purple-500/10 text-purple-300"
      >
        <ArrowDown size={17} />
      </motion.div> */}
    </motion.div>
  )
}