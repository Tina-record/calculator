/**
 * Created by Administrator on 2017/9/4.
 */
/*自动测试函数*/
function testMyself(){
    /*期待抛出异常*/
    /*输入正确值，加法:1+5=6*/
    var testTmp=0;
    try{
        var result1= calc('1+5');
        if (6!=result1) {
            throw"结果有误:1+5";
        }
    }
    catch(error){
        testTmp=1;
    }
    finally{
        if (testTmp==1){
            throw'正确加法运算抛出异常';
        }
    }

    /*输入正确值，减法:10-5=5*/
    var testTmp=0;
    try{
        var result2= calc('10-5');
        if (5!=result2) {
            throw"结果有误:10-5";
        }
    }
    catch(error){
        testTmp=1;
    }
    finally{
        if (testTmp==1){
            throw'正确减法运算抛出异常';
        }
    }

    /*输入正确值，乘法:8*2=16*/
    var testTmp=0;
    try{
        var result3= calc('8*2');
        if (16!=result3) {
            throw"结果有误:8*2";
        }
    }
    catch(error){
        testTmp=1;
    }
    finally{
        if (testTmp==1){
            throw'正确乘法运算抛出异常';
        }
    }

    /*输入正确值，除法:9/3=3*/
    var testTmp=0;
    try{
        var result4= calc('9/3');
        if (3!=result4) {
            throw"结果有误:9/3";
        }
    }
    catch(error){
        testTmp=1;
    }
    finally{
        if (testTmp==1){
            throw'正确除法运算抛出异常';
        }
    }

    /*输入错误值*/
    var testTmp=0;
    try{
        calc('=');
    }
    catch(error){
        testTmp=1;
    }
    finally{
        if (testTmp==0){
            throw'输入错误值"=",不抛出异常';
        }
    }
    console.log("全部测试成功！");
}
testMyself();



/*计算器，用JavaScript 做四则运算（加减乘除法）*/
function message() {
    var str = document.getElementById("incomingMessage").value;
    document.getElementById("displayResults").value = calc(str);
}

function calc(str){
    var first= 0;
    var second= 0;
    var oper= 0;  //0:+  1:-
    var y= 0;
    for (var i=0;i<str.length;i++){
        if(!isNaN(parseInt(str[i]))){
            first= first*10+Number(str[i]);  //Number()帮把字符串的数字转换数字，这是强制转换问题。
        }
        else if(str[i]=='+'){
            y= i;
            oper= 0;
            break;  //break 指条件不满直接退出for循环；而continue 指跳到for循环条件判断，而if{里面的信息}和else{}以下不执行下去。
        }
        else if(str[i]=='-'){
            y= i;
            oper= 1;
            break;
        }
        else if(str[i]=='*'){
            y= i;
            oper= 2;
            break;
        }
        else if(str[i]=='/'){
            y= i;
            oper= 3;
            break;
        }
        else{
            throw "输入的情况不在考虑范围。";
        }
    }

    for (var i=y+1;i<str.length;++i){
        if(!isNaN(parseInt(str[i]))){
            second= second*10+Number(str[i]);  //Number()帮把字符串的数字转换数字，这是强制转换问题。
        }
        else{
            throw "输入的情况不在考虑范围。";
        }
    }

    if(oper==0){
        var result= first + second;
        console.log(first+'+'+second+'='+result);
        return result;
    }
    else if(oper==1){
        var result= first - second;
        console.log(first+'-'+second+'='+result);
        return result;
    }
    else if(oper==2){
        var result= first * second;
        console.log(first+'*'+second+'='+result);
        return result;
    }
    else if(oper==3){
        var result= first / second;
        console.log(first+'/'+second+'='+result);
        return result;
    }
    else{
        throw("error")
    }
};