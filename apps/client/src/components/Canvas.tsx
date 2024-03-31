import { useEffect, useRef } from 'react'
import { COLORS } from '../lib/colors'

//TODO: proper typing
function Canvas(props: any) {
  const ref = useRef<HTMLCanvasElement>(null)

  function draw(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = '#000'
    ctx.beginPath()
    ctx.rect(50, 100, 50, 50)
    ctx.fill()

    ctx.fillStyle = COLORS.AMBER
    ctx.beginPath()
    ctx.rect(62.5, 112.5, 20, 20)
    ctx.fill()
  }

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return

    const context = canvas.getContext('2d')
    if (!context) return

    context.fillStyle = '#555'
    context!.fillRect(0, 0, context.canvas.width, context.canvas.height)
    draw(context)
  }, [draw])

  return (
    <canvas
      ref={ref}
      {...props}
      onClick={(e) => {
        getMousePosition(ref.current!, e)
      }}
    />
  )
}

function getMousePosition(
  canvas: HTMLCanvasElement,
  event: React.MouseEvent<HTMLCanvasElement, MouseEvent>
) {
  let rect = canvas.getBoundingClientRect()
  let x = event.clientX - rect.left
  let y = event.clientY - rect.top
  console.log('Coordinate x: ' + x, 'Coordinate y: ' + y)
}

export default Canvas
