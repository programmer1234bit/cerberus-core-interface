interface WaveformVisualizerProps {
  isActive: boolean;
}

export function WaveformVisualizer({ isActive }: WaveformVisualizerProps) {
  const bars = Array.from({ length: 5 }, (_, i) => i);

  return (
    <div className="flex items-center justify-center space-x-1 h-8">
      {bars.map((bar) => (
        <div
          key={bar}
          className={`
            w-1 bg-waveform rounded-full transition-all duration-300
            ${isActive ? 'waveform-bar' : 'h-1'}
          `}
          style={{
            animationDelay: isActive ? `${bar * 0.1}s` : '0s'
          }}
        />
      ))}
    </div>
  );
}