import { AlertTriangleIcon } from "lucide-react";

interface FormErrorProps {
  message?: string;
};

export const FormError = ({
  message,
}: FormErrorProps) => {
  if (!message) return null;

  return (
    <div className="bg-destructive/20 p-3 rounded-md flex items-center gap-x-2 text-sm text-destructive">
      <AlertTriangleIcon className="h-5 w-5" />
      <p className="font-semibold text-sm leading-tight">{message}</p>
    </div>
  );
};