import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function Information() {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold text-blue-700 mb-4">About the Workshop</h2>
      <div className="flex flex-col md:flex-row gap-6 items-center">
        <Card className="flex-1">
          <CardContent className="pt-6">
            <p className="text-gray-700">
              Join us for an exclusive workshop tailored to equip participants with a deep understanding of Data Science
              and AI. We'll emphasize advanced concepts, tools, and impactful real-world applications. Whether you're a
              student, professional, or enthusiast, this workshop is your gateway to a transformative learning
              experience in the cutting-edge domains of AI and Data Science.
            </p>
          </CardContent>
        </Card>
        <div className="w-full md:w-1/3">
          <Image
            src="/placeholder.svg?height=300&width=400"
            alt="Workshop on Data Science and AI"
            width={400}
            height={300}
            className="rounded-lg shadow-md"
          />
        </div>
      </div>
    </section>
  )
}

