function scrolling() {
  const anchors = document.querySelectorAll('a.scroll-to')
  for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()
      const blockID = anchor.getAttribute('href')
      document.querySelector(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    })
  }
}

function tabs() {
  const tabsBtn = document.querySelectorAll('.procces-tabs__card');
  const tabsContent = document.querySelectorAll('.procces-main__description');
  tabsBtn.forEach(item =>{
    item.addEventListener('click', (e) => {
      let currentBtn = item;
      let tabId = currentBtn.getAttribute("data-id");
      let currentContent = document.querySelector(tabId);
      if (!currentBtn.classList.contains("procces-tabs__card-active")) {
        tabsBtn.forEach(item =>{
          item.classList.remove("procces-tabs__card-active");
        });
        tabsContent.forEach(item =>{
          item.classList.remove("procces-main__description-active");
        });
        currentBtn.classList.add("procces-tabs__card-active");
        currentContent.classList.add("procces-main__description-active");
      }
    })
  });

}

function render() {
  scrolling();
  tabs();
}

render();