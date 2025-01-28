import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

export default function Speaker() {
  return (
    <section className="my-8">
      <h2 className="text-2xl font-semibold text-blue-700 mb-4">Featured Speaker</h2>
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <div className="flex items-center space-x-4">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/icon-e6oaWtvTQ8Aewq0tb0rPIrruS22Xjr.webp"
              alt="Dr. K. Upendar"
              width={100}
              height={100}
              className="rounded-full"
            />
            <div>
              <CardTitle className="text-xl">Dr. K. Upendar</CardTitle>
              <p className="text-sm text-gray-500">Senior Software Engineer, AI/ML Product Manager</p>
              <p className="text-sm text-gray-500">Infyz Solutions Pvt Ltd, Hyderabad, Telangana</p>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <p className="mt-4 text-sm text-gray-600">
            Dr. K. Upendar brings extensive experience in AI and Machine Learning to this workshop. His presentation
            will explore the transformative impact of advanced AI technologies, showcasing real-world applications and
            future possibilities.
          </p>
        </CardContent>
      </Card>
    </section>
  )
}

