import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";
import type { Locale } from "@/locales";
import { en, ko } from "@/locales";

type Props = { locale: Locale };

function getMessages(locale: Locale) {
  return locale === "ko" ? ko : en;
}

export function SiteHeader({ locale }: Props) {
  const msg = getMessages(locale);

  return (
      <nav className="fixed top-0 w-full bg-white backdrop-blur-sm border-b z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to={`/${locale}`} className="flex items-center space-x-2">
              <img src="/logo.png" alt={`${msg.brand} logo`} className="w-16 h-16" />
              <span className="text-xl font-bold">{msg.brand}</span>
            </Link>

            <Button asChild variant="outline" size="sm">
              <Link to={`/${locale}/contact`}>
                <MessageSquare className="mr-2 h-4 w-4" />
                {msg.footer.contact}
              </Link>
            </Button>
          </div>
        </div>
      </nav>
  );
}