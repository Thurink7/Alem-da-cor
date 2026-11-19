# ALÉM DA COR (React + Vite + TypeScript + GSAP)

    npm install
    npm run dev       # desenvolvimento
    npm run build     # confere os tipos e gera dist/
    npm run preview   # serve o build

Estrutura
- src/chapters: Introduction, History, Structure, Present, Resistance, Future, Epilogue (um por capítulo; cada um tem seu gsap.context)
- src/components: CinematicVideo, Navigation, ProgressBar, ChapterIndicator, AnimatedText, Chapter
- src/hooks: useGsapScope (context + cleanup), useReducedMotion
- src/animations: register (plugins) e pinned (timeline fixa com scrub)
- src/data: textos, dados e metadados dos capítulos (chapters.ts) e caminhos de mídia (media.ts)
- src/styles/global.css: estilos (mesmo CSS da versão em HTML)
- public/videos: capitulo1.mp4 a capitulo6.mp4 (nomes originais)
- public/images: djamila.jpg e posters/ (imagem de reserva de cada vídeo)

Dados: confira os números (Censo 2022 e Atlas da Violência 2023) nas fontes antes de publicar.
