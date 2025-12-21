import { useActionState } from "react";
import { EmailData, sendEmail } from "~/actions/send-email";
import { ActionResponse } from "~/actions/utils";
import Section from "~/components/Section";
import SectionTitle from "~/components/SectionTitle";
import { Button } from "~/components/ui/button";
import { Field, FieldError, FieldLabel } from "~/components/ui/field";
import { Input } from "~/components/ui/input";

const initialFormState: ActionResponse = {
  success: false,
  message: "",
};

const Contact = () => {
  const [state, formAction, isPending] = useActionState<
    ActionResponse,
    FormData
  >(async (_: ActionResponse, formData: FormData) => {
    const data: EmailData = {
      source: formData.get("source") as string,
      subject: formData.get("subject") as string,
      body: formData.get("body") as string,
    };

    try {
      const result = await sendEmail(data);

      if (result.success) {
        // toast.success(result.message);
      }

      return result;
    } catch (error) {
      return {
        success: false,
        message: "An unexpected error occurred.",
      };
    }
  }, initialFormState);

  return (
    <Section className="h-screen">
      <SectionTitle>Me contacter</SectionTitle>
      <form action={formAction} className="flex flex-col gap-4">
        <Field>
          <FieldLabel htmlFor="source">Votre email</FieldLabel>
          <Input
            id="source"
            name="source"
            type="email"
            placeholder="mail@exemple.com"
            required
            disabled={isPending}
          />
          <FieldError>
            {state.errors?.source && state.errors.source[0]}
          </FieldError>
        </Field>

        <Field>
          <FieldLabel htmlFor="subject">Sujet</FieldLabel>
          <Input
            id="subject"
            name="subject"
            placeholder="Sujet..."
            required
            disabled={isPending}
          />
          <FieldError>
            {state.errors?.subject && state.errors.subject[0]}
          </FieldError>
        </Field>

        <Field>
          <FieldLabel htmlFor="body">Message</FieldLabel>
          <textarea
            id="body"
            name="body"
            placeholder="Votre message..."
            required
            className="w-full rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:outline-none disabled:opacity-50"
            rows={5}
            disabled={isPending}
          ></textarea>
          <FieldError>{state.errors?.body && state.errors.body[0]}</FieldError>
          <Button type="submit" disabled={isPending} className="mt-4">
            {isPending ? "Envoi en cours..." : "Envoyer"}
          </Button>
        </Field>
      </form>
    </Section>
  );
};

export default Contact;
