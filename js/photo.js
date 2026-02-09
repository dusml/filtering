// isotope
// external js: isotope.pkgd.js

// $('.masonry section ul').isotope({
//   itemSelector: '.masonry section li',
//   masonry: {
//     // columnWidth: 100
//     horizon
//   }
// });

var elem = document.querySelector('.masonry section ul');
var iso = new Isotope( elem, {
  // options
  itemSelector: '.masonry section li',
  // layoutMode: 'fitRows'
});

// $grid.isotope({ filter: '.metal' });

const btns = document.querySelectorAll('.masonry nav li a')

for(let btn of btns){
  btn.addEventListener('click',function(e){
    e.preventDefault() // 기본 기능을 막아준다. 다른 링크로 넘어가거나. 가상링크로 인해 화면위로 올라가는 형상을 

    for(let btn of btns){
      btn.classList.remove('on')//각 버튼에 적용된 class on전부 제거 1
    }
    this.classList.add('on') //클릭한 버튼에 class on 추가 2 
    const filterName = this.getAttribute('href') //클릭한 버튼 href 밸류(값)를 가져옴 3 

    iso.arrange({ filter: filterName });
  })
}



// 각 이미지를 클릭하면 팝업창이 뜨게
const items = document.querySelectorAll('.masonry section li')
const pop = document.querySelector('#popup')

/* 배열이나 오브젝트에 스크립트를 한번에 */
// for(각각의 아이템 of 배열){}
for(const aa of items){
  aa.addEventListener('click',function(){
    const imgSrc = this.querySelector('img').getAttribute('src')
    const tit = this.querySelector('.tit').innerText;
    const deac = this.querySelector('.textWrap p:last-child').innerText;

    pop.classList.add('on')
    pop.querySelector('img').setAttribute('src',imgSrc)
    pop.querySelector('.tit').innerText = tit
    pop.querySelector('.textWrap p:last-child').innerText = deac
  })
}

// 닫기
pop.addEventListener('click',function(){
  pop.classList.remove('on')
})