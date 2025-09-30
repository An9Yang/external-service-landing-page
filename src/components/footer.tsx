/**
 * Step1 Footer - Clean and Minimal
 */
import { Globe, Github, Twitter, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container-width">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Globe className="w-6 h-6" />
              <span className="text-xl font-semibold">Step1</span>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              Focused on Notion / Airtable website services, empowering every creator and consulting team to control their own website.
            </p>
          </div>

          {/* Quick Navigation */}
          <div className="space-y-4">
            <h4 className="font-medium">Quick Navigation</h4>
            <div className="space-y-2 text-sm opacity-80">
              <a href="#case-studies" className="block hover:opacity-100 transition-opacity">
                Case Studies
              </a>
              <a href="#value-prop" className="block hover:opacity-100 transition-opacity">
                Core Value
              </a>
              <a href="#pricing" className="block hover:opacity-100 transition-opacity">
                Service Plans
              </a>
              <a href="#faq" className="block hover:opacity-100 transition-opacity">
                FAQ
              </a>
            </div>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h4 className="font-medium">Resources</h4>
            <div className="space-y-2 text-sm opacity-80">
              <a href="#" className="block hover:opacity-100 transition-opacity">
                Notion Delivery Checklist
              </a>
              <a href="#" className="block hover:opacity-100 transition-opacity">
                Airtable Process Template
              </a>
              <a href="#" className="block hover:opacity-100 transition-opacity">
                Success Stories Collection
              </a>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-medium">Contact Us</h4>
            <div className="space-y-2 text-sm opacity-80">
              <a href="mailto:outsourcing@step1.so" className="block hover:opacity-100 transition-opacity">
                outsourcing@step1.so
              </a>
              <a href="tel:+14155550199" className="block hover:opacity-100 transition-opacity">
                +1 (415) 555-0199
              </a>
              <a href="https://calendly.com/step1/discovery" className="block hover:opacity-100 transition-opacity">
                Book Consultation
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-background/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-6 text-sm opacity-80">
              <span>© 2024 Step1. All rights reserved.</span>
              <a href="#" className="hover:opacity-100 transition-opacity">Privacy Policy</a>
              <a href="#" className="hover:opacity-100 transition-opacity">Terms of Service</a>
            </div>
            
            <div className="flex items-center gap-4">
              <a href="#" className="opacity-60 hover:opacity-100 transition-opacity">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="opacity-60 hover:opacity-100 transition-opacity">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="opacity-60 hover:opacity-100 transition-opacity">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}