import Button from "../ui/Button";

const openCal = () => {
  window.location.href = "https://cal.com/ritesh-n/15min?overlayCalendar=true";
};

export default function FooterSection() {
  return (
    <footer className="sticky bottom-0 z-0 flex min-h-[60vh] w-full flex-col items-center justify-center gap-8 bg-black px-5 py-24 text-white sm:px-6 md:px-8 lg:px-10">
      <div className="flex w-full flex-col items-center justify-center gap-7 text-center">
        <p className="font-serif text-2xl font-medium md:text-3xl">
          Still have any questions?
        </p>

        <Button
          variant="secondary"
          onClick={openCal}
          className="!bg-white !text-black !ring-white/70 hover:!bg-gray-100 !rounded-full"
        >
          Book a 15-min call
        </Button>
      </div>
    </footer>
  );
}
