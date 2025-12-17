'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface MapleLeaf {
  id: number;
  left: string;
  delay: number;
  duration: number;
  size: number;
  rotation: number;
  opacity: number;
}

export default function MapleLeaves() {
  const [leaves, setLeaves] = useState<MapleLeaf[]>([]);

  useEffect(() => {
    // Generate random maple leaves with more variation
    const generatedLeaves: MapleLeaf[] = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: Math.random() * 15,
      duration: 12 + Math.random() * 8,
      size: 24 + Math.random() * 24,
      rotation: Math.random() * 360,
      opacity: 0.2 + Math.random() * 0.3,
    }));
    setLeaves(generatedLeaves);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {leaves.map((leaf) => (
        <motion.div
          key={leaf.id}
          className="absolute"
          initial={{ 
            y: -100, 
            x: 0,
            rotate: 0,
            opacity: 0 
          }}
          animate={{
            y: '100vh',
            x: [0, 50, -50, 0, 30, -30, 0],
            rotate: [leaf.rotation, leaf.rotation + 360, leaf.rotation + 720],
            opacity: [0, leaf.opacity, leaf.opacity, 0],
          }}
          transition={{
            duration: leaf.duration,
            delay: leaf.delay,
            repeat: Infinity,
            ease: "linear",
            x: {
              duration: leaf.duration / 2,
              repeat: Infinity,
              ease: "easeInOut",
            },
            rotate: {
              duration: leaf.duration / 3,
              repeat: Infinity,
              ease: "linear",
            },
            opacity: {
              duration: leaf.duration,
              times: [0, 0.1, 0.9, 1],
            }
          }}
          style={{
            left: leaf.left,
          }}
        >
          <svg
            width={leaf.size}
            height={leaf.size}
            viewBox="0 0 24 24"
            className="fill-gray-700"
            style={{
              filter: 'drop-shadow(0 2px 6px rgba(31, 41, 55, 0.3))',
            }}
          >
            {/* More detailed maple leaf path */}
            <path d="M12 2L13.5 8H19L15 11.5L16.5 17L12 14L7.5 17L9 11.5L5 8H10.5L12 2Z"/>
          </svg>
        </motion.div>
      ))}
    </div>
  );
}
