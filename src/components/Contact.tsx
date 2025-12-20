import Section from "~/components/Section";
import SectionTitle from "~/components/SectionTitle";

const Contact = () => {
  return (
    <Section className="h-screen">
      <SectionTitle>Me contacter</SectionTitle>
      <form
        className="flex flex-col gap-4"
        onSubmit={(e) => {
          e.preventDefault();
          const form = e.target as HTMLFormElement;
          const formData = new FormData(form);
          const name = formData.get("name");
          const email = formData.get("email");
          const message = formData.get("message");

          window.location.href =
            `mailto:hugo.dussertsarthe@gmail.com` +
            `?subject=Contact de ${name} (${email})` +
            `&body=${encodeURIComponent(message as string)}`;
        }}
      >
        <label className="flex flex-col gap-1">
          <span>Nom</span>
          <input
            type="text"
            name="name"
            className="rounded border p-2"
            required
          />
        </label>
        <label className="flex flex-col gap-1">
          <span>Email</span>
          <input
            type="email"
            name="email"
            className="rounded border p-2"
            required
          />
        </label>
        <label className="flex flex-col gap-1">
          <span>Message</span>
          <textarea
            name="message"
            className="rounded border p-2"
            rows={5}
            required
          ></textarea>
        </label>
        <button
          type="submit"
          className="self-start rounded bg-primary px-4 py-2 text-white hover:bg-primary/80"
        >
          Envoyer
        </button>
      </form>
    </Section>
  );
};

export default Contact;
