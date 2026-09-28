const root=document.documentElement;
const themeButton=document.getElementById('themeToggle');
const saved=localStorage.getItem('naveen-theme');
if(saved) root.dataset.theme=saved;
function updateThemeIcon(){themeButton.textContent=root.dataset.theme==='light'?'☀':'☾'}
updateThemeIcon();
themeButton.addEventListener('click',()=>{root.dataset.theme=root.dataset.theme==='light'?'dark':'light';localStorage.setItem('naveen-theme',root.dataset.theme);updateThemeIcon()});
const menu=document.getElementById('menuToggle'),nav=document.getElementById('nav');
menu.addEventListener('click',()=>nav.classList.toggle('open'));
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
window.addEventListener('scroll',()=>{const max=document.documentElement.scrollHeight-innerHeight;document.getElementById('progress').style.width=(max>0?scrollY/max*100:0)+'%'});
document.getElementById('year').textContent=new Date().getFullYear();
