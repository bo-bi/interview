获取用户信息("方方")
    .then(打印信息)
    
function 获取用户信息(name) {
    return new Promise(function(resolve, reject) {
        if(name == "魏昊"){
            resolve("魏昊我认识");
        }else {
           reject("查无此人") 
        }
    })
}
function 打印信息(data) {
    console.log("打印信息在执行");
    return new Promise(function(resolve, reject) {
        resolve(data.slice(0, 2));
    })
}


