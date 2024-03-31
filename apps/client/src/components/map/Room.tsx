import { cn } from '@/lib/utils'
import { forwardRef } from 'react'

// export interface RoomProps extends React.HTMLAttributes<HTMLDivElement>, {

// }

export interface RoomProps {
  height: number
  width: number
  charNames: string[]
}

const Room = forwardRef<HTMLDivElement, RoomProps>((props, ref) => {
  const gridCols = `grid-cols-${props.width}`

  return (
    <div
      ref={ref}
      className={cn(
        'border-amber-700 bg-gray-500 border-8 grid gap-1 h-max max-w-max',
        gridCols
      )}
    >
      {createPositions(props.height * props.width, props.charNames)}
    </div>
  )
})

function createPositions(size: number, charNames: string[]) {
  const positions: JSX.Element[] = []

  for (let i = 0; i < size; i++) {
    const element = <Position key={i} charName={charNames[i]} />
    positions.push(element)
  }

  return positions
}

function Position({ charName }: { charName?: string }) {
  return (
    <div className={`bg-black size-16 flex`}>
      {charName && (
        <div
          className={`bg-retro-amber m-auto size-6 text-center`}
          onClick={(e) => {
            console.log(e.target)
          }}
        >
          <span className='text-black text-xl'>{charName[0]}</span>
        </div>
      )}
    </div>
  )
}

export default Room
