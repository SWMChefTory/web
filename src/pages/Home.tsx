import { useEffect, useState } from "react";
import { Apple, ChefHat, Mic, Play, Search, Star, Timer, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const [statsAnimated, setStatsAnimated] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const sectionId = entry.target.getAttribute("data-section");
            if (entry.isIntersecting && sectionId) {
              setVisibleSections((prev) => new Set([...prev, sectionId]));
              if (sectionId === "stats" && !statsAnimated) {
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
  }, [statsAnimated]);

  useEffect(() => {
    const reduced = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
    const isMobile = window.innerWidth < 768;
    const onScroll = () => setScrollY(reduced || isMobile ? 0 : window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-foreground overflow-x-hidden">
        {/* Header */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200/50 shadow-sm">
          <div className="container mx-auto px-4 h-20 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="쉐프토리 로고" className="w-10 h-10 rounded-xl" />
              <span className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
                쉐프토리
              </span>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">기능</a>
              <a href="#demo" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">체험</a>
              <a href="#testimonials" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">후기</a>
            </nav>
          </div>
        </header>

        {/* Hero */}
        <section
            data-section="hero"
            className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden"
        >
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
                AI 기반 레시피 생성
              </div>

              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-tight">
                <span className="block text-gray-900">요리 영상을</span>
                <span className="block mt-2 bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
                  30초 만에 레시피로
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                복잡한 유튜브 요리 영상도 AI가 분석해서<br className="hidden sm:block" />
                따라하기 쉬운 단계별 레시피로 만들어드려요
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                <Button
                    asChild
                    size="lg"
                    className="h-14 px-8 rounded-full bg-gradient-to-r from-orange-500 to-pink-600 hover:from-orange-600 hover:to-pink-700 text-white shadow-xl hover:shadow-2xl transition-all hover:scale-105 text-base font-semibold"
                    onClick={() => {
                      if (typeof window !== 'undefined' && window.gtag) {
                        window.gtag('event', 'download_app', {
                          platform: 'app_store',
                          location: 'hero'
                        });
                      }
                    }}
                >
                  <a href="https://play.google.com/store/apps/details?id=com.cheftory.cheftory" target="_blank" rel="noopener noreferrer">
                    <Apple className="w-5 h-5 mr-2" />
                    App Store
                  </a>
                </Button>

                <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="h-14 px-8 rounded-full border-2 border-gray-300 text-gray-700 hover:bg-gray-50 transition-all hover:scale-105 text-base font-semibold"
                    onClick={() => {
                      if (typeof window !== 'undefined' && window.gtag) {
                        window.gtag('event', 'download_app', {
                          platform: 'google_play',
                          location: 'hero'
                        });
                      }
                    }}
                >
                  <a href="https://play.google.com/store/apps/details?id=com.cheftory.cheftory&hl=ko" target="_blank" rel="noopener noreferrer">
                    <Play className="w-5 h-5 mr-2" />
                    Google Play
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
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
                이런 고민 해보셨나요?
              </h2>
              <p className="text-xl text-gray-600">요리 영상 보면서 겪는 불편함들</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {[
                { emoji: "😵‍💫", title: "영상이 너무 빨라", desc: "일시정지 연타하다 집중력 깨짐" },
                { emoji: "📝", title: "메모하기 귀찮아", desc: "재료 적다가 흐름 놓침" },
                { emoji: "🕐", title: "10분 영상 1분 핵심", desc: "군더더기 속 핵심 찾기 힘듦" },
                { emoji: "❓", title: "질문하고 싶은데", desc: "댓글 답변 기다리기 답답함" },
              ].map((item, i) => (
                  <div
                      key={i}
                      className={`group relative p-8 bg-gradient-to-br from-gray-50 to-white rounded-3xl border-2 border-gray-100 hover:border-orange-200 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 ${
                          visibleSections.has("problems") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                      }`}
                      style={{ transitionDelay: `${i * 100}ms` }}
                  >
                    <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                      {item.emoji}
                    </div>
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
            className={`py-24 bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50 transition-all duration-700 ${
                visibleSections.has("demo") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          <div className="container mx-auto px-4">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-black mb-6 text-gray-900">
                4단계로 완성되는 마법
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                유튜브 링크 하나로 나만의 요리 어시스턴트 완성
              </p>
            </div>

            <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
              {[
                {
                  step: "1단계",
                  color: "blue",
                  title: "영상 공유하기",
                  desc: "유튜브 공유 버튼 클릭",
                  video: "/recipe-create-guide-ios.mp4",
                  badge: "공유하기"
                },
                {
                  step: "2단계",
                  color: "green",
                  title: "AI 분석 중",
                  desc: "30초 만에 변환",
                  video: "/recipe-create.mp4",
                  badge: "분석 중"
                },
                {
                  step: "3단계",
                  color: "purple",
                  title: "레시피 완성",
                  desc: "단계별 가이드",
                  video: "/recipe-summary.mp4",
                  badge: "완성"
                },
                {
                  step: "보너스",
                  color: "orange",
                  title: "음성 제어",
                  desc: "손 안 써도 OK",
                  video: "/voice-command-guide.mp4",
                  badge: "음성"
                }
              ].map((item, i) => (
                  <div
                      key={i}
                      className={`transition-all duration-700 ${
                          visibleSections.has("demo") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                      }`}
                      style={{ transitionDelay: `${i * 100}ms` }}
                  >
                    <div className="text-center mb-6">
                      <div className={`inline-flex items-center bg-${item.color}-100 text-${item.color}-800 px-4 py-1.5 rounded-full text-sm font-bold mb-3`}>
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
                            <div className="w-full h-full bg-gradient-to-b from-orange-100 to-pink-100 flex items-center justify-center">
                              <ChefHat className="w-20 h-20 text-orange-500" />
                            </div>
                          </video>
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
            className={`py-24 bg-white transition-all duration-700 ${
                visibleSections.has("features") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          <div className="container mx-auto px-4">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-black mb-6 text-gray-900">
                똑똑한 요리 어시스턴트
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                AI와 음성인식이 만든 차세대 요리 경험
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {[
                { icon: ChefHat, title: "레시피 자동 생성", desc: "영상을 단계별 레시피로 변환", gradient: "from-orange-500 to-pink-500" },
                { icon: Mic, title: "음성 단계 전환", desc: "손 안 쓰고 다음 단계로", gradient: "from-pink-500 to-purple-500" },
                { icon: Timer, title: "스마트 타이머", desc: "음성으로 타이머 설정", gradient: "from-purple-500 to-blue-500" },
                { icon: Search, title: "AI 검색", desc: "원하는 장면 바로 찾기", gradient: "from-blue-500 to-cyan-500" },
              ].map((feature, i) => (
                  <Card
                      key={i}
                      className={`group relative overflow-hidden border-0 bg-gradient-to-br from-gray-50 to-white hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${
                          visibleSections.has("features") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                      }`}
                      style={{ transitionDelay: `${i * 100}ms` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <CardHeader className="relative text-center">
                      <div className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
                        <feature.icon className="w-10 h-10 text-white" />
                      </div>
                      <CardTitle className="text-xl font-bold">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="relative text-center">
                      <CardDescription className="text-base text-gray-600">
                        {feature.desc}
                      </CardDescription>
                    </CardContent>
                  </Card>
              ))}
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
                <h2 className="text-4xl md:text-5xl font-black mb-4">
                  사용자들이 증명하는 효과
                </h2>
                <p className="text-xl text-white/90">
                  실제 데이터로 확인하는 쉐프토리의 임팩트
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { value: "85%", label: "요리 성공률 증가", color: "bg-white" },
                  { value: "60%", label: "요리 시간 단축", color: "bg-white" },
                  { value: "92%", label: "사용자 만족도", color: "bg-white" }
                ].map((stat, i) => (
                    <div key={i} className="text-center">
                      <div className="text-6xl md:text-7xl font-black mb-4">{stat.value}</div>
                      <div className="text-xl font-semibold mb-4">{stat.label}</div>
                      <div className="w-full bg-white/20 rounded-full h-3">
                        <div
                            className={`${stat.color} h-3 rounded-full transition-all duration-1000`}
                            style={{ width: statsAnimated ? stat.value : '0%' }}
                        />
                      </div>
                    </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section
            data-section="testimonials"
            id="testimonials"
            className={`py-24 bg-white transition-all duration-700 ${
                visibleSections.has("testimonials") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          <div className="container mx-auto px-4">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-black mb-6 text-gray-900">
                전 세계 사용자 후기
              </h2>
              <p className="text-xl text-gray-600">
                실제 사용자들의 생생한 경험담
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                { name: "김민지", country: "🇰🇷", rating: 5, comment: "진짜 요리 못하는 저도 김치찌개를 맛있게 끓여요! 음성 조작 진짜 편해요.", recipe: "김치찌개" },
                { name: "Sakura", country: "🇯🇵", rating: 5, comment: "日本語も完璧に分析してくれて本当に助かります！", recipe: "오코노미야키" },
                { name: "Mike", country: "🇺🇸", rating: 5, comment: "Voice commands work perfectly! Now I can cook Korean BBQ!", recipe: "갈비찜" },
                { name: "Chen Wei", country: "🇨🇳", rating: 5, comment: "很棒的应用！AI识别很准确，步骤清晰！", recipe: "한식 치킨" },
                { name: "Emma", country: "🇩🇪", rating: 5, comment: "Fantastisch! Die Spracherkennung funktioniert auch auf Deutsch!", recipe: "불고기" },
                { name: "Ana", country: "🇧🇷", rating: 5, comment: "Incrível! A função de voz é muito útil!", recipe: "비빔밥" }
              ].map((testimonial, i) => (
                  <div
                      key={i}
                      className={`group relative p-6 bg-gradient-to-br from-white to-gray-50 rounded-3xl border-2 border-gray-100 hover:border-orange-200 shadow-lg hover:shadow-2xl transition-all duration-500 ${
                          visibleSections.has("testimonials") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                      }`}
                      style={{ transitionDelay: `${i * 100}ms` }}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div className="flex-1">
                        <div className="font-bold text-gray-900">{testimonial.name}</div>
                        <div className="text-sm text-gray-600">{testimonial.country}</div>
                      </div>
                      <div className="flex gap-1">
                        {[...Array(testimonial.rating)].map((_, j) => (
                            <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>

                    <p className="text-gray-700 mb-4 leading-relaxed">
                      "{testimonial.comment}"
                    </p>

                    <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-semibold">
                      ✨ {testimonial.recipe}
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
              <h2 className="text-4xl md:text-5xl font-black mb-4 text-gray-900">
                자주 묻는 질문
              </h2>
              <p className="text-xl text-gray-600">
                궁금한 점을 확인해보세요
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {[
                  {
                    q: "어떤 유튜브 영상이든 가능한가요?",
                    a: "대부분의 요리 영상을 분석해 레시피를 생성합니다. 음질이 지나치게 나쁘거나 소음이 큰 경우 정확도가 떨어질 수 있어요."
                  },
                  {
                    q: "음성 인식이 잘 안 될 때는?",
                    a: "조용한 환경에서 명확히 말하면 인식률이 높아져요. 필요하면 화면 터치로도 조작할 수 있습니다."
                  }
                ].map((faq, i) => (
                    <AccordionItem
                        key={i}
                        value={`item-${i}`}
                        className="bg-white rounded-2xl px-6 border-2 border-gray-100 hover:border-orange-200 transition-all"
                    >
                      <AccordionTrigger className="text-left text-lg font-bold hover:text-orange-600">
                        {faq.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-base text-gray-600 pt-4">
                        {faq.a}
                      </AccordionContent>
                    </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-gradient-to-br from-orange-500 via-pink-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              지금 바로 시작하세요
            </h2>
            <p className="text-xl mb-10 text-white/90 max-w-2xl mx-auto">
              무료로 다운로드하고 첫 레시피를 만들어보세요
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                  asChild
                  size="lg"
                  className="h-16 px-10 rounded-full bg-white text-orange-600 hover:bg-gray-100 shadow-2xl hover:scale-105 transition-all text-lg font-bold"
                  onClick={() => {
                    if (typeof window !== 'undefined' && window.gtag) {
                      window.gtag('event', 'download_app', {
                        platform: 'app_store',
                        location: 'cta'
                      });
                    }
                  }}
              >
                <a href="https://apps.apple.com/kr/app/쉐프토리-sns-영상을-레시피로-핸즈프리-도우미/id6751566827" target="_blank" rel="noopener noreferrer">
                  <Apple className="w-6 h-6 mr-2" />
                  App Store에서 다운로드
                </a>
              </Button>

              <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="h-16 px-10 rounded-full border-2 border-white text-white hover:bg-white/10 transition-all hover:scale-105 text-lg font-bold"
                  onClick={() => {
                    if (typeof window !== 'undefined' && window.gtag) {
                      window.gtag('event', 'download_app', {
                        platform: 'google_play',
                        location: 'cta'
                      });
                    }
                  }}
              >
                <a href="https://play.google.com/store/apps/details?id=com.cheftory.cheftory&hl=ko" target="_blank" rel="noopener noreferrer">
                  <Play className="w-6 h-6 mr-2" />
                  Google Play에서 다운로드
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
                <img src="/logo.png" alt="쉐프토리 로고" className="w-10 h-10 rounded-xl" />
                <span className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
                쉐프토리
                </span>
              </div>

              <div className="text-center text-gray-400">
                <p className="text-base mb-2">더 쉽고 즐거운 요리 경험을 만들어갑니다</p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-6 text-sm text-gray-400">
                <a href="mailto:chieftory72@gmail.com" className="hover:text-white transition-colors">
                  문의하기
                </a>
                <div className="hidden sm:block w-1 h-1 bg-gray-600 rounded-full" />
                <a href="/privacy" className="hover:text-white transition-colors">
                  개인정보처리방침
                </a>
                <div className="hidden sm:block w-1 h-1 bg-gray-600 rounded-full" />
                <a href="/terms" className="hover:text-white transition-colors">
                  이용약관
                </a>
              </div>

              <div className="text-center text-gray-500 text-sm">
                <p>© 2025 쉐프토리. All rights reserved.</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
  );
}