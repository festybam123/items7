$( document ).ready(function() {

    if(typeof(CoursePlayerV2) !== 'undefined') {
        const openTypeform = function(ps_typeform){
            console.log("opening tf",ps_typeform)
            var tf_options = ps_typeform.tf_options;
            //console.log(tf_options)
            if(typeof(window._ps_tf_last)=="undefined"){
                window._ps_tf_last = {
                    id: ps_typeform.id
                }
                if(ps_typeform.tf_type=="popup"){
                    window._ps_tf_last.tf = window.tf.createPopup(ps_typeform.id,tf_options);
                    window._ps_tf_last.tf.open();
                }
                if(ps_typeform.tf_type=="slider"){
                    window._ps_tf_last.tf = window.tf.createSlider(ps_typeform.id,tf_options);
                    window._ps_tf_last.tf.open();
                }
                if(ps_typeform.tf_type=="sidetab"){
                    window._ps_tf_last.tf = window.tf.createSidetab(ps_typeform.id,tf_options);
                    window._ps_tf_last.tf.open();
                }
                if(ps_typeform.tf_type=="popover"){
                    window._ps_tf_last.tf = window.tf.createPopover(ps_typeform.id,tf_options);
                    window._ps_tf_last.tf.open();
                }
            } else {
                //open new typeform if not same
                if(window._ps_tf_last.id !=ps_typeform.id){
                    if(typeof(window._ps_tf_last.tf)!="undefined" && typeof(window._ps_tf_last.tf.unmount())!="undefined"){
                        window._ps_tf_last.tf.unmount();
                    }
                    if(ps_typeform.tf_type=="popup"){
                        window._ps_tf_last.tf= window.tf.createPopup(ps_typeform.id,tf_options);
                        window._ps_tf_last.tf.open();
                    }
                    if(ps_typeform.tf_type=="slider"){
                        window._ps_tf_last.tf= window.tf.createSlider(ps_typeform.id,tf_options);
                        window._ps_tf_last.tf.open();
                    }
                    if(ps_typeform.tf_type=="sidetab"){
                        window._ps_tf_last.tf= window.tf.createSidetab(ps_typeform.id,tf_options);
                        window._ps_tf_last.tf.open();
                    }
                    if(ps_typeform.tf_type=="popover"){
                        window._ps_tf_last.tf= window.tf.createPopover(ps_typeform.id,tf_options);
                        window._ps_tf_last.tf.open();
                    }    
                }
                window._ps_tf_last.id =ps_typeform.id;
            }
        }
        document.querySelector(".take").addEventListener("kapowLessonCompleted", (event) => {
            console.log("******** kapowLessonCompleted",event);
            var data = event.detail;
        //CoursePlayerV2.on('hooks:contentWasCompleted', function(data) {
            console.log("Content was completed",data);
            // check if any match in window.__playersnips_tf
            if(typeof(window.__playersnips_tf)!="undefined"){
                console.log("window.__playersnips_tf",window.__playersnips_tf);
                window.__playersnips_tf.forEach(function(ps_typeform){
                    console.log("ps_typeform",ps_typeform);
                    if(ps_typeform.course_id==data.course_id && ps_typeform.lesson_id==data.lesson_id){
                        console.log("found match",ps_typeform);
                        openTypeform(ps_typeform)
                    }
                })
            }
        }); 
        CoursePlayerV2.on('hooks:contentDidChange', function(data) {
            window.setTimeout(function(){
               if($(".take .ps-typeform").length>0){
                  $(".take .ps-typeform").each(function(){
                        var id=$(this).data("id");
                        var trigger = $(this).data("trigger");
                        var tf_type = $(this).data("tf-type");
                        var ps_typeform_options =     {
                            "course_id":data.course.id,
                            "lesson_id":data.lesson.id,
                            "id":id,
                            "tf_type":tf_type
                            }  
                        var tf_options = {}
                        tf_options.hidden = {
                            first_name: Thinkific.current_user.first_name,
                            last_name: Thinkific.current_user.last_name,
                            email: Thinkific.current_user.email
                        } 
                        if(typeof($(this).data("tf-position"))!="undefined"){
                            tf_options.position = $(this).data("tf-position");
                        }
                        if(typeof($(this).data("tf-buttontext"))!="undefined"){
                            tf_options.buttonText = $(this).data("tf-buttontext");
                        }  
                        if(typeof($(this).data("tf-buttoncolor"))!="undefined"){
                            tf_options.buttonColor = $(this).data("tf-buttoncolor");
                        }  
                        if(typeof($(this).data("tf-tooltip"))!="undefined"){
                            tf_options.tooltip = $(this).data("tf-tooltip");
                        }                         
                        if(typeof($(this).data("tf-customicon"))!="undefined"){
                            tf_options.customIcon = $(this).data("tf-customicon");
                        }                                                

                        ps_typeform_options.tf_options = tf_options;                         
                      if(trigger=="lesson_complete"){
                        if(typeof(window.__playersnips_tf)!="undefined" ){
                            
                        } else {
                            window.__playersnips_tf=[];
                        }     
                        var already_added = false;
                        window.__playersnips_tf.forEach(function(ps_typeform){
                            if(ps_typeform.course_id==data.course.id && ps_typeform.lesson_id==data.lesson.id){
                                already_added = true; 
                                
                            }
                        })
                        if(!already_added){
                            window.__playersnips_tf.push(ps_typeform_options);    
                        }
                        
                      } 
                      if(trigger=="lesson_start"){ 
                        openTypeform(ps_typeform_options);
                      }
                      
                      
                  })             
               }            
            }, 1000)           
    
    
        });      
    
     } else {
         // not course player do nothing         
     }     
 });