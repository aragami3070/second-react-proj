"use client";
import { useForm, type RegisterOptions, type SubmitHandler } from "react-hook-form";
import { CustomForm } from "@/shared/ui/CustomForm";
import { InputTextField } from "@/shared/ui/InputTextField";
import { GridBackGroundLayout } from "@/shared/ui/GridBackGroundLayout";
import { Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { StoreLocator } from "@/shared/store/rootStore";

export default function CreateQuote() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<QuoteFormValue>();

  const router = useRouter();

  const onSubmit: SubmitHandler<QuoteFormValue> = async (data) => {
    const { createQuote } = StoreLocator.get().quote.async;
    await createQuote(data.text);
    router.push("/quotes")
  };

  return (
    <GridBackGroundLayout>
      <Typography variant="h3" sx={{ padding: 1 }}>
        Добавьте вашу любимую цитату!
      </Typography>
      <CustomForm onSubmit={handleSubmit(onSubmit)} buttonText="Создать цитату">
        <InputTextField
          key={field.name}
          label={field.label}
          type={field.type}
          margin="normal"
          {...register(field.name, field.rules)}
          error={!!errors[field.name]}
          helperText={errors[field.name]?.message as string}
          multiline
          minRows={6}
          maxRows={10}
          sx={{
            width: "calc(100% + 200px)",
          }}
        />
      </CustomForm>
    </GridBackGroundLayout>
  );
}

type QuoteFormValue = {
  text: string;
};

type QuoteFormField = {
  name: keyof QuoteFormValue;
  label: string;
  type: string;
  rules: RegisterOptions<QuoteFormValue>;
};

const field: QuoteFormField =
{
  name: "text",
  label: "Введите цитату",
  type: "text",
  rules: {
    required: "Введите цитату",
    minLength: {
      value: 3,
      message: "Минимум 3 символа",
    },
  },
};
