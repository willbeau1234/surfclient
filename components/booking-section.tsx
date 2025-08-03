import { BookingForm } from "@/components/booking-form"

export function BookingSection() {
  return (
    <section id="booking" className="bg-white py-20 px-8 md:px-12 border-t border-gray-100">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif text-black mb-8 font-light">Book with us!</h2>
          <p className="text-lg md:text-xl text-black font-serif leading-relaxed max-w-3xl mx-auto">
            Available seven days a week. Once you get in touch, we'll coordinate the ideal time based on surf conditions
            and your schedule.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <BookingForm />
        </div>
      </div>
    </section>
  )
}
