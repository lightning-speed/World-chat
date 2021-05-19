function write(dataW){
  firebase.database().ref("d").set({
    dataW
  });
}
function  read(){
        var a="";
        firebase.database().ref('d/dataW').on('value',(snap)=>{
        a = snap.val();
        });
        return a;
}





