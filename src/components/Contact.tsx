import { useActionState } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { toast } from "sonner";
import { EmailData, sendEmail, SendEmailFormData } from "~/actions/send-email";
import { ActionResponse } from "~/actions/utils";
import Section from "~/components/Section";
import SectionTitle from "~/components/SectionTitle";
import { Button } from "~/components/ui/button";
import { Field, FieldError, FieldLabel } from "~/components/ui/field";
import { Input } from "~/components/ui/input";
import { Textarea } from "~/components/ui/textarea";

type FormState = ActionResponse & { data: EmailData };

const initialFormState: FormState = {
  success: false,
  message: "",
  data: {
    source: "",
    subject: "",
    body: "",
  },
};

const Contact = () => {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [state, formAction, isPending] = useActionState<FormState, FormData>(
    async (_: FormState, formData: FormData) => {
      const data: EmailData = {
        source: formData.get("source") as string,
        subject: formData.get("subject") as string,
        body: formData.get("body") as string,
      };

      try {
        // ReCAPTCHA verification
        if (!executeRecaptcha) {
          toast.error(
            "ReCAPTCHA non disponible. Veuillez réessayer plus tard.",
          );
          return {
            success: false,
            message: "ReCAPTCHA not yet avable",
            data,
          };
        }

        const recaptchaToken = await executeRecaptcha("contact_form");

        const result = await sendEmail({
          ...data,
          recaptchaToken,
        } as SendEmailFormData);

        if (result.success) {
          toast.success("Email envoyé avec succès !");
          return {
            ...result,
            data: initialFormState.data, // Reset form data on success
          };
        }

        toast.error("Une erreur est survenue lors de l'envoi de l'email.");
        return {
          ...result,
          data, // Keep form data on failure
        };
      } catch (error) {
        toast.error("Une erreur inattendue est survenue.");
        return {
          success: false,
          message: "An unexpected error occurred.",
          data,
        };
      }
    },
    initialFormState,
  );

  return (
    <Section>
      <SectionTitle className="text-center">Me contacter</SectionTitle>
      <form action={formAction} className="flex flex-col gap-4">
        <div className="flex gap-4">
          <Field>
            <FieldLabel htmlFor="source">Votre email</FieldLabel>
            <Input
              id="source"
              name="source"
              type="email"
              placeholder="mail@exemple.com"
              required
              disabled={isPending}
              defaultValue={state.data.source}
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
              defaultValue={state.data.subject}
            />
            <FieldError>
              {state.errors?.subject && state.errors.subject[0]}
            </FieldError>
          </Field>
        </div>

        <Field>
          <FieldLabel htmlFor="body">Message</FieldLabel>
          <Textarea
            id="body"
            name="body"
            placeholder="Votre message..."
            required
            disabled={isPending}
            defaultValue={state.data.body}
          />
          <FieldError>{state.errors?.body && state.errors.body[0]}</FieldError>
        </Field>
        <Button type="submit" disabled={isPending} className="mt-4">
          {isPending ? "Envoi en cours..." : "Envoyer"}
        </Button>
      </form>
      <p className="text-muted-foreground mt-6 max-w-96 text-center text-sm text-balance">
        This site is protected by reCAPTCHA and the Google&nbsp;
        <a
          className="underline"
          target="_blank"
          href="https://policies.google.com/privacy"
        >
          Privacy Policy
        </a>
        &nbsp;and&nbsp;
        <a
          className="underline"
          target="_blank"
          href="https://policies.google.com/terms"
        >
          Terms of Service
        </a>
        &nbsp;apply.
      </p>
    </Section>
  );
};

export default Contact;
