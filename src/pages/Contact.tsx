import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageSquare } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* Contact Section */}
      <section className="py-16 md:py-24 pt-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">문의하기</h1>
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
                  24시간 내에 답변드리겠습니다
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

            {/* Additional Contact Info */}
            <div className="mt-12 text-center space-y-4">
              <h3 className="text-xl font-semibold">다른 방법으로 연락하기</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <Card className="p-6">
                  <div className="text-center space-y-2">
                    <Mail className="h-8 w-8 text-primary mx-auto" />
                    <h4 className="font-semibold">이메일</h4>
                    <p className="text-muted-foreground">
                      support@chefstory.co.kr
                    </p>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="text-center space-y-2">
                    <MessageSquare className="h-8 w-8 text-primary mx-auto" />
                    <h4 className="font-semibold">카카오톡</h4>
                    <p className="text-muted-foreground">@셰프토리</p>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
