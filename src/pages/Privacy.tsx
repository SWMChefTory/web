import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="container mx-auto px-4 pt-28 pb-16">
        <div className="prose prose-slate max-w-3xl mx-auto">
          <h1>개인정보처리방침</h1>
          <h2>ChefTory 개인정보 처리방침</h2>
          <p>
            ChefTory(이하 "본 앱")는 이용자의 개인정보를 소중히 여기며, 관련
            법령을 준수합니다. 본 앱은 서비스 제공을 위하여 필요한 최소한의
            개인정보만을 수집·이용하며, 그 내역은 아래와 같습니다.
          </p>
          <hr />
          <h3>1. 수집하는 개인정보 항목</h3>
          <p>
            <strong>회원가입 시</strong>
          </p>
          <ul>
            <li>성별 (Gender)</li>
            <li>생년월일 (Date of Birth)</li>
            <li>사용자 식별 ID (User ID)</li>
          </ul>
          <p>
            <strong>앱 사용 시</strong>
          </p>
          <ul>
            <li>
              음성 데이터 (사용자가 직접 발화한 음성, 음성 명령/질의 내용)
            </li>
          </ul>
          <hr />
          <h3>2. 개인정보의 이용 목적</h3>
          <p>수집한 개인정보는 다음의 목적으로만 이용됩니다.</p>
          <ul>
            <li>회원 계정 생성 및 로그인 인증</li>
            <li>서비스 기능 제공 및 유지</li>
            <li>음성 인식 기능 제공 및 정확도 향상</li>
            <li>고객 지원 및 문의 대응</li>
          </ul>
          <hr />
          <h3>3. 개인정보의 보관 및 파기</h3>
          <ul>
            <li>
              이용자가 회원 탈퇴를 요청하면, 수집된 개인정보는 지체 없이
              삭제됩니다.
            </li>
            <li>
              음성 데이터는 실시간 인식 후 필요한 경우 일시적으로 처리되며,
              서비스 제공 목적 외 장기간 저장하지 않습니다.
            </li>
            <li>
              단, 관련 법령에 따라 일정 기간 보관이 필요한 경우 해당 법령을
              따릅니다.
            </li>
          </ul>
          <hr />
          <h3>4. 제3자 제공 및 위탁</h3>
          <ul>
            <li>본 앱은 수집한 개인정보를 제3자에게 제공하지 않습니다.</li>
            <li>광고, 마케팅 목적의 활용도 하지 않습니다.</li>
            <li>
              음성 인식 처리 과정에서 제3자 API 또는 인공지능 모델을 사용할 수
              있으나, 해당 과정은 오직 서비스 기능 제공 목적에 한정됩니다.
            </li>
          </ul>
          <hr />
          <h3>5. 이용자의 권리</h3>
          <ul>
            <li>
              이용자는 언제든지 회원 탈퇴 및 개인정보 삭제를 요청할 수 있습니다.
            </li>
            <li>관련 문의는 아래 이메일을 통해 가능합니다.</li>
          </ul>
          <hr />
          <h3>6. 개인정보 보호 책임자</h3>
          <ul>
            <li>책임자: 셰프토리</li>
            <li>이메일: chieftory72@gmail.com</li>
          </ul>
          <hr />
          <p>본 방침은 2025년 2월 28일부터 적용됩니다.</p>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
