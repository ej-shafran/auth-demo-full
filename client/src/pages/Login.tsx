import { useAuth } from "@hilma/auth";
import {
  FormProvider,
  FormTextInput,
  FormPassword,
  FormSubmitButton,
} from "@hilma/forms";
import * as yup from "yup";

const schema = yup.object({
  username: yup
    .string()
    .required("שדה זה חובה")
    .min(4, "שדה זה צריך 4 תווים לפחות"),
  password: yup
    .string()
    .required("שדה זה חובה")
    .min(8, "שדה זה צריך 8 תווים לפחות"),
});

type FormValues = yup.InferType<typeof schema>;

export default () => {
  const { login } = useAuth();
  async function handleSubmit(values: FormValues) {
    const {success, user, msg} = await login("/api/auth/login", values);
    if(!success) alert(JSON.stringify(msg, null, 2))
    else alert("You are logged in, " + JSON.stringify(user, null, 2));
  }

  return (
    <FormProvider
      initialValues={{ username: "", password: "" }}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <FormTextInput name="username" label="שם משתמש" />
      <FormPassword name="password" label="סיסמא" />

      <FormSubmitButton disabledOnError>כניסה</FormSubmitButton>
    </FormProvider>
  );
};
