var longestCommonPrefix = function(strs) {
    
if(strs.length==0){
    return "";
}
if(strs.length==1){
    return strs[0];
}

if(strs[0].length==0){
    return "";
}
var output="";
for(var i=0;i<strs[0].length;i++){
    var char= strs[0][i];
    for(var j=1;j<strs.length;j++){
        if(strs[j][i]!=char){
            return output
        }
    }
    output+=char;
}
return output
}
 var output =longestCommonPrefix(["flower","flower","flower","flower"]);
 console.log(output);