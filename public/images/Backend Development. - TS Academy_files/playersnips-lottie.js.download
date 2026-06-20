/* 
add play on scroll
https://lottiefiles.com/interactivity

<script src="https://unpkg.com/@lottiefiles/lottie-interactivity@latest/dist/lottie-interactivity.min.js"></script>
<script>
LottieInteractivity.create({
    player:'#ps-lottie',
    mode:"scroll",
    actions: [
        {
        visibility: [0.50, 1.0],
        type: "play"
        }
    ]
});
</script>
*/

$( document ).ready(function() {

    if(typeof(CoursePlayerV2) !== 'undefined') {
        document.querySelector(".take").addEventListener("kapowLessonCompleted", (event) => {
            console.log("******** kapowLessonCompleted",event);
            var data = event.detail;
        //CoursePlayerV2.on('hooks:contentWasCompleted', function(data) {
        }); 
        CoursePlayerV2.on('hooks:contentDidChange', function(data) {
            window.setTimeout(function(){
               if($(".take .ps-lottie-inline").length>0){
                  $(".take .ps-lottie-inline").each(function(){
                      var lotti_json=$(this).data("src");
                      var lottie_html = '<lottie-player id="ps-lottie" src="'+lotti_json+'"  background="transparent"  speed="1"  style="width: 100%;"  loop  autoplay></lottie-player>';
                      $(this).html(lottie_html);
                  })             
               }            
            }, 100)           
        });      
    
     } else {
         // not course player do nothing         
     }     
 });