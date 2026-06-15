const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/swiper-react-B-_u4D18.js","assets/framer-CkJ5n_h6.js","assets/rolldown-runtime-Dq6TatWD.js","assets/swiper-B1J_SXbq.js","assets/swiper-DZgZZ8jJ.css","assets/modules-QBzBLxm9.js","assets/swiper-DUBv8B3P.js","assets/pagination-C99Wlph2.js","assets/navigation-CfwqHDWX.js"])))=>i.map(i=>d[i]);
import{a as x}from"./rolldown-runtime-Dq6TatWD.js";import{i as v,r as g,t as _}from"./framer-CkJ5n_h6.js";import{a as y,t as l}from"./index-B_EGo6UV.js";import{t as j}from"./hoc-BLdwgNm3.js";var s=x(v()),e=x(g()),N=t=>{if(!t)return"X";const r=t.split(" ");return r.length>=2?(r[0][0]+r[1][0]).toUpperCase():t.substring(0,2).toUpperCase()},m=(0,s.memo)(({testimonial:t,name:r,designation:n,company:a})=>(0,e.jsxs)("div",{className:"relative w-full max-w-[800px] mx-auto bg-[#0F0F15] border border-white/[0.08] rounded-2xl p-8 md:p-10 flex flex-col justify-center items-center text-center overflow-hidden group hover:border-cyan-500/30 transition-colors duration-500 shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-10 select-none cursor-grab active:cursor-grabbing",children:[(0,e.jsx)("div",{className:"absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none"}),(0,e.jsx)("div",{className:"absolute top-0 left-1/2 -translate-x-1/2 w-[150%] h-[150px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-500/10 via-transparent to-transparent opacity-50 pointer-events-none"}),(0,e.jsx)("svg",{className:"absolute top-4 left-4 md:top-8 md:left-8 w-16 h-16 md:w-24 md:h-24 text-white/[0.02] group-hover:text-cyan-500/[0.05] transition-colors duration-500 transform -scale-x-100 -rotate-6 pointer-events-none",fill:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true",children:(0,e.jsx)("path",{d:"M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"})}),(0,e.jsx)("div",{className:"relative z-10 w-full mb-8 mt-2 pointer-events-none",children:(0,e.jsxs)("p",{className:"text-gray-200 text-base md:text-xl font-light leading-relaxed tracking-wide italic",children:['"',t,'"']})}),(0,e.jsxs)("div",{className:"relative z-10 flex items-center justify-center gap-4 bg-white/5 border border-white/10 pr-6 pl-2 py-2 rounded-full backdrop-blur-sm pointer-events-none",children:[(0,e.jsx)("div",{className:"w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-cyan-500/20 to-black border border-cyan-500/30 flex items-center justify-center shadow-inner shrink-0",children:(0,e.jsx)("span",{className:"text-cyan-400 font-tech font-bold text-sm md:text-base",children:N(r)})}),(0,e.jsxs)("div",{className:"flex flex-col text-left",children:[(0,e.jsx)("p",{className:"text-white font-bold text-sm md:text-base font-tech uppercase tracking-widest leading-none mb-1",children:r}),(0,e.jsxs)("p",{className:"text-gray-400 text-[10px] md:text-xs font-mono uppercase tracking-wider leading-none",children:[n," ",(0,e.jsx)("span",{className:"text-cyan-500 mx-1",children:"@"})," ",a]})]})]})]}));m.displayName="FeedbackCard";var k=(0,s.lazy)(()=>Promise.all([l(()=>import("./swiper-react-B-_u4D18.js"),__vite__mapDeps([0,1,2,3,4])),l(()=>import("./modules-QBzBLxm9.js"),__vite__mapDeps([5,3,1,2,4])),l(()=>import("./swiper-DUBv8B3P.js"),__vite__mapDeps([6,3,1,2,4])),l(()=>import("./pagination-C99Wlph2.js"),__vite__mapDeps([7,3,1,2,4])),l(()=>import("./navigation-CfwqHDWX.js"),__vite__mapDeps([8,3,1,2,4]))]).then(([t,r])=>{const{Swiper:n,SwiperSlide:a}=t,{Pagination:i,Autoplay:d,Navigation:f,Mousewheel:h}=r;return{default:function({testimonials:b}){const u=(0,s.useRef)(null);return(0,s.useEffect)(()=>{const o=u.current;if(!o)return;const c=new IntersectionObserver(([w])=>{const p=o.swiper;p&&(w.isIntersecting?p.autoplay.start():p.autoplay.stop())},{threshold:.2});return c.observe(o),()=>c.disconnect()},[]),(0,e.jsx)(n,{ref:u,modules:[i,d,f,h],navigation:!0,grabCursor:!0,allowTouchMove:!0,mousewheel:{forceToAxis:!0,releaseOnEdges:!0},spaceBetween:40,slidesPerView:1,loop:!0,keyboard:{enabled:!1},cssMode:!1,autoplay:{delay:6e3,disableOnInteraction:!0,pauseOnMouseEnter:!0},pagination:{clickable:!0},className:"w-full !px-12 md:!px-16",style:{touchAction:"pan-y"},children:b.map((o,c)=>(0,e.jsx)(a,{className:"pb-12 pt-4",children:(0,e.jsx)(m,{...o})},c))})}}})),E=()=>{const t=(0,s.useRef)(null),[r,n]=(0,s.useState)(!1);return(0,s.useEffect)(()=>{const a=t.current;if(!a)return;const i=new IntersectionObserver(([d])=>{d.isIntersecting&&(n(!0),i.disconnect())},{rootMargin:"200px"});return i.observe(a),()=>i.disconnect()},[]),(0,e.jsxs)("div",{className:"relative w-full pb-10",ref:t,style:{pointerEvents:"auto"},children:[(0,e.jsx)(_.div,{initial:{opacity:0,y:-20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5},className:"mb-10 w-full flex justify-center",children:(0,e.jsxs)("div",{className:"flex items-center justify-center gap-3 md:gap-6 flex-nowrap w-full px-4",children:[(0,e.jsx)("div",{className:"hidden sm:block w-8 md:w-12 h-1 shrink-0 bg-cyan-500 shadow-[0_0_10px_#00f0ff]"}),(0,e.jsxs)("h2",{className:"text-2xl sm:text-3xl md:text-4xl font-bold text-white font-tech tracking-wider uppercase text-center shrink",children:["PROFESSIONAL ",(0,e.jsx)("span",{className:"text-cyan-500",children:"REFERENCES"})]}),(0,e.jsx)("div",{className:"hidden sm:block w-8 md:w-12 h-1 shrink-0 bg-cyan-500 shadow-[0_0_10px_#00f0ff]"})]})}),(0,e.jsx)("div",{className:"w-full px-0 md:px-4 max-w-6xl mx-auto",style:{pointerEvents:"auto"},children:r?(0,e.jsx)(s.Suspense,{fallback:(0,e.jsxs)("div",{className:"w-full h-[250px] border border-white/10 rounded-2xl flex flex-col items-center justify-center gap-4 bg-[#0F0F15]",children:[(0,e.jsx)("div",{className:"w-4 h-4 border-2 border-cyan-500 border-t-transparent rounded-full animate-spin"}),(0,e.jsx)("span",{className:"text-xs font-mono text-cyan-500/50 tracking-widest uppercase",children:"Fetching Data..."})]}),children:(0,e.jsx)(k,{testimonials:y})}):(0,e.jsx)("div",{className:"w-full h-[250px]"})}),(0,e.jsx)("style",{children:`
        /* Pagination (Petits ronds de progression) */
        .swiper-pagination-bullet {
          background: #333; 
          opacity: 1;
          transition: all 0.3s ease;
          width: 8px; 
          height: 8px;
          border-radius: 9999px;
        }
        .swiper-pagination-bullet-active {
          background: #00f0ff !important;
          box-shadow: 0 0 10px #00f0ff; 
          width: 24px;
        }
        .swiper-horizontal > .swiper-pagination-bullets, .swiper-pagination-bullets.swiper-pagination-horizontal {
          bottom: 0px;
        }

        /* ── FLÈCHES MINIMALISTES ── */
        .swiper-button-next, .swiper-button-prev {
          color: rgba(255, 255, 255, 0.2); /* Blanc très discret au repos */
          background: transparent !important;
          border: none !important;
          box-shadow: none !important;
          transition: all 0.3s ease;
        }
        .swiper-button-next::after, .swiper-button-prev::after {
          font-size: 24px !important; /* Flèche un peu plus grande pour compenser l'absence du cercle */
          font-weight: 900;
        }
        
        /* Effet au survol : Devient Cyan et grossit très légèrement */
        .swiper-button-next:hover, .swiper-button-prev:hover {
          color: #00f0ff !important;
          transform: scale(1.15);
          background: transparent !important;
        }
        
        @media (max-width: 768px) {
          .swiper-button-next, .swiper-button-prev {
            display: none;
          }
          .swiper {
            padding-left: 0 !important;
            padding-right: 0 !important;
          }
        }
      `})]})},R=j(E,"feedbacks");export{R as default};
