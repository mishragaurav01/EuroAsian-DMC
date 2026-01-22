export default function IconCard({ title, icon }) {
  return (
    <div className="
      bg-white rounded-xl p-6
      flex flex-col items-center justify-center gap-4
      shadow-md
      h-[160px]
    ">
      <div className="text-4xl">
        {icon}
      </div>
      <span className="text-md font-bold text-black text-center leading-tight">
        {title}
      </span>
    </div>
  );
}
