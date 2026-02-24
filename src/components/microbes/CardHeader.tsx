import { MicrobeRole } from "@/types/microbe";

interface CardHeaderProps {
  type: "bacteria" | "fungi";
  role: MicrobeRole;
}

const CardHeader = ({ type, role }: CardHeaderProps) => {
  return (
    <div className="flex flex-col items-center space-y-4 text-center">
      <div className="flex items-center justify-center w-24 h-24 transition-all duration-500 border rounded-full bg-slate-50 border-black/5 ring-1 ring-offset-4 ring-primary-dark group-hover:ring-primary group-hover:scale-105 group-hover:ring-offset-2">
        <span className={`text-4xl ${type === "bacteria" ? "icon-rotate" : "icon-scale"}`}>
          {type === "bacteria" ? "🧬" : "🍄"}
        </span>
      </div>

      <div className={`pill-badge ${role}`}>{role}</div>
    </div>
  );
};

export default CardHeader;
