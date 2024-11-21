import { Loader2 } from "lucide-react";

const LoadingComponent = ({
  loading,
  label,
}: {
  loading: boolean;
  label?: string;
}) => {
  if (!loading) return null;
  return (
    <div
      className={`absolute inset-0 z-50 flex items-center justify-center bg-white/80`}
    >
      <div className="flex flex-col items-center gap-8 lg justify-center">
        <Loader2 className="mr-5 h-7 w-7 animate-spin" />
        <span>{label}</span>
      </div>
    </div>
  );
};

export default LoadingComponent;
