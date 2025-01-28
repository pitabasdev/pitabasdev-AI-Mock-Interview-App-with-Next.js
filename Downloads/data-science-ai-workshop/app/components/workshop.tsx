import { Separator } from "@/components/ui/separator"
import Hero from "./hero"
import Supporters from "./supporters"
import Highlights from "./highlights"
import Details from "./details"
import Registration from "./registration"
import Footer from "./footer"

export default function Workshop() {
  return (
    <div>
      <Hero />
      <div className="container mx-auto px-4 py-8">
        <Supporters />
        <Separator className="my-8" />
        <Highlights />
        <Separator className="my-8" />
        <Details />
        <Separator className="my-8" />
        <Registration />
      </div>
      <Footer />
    </div>
  )
}

