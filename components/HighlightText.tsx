type Props = {
  text: string;
  as?: "p" | "span";
  className?: string;
};

/** Renders text with {{keyword}} wrapped in accent-colored spans */
export default function HighlightText({ text, as: Tag = "p", className = "" }: Props) {
  const parts = text.split(/(\{\{.+?\}\})/);

  return (
    <Tag className={className}>
      {parts.map((part, i) => {
        if (part.startsWith("{{") && part.endsWith("}}")) {
          return (
            <span key={i} className="font-semibold text-accent">
              {part.slice(2, -2)}
            </span>
          );
        }
        return <span key={i}>{part}</span>;
      })}
    </Tag>
  );
}
