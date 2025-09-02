import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";

const termsOfServiceData = {
  title: "서비스 이용약관",
  effectiveDate: "2025.08.29",
  sections: [
    {
      article: 1,
      title: "목적",
      content:
        "이 약관은 세포토리 (이하 '회사' 라고 합니다)가 제공하는 제반 서비스의 이용과 관련하여 회사와 회원과의 권리, 의무 및 책임사항, 기타 필요한 사항을 규정함을 목적으로 합니다.",
    },
    {
      article: 2,
      title: "정의",
      content: "이 약관에서 사용하는 주요 용어의 정의는 다음과 같습니다.",
      subsections: [
        {
          number: 1,
          content:
            "'서비스'란 함은 구현되는 단말기(PC, TV, 휴대형단말기 등의 각종 유무선 장치를 포함)와 상관없이 '이용자'가 이용할 수 있는 회사가 제공하는 제반 서비스를 의미합니다.",
        },
        {
          number: 2,
          content:
            "'이용자'란 이 약관에 따라 회사가 제공하는 서비스를 받는 '개인회원', '기업회원' 및 '비회원'을 말합니다.",
        },
        {
          number: 3,
          content:
            "'개인회원'은 회사에 개인정보를 제공하여 회원등록을 한 사람으로, 회사로부터 지속적으로 정보를 제공받고 '회사'가 제공하는 서비스를 계속적으로 이용할 수 있는 자를 말합니다.",
        },
        {
          number: 4,
          content:
            "'기업회원'은 회사에 기업정보 및 개인정보를 제공하여 회원등록을 한 사람으로, 회사로부터 지속적으로 정보를 제공받고 회사가 제공하는 서비스를 계속적으로 이용할 수 있는 자를 말합니다.",
        },
        {
          number: 5,
          content:
            "'비회원'은 회원가입 없이 회사가 제공하는 서비스를 이용하는 자를 말합니다.",
        },
        {
          number: 6,
          content:
            "'아이디(ID)'란 함은 회원의 식별과 서비스이용을 위하여 회원이 정하고 회사가 승인하는 문자 또는 문자와 숫자의 조합을 의미합니다.",
        },
        {
          number: 7,
          content:
            "'비밀번호'란 함은 회원이 부여받은 아이디와 일치되는 회원임을 확인하고 비밀의 보호를 위해 회원 자신이 정한 문자(특수문자 포함)와 숫자의 조합을 의미합니다.",
        },
        {
          number: 8,
          content:
            "'콘텐츠'란 정보통신망법의 규정에 따라 정보통신망에서 사용되는 부호·문자·음성·음향·이미지 또는 영상 등으로 정보 형태의 글, 사진, 동영상 및 각종 파일과 링크 등을 말합니다.",
        },
      ],
    },
    {
      article: 3,
      title: "약관 의 준칙",
      content:
        "이 약관에서 정하지 아니한 사항에 대해서는 법령 또는 회사가 정한 서비스의 개별약관, 운영정책 및 규칙 등(이하 세부지침)의 규정에 따릅니다. 또한 본 약관과 세부지침이 충돌할 경우에는 세부지침에 따릅니다.",
    },
    {
      article: 4,
      title: "약관의 효력과 변경",
      subsections: [
        {
          number: 1,
          content:
            "이 약관은 세포토리(이)가 제공하는 모든 인터넷서비스에 게시하여 공시합니다. '회사'는 관련법령에 위배되지 않는 범위 내에서 이 약관을 변경할 수 있으며, 변경 시 시행일로부터 최소 7일(중대한 변경 30일) 이전 공지합니다.",
        },
        {
          number: 2,
          content:
            "회사가 제1항에 따라 개정약관을 공지 또는 통지하는 경우 변경에 동의하지 아니한 경우 공지일 또는 통지일로부터 7일(중대한 변경 30일) 내에 계약을 해지할 수 있으며, 해지하지 않을 경우 변경에 동의한 것으로 봅니다.",
        },
        {
          number: 3,
          content:
            "이용자가 공지일 또는 통지일로부터 7일(또는 30일)내에 거절 의사를 표시하지 않았을 때에는 변경에 동의한 것으로 간주합니다.",
        },
      ],
    },
    {
      article: 5,
      title: "이용자에 대한 통지",
      subsections: [
        {
          number: 1,
          content:
            "회사는 이 약관에 별도 규정이 없는 한 이용자에게 전자우편, 문자메시지(SMS), 전자쪽지, 푸쉬(Push)알림 등의 전자적 수단을 이용하여 통지할 수 있습니다.",
        },
        {
          number: 2,
          content:
            "회사는 이용자 전체에 대한 통지의 경우 7일 이상 웹사이트의 게시판에 게시함으로써 개별 통지에 갈음할 수 있습니다.",
        },
      ],
    },
    {
      article: 6,
      title: "이용 계약의 체결",
      content: "이용 계약은 다음의 경우에 체결됩니다.",
      subsections: [
        {
          number: 1,
          content:
            "회원가입 시 이용자가 약관에 동의하고 회원가입신청을 하고 회사가 이를 승낙한 때",
        },
        {
          number: 2,
          content:
            "회원가입 없이 유료 서비스를 이용하고자 하는 경우 결제가 완료된 때",
        },
      ],
    },
  ],
};

export default function Terms() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="container mx-auto px-4 pt-28 pb-16">
        <div className="prose prose-slate max-w-3xl mx-auto">
          <h1>{termsOfServiceData.title}</h1>
          <p className="text-sm text-muted-foreground">
            시행일: {termsOfServiceData.effectiveDate}
          </p>

          {termsOfServiceData.sections.map((section: any) => (
            <section key={section.article}>
              <h3>
                제{section.article}조 ({section.title})
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
      <SiteFooter />
    </div>
  );
}
