/**
 * Input component.
 * Reusable input with label support.
 */
export default function Input({
    label,
    id,
    type = 'text',
    error,
    className = '',
    ...props
}) {
    return (
        <div className={className}>
            {label && (
                <label
                    htmlFor={id}
                    className="block text-sm font-medium text-slate-700 mb-1"
                >
                    {label}
                </label>
            )}
            <input
                type={type}
                id={id}
                className={`w-full px-4 py-3 rounded-lg border transition-colors outline-none ${error
                        ? 'border-red-500 focus:ring-2 focus:ring-red-500 focus:border-red-500'
                        : 'border-slate-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500'
                    }`}
                {...props}
            />
            {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
        </div>
    );
}
