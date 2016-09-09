var call1 = function(){
  console.log("inside call1")
}

var container = function(callback){
  console.log("starting container")
  if(callback){
    callback.call()
  }
  console.log("finishing container")
}

call1()

container(call1)

container()
