import { Outlet } from "react-router-dom";

export default function About() {
  return (
    <>
      <h3 className="about_page_name" >About Page</h3>
      <Outlet>
      </Outlet>
      <img className="kurlys_start_img" src="/images/about_intro_main_v2.jpg" alt="컬리의 시작" />
      <h5 className="kurlys_start_name">컬리의 시작</h5>
      <p className="kurlys_start_p">
        이 세상에는 참 다양한 푸드마켓이 있습니다. 
        하지만 우리와 꼭 맞는 마음을 가진 푸드마켓을 찾기란 쉽지 않았습니다. 
        <br /> ‘그렇다면 우리가 직접 만들어보면 어떨까?’ 2015년 컬리는 그렇게 시작되었습니다.
        맛있는 음식이 삶의 가장 큰 즐거움이라 믿는 사람들이 뜻을 합쳤죠. <br /> 
        컬리의 팀원들은 이미 팀을 꾸리기 전부터 좋은 재료를 위해서라면 해외 직구, 백화점, 동네 마트, 재래 시장, 더 나아가 전국 방방곡곡의 산지를 찾아 다니며 품질과 가격을 비교하던 깐깐한 소비자였습니다. 이렇게 찾아낸 훌륭한 생산자와 최상의 먹거리들을 나와 내 가족만 알고 있기에는 너무 아쉬웠습니다.
        비싼 식자재만이 좋은 음식일 것이라고 막연하게 생각하고 있는 소비자에게는 진짜 맛을 소개해드리고 싶었고, 뚝심 하나로 산골 오지에서 수십 년간 묵묵히 장을 담그는 명인, 시들어서 버릴지언정 무농약을 고집하는 농부에게는 안정적인 판매 활로를 찾아드리고 싶었습니다.</p>
    </>
  )
}