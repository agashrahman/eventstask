function demo(){
    var input=document.getElementById("inputText").value;
    var opt='<option value="">Select</option>';
    for(let i=0;i<=input;i++){
        opt+='<option>'+i+'</option>'
    }
   document.getElementById("selOptions").innerHTML=opt;
}
function print(){
    var values=document.getElementById("selOptions").value;
    var print=[];
    for(let i=0;i<=values;i++){
        print.push(i);
    }
    document.getElementById("printV").innerHTML=print.join("<br>");
}

