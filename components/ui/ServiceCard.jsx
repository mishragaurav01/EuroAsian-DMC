export default function ServiceCard({ title, description, icon }) {
    return (
        <div className="border-2 border-[#8CA1D0] rounded-2xl px-10 py-6 text-center shadow-lg shadow-[#8CA1D0]/25
 bg-white">
            {/* Icon */}
            <div className="flex justify-center mb-6 text-4xl text-black">
                {icon}
            </div>

            {/* Title */}
            <h3 className="text-2xl font-bold text-black mb-3">
                {title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 text-md leading-relaxed">
                {description}
            </p>
        </div>
    );
}
