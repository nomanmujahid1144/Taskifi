'use client'

import { useEffect, useState, useRef } from 'react'
import { motion, useMotionValue, animate, useInView } from 'framer-motion'
import clsx from 'clsx'

type CountUpNumberProps = {
  end: number
  start?: number
  duration?: number // in seconds
  delay?: number
  prefix?: string
  suffix?: string
  className?: string
}

export default function CountUpNumber({
  end,
  start = 0,
  duration = 1,
  delay = 0,
  prefix = '',
  suffix = '',
  className,
}: CountUpNumberProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const motionValue = useMotionValue(start)
  const [display, setDisplay] = useState(start)

  useEffect(() => {
    if (isInView) {
      const controls = animate(motionValue, end, {
        duration,
        delay,
        ease: 'easeOut',
        onUpdate: (latest) => setDisplay(Math.floor(latest)),
      })

      return () => controls.stop()
    }
  }, [isInView, motionValue, end, duration, delay])

  return (
    <motion.span
      ref={ref}
      className={clsx('inline-block', className)}
    >
      {prefix}{display}{suffix}
    </motion.span>
  )
}
