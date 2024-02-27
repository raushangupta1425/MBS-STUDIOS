
$(document).ready(function(){
    $("#search_btn").click(function(){
        $("#search_area").toggle(500,function(){
            if($("#search_area").css("border") == "2px solid #14AEA8"){
                $("#search_area").css("border","none");
            }else{
                $("#search_area").css("border","2px solid #14AEA8");
            };
        });
        if($("#search_btn").css("border") == "none"){
            $("#search_btn").css("border","none");
        }else{
            $("#search_btn").css("border","2px solid #14AEA8");
        }
    });
});

let v_player = document.getElementById("v_player");
let v_layer = document.getElementById("v_layer");
let v_football = document.getElementById("v_football");
let v_basketball = document.getElementById("v_basketball");

window.addEventListener('scroll',()=>{
    let value = window.scrollY;
    v_player.style.width = 100-value + "%";
    if(value<40){
        v_layer.style.visibility = "visible";
    }else{
        v_layer.style.visibility = "hidden";
    } 
    if(value<=700){
        v_football.style.left = (-700+value) + "px";
        v_basketball.style.right = (-700+value) + "px";
    }
});
