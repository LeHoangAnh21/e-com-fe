interface IconProps {
  className?: string;
  width?: number;
  height?: number;
}

export default function ShoppingBagIcon({ className, width = 24, height = 24 }: IconProps) {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="white" className={className}>
      <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
      <line x1="3" y1="6" x2="21" y2="6" stroke="white" strokeWidth="2" />
      <path d="M16 10a4 4 0 01-8 0" fill="none" stroke="white" strokeWidth="2" />
    </svg>
  );
}
