"use client"

import { Button } from "@/components/ui/button"

export function HeroSection() {
  const scrollToBooking = () => {
    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/placeholder.svg?height=1080&width=1920')`,
        }}
      >
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col justify-between p-8 md:p-12">
        <div className="flex justify-between items-start">
          <h1 className="text-4xl md:text-6xl font-serif text-white font-light tracking-wide">
            Bali Mahalo
            <br />
            Surf Co
          </h1>
        </div>

        <div className="flex justify-center">
          <Button
            onClick={scrollToBooking}
            className="bg-white text-black hover:bg-gray-100 px-8 py-3 text-lg font-serif"
          >
            Book a Session
          </Button>
        </div>
      </div>
    </section>
  )
}
