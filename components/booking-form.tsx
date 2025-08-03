"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { submitBooking } from "@/app/actions"

export function BookingForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true)
    try {
      await submitBooking(formData)
      setIsSubmitted(true)
    } catch (error) {
      console.error("Error submitting form:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="text-center py-12">
        <h3 className="text-2xl font-serif text-black mb-4">Thank you!</h3>
        <p className="text-lg font-serif text-black">We'll get back to you soon to coordinate your surf session.</p>
      </div>
    )
  }

  return (
    <form action={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <Input
            name="firstName"
            placeholder="First Name"
            required
            className="font-serif text-lg border-gray-300 focus:border-black"
          />
        </div>
        <div>
          <Input
            name="lastName"
            placeholder="Last Name"
            required
            className="font-serif text-lg border-gray-300 focus:border-black"
          />
        </div>
      </div>

      <div>
        <Input
          name="email"
          type="email"
          placeholder="Email"
          required
          className="font-serif text-lg border-gray-300 focus:border-black"
        />
      </div>

      <div>
        <Textarea
          name="message"
          placeholder="Message"
          required
          rows={6}
          className="font-serif text-lg border-gray-300 focus:border-black resize-none"
        />
      </div>

      <div className="text-center">
        <Button
          type="submit"
          disabled={isSubmitting}
          className="bg-black text-white hover:bg-gray-800 px-12 py-3 text-lg font-serif"
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </Button>
      </div>
    </form>
  )
}
