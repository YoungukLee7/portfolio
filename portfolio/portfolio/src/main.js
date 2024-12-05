/*
    window.document.querySelector('');
    - window: 브라우저에서 기본적으로 제공해주는 글로벌 객체
    - document: 문서 전체에 대한 정보를 가지고 있는 객체
    - querySelector: document에 있는 선택자 함수

    document.addEventListener("scroll", function () {});
    document.addEventListener("scroll", () => {});
*/

// 헤더에 있는 모든 요소 가져오기
const header = document.querySelector(".header");
// 헤더의 좌표, 넓이, 높이 가져오기
const headerHeight = header.getBoundingClientRect().height;

// Header 스타일이 스크롤이 발생할 떄마다 적용
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

// Header menu 부분을 navberMenu 변수에 할당
const navberMenu = document.querySelector(".header__menu");
// Header toggle 부분을 navberToggle 변수에 할당
const navberToggle = document.querySelector(".header__toggle");
// Navbar 토글버튼 클릭 처리
navberToggle.addEventListener("click", () => {
  navberMenu.classList.toggle("open");
});

// Navbar 메뉴 클릭 시 메뉴를 자동으로 닫아줌 처리
navberMenu.addEventListener("click", () => {
  navberMenu.classList.remove("open");
});
