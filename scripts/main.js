const projeto = document.querySelectorAll('#projectSection');
const dashboard = document.querySelectorAll('#dashboardSection');
const buttons = document.querySelectorAll(".switchButton");
showcontent(1);
buttons.forEach((el, index) => {
  el.addEventListener('click', (e) => {
    showcontent(index);
  });
});
function showcontent(a){
    switch (a) {
        case 0:
            projeto.forEach(el => el.classList.remove('hidden'));
            dashboard.forEach(el => el.classList.add('hidden'));
            buttons[a].classList.add('selected')
            buttons[1].classList.remove('selected')
            break;
        case 1:
            dashboard.forEach(el => el.classList.remove('hidden'));
            projeto.forEach(el => el.classList.add('hidden'));
            buttons[a].classList.add('selected')
            buttons[0].classList.remove('selected')
            break;
        default:
            break;
    }
};