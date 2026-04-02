import{a as e}from"./rolldown-runtime-Cn8xt2Gj.js";import{i as t,r as n,t as r}from"./framer-BdCxU5d5.js";import{n as i,t as a}from"./react-vendor-D4RKqTGo.js";import{i as o}from"./index-CORiu6Pr.js";import{n as s,t as c}from"./motion-DPhy-P0H.js";import{n as l,t as u}from"./swiper-DSSlI_UO.js";var d=e(t()),f=e(n()),p=(0,d.memo)(({testimonial:e,name:t,designation:n,company:r})=>(0,f.jsxs)(`div`,{className:`relative w-full max-w-[800px] mx-auto min-h-[300px] bg-black/80 border border-cyan-500/30 p-8 md:p-12 flex flex-col justify-center items-center text-center group overflow-hidden`,children:[(0,f.jsx)(`div`,{className:`absolute inset-0 bg-[url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAIklEQVQIW2NkQAKrVq36zwjjgzj//v37zwjjgzj//v37zwQAHEMKYXBPBG0AAAAASUVORK5CYII=')] opacity-10 pointer-events-none`,"aria-hidden":`true`}),(0,f.jsx)(`div`,{className:`absolute top-0 left-0 w-full h-1 bg-cyan-500/50 shadow-[0_0_15px_#00f0ff] card-scanline pointer-events-none`,"aria-hidden":`true`}),(0,f.jsx)(`div`,{className:`absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyan-500 rounded-tl-sm`}),(0,f.jsx)(`div`,{className:`absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-cyan-500 rounded-tr-sm`}),(0,f.jsx)(`div`,{className:`absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-cyan-500 rounded-bl-sm`}),(0,f.jsx)(`div`,{className:`absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-cyan-500 rounded-br-sm`}),(0,f.jsxs)(`div`,{className:`absolute top-4 left-0 w-full flex justify-between px-6`,"aria-hidden":`true`,children:[(0,f.jsx)(`span`,{className:`text-[9px] font-mono text-cyan-500 tracking-widest bg-cyan-900/20 px-2 py-0.5 rounded border border-cyan-500/20`,children:`INCOMING_MSG_`}),(0,f.jsxs)(`div`,{className:`flex gap-1`,children:[(0,f.jsx)(`div`,{className:`w-1 h-1 bg-cyan-500 rounded-full animate-pulse`}),(0,f.jsx)(`div`,{className:`w-1 h-1 bg-cyan-500 rounded-full animate-pulse delay-75`}),(0,f.jsx)(`div`,{className:`w-1 h-1 bg-cyan-500 rounded-full animate-pulse delay-150`})]})]}),(0,f.jsx)(`div`,{className:`relative z-10 mt-6 mb-6`,children:(0,f.jsxs)(`p`,{className:`text-white text-lg md:text-2xl font-light leading-relaxed tracking-wide`,children:[`"`,e,`"`]})}),(0,f.jsxs)(`div`,{className:`relative z-10 border-t border-cyan-500/30 pt-4 w-full max-w-md`,children:[(0,f.jsx)(`p`,{className:`text-cyan-400 font-bold text-lg font-tech uppercase tracking-wider`,children:t}),(0,f.jsxs)(`p`,{className:`text-gray-500 text-xs font-mono mt-1 uppercase`,children:[`// `,n,` @ `,r]})]}),(0,f.jsx)(`div`,{className:`absolute bottom-2 w-full text-center`,"aria-hidden":`true`,children:(0,f.jsx)(`span`,{className:`text-[8px] text-cyan-500/40 font-mono tracking-[0.3em]`,children:`END_OF_TRANSMISSION`})})]}));p.displayName=`FeedbackCard`;var m=s(()=>{let e=(0,d.useRef)(null);return(0,d.useEffect)(()=>{let t=e.current;if(!t)return;let n=new IntersectionObserver(([e])=>{let n=t.swiper;n&&(e.isIntersecting?n.autoplay.start():n.autoplay.stop())},{threshold:.2});return n.observe(t),()=>n.disconnect()},[]),(0,f.jsxs)(`div`,{className:`relative w-full`,children:[(0,f.jsx)(`div`,{className:`text-center mb-12`,children:(0,f.jsxs)(r.div,{variants:c(),children:[(0,f.jsxs)(`h2`,{className:`text-3xl md:text-4xl font-bold text-white font-tech tracking-wider`,children:[`DOWNLOAD `,(0,f.jsx)(`span`,{className:`text-cyan-500`,children:`REFERENCES`})]}),(0,f.jsx)(`p`,{className:`text-cyan-500/60 text-sm font-mono tracking-widest uppercase mt-2`,children:`// Decrypted_Feedback`})]})}),(0,f.jsx)(`div`,{className:`w-full py-4 px-4 md:px-0 max-w-5xl mx-auto`,children:(0,f.jsx)(a,{ref:e,modules:[l,u],grabCursor:!0,spaceBetween:50,slidesPerView:1,loop:!0,keyboard:{enabled:!1},autoplay:{delay:6e3,disableOnInteraction:!0,pauseOnMouseEnter:!0},pagination:{clickable:!0},className:`w-full`,children:o.map((e,t)=>(0,f.jsx)(i,{className:`pb-12`,children:(0,f.jsx)(p,{...e})},t))})}),(0,f.jsx)(`style`,{children:`
        @keyframes card-scanline {
          0%   { transform: translateY(-100%); opacity: 0; }
          10%  { opacity: 0.5; }
          90%  { opacity: 0.5; }
          100% { transform: translateY(3000%); opacity: 0; }
        }
        .card-scanline {
          animation: card-scanline 4s linear infinite;
        }

        /* Swiper pagination — cyan theme */
        .swiper-pagination-bullet {
          background: #333;
          opacity: 1;
          border: 1px solid #00f0ff;
          width: 10px;
          height: 10px;
        }
        .swiper-pagination-bullet-active {
          background: #00f0ff !important;
          box-shadow: 0 0 10px #00f0ff;
          transform: scale(1.2);
        }
      `})]})},`feedbacks`);export{m as default};