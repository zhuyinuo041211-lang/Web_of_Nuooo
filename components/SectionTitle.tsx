type SectionTitleProps = {
  number: string;
  title: string;
};

export default function SectionTitle({ number, title }: SectionTitleProps) {
  return (
    <div className="mb-12 md:mb-16">
      <div className="flex items-baseline gap-4">
        <span className="text-[11px] font-semibold tracking-[0.15em] text-[#b0b0b0]">
          {number}
        </span>
        <h2 className="text-section text-[#1a1a1a]">{title}</h2>
      </div>
      <div className="thick-rule mt-4" />
    </div>
  );
}
