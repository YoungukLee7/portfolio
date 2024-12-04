/*
    window.document.querySelector('');
    - window: 브라우저에서 기본적으로 제공해주는 글로벌 객체
    - document: 문서 전체에 대한 정보를 가지고 있는 객체
    - querySelector: document에 있는 선택자 함수
*/
// 헤더에 있는 모든 요소 가져오기
// 헤더의 좌표, 넓이, 높이 가져오기
const header = document.querySelector(".header");
const headerHeight = header.getBoundingClientRect().height;

// Header가 페이지 아래로 스크롤이 발생할 떄마다 스타일링 적용
// document.addEventListener("scroll", function () {});
document.addEventListener("scroll", () => {
  if (window.scrollY > headerHeight) {
    header.classList.add("header--dark");
  } else {
    header.classList.remove("header--dark");
  }
});

// Home Section을 아래로 스크롤시 투명하게 스타일링 적용
const home = document.querySelector(".home__container");
const homeHeight = home.offsetHeight;

document.addEventListener("scroll", () => {
  /* 스크롤 수치를 정밀하게 opacity를 설정하기 위해 여기서 직접 opacity를 변경한다. */
  home.style.opacity = 1 - window.scrollY / homeHeight;
});

// Arrow uo 버튼을 아래로 스크롤시 투명하게 스타일링 적용
const arrowUp = document.querySelector(".arrow-up");
document.addEventListener("scroll", () => {
  if (window.scrollY > homeHeight / 2) {
    arrowUp.style.opacity = 1;
  } else {
    arrowUp.style.opacity = 0;
  }
});
