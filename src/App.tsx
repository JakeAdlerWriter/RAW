import { TetrisGame } from './components/TetrisGame';

export default function App() {
  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(to bottom right, #000000, #1a0033, #000000)' }}>
      {/* Cyberpunk grid background */}
      <div 
        className="fixed inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(3, 225, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(3, 225, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />
      
      {/* Animated glow effects */}
      <div className="fixed top-20 left-20 w-96 h-96 rounded-full blur-[100px] animate-pulse" style={{ backgroundColor: 'rgba(3, 225, 255, 0.2)' }} />
      <div className="fixed bottom-20 right-20 w-96 h-96 rounded-full blur-[100px] animate-pulse delay-1000" style={{ backgroundColor: 'rgba(220, 31, 255, 0.2)' }} />
      
      <div className="relative z-10 flex flex-col items-center justify-center">
        <div className="text-center py-8">
          <h1 
            className="text-5xl md:text-7xl font-mono text-transparent bg-clip-text mb-2"
            style={{ 
              backgroundImage: 'linear-gradient(to right, #03E1FF, #DC1FFF, #00FFA3)',
              textShadow: '0 0 40px rgba(3,225,255,0.5)',
              WebkitBackgroundClip: 'text'
            }}
          >
            ATOMIC TETRIS
          </h1>
          <p className="font-mono text-sm md:text-base" style={{ color: '#03E1FF' }}>
            COSMIC DREAMS
          </p>
        </div>
        
        <TetrisGame />
      </div>
    </div>
  );
}
