/**
 * Step1 Use Cases - Clean Pricing Cards
 */
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  Star,
  Clock,
  Palette,
  Users
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";

interface UseCase {
  id: number;
  title: string;
  subtitle: string;
  price: string;
  originalPrice?: string;
  popular?: boolean;
  icon: React.ElementType;
  features: string[];
  timeframe: string;
  category: string;
  buyUrl: string;
  bookUrl: string;
}


export function UseCases() {
  const { t } = useLanguage();

  const useCases: UseCase[] = [
    {
      id: 1,
      title: t('useCases.portfolio.title'),
      subtitle: t('useCases.portfolio.subtitle'),
      price: t('useCases.portfolio.price'),
      popular: true,
      icon: Palette,
      category: t('useCases.portfolio.category'),
      features: t('useCases.portfolio.features') as string[],
      timeframe: t('useCases.portfolio.timeframe'),
      buyUrl: "https://buy.stripe.com/test_portfolio",
      bookUrl: "https://calendly.com/step1/portfolio-intro"
    },
    {
      id: 2,
      title: t('useCases.portal.title'),
      subtitle: t('useCases.portal.subtitle'),
      price: t('useCases.portal.price'),
      icon: Users,
      category: t('useCases.portal.category'),
      features: t('useCases.portal.features') as string[],
      timeframe: t('useCases.portal.timeframe'),
      buyUrl: "https://buy.stripe.com/test_client_portal",
      bookUrl: "https://calendly.com/step1/client-portal"
    }
  ];

  return (
    <section id="plans" className="min-h-screen flex items-center py-20 bg-muted/5">
      <div className="container-width w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            {t('useCases.title')}
            <span className="block text-lg md:text-xl text-muted-foreground mt-2 font-normal">
              {t('useCases.subtitle')}
            </span>
          </h2>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {useCase.popular && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-6 py-2 rounded-full shadow-lg flex items-center gap-2">
                    <Star className="w-4 h-4 fill-white" />
                    <span className="text-sm font-semibold">{t('useCases.popular')}</span>
                  </div>
                </div>
              )}

              <div
                className={cn(
                  "h-full rounded-2xl bg-background relative overflow-hidden",
                  "border-2",
                  useCase.popular ? "border-orange-500/50" : "border-border",
                  "hover:border-foreground/30 transition-all duration-300",
                  "p-8",
                  useCase.popular && "shadow-xl"
                )}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                        <useCase.icon className="w-5 h-5 text-foreground/70" />
                      </div>
                      <span className={cn(
                        "text-xs font-semibold px-3 py-1.5 rounded-full",
                        useCase.category === t('useCases.portfolio.category')
                          ? "bg-blue-500 text-white"
                          : "bg-emerald-500 text-white"
                      )}>
                        {useCase.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-1">
                      {useCase.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {useCase.subtitle}
                    </p>
                  </div>
                </div>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-foreground">
                      {useCase.price}
                    </span>
                    {useCase.originalPrice && (
                      <span className="text-lg text-muted-foreground line-through">
                        {useCase.originalPrice}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>{useCase.timeframe}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  {useCase.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Actions */}
                <div className="space-y-3">
                  <Button className="w-full bg-foreground text-background hover:bg-foreground/90" asChild>
                    <a href={useCase.buyUrl} target="_blank" rel="noreferrer">
                      {useCase.id === 1 ? t('useCases.portfolio.buyNow') : t('useCases.portal.buyNow')}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                  <Button variant="outline" className="w-full" asChild>
                    <a href={useCase.bookUrl} target="_blank" rel="noreferrer">
                      {useCase.id === 1 ? t('useCases.portfolio.bookCall') : t('useCases.portal.bookCall')}
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}