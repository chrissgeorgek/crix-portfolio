import MicroSlats from './MicroSlats'

export default function Background() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      <MicroSlats
        preset="swell"
        color="#A855F7"
        glintColor="#ffffff"
        backgroundColor="#120f17"
        slatWidth={10}
        slatHeight={25}
        gap={3}
        roundness={0.75}
        interactive
        cursorStrength={1}
        cursorSize={40}
        swirl={0}
        trail={1.4}
        lean={0}
        intro
        scale={1.5}
        speed={0.6}
        direction={250}
        chop={0.55}
        stretch={0}
        glint={0.7}
        contrast={1.25}
        perspective={0.55}
        fog={0.55}
        introDuration={1.5}
        paused={false}
      />

      <div className="absolute inset-0 bg-black/35" />
    </div>
  )
}