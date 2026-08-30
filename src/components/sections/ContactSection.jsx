import { useState } from "react";
import Section from "../ui/Section";
import Container from "../ui/Container";
import BaseGrid from "../ui/BaseGrid";
import HeadingSubHeading from "../ui/HeadingSubHeading";
import InputBox from "../ui/InputBox";
import Button from "../ui/Button";

export default function ContactSection({ className = "" }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null); // 'success' | 'error' | null
  const [statusMessage, setStatusMessage] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    const formElement = event.target;
    const formData = new FormData(formElement);
    formData.append("access_key", "d4ac9c64-0374-4f28-8a08-558f4b8a5c0d");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        setStatusMessage("Thank you! Your message has been sent successfully.");
        formElement.reset(); // Clears form inputs
      } else {
        setStatus("error");
        setStatusMessage(
          data.message || "Something went wrong. Please try again.",
        );
      }
    } catch (error) {
      setStatus("error");
      setStatusMessage(
        "Network error. Please check your connection and try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const services = [
    "Web Design & Development",
    "Pitch Deck & One-Pager Design",
    "Brand Strategy & Visual Identity",
    "Mobile App Design ",
  ];

  return (
    <Section id="contactSection" className={className}>
      <Container>
        <BaseGrid>
          {/* heading and subheading */}
          <HeadingSubHeading
            heading="Want to work together ?"
            subHeading="The best work begins with the right introduction. Tell me what you're building and I’ll get back to you within 24 hours."
          />

          <div className="col-span-12 h-full mt-20">
            <form
              onSubmit={onSubmit}
              className="w-full bg-img-container md:px-9 px-6 py-11 border border-border"
            >
              {/* content  */}
              <div className="flex w-full items-start gap-6 flex-col">
                {/* client name  */}
                <InputBox
                  type="text"
                  placeholderText="Full name"
                  id="clientName"
                  name="clientName"
                  label="What's your name?"
                  required
                />

                {/* company name  */}
                <InputBox
                  type="text"
                  placeholderText="Company name"
                  id="companyName"
                  name="companyName"
                  label="What's your company's name?"
                />

                {/* email  */}
                <InputBox
                  type="email"
                  placeholderText="e.g. example@gmail.com"
                  id="email"
                  name="email"
                  label="What's your email address?"
                  required
                />

                {/* social media links  */}
                <div className="w-full flex flex-col gap-1">
                  <InputBox
                    type="text"
                    placeholderText="linkedIn"
                    id="linkedin"
                    name="linkedin"
                    label="Best place to connect with you online?"
                    required
                  />
                  <InputBox
                    type="text"
                    placeholderText="Twitter(X)"
                    id="twitter"
                    name="twitter"
                    required
                  />
                </div>

                {/* textarea */}
                <InputBox
                  placeholderText="e.g. what you do and who’s your audience etc..."
                  id="company-brief"
                  name="companyBrief"
                  label="Tell me about your company a little bit."
                  textarea
                  required
                />

                {/* services  */}
                <div className="flex flex-col gap-3 font-body text-base leading-[24px] text-black">
                  <label>
                    How can I help you? (If you need help with something else we
                    can talk about that on call)
                  </label>

                  <div className="flex flex-wrap w-full gap-1.5">
                    {services.map((service) => (
                      <label className="cursor-pointer" key={service}>
                        <input
                          type="radio"
                          name="service"
                          className="sr-only peer"
                          value={service}
                        />
                        <span className="inline-block px-5 py-1 rounded-full text-base border border-border bg-img-container text-muted-dark transition-all peer-checked:bg-black peer-checked:text-white hover:border-muted-dark">
                          {service}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              {/* Status Message Feedback Banner */}
              {status && (
                <div
                  className={`mt-6 p-4 rounded-md text-sm font-medium ${
                    status === "success"
                      ? "bg-green-100 text-green-800 border border-green-300"
                      : "bg-red-100 text-red-800 border border-red-300"
                  }`}
                >
                  {statusMessage}
                </div>
              )}

              {/* button  */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full mt-11 disabled:opacity-50 disabled:cursor-not-allowed py-6 rounded-[50px]"
              >
                {isSubmitting ? "Sending..." : "Send message"}
              </Button>

              {/* Divider */}
              <div className="relative my-8 flex items-center justify-center">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-border" />
                </div>
                <span className="relative bg-img-container px-4 text-xs font-mono uppercase tracking-widest text-muted-dark">
                  Or skip the form
                </span>
              </div>

              {/* Book Call Secondary Button */}
              <a
                href="https://cal.com/ritesh-n/15min?overlayCalendar=true"
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 border border-black bg-transparent px-6 py-4 font-body text-base font-medium text-black transition-all hover:bg-black hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                  <line x1="16" x2="16" y1="2" y2="6" />
                  <line x1="8" x2="8" y1="2" y2="6" />
                  <line x1="3" x2="21" y1="10" y2="10" />
                </svg>
                Book a 15-min call directly
              </a>
            </form>
          </div>
        </BaseGrid>
      </Container>
    </Section>
  );
}
