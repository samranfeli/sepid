import Link from "next/link";
import { Container } from "./Container";

export function Breadcrumb({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <Container className="flex flex-wrap items-center gap-2 py-3.5 text-[13.5px] text-ink-soft">
      {items.map((item, i) => (
        <span key={item.label} className="flex items-center gap-2">
          {i > 0 && <span>/</span>}
          {item.href ? (
            <Link href={item.href} className="hover:text-sage-dark">
              {item.label}
            </Link>
          ) : (
            <span>{item.label}</span>
          )}
        </span>
      ))}
    </Container>
  );
}
