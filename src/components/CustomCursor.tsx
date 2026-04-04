import { useEffect, useState } from 'react'
import { motion, useSpring, useMotionValue } from 'framer-motion'

const CustomCursor = () => {
  const [cursorType, setCursorType] = useState('default')
  
  const mouseX = useMotionValue(-100)
  const mouseY = useMotionValue(-100)
  
  // Smooth springs for the outer ring (lagging effect)
  const springConfig = { damping: 25, stiffness: 150, mass: 0.5 }
  const ringX = useSpring(mouseX, springConfig)
  const ringY = useSpring(mouseY, springConfig)

  useEffect(() => {
    const moveMouse = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const cursorData = target.closest('[data-cursor]')?.getAttribute('data-cursor')
      if (cursorData) {
        setCursorType(cursorData)
      } else if (target.closest('a, button, [role="button"]')) {
        setCursorType('grow')
      } else {
        setCursorType('default')
      }
    }

    window.addEventListener('mousemove', moveMouse)
    window.addEventListener('mouseover', handleMouseOver)

    return () => {
      window.removeEventListener('mousemove', moveMouse)
      window.removeEventListener('mouseover', handleMouseOver)
    }
  }, [mouseX, mouseY])

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] hidden lg:block">
      {/* Main Ring */}
      <motion.div
        className="absolute w-10 h-10 border border-gold rounded-full flex items-center justify-center"
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: cursorType === 'grow' ? 2 : cursorType === 'play' ? 1.5 : cursorType === 'plus' ? 1.8 : 1,
          opacity: cursorType === 'default' ? 0.3 : 0.8,
          borderWidth: cursorType === 'default' ? '1px' : '2px',
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 200 }}
      >
        {/* Play Icon (small circle) inside if play mode */}
        {cursorType === 'play' && (
          <motion.div 
            initial={{ scale: 0 }} 
            animate={{ scale: 1 }} 
            className="w-1.5 h-1.5 bg-gold rounded-full" 
          />
        )}
      </motion.div>

      {/* Center Dot */}
      <motion.div
        className="absolute w-1 h-1 bg-gold rounded-full"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          opacity: cursorType === 'default' ? 1 : 0,
          scale: cursorType === 'default' ? 1 : 0,
        }}
      />
    </div>
  )
}

export default CustomCursor
