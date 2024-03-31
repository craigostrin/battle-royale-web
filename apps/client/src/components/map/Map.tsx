import { useEffect, useRef, useState } from 'react'
import Room from './Room'

type Path = {
  startX: number
  startY: number
  endX: number
  endY: number
}

function Map() {
  const [path, setPath] = useState<Path>()
  const room1 = useRef<HTMLDivElement>(null)
  const room2 = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const rect1 = room1.current?.getBoundingClientRect()
    const rect2 = room2.current?.getBoundingClientRect()

    console.log('ONE', rect1)
    console.log('TWO', rect2)

    if (!rect1 || !rect2) return

    const path: Path = {
      startX: rect1.right,
      startY: rect1.height / 2,
      endX: rect2.left,
      endY: rect2.height / 2,
    }
    console.log(path)
    setPath(path)
  }, [])

  return (
    <>
      <div className='flex gap-10'>
        <Room ref={room1} height={2} width={4} charNames={['Murph', 'Jenny']} />
        <Room
          ref={room2}
          height={3}
          width={3}
          charNames={['Percy', 'Amad', 'Jez', '0mega']}
        />
        <svg className='absolute h-full w-full'>
          {path && (
            <path
              d={`M${path.startX} ${path.startY} L${path.endX} ${path.startY}`}
              strokeWidth={5}
              className='stroke-amber-700'
            />
          )}
        </svg>
      </div>
    </>
  )
}

export default Map
