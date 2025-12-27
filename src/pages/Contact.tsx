import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";

import { en, ko, type Locale } from "@/locales";

type Props = { locale: Locale };

function getMessages(locale: Locale) {
  return locale === "ko" ? ko : en;
}

export default function ContactPage({ locale }: Props) {
  const msg = getMessages(locale);

  return (
      <div className="min-h-screen bg-background">
        <SiteHeader locale={locale} />

        <section className="py-16 md:py-24 pt-32">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{msg.contact.title}</h1>
              <p className="text-lg text-muted-foreground">{msg.contact.subtitle}</p>
            </div>

            <div className="max-w-2xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-center">{msg.contact.cardTitle}</CardTitle>
                  <CardDescription className="text-center">{msg.contact.cardDesc}</CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        {msg.contact.nameLabel}
                      </label>
                      <Input id="name" placeholder={msg.contact.namePlaceholder} />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        {msg.contact.emailLabel}
                      </label>
                      <Input id="email" type="email" placeholder={msg.contact.emailPlaceholder} />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      {msg.contact.subjectLabel}
                    </label>
                    <Input id="subject" placeholder={msg.contact.subjectPlaceholder} />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      {msg.contact.messageLabel}
                    </label>
                    <Textarea id="message" placeholder={msg.contact.messagePlaceholder} rows={5} />
                  </div>

                  <Button asChild className="w-full text-lg py-6" size="lg">
                    <a href={msg.links.contactEmail}>
                      <Mail className="mr-2 h-5 w-5" />
                      {msg.contact.send}
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <div className="mt-12 text-center space-y-4">
                <h3 className="text-xl font-semibold">{msg.contact.otherTitle}</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  <Card className="p-6">
                    <div className="text-center space-y-2">
                      <Mail className="h-8 w-8 text-primary mx-auto" />
                      <h4 className="font-semibold">{msg.contact.otherEmailTitle}</h4>
                      <p className="text-muted-foreground">{msg.contact.otherEmailValue}</p>
                    </div>
                  </Card>

                  <Card className="p-6">
                    <div className="text-center space-y-2">
                      <MessageSquare className="h-8 w-8 text-primary mx-auto" />
                      <h4 className="font-semibold">{msg.contact.otherKakaoTitle}</h4>
                      <p className="text-muted-foreground">{msg.contact.otherKakaoValue}</p>
                    </div>
                  </Card>
                </div>

                <div className="pt-6">
                  <Link className="text-sm text-muted-foreground hover:underline" to={`/${locale}`}>
                    {locale === "ko" ? "홈으로 돌아가기" : "Back to home"}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <SiteFooter locale={locale} />
      </div>
  );
}