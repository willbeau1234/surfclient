"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { submitBooking } from "./actions"

export default function BaliMahaloSurfCo() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")

  const handleSubmit = async (formData: FormData) => {
    setIsSubmitting(true)
    setSubmitMessage("")
    
    try {
      const result = await submitBooking(formData)
      if (result.success) {
        setSubmitMessage("Thank you for your message! We'll get back to you soon.")
        // Reset form by clearing all form fields
        const form = document.getElementById("booking-form") as HTMLFormElement
        if (form) form.reset()
      } else {
        setSubmitMessage(result.error || "Failed to send message. Please try again.")
        console.error('Form submission failed:', result)
      }
    } catch (error) {
      setSubmitMessage(`Error: ${error}`)
      console.error('Form submission error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const scrollToBooking = () => {
    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-start">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/995C20BD-412B-400A-B98A-450F0332F363.JPG')`,
          }}
        >
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
        <div className="relative z-10 text-white p-8 max-w-md">
          <h1 className="text-4xl md:text-6xl font-semibold mb-8 leading-tight">
            Bali Mahalo
            <br />
            Surf Co
          </h1>
          <Button
            onClick={scrollToBooking}
            className="bg-white text-black hover:bg-gray-100 px-8 py-3 text-lg font-medium"
          >
            Book a Session
          </Button>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-semibold mb-8 text-black">About us</h2>
          <p className="text-xl md:text-2xl text-black leading-relaxed max-w-3xl mx-auto">
            Bali Mahalo Surf Co is dedicated to enhancing your surfing through unique coaching that blends technique
            with the soul of Bali's waves. Our goal is to help you master your craft while staying true to the spirit of
            surfing.
          </p>
        </div>
      </section>

      {/* Hours + Contact Info Section */}
      <section className="py-20 px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="grid md:grid-cols-3 gap-8 text-black">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Hours</h3>
              <p className="text-lg">Monday–Sunday</p>
              <p className="text-lg">5am–6pm</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Phone</h3>
              <p className="text-lg">+62 881-0371-49065</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Email</h3>
              <p className="text-lg">balimahalosurfcoach@gmail.com</p>
            </div>
          </div>
        </div>
      </section>


      {/* Surf Trip Section */}
      <section className="py-20 px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-semibold mb-8 text-black">Surf Trip</h2>
              <p className="text-xl text-black leading-relaxed mb-6">
                Craving uncrowded waves and a deeper connection to Indonesia's rich culture? Our surf adventures go
                beyond Bali, guiding you to remote coastlines and hidden gems.
              </p>
              <p className="text-xl text-black leading-relaxed mb-6">
                Whether you're after a single-day escape or a multi-day mission, we've got you covered.
              </p>
              <p className="text-lg text-black font-medium">
                Private and group sessions available (best for intermediate to advanced surfers)
              </p>
            </div>
            <div
              className="h-96 bg-cover bg-center rounded-lg"
              style={{
                backgroundImage: `url('/E827D3B1-F328-4055-87A4-198FBEAB354E 2.JPG')`,
              }}
            ></div>
          </div>
        </div>
      </section>

      {/* Skill Training Section */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div
              className="h-96 bg-cover bg-center rounded-lg"
              style={{
                backgroundImage: `url('/BC43AFB5-75A6-4A1F-96CC-CF7DCC58FDF5.JPG')`,
              }}
            ></div>
            <div>
              <h2 className="text-4xl md:text-5xl font-semibold mb-8 text-black">Skill training</h2>
              <p className="text-xl text-black leading-relaxed mb-6">
                Want to nail a new move like snap, cutback, or floater? Dream of pulling into a barrel? Skill training
                sessions help surfers master specific goals.
              </p>
              <p className="text-xl text-black leading-relaxed mb-6">
                Improve your technique with fun, personalized training.
              </p>
              <p className="text-lg text-black font-medium">
                Private sessions available (best for intermediate to advanced surfers)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 px-8 bg-black text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-semibold mb-8">Experience Bali's Waves</h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto">
            Watch our surf coaching in action and see the incredible waves that await you in Bali's pristine waters.
          </p>
          <div className="relative aspect-video bg-gray-800 rounded-lg overflow-hidden">
            <video 
              className="w-full h-full object-cover"
              controls
              preload="metadata"
            >
              <source src="/c00b41a8384b48ab81b5ebba45456446 2.MOV" type="video/quicktime" />
              <source src="/c00b41a8384b48ab81b5ebba45456446 2.MOV" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      {/* Our Instructors Section */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-semibold mb-16 text-center text-black">Meet Your Instructors</h2>
          <div className="flex justify-center">
            <div className="text-center">
              <div
                className="w-48 h-48 mx-auto mb-2 bg-cover bg-center rounded-full"
                style={{
                  backgroundImage: `url('/5161CCCC-25BB-4512-913E-DC4B15C9C838 2.JPG')`,
                }}
              ></div>
              <h3 className="text-2xl font-semibold mb-2 text-black">Wira Mahalo</h3>
              <p className="text-lg text-gray-600 mb-4">Head Instructor</p>
              <p className="text-black leading-relaxed">
                Born and raised in Bali, Made has been surfing for over 15 years and coaching for 8. His deep connection
                to the ocean and local knowledge makes every session unforgettable.
              </p>
             </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-semibold mb-16 text-center text-black">Surf Gallery</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div
              className="h-64 bg-cover bg-center rounded-lg"
              style={{
                backgroundImage: `url('/389AADFB-CAC0-4ADC-B046-9B8C1F5C687D.JPG')`,
              }}
            ></div>
            <div
              className="h-64 bg-cover bg-center rounded-lg"
              style={{
                backgroundImage: `url('/8149CEAE-AF24-491C-8E2D-7EB9FDD90C02.JPG')`,
              }}
            ></div>
            <div
              className="h-64 bg-cover bg-center rounded-lg"
              style={{
                backgroundImage: `url('/8BBD0B35-BFC9-4E08-8BAF-9912EB027DD3 2.JPG')`,
              }}
            ></div>
            <div
              className="h-64 bg-cover bg-center rounded-lg"
              style={{
                backgroundImage: `url('/A1341AFD-0DA4-4CF9-87D9-8E5F55E82508 2.JPG')`,
              }}
            ></div>
            <div
              className="h-64 bg-cover bg-center rounded-lg"
              style={{
                backgroundImage: `url('/A5F6C367-789B-4747-BE75-BE3A7CF73FE0.JPG')`,
              }}
            ></div>
            <div
              className="h-64 bg-cover bg-center rounded-lg"
              style={{
                backgroundImage: `url('/B409668B-47B3-404D-B73A-287B8D173245 2.JPG')`,
              }}
            ></div>
            <div
              className="h-64 bg-cover bg-center rounded-lg"
              style={{
                backgroundImage: `url('/C752294B-F64E-43DE-B40A-2DBC2A38F946.JPG')`,
              }}
            ></div>
            <div
              className="h-64 bg-cover bg-center rounded-lg"
              style={{
                backgroundImage: `url('/E0F158D1-E353-4EBE-950C-94B1E874BD71 2.JPG')`,
              }}
            ></div>
            <div
              className="h-64 bg-cover bg-center rounded-lg"
              style={{
                backgroundImage: `url('/E89EA4E6-8688-4996-8679-AD1131F18B93 2.JPG')`,
              }}
            ></div>
          </div>
        </div>
      </section>

      {/* Surf Spots Section */}

      {/* Testimonials Section */}
      <section className="py-20 px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-semibold mb-16 text-center text-black">What Our Students Say</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div
                  className="w-16 h-16 bg-cover bg-center rounded-full mr-4"
                  style={{
                    backgroundImage: `url('/Screenshot 2025-08-02 at 19.57.29.png')`,
                  }}
                ></div>
                <div>
                  <h4 className="text-xl font-semibold text-black">Sarah Johnson</h4>
                  <p className="text-gray-600">Australia</p>
                </div>
              </div>
              <p className="text-lg text-black leading-relaxed italic">
                "Wira's coaching transformed my surfing completely. I went from struggling to catch waves to confidently
                riding barrels. The personalized approach and local knowledge made all the difference."
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div
                  className="w-16 h-16 bg-cover bg-center rounded-full mr-4"
                  style={{
                    backgroundImage: `url('/Screenshot 2025-08-02 at 20.00.42.png')`,
                  }}
                ></div>
                <div>
                  <h4 className="text-xl font-semibold text-black">Marcus Weber</h4>
                  <p className="text-gray-600">Germany</p>
                </div>
              </div>
              <p className="text-lg text-black leading-relaxed italic">
                "The surf trip to hidden spots was incredible. Not only did I improve my technique, but I experienced
                the real Bali that most tourists never see. Unforgettable!"
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div
                  className="w-16 h-16 bg-cover bg-center rounded-full mr-4"
                  style={{
                    backgroundImage: `url('/Screenshot 2025-08-02 at 20.01.28.png')`,
                  }}
                ></div>
                <div>
                  <h4 className="text-xl font-semibold text-black">Lisa Chen</h4>
                  <p className="text-gray-600">Singapore</p>
                </div>
              </div>
              <p className="text-lg text-black leading-relaxed italic">
                "As a complete beginner, I was nervous about my first surf lesson. Wira's patience and encouragement
                helped me catch my first wave on day one. Now I'm addicted!"
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div
                  className="w-16 h-16 bg-cover bg-center rounded-full mr-4"
                  style={{
                    backgroundImage: `url('/IMG_7293.jpeg')`,
                  }}
                ></div>
                <div>
                  <h4 className="text-xl font-semibold text-black">Jake Thompson</h4>
                  <p className="text-gray-600">USA</p>
                </div>
              </div>
              <p className="text-lg text-black leading-relaxed italic">
                "The skill training sessions with Wira helped me finally nail the cutback I'd been trying to master for
                years. Technical expertise combined with the soul of surfing."
              </p>
            </div>
          </div>
        </div>
      </section>

     
      {/* Culture & Philosophy Section */}
      <section className="py-20 px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-semibold mb-8 text-black">The Mahalo Spirit</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <p className="text-xl text-black leading-relaxed mb-6">
                "Mahalo" means gratitude and respect in Hawaiian culture. We bring this spirit to Bali's waves, honoring
                both the ocean and the rich Balinese traditions.
              </p>
              <p className="text-xl text-black leading-relaxed mb-6">
                Our approach goes beyond technique - we teach respect for the ocean, understanding of local customs, and
                the deeper connection that makes surfing a way of life.
              </p>
              <p className="text-lg text-gray-600 italic">
                "Surfing is not just about riding waves, it's about becoming one with the ocean and respecting the
                culture that welcomes you."
              </p>
            </div>
            <div
              className="h-96 bg-cover bg-center rounded-lg"
              style={{
                backgroundImage: `url('/F2571EE6-9E55-4D14-8CFF-8B151EF73D11.JPG')`,
              }}
            ></div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="py-20 px-8 bg-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-semibold mb-8 text-center text-black">Book with us!</h2>
          <p className="text-xl text-center mb-12 text-black">
            Available seven days a week. Once you get in touch, we'll coordinate the ideal time based on surf conditions
            and your schedule.
          </p>

          <Card className="border-2 border-gray-200">
            <CardContent className="p-8">
              <form id="booking-form" action={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-black mb-2">
                      First Name *
                    </label>
                    <Input
                      id="firstName"
                      name="firstName"
                      type="text"
                      required
                      className="border-gray-300"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-black mb-2">
                      Last Name *
                    </label>
                    <Input
                      id="lastName"
                      name="lastName"
                      type="text"
                      required
                      className="border-gray-300"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-black mb-2">
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="border-gray-300"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-black mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    className="border-gray-300"
                  />
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-black text-white hover:bg-gray-800 py-3 text-lg font-medium disabled:opacity-50"
                >
                  {isSubmitting ? "Sending..." : "Submit"}
                </Button>
                
                {submitMessage && (
                  <p className={`text-center ${submitMessage.includes('Thank you') ? 'text-green-600' : 'text-red-600'}`}>
                    {submitMessage}
                  </p>
                )}
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-8 bg-black text-white text-center">
        <p className="text-lg">© 2024 Bali Mahalo Surf Co. All rights reserved.</p>
      </footer>
    </div>
  )
}
