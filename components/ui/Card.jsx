// components/ui/Card.jsx
export default function Card({
  children,
  radius = 'r20',
  shadow = 'md',
  padding = '0',
  className = '',
  ...props
}) {
  const base = 'bg-white block transition-all duration-300';

  // Using arbitrary values for specific pixel radii requested
  const radii = {
    r10: 'rounded-[10px]',
    r20: 'rounded-[20px]',
    r25: 'rounded-[25px]',
    r30: 'rounded-[30px]',
    none: 'rounded-none',
    full: 'rounded-full',
  };

  const shadows = {
    none: 'shadow-none',
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
    xl: 'shadow-xl',
  };

  const paddings = {
    '0': 'p-0',
    '4': 'p-4',
    '6': 'p-6',
    '8': 'p-8',
  };

  return (
    <div
      className={`${base} ${radii[radius] || radii.r20} ${shadows[shadow]} ${paddings[padding] || ''} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
