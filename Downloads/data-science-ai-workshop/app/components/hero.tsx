import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import companyLogo from "./icon.webp"
import Speaker from "./Adobe Express - file (1).png"

export default function Hero() {
  return (
    <section className="py-12 bg-gradient-to-r from-blue-100 to-purple-100">
      <div className="container mx-auto px-4">
        {/* Company Logo */}
        <div className="flex justify-center mb-8">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/site_logo_3-2ZJeFAtTk6FBhdPVIYtGSuHqomulil.png"
            alt="Infotact Solutions"
            width={300}
            height={100}
            className="h-auto"
            priority
          />
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="lg:w-1/2 space-y-6">
            <h1 className="text-4xl font-bold text-blue-800 mb-2">Infotact Workshop on Data Science and Generative AI</h1>
            <p className="text-xl text-gray-600">Empowering the Future with Advanced AI and Data Science</p>
            <p className="text-lg font-semibold text-blue-600">15th February 2025 | Online</p>
            <Card>
              <CardContent className="pt-6">
                <p className="text-gray-700">
                  Join us for an exclusive workshop tailored to equip participants with a deep understanding of Data
                  Science and AI. We'll emphasize advanced concepts, tools, and impactful real-world applications.s
                </p>
              </CardContent>
            </Card>
            <Button asChild size="lg">
              <Link href="https://forms.gle/4Te72HNmJhFshjTB6">Register Now</Link>
            </Button>
          </div>
          <div className="lg:w-1/2 space-y-6" style={{marginLeft:"50px"}}>
            <Image
              src={Speaker}
              alt="Workshop on Data Science and AI"
              style={{width: '400px',paddingLeft: '100px'}}
            
           
              className="rounded-lg  w-full"
            />
            <Card style={{width:"500px"}}>
              <CardContent className="pt-6 flex items-center space-x-4" >
                <Image
                  src={companyLogo}
                  alt="Dr. K. Upendar"
                  width={100}
                  height={100}
                  className="rounded-full"
                />
                <div>
                  <h3 className="text-xl font-semibold">Dr. K. Upendar</h3>
                  <p className="text-sm text-gray-500">Senior Software Engineer, AI/ML Product Manager</p>
                  <p className="text-sm text-gray-500">Infyz Solutions Pvt Ltd, Hyderabad, Telangana</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

