import { useEffect, useMemo, useRef, useState } from "react";
import { Apple, ChefHat, Mic, Play, Search, Star, Timer, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ko } from "@/locales/ko.ts";
import { en } from "@/locales/en.ts";
import type { Locale } from "@/locales";

type Props = {
  locale: Locale;
};

export default function Home({ locale }: Props) {
  const msg = useMemo(() => (locale === "ko" ? ko : en), [locale]);

  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const [statsAnimated, setStatsAnimated] = useState(false);
  const statsAnimatedRef = useRef(false);

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  useEffect(() => {
    const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const sectionId = entry.target.getAttribute("data-section");
            if (entry.isIntersecting && sectionId) {
              setVisibleSections((prev) => new Set([...prev, sectionId]));
              if (sectionId === "stats" && !statsAnimatedRef.current) {
                statsAnimatedRef.current = true;
                setStatsAnimated(true);
              }
            }
          });
        },
        { threshold: 0.1 }
    );

    const sections = document.querySelectorAll("[data-section]");
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const reduced = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
    const isMobile = window.innerWidth < 768;

    if (reduced || isMobile) {
      setScrollY(0);
      return;
    }

    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = window.requestAnimationFrame(() => {
        setScrollY(window.scrollY);
        raf = 0;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  // ✅ Tailwind 동적 클래스 방지용(빌드 안전)
  const stepBadgeClass: Record<string, string> = {
    blue: "bg-blue-100 text-blue-800",
    green: "bg-green-100 text-green-800",
    purple: "bg-purple-100 text-purple-800",
    orange: "bg-orange-100 text-orange-800",
  };

  const featureMeta = [
    { icon: ChefHat, gradient: "from-orange-500 to-pink-500" },
    { icon: Mic, gradient: "from-pink-500 to-purple-500" },
    { icon: Timer, gradient: "from-purple-500 to-blue-500" },
    { icon: Search, gradient: "from-blue-500 to-cyan-500" },
  ] as const;

  const statsBarColor = ["bg-white", "bg-white", "bg-white"] as const;

  const safeWidth = (v: string) => (/%$/.test(v) ? v : "100%");

  const focusRing =
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white rounded";

  return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-foreground overflow-x-hidden">
        {/* Header */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200/50 shadow-sm">
          <div className="container mx-auto px-4 h-20 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt={`${msg.brand} logo`} className="w-10 h-10 rounded-xl" />
              <span className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
              {msg.brand}
            </span>
            </div>

            <nav className="hidden md:flex items-center gap-8">
              <a href="#features" className={`text-gray-600 hover:text-gray-900 transition-colors font-medium ${focusRing}`}>
                {msg.nav.features}
              </a>
              <a href="#demo" className={`text-gray-600 hover:text-gray-900 transition-colors font-medium ${focusRing}`}>
                {msg.nav.demo}
              </a>
              <a
                  href="#testimonials"
                  className={`text-gray-600 hover:text-gray-900 transition-colors font-medium ${focusRing}`}
              >
                {msg.nav.testimonials}
              </a>
            </nav>
          </div>
        </header>

        {/* Hero */}
        <section data-section="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
          {/* Animated background */}
          <div className="absolute inset-0 opacity-30" aria-hidden>
            <div
                className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-orange-300 to-pink-300 rounded-full blur-3xl"
                style={{ transform: `translateY(${scrollY * 0.2}px)` }}
            />
            <div
                className="absolute top-40 right-20 w-80 h-80 bg-gradient-to-br from-purple-300 to-blue-300 rounded-full blur-3xl"
                style={{ transform: `translateY(${scrollY * -0.15}px)` }}
            />
            <div
                className="absolute bottom-40 left-1/3 w-72 h-72 bg-gradient-to-br from-yellow-300 to-orange-300 rounded-full blur-3xl"
                style={{ transform: `translateY(${scrollY * 0.25}px)` }}
            />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-5xl mx-auto text-center space-y-8">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-100 to-pink-100 px-4 py-2 rounded-full text-sm font-semibold text-orange-800 border border-orange-200">
                <Sparkles className="w-4 h-4" />
                {msg.hero.badge}
              </div>

              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-tight">
                <span className="block text-gray-900">{msg.hero.title1}</span>
                <span className="block mt-2 bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
                {msg.hero.title2}
              </span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                {msg.hero.desc1}
                <br className="hidden sm:block" />
                {msg.hero.desc2}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                <Button
                    asChild
                    size="lg"
                    className="h-14 px-8 rounded-full bg-gradient-to-r from-orange-500 to-pink-600 hover:from-orange-600 hover:to-pink-700 text-white shadow-xl hover:shadow-2xl transition-all hover:scale-105 text-base font-semibold"
                >
                  <a
                      href={msg.links.appStore}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => {
                        (window as any).gtag?.("event", "download_app", {
                          platform: "app_store",
                          location: "hero",
                        });
                      }}
                  >
                    <Apple className="w-5 h-5 mr-2" />
                    {msg.hero.ctaAppStore}
                  </a>
                </Button>

                <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="h-14 px-8 rounded-full border-2 border-gray-300 text-gray-700 hover:bg-gray-50 transition-all hover:scale-105 text-base font-semibold"
                >
                  <a
                      href={msg.links.googlePlay}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => {
                        (window as any).gtag?.("event", "download_app", {
                          platform: "google_play",
                          location: "hero",
                        });
                      }}
                  >
                    <Play className="w-5 h-5 mr-2" />
                    {msg.hero.ctaGooglePlay}
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Problems */}
        <section
            data-section="problems"
            className={`py-24 bg-white transition-all duration-700 ${
                visibleSections.has("problems") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">{msg.problems.title}</h2>
              <p className="text-xl text-gray-600">{msg.problems.subtitle}</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {msg.problems.cards.map((item, i) => (
                  <div
                      key={i}
                      className={`group relative p-8 bg-gradient-to-br from-gray-50 to-white rounded-3xl border-2 border-gray-100 hover:border-orange-200 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 ${
                          visibleSections.has("problems") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                      }`}
                      style={{ transitionDelay: `${i * 100}ms` }}
                  >
                    <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">{item.emoji}</div>
                    <h3 className="text-xl font-bold mb-3 text-gray-900">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-pink-500 rounded-b-3xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                  </div>
              ))}
            </div>
          </div>
        </section>

        {/* Demo */}
        <section
            data-section="demo"
            id="demo"
            className={`scroll-mt-24 py-24 bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50 transition-all duration-700 ${
                visibleSections.has("demo") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          <div className="container mx-auto px-4">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-black mb-6 text-gray-900">{msg.demo.title}</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">{msg.demo.subtitle}</p>
            </div>

            <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
              {msg.demo.steps.map((item, i) => (
                  <div
                      key={i}
                      className={`transition-all duration-700 ${
                          visibleSections.has("demo") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                      }`}
                      style={{ transitionDelay: `${i * 100}ms` }}
                  >
                    <div className="text-center mb-6">
                      <div
                          className={`inline-flex items-center px-4 py-1.5 rounded-full text-sm font-bold mb-3 ${
                              stepBadgeClass[item.color] ?? "bg-gray-100 text-gray-800"
                          }`}
                      >
                        {item.step}
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>

                    <div className="relative group">
                      <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-pink-600 rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
                      <div className="relative bg-white rounded-3xl overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-300 transform group-hover:scale-105">
                        <div className="relative w-full mx-auto aspect-[9/16] max-w-[280px] rounded-2xl overflow-hidden">
                          <video
                              className="absolute inset-0 w-full h-full object-cover"
                              autoPlay
                              muted
                              loop
                              playsInline
                              poster="/logo.png"
                          >
                            <source src={item.video} type="video/mp4" />
                          </video>
                          <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/20 to-transparent" />
                        </div>
                      </div>
                    </div>
                  </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section
            data-section="features"
            id="features"
            className={`scroll-mt-24 py-24 bg-white transition-all duration-700 ${
                visibleSections.has("features") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          <div className="container mx-auto px-4">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-black mb-6 text-gray-900">{msg.features.title}</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">{msg.features.subtitle}</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {msg.features.items.map((feature, i) => {
                const meta = featureMeta[i] ?? featureMeta[0];
                const Icon = meta.icon;
                return (
                    <Card
                        key={i}
                        className={`group relative overflow-hidden border-0 bg-gradient-to-br from-gray-50 to-white hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${
                            visibleSections.has("features") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                        }`}
                        style={{ transitionDelay: `${i * 100}ms` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <CardHeader className="relative text-center">
                        <div
                            className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-br ${meta.gradient} rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}
                        >
                          <Icon className="w-10 h-10 text-white" />
                        </div>
                        <CardTitle className="text-xl font-bold">{feature.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="relative text-center">
                        <CardDescription className="text-base text-gray-600">{feature.desc}</CardDescription>
                      </CardContent>
                    </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section
            data-section="stats"
            className={`py-24 bg-gradient-to-br from-orange-500 via-pink-600 to-purple-600 text-white transition-all duration-700 ${
                visibleSections.has("stats") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-black mb-4">{msg.stats.title}</h2>
                <p className="text-xl text-white/90">{msg.stats.subtitle}</p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {msg.stats.items.map((stat, i) => (
                    <div key={i} className="text-center">
                      <div className="text-6xl md:text-7xl font-black mb-4">{stat.value}</div>
                      <div className="text-xl font-semibold mb-4">{stat.label}</div>
                      <div className="w-full bg-white/20 rounded-full h-3">
                        <div
                            className={`${statsBarColor[i] ?? "bg-white"} h-3 rounded-full transition-all duration-1000`}
                            style={{ width: statsAnimated ? safeWidth(stat.value) : "0%" }}
                        />
                      </div>
                    </div>
                ))}
              </div>

              {/* NOTE: stat.value가 %가 아니면 바가 100%로 보이도록 safeWidth 처리.
                더 정확히 하려면 locales 데이터에 progress: "80%" 같은 필드를 추가하는 걸 추천. */}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section
            data-section="testimonials"
            id="testimonials"
            className={`scroll-mt-24 py-24 bg-white transition-all duration-700 ${
                visibleSections.has("testimonials") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          <div className="container mx-auto px-4">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-black mb-6 text-gray-900">{msg.testimonials.title}</h2>
              <p className="text-xl text-gray-600">{msg.testimonials.subtitle}</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {msg.testimonials.items.map((t, i) => (
                  <div
                      key={i}
                      className={`group relative p-6 bg-gradient-to-br from-white to-gray-50 rounded-3xl border-2 border-gray-100 hover:border-orange-200 shadow-lg hover:shadow-2xl transition-all duration-500 ${
                          visibleSections.has("testimonials") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                      }`}
                      style={{ transitionDelay: `${i * 100}ms` }}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                        {t.name.charAt(0)}
                      </div>
                      <div className="flex-1">
                        <div className="font-bold text-gray-900">{t.name}</div>
                        <div className="text-sm text-gray-600">{t.country}</div>
                      </div>
                      <div className="flex gap-1" aria-label={`rating ${t.rating} stars`}>
                        {[...Array(t.rating)].map((_, j) => (
                            <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>

                    <p className="text-gray-700 mb-4 leading-relaxed">"{t.comment}"</p>

                    <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-semibold">
                      ✨ {t.recipe}
                    </div>
                  </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section
            data-section="faq"
            className={`py-24 bg-gradient-to-br from-gray-50 to-white transition-all duration-700 ${
                visibleSections.has("faq") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black mb-4 text-gray-900">{msg.faq.title}</h2>
              <p className="text-xl text-gray-600">{msg.faq.subtitle}</p>
            </div>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {msg.faq.items.map((f, i) => (
                    <AccordionItem
                        key={i}
                        value={`item-${i}`}
                        className="bg-white rounded-2xl px-6 border-2 border-gray-100 hover:border-orange-200 transition-all"
                    >
                      <AccordionTrigger className="text-left text-lg font-bold hover:text-orange-600">
                        {f.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-base text-gray-600 pt-4">{f.a}</AccordionContent>
                    </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-gradient-to-br from-orange-500 via-pink-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-black mb-6">{msg.cta.title}</h2>
            <p className="text-xl mb-10 text-white/90 max-w-2xl mx-auto">{msg.cta.desc}</p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                  asChild
                  size="lg"
                  className="h-16 px-10 rounded-full bg-white text-orange-600 hover:bg-gray-100 shadow-2xl hover:scale-105 transition-all text-lg font-bold"
              >
                <a
                    href={msg.links.appStore}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => {
                      (window as any).gtag?.("event", "download_app", {
                        platform: "app_store",
                        location: "cta",
                      });
                    }}
                >
                  <Apple className="w-6 h-6 mr-2" />
                  {msg.cta.appStore}
                </a>
              </Button>

              <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="h-16 px-10 rounded-full border-2 border-white text-white hover:bg-white/10 transition-all hover:scale-105 text-lg font-bold"
              >
                <a
                    href={msg.links.googlePlay}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => {
                      (window as any).gtag?.("event", "download_app", {
                        platform: "google_play",
                        location: "cta",
                      });
                    }}
                >
                  <Play className="w-6 h-6 mr-2" />
                  {msg.cta.googlePlay}
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center gap-8">
              <div className="flex items-center gap-3">
                <img src="/logo.png" alt={`${msg.brand} logo`} className="w-10 h-10 rounded-xl" />
                <span className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
                {msg.brand}
              </span>
              </div>

              <div className="text-center text-gray-400">
                <p className="text-base mb-2">{msg.footer.tagline}</p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-6 text-sm text-gray-400">
                <a href={msg.links.contactEmail} className={`hover:text-white transition-colors ${focusRing}`}>
                  {msg.footer.contact}
                </a>
                <div className="hidden sm:block w-1 h-1 bg-gray-600 rounded-full" />
                <a href={msg.links.privacy} className={`hover:text-white transition-colors ${focusRing}`}>
                  {msg.footer.privacy}
                </a>
                <div className="hidden sm:block w-1 h-1 bg-gray-600 rounded-full" />
                <a href={msg.links.terms} className={`hover:text-white transition-colors ${focusRing}`}>
                  {msg.footer.terms}
                </a>
              </div>

              <div className="text-center text-gray-500 text-sm">
                <p>{msg.footer.copyright}</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
  );
}