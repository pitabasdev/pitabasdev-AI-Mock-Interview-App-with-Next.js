"use client"

import { useState } from "react"
import { useActionState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "@/components/ui/use-toast"
import { registerAttendee } from "../actions"

export default function Registration() {
  const [state, action] = useActionState(registerAttendee, null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (formData: FormData) => {
    setIsSubmitting(true)
    await action(formData)
    setIsSubmitting(false)
  }

  if (state?.success) {
    toast({
      title: "Registration Successful",
      description: "Thank you for registering for the workshop!",
    })
  }

  return (
    <section id="contact">
      <h2 className="text-2xl font-semibold text-blue-700 mb-4">Contact Us</h2>
      <form

        className="space-y-4 max-w-md mx-auto"
      >
        <div>
          <Label htmlFor="name">Name</Label>
          <Input id="name" name="name" required />
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" required />
        </div>
        <div>
          <Label htmlFor="message">Message</Label>
          <textarea
            id="message"
            name="message"
            rows="5"
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <Button type="submit">Send Message</Button>
      </form>
    </section>

  )
}

