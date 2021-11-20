name_array=[];
display_array=[];display_array_sort=[];

function submit(){
    for(j=1; j <=5;j++){
var name=document.getElementById("name_"+j).value;
name_array.push(name);
    }

var len=name_array.length;
for(k=0; k<len;k++){
display_array.push("<h4> name-"+name_array[k]+"</h4>")

}
document.getElementById("display_withcommas").innerHTML=display_array;
remove_commas=display_array.join(" ");
document.getElementById("display_withoutcommas").innerHTML=remove_commas;
document.getElementById("submit").style.display="none";
document.getElementById("sort").style.display="inline-block";

}
function sort(){
name_array.sort();
var len=name_array.length;
for(k=0; k<len;k++){
display_array_sort.push("<h4> name-"+name_array[k]+"</h4>")

}
document.getElementById("display_withcommas").innerHTML=display_array_sort;remove_commas=display_array.join(" ");
document.getElementById("display_withoutcommas").innerHTML=remove_commas;
}