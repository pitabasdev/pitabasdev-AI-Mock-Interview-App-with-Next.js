"use server"

import { z } from "zod"

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  occupation: z.enum(["student", "professional", "enthusiast", "other"]),
})

export async function registerAttendee(prevState: any, formData: FormData) {
  const validatedFields = schema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    occupation: formData.get("occupation"),
  })

  if (!validatedFields.success) {
    return {
      error: "Invalid form data. Please check your inputs.",
      success: false,
    }
  }

  // Here you would typically save the registration to a database
  // For this example, we'll just simulate a successful registration
  await new Promise((resolve) => setTimeout(resolve, 1000)) // Simulate API call

  return {
    success: true,
  }
}

