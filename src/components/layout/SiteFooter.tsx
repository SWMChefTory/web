import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { Link } from "react-router-dom";
import type { Locale } from "@/locales";
import { en, ko } from "@/locales";

type Props = { locale: Locale };

function getMessages(locale: Locale) {
  return locale === "ko" ? ko : en;
}

export function SiteFooter({ locale }: Props) {
  const msg = getMessages(locale);

  return (
      <footer className="bg-muted/50 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4">
            <p className="text-muted-foreground">{msg.footer.tagline}</p>

            <div className="flex items-center justify-center space-x-2 text-muted-foreground">
              <Mail className="h-4 w-4" />
              <span>{msg.contact.otherEmailValue}</span>
            </div>

            <div className="flex justify-center space-x-6 pt-4">
              <Button asChild variant="ghost" size="sm">
                <Link to={`/${locale}/privacy`}>{msg.footer.privacy}</Link>
              </Button>
              <Button asChild variant="ghost" size="sm">
                <Link to={`/${locale}/terms`}>{msg.footer.terms}</Link>
              </Button>
              <Button asChild variant="ghost" size="sm">
                <Link to={`/${locale}/contact`}>{msg.footer.contact}</Link>
              </Button>
            </div>

            <p className="text-sm text-muted-foreground pt-4">{msg.footer.copyright}</p>
          </div>
        </div>
      </footer>
  );
}