const projeto = document.querySelectorAll('#projectSection');
const dashboard = document.querySelectorAll('#dashboardSection');
const buttons = document.querySelectorAll(".switchButton");
const historico = document.getElementById('historico');
showcontent(0);
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
function goTo(a){
    let x = document.getElementById(a);
    let y = document.getElementById('projectSection')
    let z = document.getElementById('dashboardSection')
    if(y.contains(x)){
    showcontent(0);
    x.scrollIntoView({behavior:'smooth'});
    }else if(z.contains(x)){
    showcontent(1);
    x.scrollIntoView({behavior:'smooth'});
    }else{
    x.scrollIntoView({behavior:'smooth'});
    }
}
function createH(a,b){
    let x = document.createElement('div')
    x.classList.add('alertahistorico')
    x.innerHTML = '<h3>' + b +'</h3><p>' + a + '</p>';
    historico.appendChild(x);
}
createH('informações',"< sensor_id >");
createH('informações',"< sensor_id >");
createH('informações',"< sensor_id >");
