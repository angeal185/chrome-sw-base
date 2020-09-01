navigator.serviceWorker.register('./sw.js')
.then(function(reg){
  location.reload();
}).catch(function(err){
  console.log(err)
});
