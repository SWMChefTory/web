import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";

export function SiteHeader() {
  return (
    <nav className="fixed top-0 w-full bg-white backdrop-blur-sm border-b z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img src="/logo.png" alt="셰프토리 로고" className="w-16 h-16" />
            <span className="text-xl font-bold">셰프토리</span>
          </div>
          <Button asChild variant="outline" size="sm">
            <a href="mailto:chieftory72@gmail.com">
              <MessageSquare className="mr-2 h-4 w-4" />
              문의하기
            </a>
          </Button>
        </div>
      </div>
    </nav>
  );
}
