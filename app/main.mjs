const sw = navigator.serviceWorker;

window.history.pushState({},"", 'chrome-extension://ibgldmpgejkmgbilmkmfdfcckhfjnido/#/');

sw.addEventListener('message', function(evt){
  if(evt.data.type === 'update'){
    if(evt.data.sel){
      location.reload()
    } else {
      console.log('%cService-worker: %cup to date', 'color:cyan', 'color:lime');
    }
  }
});

sw.ready.then(function(reg){
  reg.active.postMessage({type: 'update'});
});


import { router, x } from './modules/jsnode.mjs';

router.on('/dashboard', function(request, stream){
  stream.render('dashboard', function(err){
    if(err){return stream.renderErr();}
  })
})
.on('/error', function(request, stream) {
  stream.render('error', request.data, function(err){
    if(err){return console.error(err)}
  })
})
.init().listen().validate();
