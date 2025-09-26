/**
 * Step1 Footer - Clean and Minimal
 */
import { Globe, Github, Twitter, Linkedin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";


export function Footer() {
  const { t } = useLanguage();

  const footerLinks = {
    explore: [
      { label: t('footer.explore.caseStudies'), href: "#case-studies" },
      { label: t('footer.explore.coreValue'), href: "#value" },
      { label: t('footer.explore.servicePlans'), href: "#plans" },
      { label: t('footer.explore.faq'), href: "#faq" }
    ],
    resources: [
      { label: t('footer.resources.notionGuide'), href: "https://step1.so/notion-guide" },
      { label: t('footer.resources.airtableTemplate'), href: "https://step1.so/airtable-checklist" },
      { label: t('footer.resources.successStories'), href: "#case-studies" }
    ],
    contact: [
      { label: t('footer.contact.email'), href: "mailto:outsourcing@step1.so" },
      { label: t('footer.contact.phone'), href: "tel:+14155550199" },
      { label: t('footer.contact.bookCall'), href: "https://calendly.com/step1/discovery" }
    ],
    legal: [
      { label: t('footer.legal.privacy'), href: "#" },
      { label: t('footer.legal.terms'), href: "#" },
      { label: t('footer.legal.security'), href: "#" }
    ]
  };

  const socialLinks = [
    { icon: Twitter, href: "#", label: t('footer.social.twitter') },
    { icon: Github, href: "#", label: t('footer.social.github') },
    { icon: Linkedin, href: "#", label: t('footer.social.linkedin') }
  ];

  return (
    <footer className="border-t border-border bg-background">
      {/* Main Footer Content */}
      <div className="container-width py-16">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
          {/* Brand Column */}
          <div className="col-span-2">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-foreground rounded-lg flex items-center justify-center">
                  <span className="text-background font-bold text-sm">S1</span>
                </div>
                <span className="font-bold text-lg">{t('footer.brand.name')}</span>
              </div>
              <p className="text-sm text-muted-foreground max-w-xs">
                {t('footer.brand.description')}
              </p>
              {/* Social Links */}
              <div className="flex items-center gap-3 pt-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="p-2 rounded-lg hover:bg-muted transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="h-4 w-4 text-muted-foreground" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="font-medium text-sm text-foreground mb-4">{t('footer.explore.title')}</h4>
            <ul className="space-y-3">
              {footerLinks.explore.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-sm text-foreground mb-4">{t('footer.resources.title')}</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-sm text-foreground mb-4">{t('footer.contact.title')}</h4>
            <ul className="space-y-3">
              {footerLinks.contact.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-sm text-foreground mb-4">{t('footer.legal.title')}</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-sm text-muted-foreground">
              {t('footer.bottom.copyright')}
            </div>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">
                {t('footer.bottom.serviceStatus')}
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                {t('footer.bottom.changelog')}
              </a>
              <div className="flex items-center gap-1">
                <Globe className="h-3 w-3" />
                <span>{t('footer.bottom.language')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
