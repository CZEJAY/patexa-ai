import { CheckCircle2Icon } from "lucide-react";

interface FormErrorProps {
  message?: string;
};

export const FormSuccess = ({
  message,
}: FormErrorProps) => {
  if (!message) return null;

  return (
    <div className="bg-emerald-500/20 p-3 rounded-md flex items-center gap-x-2 text-sm text-emerald-500">
      <CheckCircle2Icon className="h-5 w-5" />
      <p className="font-semibold leading-tight">{message}</p>
    </div>
  );
};