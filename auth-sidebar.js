(function() {
  // 1. Reusable Course Card Renderer
  function renderCourseCard(c, containerClasses = 'relative') {
    const defaultAvatars = [
      "assets/avatar-2.png",
      "assets/avatar-8.png",
      "assets/avatar-10.png",
      "assets/avatar-9.png"
    ];
    const avatars = c.avatars || defaultAvatars;
    const avatarList = avatars
      .map(src => `<img src="${src}" alt="" class="w-8 h-8 rounded-full object-cover -mr-2">`)
      .join('');

    return `
      <div class="${containerClasses} w-[373px] h-[384px] bg-white border border-gray-200 rounded-[24px] p-[15px_15px_21px] overflow-hidden">
        <div class="relative h-[195.14px] rounded-[12px] overflow-hidden bg-[#443131] mb-5">
          <img src="${c.img}" alt="${c.alt || ''}" class="w-full h-full object-cover">
          <div class="absolute left-3 bottom-3 flex gap-3">
            <span class="inline-flex items-center gap-1 px-3 py-1.5 rounded-[24px] text-xs font-medium bg-white/60 backdrop-blur-sm text-black700">${c.lessons || "17 Lessons"}</span>
            <span class="inline-flex items-center gap-1 px-3 py-1.5 rounded-[24px] text-xs font-medium bg-white/60 backdrop-blur-sm text-black700">${c.duration || "2 hours 16 mins"}</span>
            <span class="inline-flex items-center gap-1 px-3 py-1.5 rounded-[24px] text-xs font-medium bg-white/60 backdrop-blur-sm text-black700">${c.comments || "59 Comments"}</span>
          </div>
        </div>
        <div class="flex flex-col gap-4 max-w-[calc(100%-65px)]">
          <div>
            <p class="font-head font-semibold text-h-xs tracking-[-.2px] text-black">${c.title}</p>
            <p class="text-xs text-black700">by <a href="#" class="text-blue">${c.author || "purepearl studio"}</a></p>
          </div>
          <div class="flex items-center gap-3">
            <span class="inline-flex items-center gap-1 px-3 py-1.5 rounded-[24px] text-xs font-medium bg-gray-50 text-gray-700">
              <svg viewBox="0 0 24 24" class="w-5 h-5"><path fill="#4b4c53" d="M4 20h3v-6H4zm6.5 0h3V10h-3zM17 20h3V4h-3z"/></svg>${c.level || "Beginner"}
            </span>
            <div class="flex items-center">
              ${avatarList}
              <span class="w-8 h-8 rounded-full bg-black grid place-items-center text-xs font-bold text-white flex-shrink-0">${c.avatarCount || "26+"}</span>
            </div>
          </div>
          <div class="flex items-end font-head font-semibold text-h-xs tracking-[-.2px] text-blue">$${c.price || 25}<small class="font-body font-normal text-xs text-black700">/lifetime</small></div>
        </div>
        <div class="absolute right-4 top-[231px] flex items-center gap-1 text-l text-black700">
          ${c.rating || "4.5"} <svg viewBox="0 0 24 24" class="w-6 h-6"><path fill="#d4fb20" d="m12 17.27 6.18 3.73-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
        </div>
      </div>`;
  }

  // 2. Render Cards with Exact Positions
  const card1 = renderCourseCard({ title: "Build Digital Asset", img: "assets/course_code2.jpg" }, "relative");
  const card2 = renderCourseCard({ title: "the Power of Big Data", img: "assets/course_code3.jpg" }, "absolute left-[111px] -top-[89px]");

  const sidebarContainer = document.getElementById('auth-sidebar');
  if (sidebarContainer) {
    sidebarContainer.innerHTML = `
      <div class="absolute left-[122px] top-[394px]">
        ${card1}
        ${card2}
      </div>

      <div class="absolute left-[348px] top-[740px] w-[258px] bg-lime/90 backdrop-blur-md rounded-[16px] p-4 flex flex-col gap-2 text-gray-950">
        <div>
          <p class="text-m font-medium leading-tight">Happy Students</p>
          <p class="flex items-center gap-1 text-xs"><b class="font-bold">4.5</b>&nbsp;(240)<svg viewBox="0 0 24 24" class="w-4 h-4"><path fill="#003be2" d="m12 17.27 6.18 3.73-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg></p>
        </div>
        <div class="flex -space-x-4">
          <img src="assets/avatar-1.png" alt="" class="w-[43px] h-[43px] rounded-full object-cover">
          <img src="assets/avatar-2.png" alt="" class="w-[43px] h-[43px] rounded-full object-cover">
          <img src="assets/avatar-3.png" alt="" class="w-[43px] h-[43px] rounded-full object-cover">
          <img src="assets/avatar-4.png" alt="" class="w-[43px] h-[43px] rounded-full object-cover">
          <img src="assets/avatar-5.png" alt="" class="w-[43px] h-[43px] rounded-full object-cover">
          <img src="assets/avatar-6.png" alt="" class="w-[43px] h-[43px] rounded-full object-cover">
          <img src="assets/avatar-7.png" alt="" class="w-[43px] h-[43px] rounded-full object-cover">
          <span class="w-[43px] h-[43px] rounded-full bg-black grid place-items-center text-xs font-bold text-white">2K+</span>
        </div>
      </div>

      <img src="assets/ornament-1.png" alt="" class="absolute left-[507px] top-[626px] w-[175px] -scale-x-100 [rotate:-55deg]">
      <img src="assets/Cone-5.png" alt="" class="absolute left-[194px] top-[320px] w-[136px]">
      <img src="assets/Cone-4.png" alt="" class="absolute left-[131px] top-[712px] w-[158px]">
    `;
  }
})();