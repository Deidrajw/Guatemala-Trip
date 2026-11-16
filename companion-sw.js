/* Guatemala Trip Companion — same-origin HTML offline cache. Deploy next to index.html. */
const CACHE='guatemala-companion-briefing-v1';
self.addEventListener('install',event=>{event.waitUntil(caches.open(CACHE).then(async cache=>{
 try{await cache.add('./');}catch(e){}try{await cache.add('./index.html');}catch(e){}
}));self.skipWaiting();});
self.addEventListener('activate',event=>{event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('guatemala-companion-')&&k!==CACHE).map(k=>caches.delete(k)))));self.clients.claim();});
self.addEventListener('fetch',event=>{
 const request=event.request;
 if(request.method!=='GET'||new URL(request.url).origin!==self.location.origin)return;
 if(request.mode==='navigate'){
   event.respondWith(fetch(request).then(res=>{if(res.ok){const clone=res.clone();caches.open(CACHE).then(c=>c.put(request,clone));}return res;}).catch(async()=> (await caches.match(request)) || (await caches.match('./')) || (await caches.match('./index.html')) || Response.error()));
 }
});