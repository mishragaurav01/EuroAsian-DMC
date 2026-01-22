/**
 * Button component.
 * Reusable button with variant support.
 */
export default function Button({
    children,
    variant = 'primary',
    size = 'md',
    className = '',
    ...props
}) {
    const baseStyles =
        'inline-flex items-center justify-center font-semibold rounded-lg transition-all';

    const variants = {
        primary: 'bg-amber-500 text-white hover:bg-amber-600 hover:shadow-lg hover:shadow-amber-500/25',
        secondary: 'bg-slate-900 text-white hover:bg-slate-800',
        outline: 'border-2 border-slate-300 text-slate-700 hover:border-slate-400 hover:bg-slate-50',
        ghost: 'text-slate-700 hover:bg-slate-100',
    };

    const sizes = {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 ',
        lg: 'px-8 py-4 text-lg',
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}
