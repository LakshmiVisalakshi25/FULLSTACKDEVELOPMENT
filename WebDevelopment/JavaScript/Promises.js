//Single Promise
const res=new Promise(function(Resolved,Rejected){
    var x=1;
    if(x==10){
        Resolved();
    }
    else{
        Rejected();
    }
})
// console.log(res);
res.then(function(){
    console.log("Equal");
})
.catch(function(){
    console.log("Not Equal");
})
//Multiple Promises
function fun1(){
    return new Promise (function(resolved,rejected){
        setTimeout(function(){
        resolved();
        },1000);
    })
}
function fun2(){
    return new Promise(function(resolved,rejected){
        resolved();
    })
}
function fun3(){
    return new Promise(function(resolved,rejected){
        resolved();
    })
}
fun1().then(function(){
    console.log("Function1 completed");
    fun2().then(function(){
        console.log("Function2 completed");
        fun3().then(function(){
            console.log("Function3 completed");
        })
    })
})
//Upgraded method for then to await
function fun11(val){
    return new Promise (function(resolved,rejected){
        setTimeout(function(){
          resolved(val);
        },1000);
    })
}
function fun21(val){
    return new Promise(function(resolved,rejected){
        setTimeout(function(){
        resolved(val+1);
        },1000);
    })
}
function fun31(val){
    return new Promise(function(resolved,rejected){
        setTimeout(function(){
        resolved(val+1);
        },1000);
    })
}
async function Exec(){
    try{
        const res1=await fun11(1);
        const res2=await fun21(res1);
        const res3=await fun31(res2);
        console.log(res3);
    }
    catch(err){
        console.log(err);
    }
}
Exec();