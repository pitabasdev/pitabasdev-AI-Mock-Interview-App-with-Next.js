import { Calendar, MapPin, Users } from "lucide-react"

export default function Details() {
  return (
    <section>
      <h2 className="text-2xl font-semibold text-blue-700 mb-4">Event Details</h2>
      <div className="space-y-4">
        <div className="flex items-center">
          <Calendar className="h-6 w-6 text-blue-500 mr-2" />
          <span>Date: 15th February 2025</span>
        </div>
        <div className="flex items-center">
          <MapPin className="h-6 w-6 text-blue-500 mr-2" />
          <span>Mode: Online</span>
        </div>
        <div className="flex items-center">
          <Users className="h-6 w-6 text-blue-500 mr-2" />
          <span>Who Can Join?: Open to students, professionals, and AI enthusiasts at all levels</span>
        </div>
      </div>
      <p className="mt-4 text-red-600 font-semibold">
        Note: Seats are limited, so register early to reserve your spot!
      </p>
    </section>
  )
}

