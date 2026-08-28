export default function InputBox({
  className = "",
  type = "",
  placeholderText = "",
  id = "",
  label = "",
  required = true,
  min = "",
  max = "",
  textarea = false,
}) {
  const sharedProps = {
    name: id,
    id,
    placeholder: placeholderText,
  };

  return (
    <div className="flex flex-col w-full items-start gap-3 font-body text-base leading-[24px]">
      <label htmlFor={id} className="text-black">
        {label}
      </label>
      {textarea ? (
        <textarea
          {...sharedProps}
          rows={4}
          cols={50}
          minLength={min || undefined}
          maxLength={max || undefined}
          className={`${className} bg-white w-full placeholder:text-muted-light text-muted-dark flex justify-start items-start py-[10px] px-4 border-border border min-h-[120px] max-h-[400px] resize-y`}
        ></textarea>
      ) : (
        <input
          {...sharedProps}
          type={type}
          required={required}
          min={min || undefined}
          max={max || undefined}
          className={`${className} bg-white w-full placeholder:text-muted-light text-muted-dark flex justify-center items-start py-[10px] px-4 border-border border`}
        />
      )}
    </div>
  );
}
