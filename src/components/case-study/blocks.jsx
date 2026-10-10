/**
 * Optional building blocks. Every block accepts `className`,
 * which is added AFTER the defaults. Extra props (id, onClick,
 * data-*, etc.) are passed through to the underlying element.
 */

import { twMerge } from "tailwind-merge";

const cn = (...classes) => twMerge(classes.filter(Boolean).join(" "));

const slugify = (str) =>
  str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const textClass =
  "max-w-[100%] text-pretty font-inter text-[15px] leading-[1.55] tracking-[-0.01em] text-portfolio-text-secondary md:max-w-[75%]";

export function MediaFrame({ children, className, ...rest }) {
  return (
    <div
      className={cn(
        "w-full rounded-[14px] border border-portfolio-border bg-portfolio-border p-2 shadow-[0_1px_2px_rgba(0,0,0,0.03)]",
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
}

/**
 * <Section title="The Problem">...</Section>
 * <Section title="Hero section" toc="Hero">...</Section>   custom sidebar label
 * <Section title="01." toc={false}>...</Section>           hidden from sidebar
 *
 * className        -> the <section>
 * headingClassName -> the <h2>
 * bodyClassName    -> the div wrapping children
 */
export function Section({
  title,
  toc = true,
  children,
  className,
  headingClassName,
  bodyClassName,
  ...rest
}) {
  const label = typeof toc === "string" ? toc : title;
  return (
    <section
      id={slugify(title)}
      data-toc={toc ? label : undefined}
      className={cn("scroll-mt-24", className)}
      {...rest}
    >
      <h2
        className={cn(
          "max-w-[100%] text-pretty font-dm-sans text-lg font-medium leading-[1.12] tracking-[-0.025em] md:max-w-[75%]",
          headingClassName,
        )}
      >
        {title}
      </h2>
      <div className={cn("mt-4 flex flex-col gap-6", bodyClassName)}>
        {children}
      </div>
    </section>
  );
}

export function H3({ children, className, ...rest }) {
  return (
    <h3
      className={cn(
        "font-dm-sans text-xl font-medium tracking-[-0.02em]",
        className,
      )}
      {...rest}
    >
      {children}
    </h3>
  );
}

export function H4({ children, className, ...rest }) {
  return (
    <h4
      className={cn(
        "font-dm-sans text-base font-medium tracking-[-0.015em]",
        className,
      )}
      {...rest}
    >
      {children}
    </h4>
  );
}

export function P({ children, className, ...rest }) {
  return (
    <p className={cn(textClass, className)} {...rest}>
      {children}
    </p>
  );
}

/** <UL><li>one</li><li>two</li></UL> */
export function UL({ children, className, ...rest }) {
  return (
    <ul
      className={cn(
        textClass,
        "list-disc space-y-2 pl-5 marker:text-portfolio-text-muted",
        className,
      )}
      {...rest}
    >
      {children}
    </ul>
  );
}

export function Quote({ children, className, ...rest }) {
  return (
    <blockquote
      className={cn(
        "max-w-[100%] border-l-2 border-white/20 pl-5 font-dm-sans text-xl leading-[1.35] tracking-[-0.02em] text-white md:max-w-[75%]",
        className,
      )}
      {...rest}
    >
      {children}
    </blockquote>
  );
}

/** Side-by-side layout: <Grid cols={2}> ...figures... </Grid> */
export function Grid({ cols = 2, children, className, ...rest }) {
  const colClass = {
    1: "md:grid-cols-1",
    2: "md:grid-cols-2",
    3: "md:grid-cols-3",
  }[cols];
  return (
    <div
      className={cn("grid grid-cols-1 gap-4", colClass, className)}
      {...rest}
    >
      {children}
    </div>
  );
}

/**
 * className        -> the <figure>
 * frameClassName   -> the MediaFrame
 * imgClassName     -> the <img>
 * captionClassName -> the caption
 */
export function Figure({
  src,
  alt = "",
  caption,
  className,
  frameClassName,
  imgClassName,
  captionClassName,
  ...rest
}) {
  return (
    <figure className={className} {...rest}>
      <MediaFrame className={frameClassName}>
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          className={cn("h-auto w-full object-cover", imgClassName)}
        />
      </MediaFrame>
      {caption && <Caption className={captionClassName}>{caption}</Caption>}
    </figure>
  );
}

export function Video({
  src,
  caption,
  className,
  frameClassName,
  videoClassName,
  captionClassName,
  ...rest
}) {
  return (
    <figure className={className} {...rest}>
      <MediaFrame className={frameClassName}>
        <video
          src={src}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className={cn("h-auto w-full object-cover", videoClassName)}
        />
      </MediaFrame>
      {caption && <Caption className={captionClassName}>{caption}</Caption>}
    </figure>
  );
}

/** Before / after, stacked. Pass className="md:flex-row" etc. to change layout. */
export function Pair({
  before,
  after,
  alt = "",
  beforeCaption = "Original",
  afterCaption = "Redesigned",
  className,
}) {
  return (
    <div className={cn("flex flex-col gap-10", className)}>
      <Figure src={before} alt={`${alt} (original)`} caption={beforeCaption} />
      <Figure src={after} alt={`${alt} (redesigned)`} caption={afterCaption} />
    </div>
  );
}

function Caption({ children, className }) {
  return (
    <figcaption
      className={cn(
        "mx-auto mt-3 max-w-[100%] text-center font-inter text-sm leading-[1.5] tracking-[-0.005em] text-[#737780] md:max-w-[75%]",
        className,
      )}
    >
      {children}
    </figcaption>
  );
}
