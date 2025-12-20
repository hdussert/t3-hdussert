import Section from "~/components/Section";
import SectionTitle from "~/components/SectionTitle";

const WhoAmI = () => {
  return (
    <Section className="h-screen">
      <SectionTitle>Profil</SectionTitle>
      <p>
        Développeur frontend avec plus de 3 ans d’expérience, spécialisé en{" "}
        <strong>React, React Native et TypeScript</strong>. Habitué aux produits
        complexes à forts enjeux métier, avec une excellente compréhension
        backend et une forte collaboration avec les équipes produit et design.
      </p>
    </Section>
  );
};

export default WhoAmI;
