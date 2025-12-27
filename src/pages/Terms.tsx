import { useEffect, useMemo } from "react";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import type { Locale } from "@/locales";
import { ko } from "@/locales/ko";
import { en } from "@/locales/en";

type Props = { locale: Locale };

export default function Terms({ locale }: Props) {
  const msg = useMemo(() => (locale === "ko" ? ko : en), [locale]);
  const terms = msg.legalDocs.terms;

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return (
      <div className="min-h-screen bg-background">
        <SiteHeader locale={locale} />
        <main className="container mx-auto px-4 pt-28 pb-16">
          <div className="prose prose-slate max-w-3xl mx-auto">
            <h1>{terms.title}</h1>
            <p className="text-sm text-muted-foreground">
              {msg.legal.effectiveLabel} {terms.effectiveDate}
            </p>

            {terms.sections.map((section: any) => (
                <section key={section.article}>
                  <h3>
                    {locale === "ko"
                        ? `제${section.article}조 (${section.title})`
                        : `${section.article}. ${section.title}`}
                  </h3>

                  {section.content && <p>{section.content}</p>}

                  {Array.isArray(section.subsections) && (
                      <div>
                        {section.subsections.map((sub: any, idx: number) => (
                            <p key={idx}>
                              {sub.number ? `${sub.number}. ` : ""}
                              {sub.content}
                            </p>
                        ))}
                      </div>
                  )}
                </section>
            ))}
          </div>
        </main>
        <SiteFooter locale={locale} />
      </div>
  );
}