import { CheckCircle } from "lucide-react"

const highlightItems = [
  "Introduction to Data Science and AI: Build foundational knowledge about these cutting-edge domains.",
  "AI in Supply Chain Management and Agriculture: Discover how Computer Vision and Generative AI are revolutionizing industries.",
  "Hands-on Sessions with Popular Tools and Frameworks: Gain practical experience using industry-standard tools.",
  "Exploring Real-World Applications: Learn how AI is reshaping diverse sectors across the globe.",
  "Guidance from Industry Experts: Interact with seasoned professionals and gain valuable insights.",
  "Interactive Q&A Sessions: Engage in discussions and resolve your queries.",
  "Certificate of Participation for All Attendees: Celebrate your learning journey with official recognition.",
]

export default function Highlights() {
  return (
    <section>
      <h2 className="text-2xl font-semibold text-blue-700 mb-4">Workshop Highlights</h2>
      <ul className="space-y-2">
        {highlightItems.map((item, index) => (
          <li key={index} className="flex items-start">
            <CheckCircle className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}

