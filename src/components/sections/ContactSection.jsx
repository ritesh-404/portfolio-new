import { useEffect, useRef, useState } from "react";
import Button from "../ui/Button";


const services = [
  "Landing page design or redesign",
  "Complete Website design or redesign",
  "Web Development",
  "Other",
];

const TURNSTILE_SITE_KEY = import.meta.env.VITE_TURNSTILE_SITE_KEY;

export default function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    budget: "",
    timeline: "",
    message: "",
    selectedServices: [],
    honeypot: "",
  });

  const [focusedField, setFocusedField] = useState(null);
  const [turnstileToken, setTurnstileToken] = useState("");
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [errorMsg, setErrorMsg] = useState("");

  const turnstileElementRef = useRef(null);

  // Render the Cloudflare Turnstile widget once the script is available.
  useEffect(() => {
    if (!TURNSTILE_SITE_KEY) return;

    let interval;
    const tryRender = () => {
      if (window.turnstile && turnstileElementRef.current) {
        window.turnstile.render(turnstileElementRef.current, {
          sitekey: TURNSTILE_SITE_KEY,
          callback: (token) => setTurnstileToken(token),
          "expired-callback": () => setTurnstileToken(""),
          "error-callback": () => setTurnstileToken(""),
        });
        clearInterval(interval);
      }
    };

    interval = setInterval(tryRender, 300);
    return () => clearInterval(interval);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const toggleService = (service) => {
    setFormData((prev) => {
      const alreadySelected = prev.selectedServices.includes(service);
      if (alreadySelected) {
        return {
          ...prev,
          selectedServices: prev.selectedServices.filter((s) => s !== service),
        };
      }
      return {
        ...prev,
        selectedServices: [...prev.selectedServices, service],
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");

    if (TURNSTILE_SITE_KEY && !turnstileToken) {
      setStatus("error");
      setErrorMsg("Please complete the human verification.");
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, turnstileToken }),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({
          fullName: "",
          companyName: "",
          email: "",
          budget: "",
          timeline: "",
          message: "",
          selectedServices: [],
          honeypot: "",
        });
        setTurnstileToken("");
      } else {
        const data = await res.json().catch(() => ({}));
        setStatus("error");
        setErrorMsg(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please try again.");
    }
  };

  const inputBase =
    "w-full bg-fff rounded-sm px-4 h-auto py-4 text-sm text-primary placeholder-muted-dark outline-none transition-all duration-300";

  const inputFocus = "focus:border-accent focus:ring-1 focus:ring-accent";

  const labelBase = "block text-sm mb-2";

  return (
    <section
      id="contact"
      className="px-4 sm:px-6 lg:px-9 py-6 sm:py-12 lg:py-24 bg-fff h-auto w-full border-b border-border-dark"
    >
      <div className="flex flex-col gap-20 w-full">
        {/* Top section: Heading + decorative line */}
        <div className="flex flex-col gap-2">
          <h2 className="display-sm md:display-md lg:display-lg text-(--color-primary)">
            Want to work together? Let's talk.
          </h2>
          <h4 className="text-base sm:text-lg lg:display-xs text-(--color-muted-light)">
            I reply within 24 hours.
          </h4>
        </div>

        {/* Bottom section: Form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-11 bg-surface border border-border-default px-4 sm:px-6 lg:px-9 py-6"
        >
          {/* form inputs  */}

          <div className="flex flex-col gap-10">
            {/* Row 1: Name + Company */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
              <div className="flex flex-col gap-2">
                <label className={labelBase}>What&apos;s your name?</label>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full name"
                  value={formData.fullName}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("fullName")}
                  onBlur={() => setFocusedField(null)}
                  className={`${inputBase} ${inputFocus} ${
                    focusedField === "fullName" ? "border-accent" : ""
                  }`}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className={labelBase}>
                  What&apos;s your company&apos;s name?
                </label>
                <input
                  type="text"
                  name="companyName"
                  placeholder="company name"
                  value={formData.companyName}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("companyName")}
                  onBlur={() => setFocusedField(null)}
                  className={`${inputBase} ${inputFocus} ${
                    focusedField === "companyName" ? "border-accent" : ""
                  }`}
                />
              </div>
            </div>

            {/* Row 2: Email */}
            <div className="flex flex-col gap-2">
              <label className={labelBase}>
                What&apos;s your email address?
              </label>
              <input
                type="email"
                name="email"
                placeholder="e.g. example@gmail.com"
                value={formData.email}
                onChange={handleChange}
                onFocus={() => setFocusedField("email")}
                onBlur={() => setFocusedField(null)}
                className={`${inputBase} ${inputFocus} ${
                  focusedField === "email" ? "border-accent" : ""
                }`}
              />
            </div>

            {/* Row 3: Budget + Timeline */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <div className="flex flex-col gap-2">
                <label className={labelBase}>
                  Estimated Budget{" "}
                  <span className="text-muted-dark">(starts at just $999)</span>
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-dark text-sm select-none">
                    $
                  </span>
                  <input
                    type="number"
                    name="budget"
                    placeholder=""
                    min="999"
                    max="5999"
                    value={formData.budget}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("budget")}
                    onBlur={() => setFocusedField(null)}
                    className={`${inputBase} ${inputFocus} pl-8 ${
                      focusedField === "budget" ? "border-accent" : ""
                    }`}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className={labelBase}>
                  Timeline{" "}
                  <span className="text-muted-dark">(2–3 weeks typical)</span>
                </label>
                <input
                  type="number"
                  name="timeline"
                  placeholder="e.g. 3  -(weeks)"
                  min="2"
                  value={formData.timeline}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("timeline")}
                  onBlur={() => setFocusedField(null)}
                  className={`${inputBase} ${inputFocus} ${
                    focusedField === "timeline" ? "border-accent" : ""
                  }`}
                />
              </div>
            </div>

            {/* Row 4: Message */}
            <div className="flex flex-col gap-2">
              <label className={labelBase}>
                Tell me about your project and expectations with me!
              </label>
              <textarea
                name="message"
                rows={5}
                placeholder="e.g. what you do and who's your audience etc..."
                value={formData.message}
                onChange={handleChange}
                onFocus={() => setFocusedField("message")}
                onBlur={() => setFocusedField(null)}
                className={`${inputBase} ${inputFocus} resize-none ${
                  focusedField === "message" ? "border-accent" : ""
                }`}
              />
            </div>

            {/* Row 5: Service tags */}
            <div className="flex flex-col gap-2">
              <label className={labelBase}>
                How can I help?{" "}
                <span className="text-muted-dark">
                  (select all that applies)
                </span>
              </label>
              <p className="text-sm text-muted-dark">
                Branding &amp; strategy available as add-ons — just ask.
              </p>
              <div className="flex flex-wrap gap-3">
                {services.map((service, i) => {
                  const isSelected =
                    formData.selectedServices.includes(service);
                  return (
                    <Button>
                      hello
                    </Button>
                  );
                })}
              </div>
            </div>

            {/* Honeypot: hidden from real users, catches bots */}
            <input
              type="text"
              name="honeypot"
              value={formData.honeypot}
              onChange={handleChange}
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="hidden"
            />

            {/* Cloudflare Turnstile widget */}
            {TURNSTILE_SITE_KEY && (
              <div
                ref={turnstileElementRef}
                className="min-h-[65px]"
                aria-label="Human verification"
              />
            )}

            {/* Status messages */}
            {status === "success" && (
              <p className="text-accent text-sm">
                Thanks! Your message is on its way — I&apos;ll reply within 24
                hours.
              </p>
            )}
            {status === "error" && (
              <p className="text-red-400 text-sm">{errorMsg}</p>
            )}
          </div>

          {/* Row 6: Submit button */}
          <div>
            <Button
              className="w-full py-3 h-auto"
              type="submit"
              disabled={status === "submitting"}
            >
              {status === "submitting" ? "Sending..." : "Send message"}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
