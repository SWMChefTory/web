import { useEffect, useMemo } from "react";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import type { Locale } from "@/locales";
import { ko } from "@/locales/ko";
import { en } from "@/locales/en";

type Props = { locale: Locale };

export default function Privacy({ locale }: Props) {
  const msg = useMemo(() => (locale === "ko" ? ko : en), [locale]);
  const policy = msg.legalDocs.privacy;

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return (
      <div className="min-h-screen bg-background">
        <SiteHeader locale={locale} />
        <main className="container mx-auto px-4 pt-28 pb-16">
          <div className="prose prose-slate max-w-3xl mx-auto">
            <h1>{policy.title}</h1>
            <p className="text-sm text-muted-foreground">
              {msg.legal.effectiveLabel} {policy.effectiveDate}
            </p>

            {policy.sections.map((section: any) => (
                <section key={section.article}>
                  <h3>
                    {section.article}. {section.title}
                  </h3>

                  {section.content && <p>{section.content}</p>}

                  {Array.isArray(section.items) && (
                      <ul>
                        {section.items.map((it: any, idx: number) => (
                            <li key={idx}>{typeof it === "string" ? it : it.content}</li>
                        ))}
                      </ul>
                  )}

                  {Array.isArray(section.categories) && (
                      <div>
                        {section.categories.map((cat: any, i: number) => (
                            <div key={i}>
                              <p><strong>{cat.category}</strong></p>
                              <ul>
                                {cat.items.map((ci: any, j: number) => (
                                    <li key={j}>
                                      {ci.detail ? `${ci.detail}. ` : ""}
                                      {ci.content}
                                    </li>
                                ))}
                              </ul>
                            </div>
                        ))}
                      </div>
                  )}

                  {Array.isArray(section.subsections) && (
                      <div>
                        {section.subsections.map((sub: any, sidx: number) => (
                            <div key={sidx}>
                              <p>
                                {sub.number ? `${sub.number}. ` : ""}
                                {sub.content}
                              </p>

                              {Array.isArray(sub.details) && (
                                  <ul>
                                    {sub.details.map((d: any, didx: number) => (
                                        <li key={didx}>
                                          {d.letter ? `${d.letter}. ` : ""}
                                          {d.content}
                                        </li>
                                    ))}
                                  </ul>
                              )}

                              {Array.isArray(sub.organizations) && (
                                  <ul>
                                    {sub.organizations.map((o: any, oidx: number) => (
                                        <li key={oidx}>
                                          {o.name} - {o.phone} - {o.website}
                                        </li>
                                    ))}
                                  </ul>
                              )}

                              {sub.additionalInfo && <p>{sub.additionalInfo}</p>}
                            </div>
                        ))}
                      </div>
                  )}

                  {Array.isArray(section.browsers) && (
                      <ul>
                        {section.browsers.map((b: string, idx: number) => (
                            <li key={idx}>{b}</li>
                        ))}
                      </ul>
                  )}

                  {section.responsiblePerson && (
                      <ul>
                        <li>Responsible person: {section.responsiblePerson.name}</li>
                        <li>Title: {section.responsiblePerson.position}</li>
                        <li>Phone: {section.responsiblePerson.phone}</li>
                        <li>Email: {section.responsiblePerson.email}</li>
                      </ul>
                  )}

                  <hr />
                </section>
            ))}
          </div>
        </main>
        <SiteFooter locale={locale} />
      </div>
  );
}