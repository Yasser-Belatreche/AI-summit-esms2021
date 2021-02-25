// -------------------- responsive nav bar ---------------------------
const hamburger = document.querySelector('.nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.nav-bar .nav-list ul li a');
const header = document.querySelector('#nav-bar');
const day1 = document.querySelector('#program .program .timing .days .day1');
const day2 = document.querySelector('#program .program .timing .days .day2');
const day1_timing = document.querySelector('#program .program .timing .day-1');
const day2_timing = document.querySelector('#program .program .timing .day-2');


hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});
menu_item.forEach(item => {
    item.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobile_menu.classList.toggle('active');
    });
});
// -------------------- end responsive nav bar ---------------------------



// -------------------- Dark mode -------------------------------
const dark_mode_btn = document.querySelector('#nav-bar .nav-bar .nav-list ul span');
const nav_bar = document.querySelector('#nav-bar');
const nav_bar_hamburger = document.querySelector('#nav-bar .nav-bar .nav-list .hamburger');
const home = document.querySelector('#home');
const about = document.querySelector('#about');
const speakers = document.querySelector('#speakers');
const program = document.querySelector('#program');
const sponsors = document.querySelector('#sponsors');
const contact = document.querySelector('#contact');
const html = document.querySelector('html');

dark_mode_btn.addEventListener('click', () => {
    dark_mode_btn.classList.toggle('active');
    nav_bar.classList.toggle('active');
    nav_bar_hamburger.classList.toggle('activ');
    home.classList.toggle('active');
    about.classList.toggle('active');
    speakers.classList.toggle('active');
    program.classList.toggle('active');
    sponsors.classList.toggle('active');
    contact.classList.toggle('active');
    html.classList.toggle('active');
});

// -------------------- end Dark mode -------------------------------




// --------------------- speakers slider ---------------------------
const speaker = document.querySelector('#speakers .speakers .conference-speakers ul');
const current_speaker = Array.from(speaker.children);
const nextBtn = document.querySelector('#speakers .speakers .conference-speakers span.right-control');
const prevBtn = document.querySelector('#speakers .speakers .conference-speakers span.left-control');
const slide_width = current_speaker[0].getBoundingClientRect().width;
const dotsNav = document.querySelector('#speakers .speakers .conference-speakers .dots');
const dots = Array.from(dotsNav.children);


const moveToSlide = (spaeaker, current_slide, target_slide) => {
    speaker.style.transform = 'translateX(-' + target_slide.style.left + ')';
    current_slide.classList.remove('current-slide');
    target_slide.classList.add('current-slide');
};

const update_dots = (current_dot, targetDot) => {
    current_dot.classList.remove('current-slide');
    targetDot.classList.add('current-slide');
};

const setSlidePosition = (slide, index) => {
    slide.style.left = slide_width * index + 'px';
};
current_speaker.forEach(setSlidePosition);

const hideShowArrows = (current_speaker, prevBtn, nextBtn, targetIndex) => {
    if (targetIndex === 0) {
        prevBtn.classList.add('is-hidden');
        nextBtn.classList.remove('is-hidden');
    } else if (targetIndex === current_speaker.length - 1) {
        prevBtn.classList.remove('is-hidden');
        nextBtn.classList.add('is-hidden');
    } else {
        prevBtn.classList.remove('is-hidden');
        nextBtn.classList.remove('is-hidden');
    }
};



nextBtn.addEventListener('click', e => {
    const current_slide = document.querySelector('.current-slide');
    const next_slide = current_slide.nextElementSibling;
    const current_dot = dotsNav.querySelector('.current-slide');
    const nextDot = current_dot.nextElementSibling;
    const nextIndex = current_speaker.findIndex(slide => slide === next_slide);

    moveToSlide(speaker, current_slide, next_slide);
    update_dots(current_dot, nextDot);
    hideShowArrows(current_speaker, prevBtn, nextBtn, nextIndex);
});

prevBtn.addEventListener('click', e => {
    const current_slide = document.querySelector('.current-slide');
    const prev_slide = current_slide.previousElementSibling;
    const current_dot = dotsNav.querySelector('.current-slide');
    const prevDot = current_dot.previousElementSibling;
    const prevIndex = current_speaker.findIndex(slide => slide === prev_slide);

    moveToSlide(speaker, current_slide, prev_slide);
    update_dots(current_dot, prevDot);
    hideShowArrows(current_speaker, prevBtn, nextBtn, prevIndex);
});

dotsNav.addEventListener('click', e => {
    const targetDot = e.target.closest('span');

    if (!targetDot) {
        return;
    }

    const current_slide = speaker.querySelector('.current-slide');
    const current_dot = dotsNav.querySelector('.current-slide');
    const targetIndex = dots.findIndex(dot => dot === targetDot);
    const targetSlide = current_speaker[targetIndex];

    moveToSlide(speaker, current_slide, targetSlide);
    update_dots(current_dot, targetDot);
    hideShowArrows(current_speaker, prevBtn, nextBtn, targetIndex);
});

// --------------- end speakers slider----------------