import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Apple, ChefHat, Mic, Play, Search, Timer } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-secondary text-primary-foreground pt-20">
        <div className="container mx-auto px-4 py-20 md:py-28">
          <div className="flex flex-col items-center text-center space-y-8">
            <div className="space-y-4 max-w-4xl">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                끊기지 않는 요리 경험
              </h1>
              <p className="text-2xl md:text-4xl opacity-90 leading-relaxed pt-8">
                유튜브 영상을 분석해 단계별 레시피로 변환하고,
              </p>

              <p className="text-2xl md:text-4xl opacity-90 leading-relaxed">
                음성 명령으로 레시피 제어까지 간편하게!
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Button
                asChild
                size="lg"
                className="h-14 px-7 rounded-2xl bg-slate-900/85 text-white text-xl border border-white/10 shadow-lg hover:bg-slate-900/90"
              >
                <a href="#" aria-label="Download on the App Store">
                  <span className="inline-flex items-center">
                    <Apple className="mr-3 h-6 w-6" /> 앱 스토어
                  </span>
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                className="h-14 px-7 rounded-2xl bg-slate-900/85 text-white text-xl border border-white/10 shadow-lg hover:bg-slate-900/90"
              >
                <a href="#" aria-label="Get it on Google Play">
                  <span className="inline-flex items-center">
                    <Play className="mr-3 h-6 w-6" /> 구글 플레이
                  </span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">핵심 기능</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              요리를 쉽고 즐겁게 만드는 4가지 스마트 기능
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ChefHat className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">레시피 자동 생성</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  유튜브 요리 영상을 분석해 단계별 레시피로 자동 변환합니다
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mic className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="text-xl">음성 단계 전환</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  “다음 단계”라고 말하면 손을 쓰지 않고도 다음 단계로 넘어갑니다
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Timer className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">음성 타이머</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  “5분 타이머 설정해줘”라고 말하면 자동으로 타이머가 실행됩니다
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="text-xl">스마트 검색</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  “대파 써는 부분 보여줘”라고 말하면 바로 해당 장면을 찾아줍니다
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              자주 묻는 질문
            </h2>
            <p className="text-lg text-muted-foreground">
              궁금한 점들을 미리 확인해보세요
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-card rounded-lg px-6">
                <AccordionTrigger className="text-left text-lg font-semibold">
                  어떤 유튜브 영상이든 가능한가요?
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground pt-4">
                  네, 대부분의 요리 영상을 분석해서 레시피를 생성해드려요. 다만
                  음질이 너무 나쁘거나 배경음이 큰 영상은 정확도가 떨어질 수
                  있어요.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-card rounded-lg px-6">
                <AccordionTrigger className="text-left text-lg font-semibold">
                  음성 인식이 잘 안 될 때는 어떻게 하나요?
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground pt-4">
                  조용한 환경에서 명확하게 발음해주시면 인식률이 높아져요. 만약
                  음성 인식이 어려우시다면 화면을 터치해서도 조작할 수 있어요.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      {/*
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">문의하기</h2>
            <p className="text-lg text-muted-foreground">
              궁금한 점이나 제안사항이 있으시면 언제든 연락해주세요
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-center">
                  이메일로 문의하기
                </CardTitle>
                <CardDescription className="text-center">
                  최대한 빠른 시일 내에 답변드리겠습니다
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      이름
                    </label>
                    <Input id="name" placeholder="홍길동" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      이메일
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="example@email.com"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    제목
                  </label>
                  <Input id="subject" placeholder="문의 제목을 입력해주세요" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    내용
                  </label>
                  <Textarea
                    id="message"
                    placeholder="문의 내용을 자세히 적어주세요"
                    rows={5}
                  />
                </div>
                <Button className="w-full text-lg py-6" size="lg">
                  <Mail className="mr-2 h-5 w-5" />
                  문의 보내기
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      */}

      <SiteFooter />
    </div>
  );
}
