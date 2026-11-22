(() => {
  // Direct homepage booking CTAs to the real Google Form after its URL is configured.
  const formUrl = (window.SIANGRONG_BOOKING_FORM_URL || '').trim();
  const validFormUrl = /^https:\/\/(?:docs\.google\.com\/forms\/|forms\.gle\/)/i.test(formUrl);
  if(validFormUrl){
    document.querySelectorAll('a[data-booking-link]').forEach(a => {
      a.href = formUrl;
      a.target = '_self';
      a.rel = 'noopener noreferrer';
    });
    const formBtn = document.querySelector('[data-booking-button]');
    if(formBtn){ formBtn.href = formUrl; formBtn.target = '_self'; formBtn.textContent='前往 Google 預約表單 ↗'; }
    const status = document.querySelector('#form-status');
    if(status) status.textContent = '將開啟 Google 預約表單。送出後，官方會再聯繫確認時段及後續安排。';
  }

  const toggle=document.querySelector('.menu-toggle');
  const menu=document.querySelector('.mobile-menu');
  if(toggle && menu){
    const close=()=>{menu.classList.remove('open');toggle.setAttribute('aria-expanded','false');toggle.setAttribute('aria-label','開啟導覽選單')};
    toggle.addEventListener('click',()=>{const active=menu.classList.toggle('open');toggle.setAttribute('aria-expanded',String(active));toggle.setAttribute('aria-label',active?'關閉導覽選單':'開啟導覽選單')});
    menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',close));
    document.addEventListener('keydown',e=>{if(e.key==='Escape')close()});
  }
  const sticky=document.querySelector('.sticky-mobile');
  if(sticky){
    const update=()=>{sticky.classList.toggle('visible',window.scrollY>Math.max(450,window.innerHeight*.75))};
    window.addEventListener('scroll',update,{passive:true}); update();
  }
  const dialog=document.querySelector('#testimonial-dialog');
  if(dialog){
    document.querySelectorAll('[data-expand-testimonial]').forEach(b=>b.addEventListener('click',()=>{
      const img=b.querySelector('img');
      dialog.querySelector('img').src=img.getAttribute('src'); dialog.querySelector('img').alt=img.alt;
      dialog.showModal();
    }));
    dialog.querySelector('.dialog-close').addEventListener('click',()=>dialog.close());
    dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close()});
  }
})();
