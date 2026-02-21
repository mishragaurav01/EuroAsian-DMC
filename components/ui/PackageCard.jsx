import Image from 'next/image';

export default function PackageCard({ title, duration, image }) {
    return (
        <div className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col h-full">

            {/* Image */}
            <div className="relative h-56 w-full">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover"
                />
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-[#1F3A5F] mb-1">
                    {title}
                </h3>

                <div className="flex justify-between items-center text-sm mb-6">
                    <span className="text-gray-700">
                        {duration}
                    </span>
                    <a href="#" className="text-[#E65A3A] hover:underline">
                        Download plans
                    </a>
                </div>

                <button className="mt-auto mx-auto bg-[#E65A3A] text-white text-sm font-semibold px-6 py-2 rounded-md">
                    Ask for Details
                </button>
            </div>
        </div>
    );
}
