importScripts('./app/worker/config.js');

self.eval = null;

self.addEventListener('install', function(event){
  self.skipWaiting();
});

self.addEventListener('activate', function(event) {
  self.skipWaiting();
});

self.onfetch = function(event) {

  if(event.request.method !== 'GET'){
    return;
  }

  let req,integ;


  if(
    event.request.url.match(ORIGIN +'/index.html') ||
    event.request.url.match(ORIGIN +'/#/')
  ){

    return event.respondWith(new Response(BASE_PAGE, {
      status:200,
      statusText: 'ok',
      url: ORIGIN +'/index.html',
      headers: Object.assign({
        "Content-Type": "text/html; charset=utf-8",
        "Content-Language": "en-US",
        "Content-Length": BASE_HTML.length,
        "Content-Security-Policy": CSP,
        "Date": new Date().toUTCString(),
        //"Digest": "sha-512="+ digest.index,
        'Expect-CT': EXPECT_CT,
        "Feature-Policy": FP,
        "NEL": NEL,
        'Report-To': REPORT_TO
      },SEC_HEAD)
    }))
  } else if(STATIC_FILES.indexOf(event.request.url) !== -1){

    req = new Request(event.request.url , {
      bodyUsed: event.request.bodyUsed,
      cache: "reload",
      credentials: "omit",
      mode: "same-origin",
      destination: event.request.destination,
      headers: event.request.headers,
  //    integrity: integ,
      isHistoryNavigation: false,
      keepalive: false,
      method: event.request.method,
      redirect: "error",
      referrerPolicy: "no-referrer",
      signal: event.request.signal,
      status: 200
    });

  } else {
    req = event.request;
  }

  event.respondWith(
    fetch(req).then(function(response) {
      let ct = response.headers.get("Content-Type"),
      res;
      if (response.status > 199 && response.status < 400) {
        if(ct === 'text/javascript'){
          ct = 'application/javascript'
        }

        res = new Response(response.body, {
          status:200,
          statusText: 'ok',
          headers: Object.assign({
            "Content-Type": ct,
            "Date": new Date().toUTCString(),
            "ETag": response.headers.get("ETag")
          },SEC_HEAD)
        })
      } else {
        res = response
      }
      return res;
    })
  );
}

self.onmessage = function(evt){

  if (evt.data.type === 'update'){
    console.log('%cService-worker: %conline', 'color:cyan', 'color:lime');
    console.log('%cService-worker: %cchecking for updates', 'color:cyan', 'color:lime');
    self.registration.update().then(function(data){
      if(data.installing !== null){
        self.skipWaiting();
        return evt.source.postMessage({type: 'update', sel:true});
      }
      return evt.source.postMessage({type: 'update'});
    });
  }
}
