const base = import.meta.env.BASE_URL;
export const asset = (path: string) => `${base}${path}`;
export const videoSrc = (n: number) => asset(`videos/capitulo${n}.mp4`);
export const posterSrc = (n: number) => asset(`images/posters/p${n}.jpg`);
export const djamilaSrc = asset('images/djamila.jpg');
