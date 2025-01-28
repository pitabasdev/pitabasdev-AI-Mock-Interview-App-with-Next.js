import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  const socialLinks = [
    {
      name: "YouTube",
      icon: Youtube,
      href: "https://www.youtube.com/@infotact-solutions/",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/company/infotact-solutions/",
    },
    {
      name: "Twitter",
      icon: Twitter,
      href: "https://x.com/infotacts/",
    },
    {
      name: "Instagram",
      icon: Instagram,
      href: "https://www.instagram.com/infotact_solutions/",
    },
    {
      name: "Facebook",
      icon: Facebook,
      href: "https://www.facebook.com/profile.php?id=61568978349528",
    },
  ]

  return (
    <footer className="mt-12 border-t bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex items-center space-x-6">
            {socialLinks.map((social) => (
              <Link
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors"
                aria-label={`Follow us on ${social.name}`}
              >
                <social.icon className="h-6 w-6" />
              </Link>
            ))}
          </div>
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} Infotact Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

