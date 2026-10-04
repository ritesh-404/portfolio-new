// src/components/ui/Section.jsx

export default function Section({ id = "", className = "", children }) {
  return (
    <section id={id} className={`w-full py-12 lg:py-16 ${className}`}>
      {children}
    </section>
  );
}
