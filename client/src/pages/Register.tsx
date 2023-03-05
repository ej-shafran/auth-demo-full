import { useAuth } from "@hilma/auth";
import {
  FormProvider,
  FormTextInput,
  FormPassword,
  FormSubmitButton,
} from "@hilma/forms";
import axios from "axios";
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
  async function handleSubmit(values: FormValues) {
    try {
      const { data } = await axios.post("/api/auth/register", values);
      alert("You are registered, " + JSON.stringify(data, null, 2));
    } catch (error) {
      alert(JSON.stringify(error, null, 2));
    }
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
