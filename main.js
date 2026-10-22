document.querySelectorAll('.burger').forEach(b=>b.onclick=()=>document.querySelector('nav').classList.toggle('open'));
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
document.querySelectorAll('.amt').forEach(a=>a.onclick=()=>{const box=a.closest('.dstrip,.give')||document;box.querySelectorAll('.amt').forEach(x=>x.classList.remove('sel'));a.classList.add('sel');const i=box.querySelector('input[type=number]');if(i)i.value=a.dataset.v});
document.querySelectorAll('[data-count]').forEach(el=>{const t=+el.dataset.count;let n=0;const st=Math.max(1,Math.ceil(t/60));
 const o=new IntersectionObserver(es=>{if(es[0].isIntersecting){const iv=setInterval(()=>{n+=st;if(n>=t){n=t;clearInterval(iv)}el.textContent=n.toLocaleString()+(el.dataset.suf||'')},25);o.disconnect()}});o.observe(el)});
function goDonate(e,id){e.preventDefault();const v=(document.getElementById(id||'amount')||{}).value||'';location.href='donate.html'+(v?'?amt='+v:'')}
