/* 예전 버전에 나쁜 관행을 사용한다면 그것에 대한 에러 메세지를 받을 수 있다 */
"use strict";
// front - end;
// back - end;
// mobile;

const category = 0;

// 프로젝트 필터링 관련 로직 처리
// querySelector: 선택자에 해당하는 요소중 첫번째 아이템만 return
const categories = document.querySelector(".categories");
// querySelectorAll: 선택자에 해당하는 모든 요소들을 배열 형태로 return
const projects = document.querySelectorAll(".project");
const projectsContainer = document.querySelector(".projects");

categories.addEventListener("click", (event) => {
  const filter = event.target.dataset.filter;
  if (filter == null) {
    return;
  }
  // Active 매뉴를 재설정
  handleActiveSelection(event.target);

  // 프로젝트 필터링
  filterProjects(filter);
});

// Active 매뉴를 재설정
function handleActiveSelection(target) {
  const active = document.querySelector(".category--selected");
  active.classList.remove("category--selected");
  target.classList.add("category--selected");
}

// 프로젝트 필터링
function filterProjects(filter) {
  projectsContainer.classList.add("anim-out");
  projects.forEach((project) => {
    if (filter === "all" || filter === project.dataset.type) {
      project.style.display = "block"; // 기본값(보이게)
    } else {
      project.style.display = "none"; // 안보이게
    }
  });
  setTimeout(() => {
    projectsContainer.classList.remove("anim-out");
  }, 250);
}
