(function(){
var WA='918019237691';
function $(i){return document.getElementById(i)}
var hd=$('hd'),pg=$('pg');
addEventListener('scroll',function(){hd.classList.toggle('sc',scrollY>8);var h=document.documentElement;pg.style.width=(h.scrollTop/Math.max(1,h.scrollHeight-h.clientHeight)*100)+'%'},{passive:true});
var mb=$('mb'),mn=$('mn');
mb.onclick=function(){var o=mn.classList.toggle('open');mb.setAttribute('aria-expanded',o)};
mn.querySelectorAll('a').forEach(function(a){a.onclick=function(){mn.classList.remove('open');mb.setAttribute('aria-expanded',false)}});
function count(b){var n=+b.dataset.n,t=0,iv=setInterval(function(){t+=n/40;if(t>=n){t=n;clearInterval(iv)}b.textContent=Math.round(t).toLocaleString('en-IN')+(b.dataset.s||'')},30)}
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(!e.isIntersecting)return;var t=e.target;t.classList.add('in');io.unobserve(t);t.querySelectorAll('[data-n]').forEach(count);if(t.hasAttribute('data-n'))count(t)})},{threshold:.12});
document.querySelectorAll('.rv').forEach(function(x){io.observe(x)});
/* 360 tours: edit this list to add more tours */
var TOURS=[
['Cream Centre, RA Puram','https://www.google.com/maps/embed?pb=!4v1793050645661!6m8!1m7!1sCAoSLEFGMVFpcE1sNXdoSXpnUVNTczdfM2lXZGdlVUlfcjFBSGZ4amVnVDBiV3Fp!2m2!1d13.02682881325654!2d80.25480294180397!3f305.67!4f-11.61!5f0.4000000000000002'],
['Khals Foot World, Chennai','https://www.google.com/maps/embed?pb=!4v1793050776743!6m8!1m7!1sCAoSF0NJSE0wb2dLRUlDQWdJQzVsX2lReHdF!2m2!1d13.07014434891947!2d80.22439864827064!3f358.1937290006463!4f-5.488596969566487!5f0.7820865974627469'],
['Hotel Southern Suites, Tirupati','https://www.google.com/maps/embed?pb=!4v1793050850955!6m8!1m7!1sCAoSHENJQUJJaEJvOS1Kc2dxOWYtZ1kzdzRJMW9iLTI.!2m2!1d13.62358846073007!2d79.43259331573955!3f23.992711546249886!4f-6.497351994643566!5f0.7820865974627469'],
['BMW KUN Exclusive, Chennai','https://www.google.com/maps/embed?pb=!4v1793280555723!6m8!1m7!1sCAoSF0NJSE0wb2dLRUlDQWdJQzBzcGFsMUFF!2m2!1d12.98558331687804!2d80.17402816711072!3f1.17!4f-4.6200000000000045!5f0.5970117501821992'],
['Yamaha Motors Showroom','https://www.google.com/maps/embed?pb=!4v1793280860002!6m8!1m7!1sCAoSF0NJSE0wb2dLRUlDQWdJRGZ3THlhd2dF!2m2!1d16.70785648519396!2d74.26431009758464!3f0.18011157944465594!4f2.0126076959018775!5f0.7820865974627469'],
['Mahindra Horizon Motors','https://www.google.com/maps/embed?pb=!4v1793281025951!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJQ1cyclhyS1E.!2m2!1d9.646128872216298!2d76.54709187378867!3f4.35!4f-4.609999999999999!5f0.5970117501821992'],
['Croma, Mount Road','https://www.google.com/maps/embed?pb=!4v1793281236268!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJQzQtc0doUmc.!2m2!1d13.06660818479913!2d80.268826346175!3f183.83179995240675!4f-1.0468121313070498!5f0.7820865974627469'],
['Satya Paul','https://www.google.com/maps/embed?pb=!4v1793281265230!6m8!1m7!1sCAoSK0FGMVFpcE1iaGdXc2FpXzNzSkY2MEpKcWVSMzVSMmNzSmtPMEQ3YUY0bUE.!2m2!1d12.9913006830489!2d80.21662946725777!3f335.19!4f5.3799999999999955!5f0.4000000000000002'],
['Decathlon Sports, OMR Perungudi','https://www.google.com/maps/embed?pb=!4v1793281295338!6m8!1m7!1sCAoSF0NJSE0wb2dLRUlDQWdJQ0t2b2FobHdF!2m2!1d12.96578705439505!2d80.24812374360233!3f12.5!4f-1.0499999999999972!5f0.4000000000000002'],
['Dhiya Fertility and Maternity Center','https://www.google.com/maps/embed?pb=!4v1793281708632!6m8!1m7!1sCAoSHENJQUJJaEExN3lkTGNlWU9qQzl5Sl9wdTBlNG4.!2m2!1d12.96574872941111!2d80.24723332561005!3f268.9399975148908!4f-0.3912981091839356!5f0.4000000000000002']];
var tf=$('tf'),tt=$('tt'),fs=$('fs');
if(tf&&tt){function go(i){tf.src=TOURS[i][1];if(fs)fs.href=TOURS[i][1];tt.querySelectorAll('button').forEach(function(b,j){b.className=j==i?'on':'';b.setAttribute('aria-selected',j==i)})}
TOURS.forEach(function(t,i){var b=document.createElement('button');b.type='button';b.setAttribute('role','tab');b.textContent=t[0];b.onclick=function(){go(i)};tt.appendChild(b)});go(0)}
document.querySelectorAll('[data-tour]').forEach(function(a){var i=+a.dataset.tour;a.href=TOURS[i][1];a.target='_blank';a.rel='noopener'});
var hf=$('hf');if(hf)hf.src=TOURS[0][1];
/* service links preselect the contact form */
document.querySelectorAll('[data-s]').forEach(function(a){a.addEventListener('click',function(){var s=document.querySelector('#cf select[name=s]');if(s)for(var i=0;i<s.options.length;i++)if(s.options[i].text==a.dataset.s)s.selectedIndex=i})});
/* forms send to WhatsApp */
var cf=$('cf');
if(cf)cf.addEventListener('submit',function(e){e.preventDefault();var t=cf.dataset.intro+'\n';cf.querySelectorAll('input,select,textarea').forEach(function(f){var l=f.closest('label');if(l&&f.value)t+=l.firstChild.textContent.trim()+': '+f.value+'\n'});window.open('https://wa.me/'+WA+'?text='+encodeURIComponent(t),'_blank','noopener')});
var cp=$('cp');if(cp)cp.onclick=function(){if(navigator.clipboard)navigator.clipboard.writeText('info@skorpix.co.in');cp.textContent='Copied'};
/* REVIEWS: each entry stays hidden until show:true. Switch one on only after the client has read and approved the exact words. */
var REVIEWS=[
{show:false,q:"We wanted customers to see the restaurant before walking in. Skorpix shot the 360° tour quickly and it now shows on our Google listing. Easy to work with.",n:"Gopinath",r:"Cream Centre, RA Puram, Chennai"},
{show:false,q:"We run hotels in several cities and every Google listing had its own problems. Skorpix sorted out the verification issues and keeps things consistent. They respond quickly whenever we call.",n:"Srikanth Mirasi",r:"Hotel Southern Suites Group"},
{show:false,q:"Day to day I deal with the listings across our hotels. Skorpix handles the updates and follow-ups, so I don’t have to chase Google myself.",n:"Jansi Mirasi",r:"Hotel Southern Suites Group"},
{show:false,q:"Our studio looks far more professional on Google now, and new students can see the space before they come. Skorpix was patient and helpful throughout.",n:"Suma",r:"Aura Yoga and Wellness, Mysore"},
{show:false,q:"Patients like to see a clinic before they book. Skorpix helped us present ours properly on Google. Professional and punctual.",n:"Dr. Besvraj",r:"Raj Dental Surgery and Implant Clinic, Pune"}
].filter(function(x){return x.show});
var l=$('rvl'),s=$('reviews');
if(s){if(!REVIEWS.length){s.style.display='none'}else{var cl=['#4285F4','#EA4335','#F9AB00','#34A853'];
REVIEWS.forEach(function(x,i){var c=document.createElement('article');c.className='card rc rv';c.style.setProperty('--d',(i%3*.08)+'s');
c.innerHTML='<svg class="rq" viewBox="0 0 24 24" aria-hidden="true"><path d="M9 7H5v6h4v4H5M19 7h-4v6h4v4h-4"/></svg><p></p><div class="rf"><i class="av"></i><div><b></b><small></small></div></div>';
c.querySelector('p').textContent='“'+x.q+'”';var a=c.querySelector('.av');a.textContent=x.n.replace('Dr. ','').charAt(0);a.style.background=cl[i%4];c.querySelector('b').textContent=x.n;c.querySelector('small').textContent=x.r;l.appendChild(c);io.observe(c)})}}
/* campaign gallery: filter and lightbox */
var gf=document.querySelectorAll('.gf button'),gi=document.querySelectorAll('.gi');
gf.forEach(function(b){b.onclick=function(){gf.forEach(function(x){x.className=''});b.className='on';gi.forEach(function(g){g.hidden=!(b.dataset.f=='all'||g.dataset.c==b.dataset.f)})}});
if(gi.length){var lb=document.createElement('dialog');lb.id='lb';lb.innerHTML='<img alt=""><p></p><form method="dialog"><button class="btn fill sm">Close</button></form>';document.body.appendChild(lb);
gi.forEach(function(g){g.onclick=function(){var im=g.querySelector('img');lb.querySelector('img').src=im.src;lb.querySelector('img').alt=im.alt;lb.querySelector('p').textContent=g.dataset.t;lb.showModal()}});
lb.addEventListener('click',function(e){if(e.target===lb)lb.close()})}
})();
