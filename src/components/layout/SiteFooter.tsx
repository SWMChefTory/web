import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { Link } from "react-router-dom";

export function SiteFooter() {
  return (
    <footer className="bg-muted/50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4">
          <p className="text-muted-foreground">
            더 쉽고 즐거운 요리 경험을 만들어갑니다
          </p>
          <div className="flex items-center justify-center space-x-2 text-muted-foreground">
            <Mail className="h-4 w-4" />
            <span>chieftory72@gmail.com</span>
          </div>
          <div className="flex justify-center space-x-6 pt-4">
            <Button asChild variant="ghost" size="sm">
              <Link to="/privacy">개인정보처리방침</Link>
            </Button>
            <Button asChild variant="ghost" size="sm">
              <Link to="/terms">이용약관</Link>
            </Button>
          </div>
          <p className="text-sm text-muted-foreground pt-4">
            © 2025 셰프토리. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
