import Section from "~/components/Section";
import SectionTitle from "~/components/SectionTitle";

type SectionDataListProps<T> = {
  title: string;
  data: T[];
  DataComponent: React.ComponentType<T>;
};

const SectionDataList = <T,>({
  title,
  data,
  DataComponent,
}: SectionDataListProps<T>) => {
  return (
    <Section>
      <SectionTitle>{title}</SectionTitle>
      {data.map((item, index) => (
        <DataComponent key={index} {...item} />
      ))}
    </Section>
  );
};

export default SectionDataList;
