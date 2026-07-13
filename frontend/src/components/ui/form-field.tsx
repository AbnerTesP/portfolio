// frontend/src/components/ui/form-field.tsx
import { Input, Textarea } from "@/components/ui/input";
import type { ComponentProps } from "react";

type BaseProps = {
  name: string;
  error?: string | undefined;
};

type FormFieldProps = BaseProps &
  (
    | ({ as?: "input" } & ComponentProps<"input">)
    | ({ as: "textarea" } & ComponentProps<"textarea">)
  );

export function FormField({ name, error, as = "input", ...props }: FormFieldProps) {
  const errorId = `${name}-error`;
  const fieldProps = {
    name,
    required: true,
    "aria-invalid": !!error,
    ...(error ? { "aria-describedby": errorId } : {}),
  };

  return (
    <div>
      {as === "textarea" ? (
        <Textarea {...fieldProps} {...(props as ComponentProps<"textarea">)} />
      ) : (
        <Input {...fieldProps} {...(props as ComponentProps<"input">)} />
      )}
      {error && (
        <p id={errorId} className="mt-1 text-xs text-red-400">
          {error}
        </p>
      )}
    </div>
  );
}
