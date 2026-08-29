export default function ShimmerText({ text = "", className = "" }) {
  return (
    <span className={`${className} t-shimmer`} data-text={text}>
      <span>{text}</span>
    </span>
  );
}
