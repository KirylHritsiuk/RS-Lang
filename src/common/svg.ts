export const enum svg {
    next = '<svg viewBox="0 0 24 24"><path d="M10 17l5-5-5-5v10z"></path></svg>',
    prev = '<svg viewBox="0 0 24 24"><path d="M14 7l-5 5 5 5V7z"></path></svg>',
    chevron_right = '<svg xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"/></svg>',
    chevron_left = '<svg xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>',
    chevron_double_right = '<svg xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" /></svg>',
    chevron_double_left = '<svg xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5" /></svg>',
    play = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
    width="1.5em" height="1.5em">
    <path d="M2,6A2,2,0,0,0,0,8v8a2,2,0,0,0,2,2H4.8L12,23.977V.017L4.8,6Z"/>
    <path d="M20,12a5.006,5.006,0,0,0-5-5H14V9h1a3,3,0,0,1,0,6H14v2h1A5.006,5.006,0,0,0,20,12Z"/>
    <path d="M15,3H14V5h1a7,7,0,0,1,0,14H14v2h1A9,9,0,0,0,15,3Z"/>
    </svg>`,
    stop = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1.5em" height="1.5em"><rect width="24" height="24"/></svg>',
}
export const svgMethods = {
  results: (text: string) => `<svg class="circular-result" viewBox="0 0 100 100" data-test-id="CircularProgressbar"><path class="CircularProgressbar-trail" d="M 50,50 m 0,-46 a 46,46 0 1 1 0,92 a 46,46 0 1 1 0,-92" stroke-width="8" fill-opacity="0"style="stroke: rgb(220, 220, 220); stroke-dasharray: 289.027px, 289.027px; stroke-dashoffset: 0px;"></path>
        <path class="audio-progress-path" d="M 50,50 m 0,-46 a 46,46 0 1 1 0,92 a 46,46 0 1 1 0,-92" stroke-width="8" fill-opacity="0" style="stroke: rgb(242, 105, 92); stroke-dasharray: 289.027px, 289.027px; stroke-dashoffset: 289.027px;"></path><text class="audio-progress-text" x="50" y="50" style="fill: rgb(242, 105, 92);">${text}</text></svg>`,
  cross: (id: string) => `<svg class="cross" id="${id}" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></svg>`,
  audio: (id: string, cls: string) => `<svg class="${cls}" data-word="${id}" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path data-word="${id}" d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"></path></svg>`,

};
