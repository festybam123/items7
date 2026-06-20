/* Sounds https://www.101soundboards.com/boards/26542-ringtones-and-notification-sounds-soundboard */

$( document ).ready(function() {

    if(typeof(CoursePlayerV2) !== 'undefined') {
        const removePopup = function(id){
            $(id).addClass("animate__fadeOut");
            window.setTimeout(() => {
                $(id).remove();
            }, 1500);

        }
        const openPopup = function(ps_popup){
            console.log(ps_popup);
            var animate_css = "animate__fadeIn";
            var pill_width = " ";
            var pill_shape = ps_popup.shape;
            if(ps_popup.position=="top-full" && $("#ps-container-top-full").length==0){
                $("body").append('<div id="ps-container-top-full"></div>');
            }
            if(ps_popup.position=="top-full"){
                animate_css = "animate__fadeInDown";
                pill_width = " w-100 ";
                pill_shape="";
            }

            if(ps_popup.position=="top" && $("#ps-container-top").length==0){
                $("body").append('<div id="ps-container-top"></div>');
            }
            if(ps_popup.position=="top"){
                animate_css = "animate__fadeInDownBig";
            }

            if(ps_popup.position=="top-left" && $("#ps-container-top-left").length==0){
                $("body").append('<div id="ps-container-top-left"></div>');
            }
            if(ps_popup.position=="top-left"){
                animate_css = "animate__fadeInLeftBig"
            }
            if(ps_popup.position=="top-right" && $("#ps-container-top-right").length==0){
                $("body").append('<div id="ps-container-top-right"></div>');
            }
            if(ps_popup.position=="top-right"){
                animate_css = "animate__fadeInRightBig"
            }
            if(ps_popup.position=="bottom-full" && $("#ps-container-bottom-full").length==0){
                $("body").append('<div id="ps-container-bottom-full"></div>');
            }            
            if(ps_popup.position=="bottom-full"){
                animate_css = "animate__fadeInUp";
                pill_width = " w-100 ";
                pill_shape="";
            }            
            if(ps_popup.position=="bottom" && $("#ps-container-bottom").length==0){
                $("body").append('<div id="ps-container-bottom"></div>');

            }
            if(ps_popup.position=="bottom" ){
                animate_css = "animate__fadeInUpBig"
            }
            if(ps_popup.position=="bottom-left" && $("#ps-container-bottom-left").length==0){
                $("body").append('<div id="ps-container-bottom-left"></div>');
            }
            if(ps_popup.position=="bottom-left" ){
                animate_css = "animate__fadeInLeftBig"
            }
            if(ps_popup.position=="bottom-right" && $("#ps-container-bottom-right").length==0){
                $("body").append('<div id="ps-container-bottom-right"></div>');
            } 
            if(ps_popup.position=="bottom-right"){
                animate_css = "animate__fadeInRightBig"
            }                        

            var pop_action = "btn-close-pspop";
            if(ps_popup.cta!=""){
                pop_action="btn-cta-pspop"
            }
            var html="";
            const search = '{name}';
            const replaceWith = Thinkific.current_user.first_name;
            const new_heading = ps_popup.heading.split(search).join(replaceWith);  
            ps_popup.heading = new_heading;   
            const new_subheading = ps_popup.subheading.split(search).join(replaceWith);  
            ps_popup.subheading = new_subheading;   
            
            if(ps_popup.pu_type=="emoji_bar"){
                html+='<div class="kapow-player kapow-popup-'+ps_popup.pu_id+'">';
                html+='    <div class="pb-2">';
                html+='        <div class="'+pop_action;
                html+='                    animate__animated '+animate_css;
                html+='                    w-100 d-flex justify-content-center">';
                html+='            <div style="cursor:pointer;background-color:'+ps_popup.color_bg+';color:'+ps_popup.color_text+';" ';
                html+='                class="p-4 shadow pill '+pill_width+' '+pill_shape+' d-flex justify-content-center">';
                html+='             <span class="pe-2 pill-emoji" style="font-size: 28px;">'+ps_popup.emoji+'</span> ';
                html +='            <span class="pill-text" style="font-size:18px;font-weight:700;">'+ps_popup.heading+'</span></div>';
                html+='        </div>';
                html+='    </div>';
                html+='</div>';
            }
            if(ps_popup.pu_type=="avatar_bar"){
                html+='<div class="kapow-player kapow-popup-'+ps_popup.pu_id+'">';
                html+='    <div class="pb-2">';
                html+='        <div class="'+pop_action;
                html+='                    animate__animated '+animate_css;
                html+='                    w-100 d-flex justify-content-center">';
                html+='            <div style="cursor:pointer;background-color:'+ps_popup.color_bg+';color:'+ps_popup.color_text+';" ';
                html+='                class="p-3 shadow pill '+pill_width+' '+pill_shape+' d-flex align-items-center justify-content-center">';
                html+='             <img class="rounded-circle" style="max-height: 68px;" src="'+ps_popup.image_url+'"> ';
                html +='            <span class="ps-2 pill-text" style="font-size:18px;font-weight:700;">'+ps_popup.heading+'</span></div>';
                html+='        </div>';
                html+='    </div>';
                html+='</div>';
            }
            if(ps_popup.pu_type=="animation_bar"){
                var lotti_json=ps_popup.lottie_url;
                var lottie_html = '<lottie-player id="ps-lottie" src="'+lotti_json+'"  background="transparent"  speed="1"   style="max-height: 68px;max-width: 68px;"  loop autoplay></lottie-player>';

                html+='<div class="kapow-player kapow-popup-'+ps_popup.pu_id+'">';
                html+='    <div class="pb-2">';
                html+='        <div class="'+pop_action;
                html+='                    animate__animated '+animate_css;
                html+='                    w-100 d-flex justify-content-center">';
                html+='            <div style="cursor:pointer;background-color:'+ps_popup.color_bg+';color:'+ps_popup.color_text+';" ';
                html+='                class="p-3 shadow pill '+pill_width+' '+pill_shape+' d-flex align-items-center justify-content-center">';
                html+=lottie_html;
                html +='            <span class="ps-2 pill-text" style="font-size:18px;font-weight:700;">'+ps_popup.heading+'</span></div>';
                html+='        </div>';
                html+='    </div>';
                html+='</div>';
            }            
            if(ps_popup.pu_type=="image_card"){
                if(pill_shape=="rounded-pill"){
                    pill_shape="rounded";
                }
                html += '<style> ';
                html += '.kapow-popup-'+ps_popup.pu_id+'{';
                html += 'width:18rem;'
                html += '}';
                html += '</style>'

                html+='<div class="fr-view"><div data-theme="light" class="kapow-player kapow-popup-'+ps_popup.pu_id+'">';
                html+=' <div class="card shadow  '+pill_shape+'  text-'+ps_popup.alignment
                html+='                    animate__animated '+animate_css;
                html+='"     style="background-color:'+ps_popup.color_bg+';color:'+ps_popup.color_text+';"> ';
                if(ps_popup.image_url!=""){
                    html+='     <img src="'+ps_popup.image_url+'" class="card-img-top">';
                }
                if(ps_popup.heading!=""||ps_popup.subheading!=""||ps_popup.cta!=""){
                    html+='     <div class="card-body d-flex flex-column">';
                    if(ps_popup.heading!=""){
                        html+='     <p class="card-title fw-bold">'+ps_popup.heading+' </p>';
                    }
                    if(ps_popup.subheading!=""){
                        html+='     <p class="card-text mb-4">'+ps_popup.subheading+'</p>';
                    }
                    if(ps_popup.cta!="" && ps_popup.cta_text!=""){
                        html+='     <a href="'+ps_popup.cta+'" target="'+ps_popup.cta_target+'" class="button brand-color__background brand-color__dynamic-text mt-auto align-self-start">'+ps_popup.cta_text+'</a>';
                    }
                    html+='     </div>';
                }
                html+='<i class="btn-close-pspop brand-color__text fa-solid  fa-circle-xmark" style="cursor:pointer;position:absolute;top:10px;right:10px;"></i>'

                html+=' </div>'; 
                html+='</div></div>';            
            }
            if(ps_popup.pu_type=="animation_card"){
                var lotti_json=ps_popup.lottie_url;
                var lottie_html = '<lottie-player id="ps-lottie" src="'+lotti_json+'"  background="transparent"  speed="1"   style="width:100%"  loop autoplay></lottie-player>';

                if(pill_shape=="rounded-pill"){
                    pill_shape="rounded";
                }
                html += '<style> ';
                html += '.kapow-popup-'+ps_popup.pu_id+'{';
                html += 'width:18rem;'
                html += '}';
                html += '</style>'

                html+='<div class="fr-view"><div data-theme="light" class="kapow-player kapow-popup-'+ps_popup.pu_id+'">';
                html+=' <div class="card shadow  '+pill_shape+'  text-'+ps_popup.alignment;
                html+='                    animate__animated '+animate_css;
                html+='"     style="cursor:pointer;background-color:'+ps_popup.color_bg+';color:'+ps_popup.color_text+';"> ';
                
                html+='     <div class="card-body d-flex flex-column">';
                if(ps_popup.cta!="" ){
                    html+='     <a href="'+ps_popup.cta+'" target="'+ps_popup.cta_target+'" style="text-decoration:none;color:inherit;">';
                }

                html+= lottie_html;
                if(ps_popup.heading!=""){
                    html+='     <p class="card-title fw-bold">'+ps_popup.heading+' </p>';
                }
                if(ps_popup.subheading!=""){
                    html+='     <p class="card-text mb-4">'+ps_popup.subheading+'</p>';
                }
                if(ps_popup.cta!="" ){
                    html+='     </a';
                }

                html+='     </div>';
                html+='<i class="btn-close-pspop brand-color__text fa-solid  fa-circle-xmark" style="cursor:pointer;position:absolute;top:10px;right:10px;"></i>'
                
                html+=' </div>'; 
                html+='</div></div>';            
            }

            if(ps_popup.pu_type=="loom_card"){
                var loomid=ps_popup.loomid;
                var loomurl="https://www.loom.com/embed/"+loomid+"?hideEmbedTopBar=true&autoplay=true&mute=false"
                var loomhtml='<div  style="position: relative; padding-bottom: 62.5%; height: 0;"><iframe src="'+loomurl+'" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>';                
                
                //var loomhtml='<div class="ratio ratio-16x9"><iframe src="'+loomurl+'" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen ></iframe></div>'

                if(pill_shape=="rounded-pill"){
                    pill_shape="rounded";
                }
                html += '<style> ';
                html += '.kapow-popup-'+ps_popup.pu_id+'{';
                html += 'width:28rem;'
                html += '}';
                html += '</style>'

                html+='<div class="fr-view"><div data-theme="light" class="kapow-player kapow-popup-'+ps_popup.pu_id+'">';
                html+=' <div class="card shadow  '+pill_shape+'  text-'+ps_popup.alignment;
                html+='                    animate__animated '+animate_css;
                html+='"     style="background-color:'+ps_popup.color_bg+';color:'+ps_popup.color_text+';"> ';
                
                html+='     <div class="card-body  d-flex flex-column">';
                html+= loomhtml;
                if(ps_popup.heading!=""){
                    html+='     <p class="pt-2 card-title fw-bold">'+ps_popup.heading+' </p>';
                }
                if(ps_popup.subheading!=""){
                    html+='     <p class="card-text mb-4">'+ps_popup.subheading+'</p>';
                }
                if(ps_popup.cta!="" && ps_popup.cta_text!=""){
                    html+='     <a href="'+ps_popup.cta+'" target="'+ps_popup.cta_target+'" class="button brand-color__background brand-color__dynamic-text mt-auto align-self-start">'+ps_popup.cta_text+'</a>';
                }
                html+='<i class="btn-close-pspop brand-color__text fa-solid fa-2x fa-circle-xmark" style="cursor:pointer;position:absolute;top:10px;right:10px;"></i>'

                html+='     </div>';
                
                html+=' </div>'; 
                html+='</div></div>';            
            }            

            if(html!="" && $(".kapow-popup-"+ps_popup.pu_id).length==0){
                window.setTimeout(() => {
                    if(ps_popup.sound!=""){
                        try {
                            var sound_file=ps_popup.sound;
                            console.log("sound:"+sound_file);
                            if(ps_popup.sound=="doink"){
                                sound_file="https://import.cdn.thinkific.com/551340/courses/1589194/button09a-211113-115416.mp3";
                            }
                            if(ps_popup.sound=="swoosh"){
                                sound_file="https://import.cdn.thinkific.com/551340/courses/1589194/113889233-211113-122642.mp3";
                            }
                            if(ps_popup.sound=="blink"){
                                sound_file="https://import.cdn.thinkific.com/551340/courses/1589194/89908364-211113-122642.mp3";
                            }
                            if(ps_popup.sound=="dadun"){
                                sound_file="https://import.cdn.thinkific.com/551340/courses/1589194/108413218-211113-122642.mp3";
                            }
                            if(ps_popup.sound=="dingdong"){
                                sound_file="https://import.cdn.thinkific.com/551340/courses/1589194/89167637-211113-122642.mp3";
                            }
                            if(ps_popup.sound=="deenaa"){
                                sound_file="https://import.cdn.thinkific.com/551340/courses/1589194/104506412-211113-122642.mp3";
                            }
                            if(ps_popup.sound=="tada"){
                                sound_file="https://import.cdn.thinkific.com/205311/courses/1940998/tada-221112-064306.mp3";
                            }                            
                            if(ps_popup.sound=="fairy"){
                                sound_file="https://import.cdn.thinkific.com/205311/courses/1940998/fairy-221112-064719.mp3";
                            }                            

                            if(ps_popup.sound=="soda"){
                                sound_file="https://import.cdn.thinkific.com/205311/courses/1940998/soda-221112-070134.mp3";
                            }                            
                            if(ps_popup.sound=="cool"){
                                sound_file="https://import.cdn.thinkific.com/205311/courses/1940998/cool-221112-070134.mp3";
                            }                            
                            if(ps_popup.sound=="bongo"){
                                sound_file="https://import.cdn.thinkific.com/205311/courses/1940998/bongo-221112-070134.mp3";
                            }                            
                            if(ps_popup.sound=="excuseme"){
                                sound_file="https://import.cdn.thinkific.com/205311/courses/1940998/excusememessage-221112-070134.mp3";
                            }                            
                            if(ps_popup.sound=="police"){
                                sound_file="https://import.cdn.thinkific.com/205311/courses/1940998/policealert-221112-070134.mp3";
                            }                            
                            if(ps_popup.sound=="dolphin"){
                                sound_file="https://import.cdn.thinkific.com/205311/courses/1940998/dolphin-221112-070134.mp3";
                            }                            
                            if(ps_popup.sound=="airport"){
                                sound_file="https://import.cdn.thinkific.com/205311/courses/1940998/airportbell-221112-070134.mp3";
                            }                            
                            

                            var sound = new Howl({
                                src: [sound_file]
                              }); 
                            sound.play();                       
                                
                        } catch (error) {
                            
                        }
                    }
                    $("#ps-container-"+ps_popup.position).prepend(html);
                    

                    if(ps_popup.autoclose!=0){
                        console.log("has autoclose",ps_popup.autoclose)
                        window.setTimeout(() => {
                            var id='.kapow-popup-'+ps_popup.pu_id+' .animate__animated';
                            removePopup(id);
                            window.setTimeout(() => {
                                id='.kapow-popup-'+ps_popup.pu_id;
                                $(id).remove();
                            }, 1000);
                        }, ps_popup.autoclose*1000);
                    }

                    $('.kapow-popup-'+ps_popup.pu_id+' .btn-close-pspop').click(function(){
                        var id='.kapow-popup-'+ps_popup.pu_id;
                        $(id).remove();
                        
                    })                            
            
                    if(ps_popup.cta!=""){
                        $('.kapow-popup-'+ps_popup.pu_id+' .btn-cta-pspop').click(function(){
                            
                            if(ps_popup.cta_target=="new"){
                                window.open(ps_popup.cta);
                            } else {
                                window.location=ps_popup.cta;
                            }
                            var id='.kapow-popup-'+ps_popup.pu_id;
                            $(id).remove();                            
                        })

                    }
    

                }, ps_popup.delay*1000);
            } else {
                if( $(".kapow-popup-"+ps_popup.pu_id).length>0){
                    var id='.kapow-popup-'+ps_popup.pu_id;
                    // console.log("closing",id);
                    $(id+' .animate__animated').removeClass("animate__fadeOut");
                    if(ps_popup.autoclose!=0){
                        console.log("has autoclose",ps_popup.autoclose)
                        window.setTimeout(() => {
                            var id='.kapow-popup-'+ps_popup.pu_id+' .animate__animated';
                            removePopup(id);
                        }, ps_popup.autoclose*1000);
                    }                       
                }
            }
        }
        document.querySelector(".take").addEventListener("kapowLessonCompleted", (event) => {
            console.log("******** kapowLessonCompleted",event);
            var data = event.detail;
        //CoursePlayerV2.on('hooks:contentWasCompleted', function(data) {
            // console.log("Content was completed",data);
            // check if any match in window.__playersnips_popups
            if(typeof(window.__playersnips_popups)!="undefined"){
                // console.log("window.__playersnips_popups",window.__playersnips_popups);
                window.__playersnips_popups.forEach(function(ps_popup){
                    // console.log("ps_popup",ps_popup);
                    if(ps_popup.course_id==data.course_id && ps_popup.lesson_id==data.lesson_id){
                        // console.log("found match",ps_popup);
                        openPopup(ps_popup)
                    }
                })
            }
        }); 
        CoursePlayerV2.on('hooks:contentDidChange', function(data) {
        //    console.log("Changed",data);
            window.setTimeout(function(){
               if($(".take .ps-popup").length>0){
                    var ctr = 0;
                  $(".take .ps-popup").each(function(){
                        // console.log("Got Pop",$(this))
                        var trigger = "lesson_start"
                        if(typeof($(this).data("trigger"))!="undefined"){
                            trigger = $(this).data("trigger");
                        }  
                        var pu_type = "emoji-pill";                      
                        if(typeof($(this).data("pu-type"))!="undefined"){
                            pu_type = $(this).data("pu-type");
                        }   
                        ctr+=1;                     
                        var ps_popup_options =     {
                            "course_id":data.course.id,
                            "lesson_id":data.lesson.id,
                            "ctr":ctr,
                            "pu_id":data.course.id+"-"+data.lesson.id+"-"+ctr,
                            "pu_type":pu_type
                            }  
                        if(typeof($(this).data("color-bg"))!="undefined"){
                            ps_popup_options.color_bg = $(this).data("color-bg");
                        } else {
                            ps_popup_options.color_bg="#e9e9fd";
                        }                            
                        if(typeof($(this).data("color-text"))!="undefined"){
                            ps_popup_options.color_text = $(this).data("color-text");
                        } else {
                            ps_popup_options.color_text="#333333";
                        }                            
                        if(typeof($(this).data("delay"))!="undefined"){
                            ps_popup_options.delay = $(this).data("delay");
                        } else {
                            ps_popup_options.delay=1;
                        }
                        if(typeof($(this).data("autoclose"))!="undefined"){
                            ps_popup_options.autoclose = $(this).data("autoclose");
                        } else {
                            ps_popup_options.autoclose = 0;
                        }
                        if(typeof($(this).data("position"))!="undefined"){
                            ps_popup_options.position = $(this).data("position");
                        } else {
                            ps_popup_options.position = "top";
                        }
                        if(typeof($(this).data("shape"))!="undefined"){
                            ps_popup_options.shape = $(this).data("shape");
                        } else {
                            ps_popup_options.shape = "rounded-pill";
                        }                        
                        if(typeof($(this).data("cta"))!="undefined"){
                            ps_popup_options.cta = $(this).data("cta");
                        }  else {
                            ps_popup_options.cta ="";
                        }    
                        if(typeof($(this).data("cta-text"))!="undefined"){
                            ps_popup_options.cta_text = $(this).data("cta-text");
                        }  else {
                            ps_popup_options.cta_text ="";
                        }    

                        if(typeof($(this).data("cta-target"))!="undefined"){
                            ps_popup_options.cta_target = $(this).data("cta-target");
                        }  else {
                            ps_popup_options.cta_target ="new";
                        }    
                        if(typeof($(this).data("emoji"))!="undefined"){
                            ps_popup_options.emoji = $(this).data("emoji");
                        }  else {
                            ps_popup_options.emoji ="";
                        }    
                        if(typeof($(this).data("loomid"))!="undefined"){
                            ps_popup_options.loomid = $(this).data("loomid");
                        }  else {
                            ps_popup_options.loomid ="";
                        }                         
                        if(typeof($(this).data("image-url"))!="undefined"){
                            ps_popup_options.image_url = $(this).data("image-url");
                        }  else {
                            ps_popup_options.image_url ="";
                        }   
                        if(typeof($(this).data("lottie-url"))!="undefined"){
                            ps_popup_options.lottie_url = $(this).data("lottie-url");
                        }  else {
                            ps_popup_options.lottie_url ="";
                        }                         
                        if(typeof($(this).data("heading"))!="undefined"){
                            ps_popup_options.heading = $(this).data("heading");
                        }  else {
                            ps_popup_options.heading ="";
                        }  
                        if(typeof($(this).data("subheading"))!="undefined"){
                            ps_popup_options.subheading = $(this).data("subheading");
                        }  else {
                            ps_popup_options.subheading ="";
                        }  
                        if(typeof($(this).data("alignment"))!="undefined"){
                            ps_popup_options.alignment = $(this).data("alignment");
                        }  else {
                            ps_popup_options.alignment ="left";
                        }  

                        if(typeof($(this).data("sound"))!="undefined"){
                            ps_popup_options.sound = $(this).data("sound");
                        }  else {
                            ps_popup_options.sound ="";
                        }  

                        if(typeof($(this).data("mp4"))!="undefined"){
                            ps_popup_options.mp4 = $(this).data("mp4");
                        }  else {
                            ps_popup_options.mp4 ="";
                        }  
                        if(typeof($(this).data("iframe"))!="undefined"){
                            ps_popup_options.iframe = $(this).data("iframe");
                        }  else {
                            ps_popup_options.iframe ="";
                        }                                                                                                                                                                                                            
                        console.log(ps_popup_options);
                      if(trigger=="lesson_complete"){
                        if(typeof(window.__playersnips_popups)!="undefined" ){
                            
                        } else {
                            window.__playersnips_popups=[];
                        }     
                        var already_added = false;
                        window.__playersnips_popups.forEach(function(ps_popup){
                            if(ps_popup.course_id==data.course.id && ps_popup.lesson_id==data.lesson.id&&ps_popup.ctr==ctr){
                                already_added = true; 
                                
                            }
                        })
                        if(!already_added){
                            window.__playersnips_popups.push(ps_popup_options);    
                        }
                        
                      } 
                      if(trigger=="lesson_start"){ 
                        openPopup(ps_popup_options);
                      }
                      
                      
                  })             
               }            
            }, 1000)           
    
    
        });      
    /*! howler.js v2.1.2 | (c) 2013-2019, James Simpson of GoldFire Studios | MIT License | howlerjs.com */
    !function(){"use strict";var e=function(){this.init()};e.prototype={init:function(){var e=this||n;return e._counter=1e3,e._html5AudioPool=[],e.html5PoolSize=10,e._codecs={},e._howls=[],e._muted=!1,e._volume=1,e._canPlayEvent="canplaythrough",e._navigator="undefined"!=typeof window&&window.navigator?window.navigator:null,e.masterGain=null,e.noAudio=!1,e.usingWebAudio=!0,e.autoSuspend=!0,e.ctx=null,e.autoUnlock=!0,e._setup(),e},volume:function(e){var o=this||n;if(e=parseFloat(e),o.ctx||_(),void 0!==e&&e>=0&&e<=1){if(o._volume=e,o._muted)return o;o.usingWebAudio&&o.masterGain.gain.setValueAtTime(e,n.ctx.currentTime);for(var t=0;t<o._howls.length;t++)if(!o._howls[t]._webAudio)for(var r=o._howls[t]._getSoundIds(),a=0;a<r.length;a++){var u=o._howls[t]._soundById(r[a]);u&&u._node&&(u._node.volume=u._volume*e)}return o}return o._volume},mute:function(e){var o=this||n;o.ctx||_(),o._muted=e,o.usingWebAudio&&o.masterGain.gain.setValueAtTime(e?0:o._volume,n.ctx.currentTime);for(var t=0;t<o._howls.length;t++)if(!o._howls[t]._webAudio)for(var r=o._howls[t]._getSoundIds(),a=0;a<r.length;a++){var u=o._howls[t]._soundById(r[a]);u&&u._node&&(u._node.muted=!!e||u._muted)}return o},unload:function(){for(var e=this||n,o=e._howls.length-1;o>=0;o--)e._howls[o].unload();return e.usingWebAudio&&e.ctx&&void 0!==e.ctx.close&&(e.ctx.close(),e.ctx=null,_()),e},codecs:function(e){return(this||n)._codecs[e.replace(/^x-/,"")]},_setup:function(){var e=this||n;if(e.state=e.ctx?e.ctx.state||"suspended":"suspended",e._autoSuspend(),!e.usingWebAudio)if("undefined"!=typeof Audio)try{var o=new Audio;void 0===o.oncanplaythrough&&(e._canPlayEvent="canplay")}catch(n){e.noAudio=!0}else e.noAudio=!0;try{var o=new Audio;o.muted&&(e.noAudio=!0)}catch(e){}return e.noAudio||e._setupCodecs(),e},_setupCodecs:function(){var e=this||n,o=null;try{o="undefined"!=typeof Audio?new Audio:null}catch(n){return e}if(!o||"function"!=typeof o.canPlayType)return e;var t=o.canPlayType("audio/mpeg;").replace(/^no$/,""),r=e._navigator&&e._navigator.userAgent.match(/OPR\/([0-6].)/g),a=r&&parseInt(r[0].split("/")[1],10)<33;return e._codecs={mp3:!(a||!t&&!o.canPlayType("audio/mp3;").replace(/^no$/,"")),mpeg:!!t,opus:!!o.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/,""),ogg:!!o.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),oga:!!o.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),wav:!!o.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),aac:!!o.canPlayType("audio/aac;").replace(/^no$/,""),caf:!!o.canPlayType("audio/x-caf;").replace(/^no$/,""),m4a:!!(o.canPlayType("audio/x-m4a;")||o.canPlayType("audio/m4a;")||o.canPlayType("audio/aac;")).replace(/^no$/,""),mp4:!!(o.canPlayType("audio/x-mp4;")||o.canPlayType("audio/mp4;")||o.canPlayType("audio/aac;")).replace(/^no$/,""),weba:!!o.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,""),webm:!!o.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,""),dolby:!!o.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/,""),flac:!!(o.canPlayType("audio/x-flac;")||o.canPlayType("audio/flac;")).replace(/^no$/,"")},e},_unlockAudio:function(){var e=this||n;if(!e._audioUnlocked&&e.ctx){e._audioUnlocked=!1,e.autoUnlock=!1,e._mobileUnloaded||44100===e.ctx.sampleRate||(e._mobileUnloaded=!0,e.unload()),e._scratchBuffer=e.ctx.createBuffer(1,1,22050);var o=function(n){for(var t=0;t<e.html5PoolSize;t++)try{var r=new Audio;r._unlocked=!0,e._releaseHtml5Audio(r)}catch(n){e.noAudio=!0}for(var t=0;t<e._howls.length;t++)if(!e._howls[t]._webAudio)for(var a=e._howls[t]._getSoundIds(),u=0;u<a.length;u++){var i=e._howls[t]._soundById(a[u]);i&&i._node&&!i._node._unlocked&&(i._node._unlocked=!0,i._node.load())}e._autoResume();var d=e.ctx.createBufferSource();d.buffer=e._scratchBuffer,d.connect(e.ctx.destination),void 0===d.start?d.noteOn(0):d.start(0),"function"==typeof e.ctx.resume&&e.ctx.resume(),d.onended=function(){d.disconnect(0),e._audioUnlocked=!0,document.removeEventListener("touchstart",o,!0),document.removeEventListener("touchend",o,!0),document.removeEventListener("click",o,!0);for(var n=0;n<e._howls.length;n++)e._howls[n]._emit("unlock")}};return document.addEventListener("touchstart",o,!0),document.addEventListener("touchend",o,!0),document.addEventListener("click",o,!0),e}},_obtainHtml5Audio:function(){var e=this||n;if(e._html5AudioPool.length)return e._html5AudioPool.pop();var o=(new Audio).play();return o&&"undefined"!=typeof Promise&&(o instanceof Promise||"function"==typeof o.then)&&o.catch(function(){console.warn("HTML5 Audio pool exhausted, returning potentially locked audio object.")}),new Audio},_releaseHtml5Audio:function(e){var o=this||n;return e._unlocked&&o._html5AudioPool.push(e),o},_autoSuspend:function(){var e=this;if(e.autoSuspend&&e.ctx&&void 0!==e.ctx.suspend&&n.usingWebAudio){for(var o=0;o<e._howls.length;o++)if(e._howls[o]._webAudio)for(var t=0;t<e._howls[o]._sounds.length;t++)if(!e._howls[o]._sounds[t]._paused)return e;return e._suspendTimer&&clearTimeout(e._suspendTimer),e._suspendTimer=setTimeout(function(){e.autoSuspend&&(e._suspendTimer=null,e.state="suspending",e.ctx.suspend().then(function(){e.state="suspended",e._resumeAfterSuspend&&(delete e._resumeAfterSuspend,e._autoResume())}))},3e4),e}},_autoResume:function(){var e=this;if(e.ctx&&void 0!==e.ctx.resume&&n.usingWebAudio)return"running"===e.state&&e._suspendTimer?(clearTimeout(e._suspendTimer),e._suspendTimer=null):"suspended"===e.state?(e.ctx.resume().then(function(){e.state="running";for(var n=0;n<e._howls.length;n++)e._howls[n]._emit("resume")}),e._suspendTimer&&(clearTimeout(e._suspendTimer),e._suspendTimer=null)):"suspending"===e.state&&(e._resumeAfterSuspend=!0),e}};var n=new e,o=function(e){var n=this;if(!e.src||0===e.src.length)return void console.error("An array of source files must be passed with any new Howl.");n.init(e)};o.prototype={init:function(e){var o=this;return n.ctx||_(),o._autoplay=e.autoplay||!1,o._format="string"!=typeof e.format?e.format:[e.format],o._html5=e.html5||!1,o._muted=e.mute||!1,o._loop=e.loop||!1,o._pool=e.pool||5,o._preload="boolean"!=typeof e.preload||e.preload,o._rate=e.rate||1,o._sprite=e.sprite||{},o._src="string"!=typeof e.src?e.src:[e.src],o._volume=void 0!==e.volume?e.volume:1,o._xhrWithCredentials=e.xhrWithCredentials||!1,o._duration=0,o._state="unloaded",o._sounds=[],o._endTimers={},o._queue=[],o._playLock=!1,o._onend=e.onend?[{fn:e.onend}]:[],o._onfade=e.onfade?[{fn:e.onfade}]:[],o._onload=e.onload?[{fn:e.onload}]:[],o._onloaderror=e.onloaderror?[{fn:e.onloaderror}]:[],o._onplayerror=e.onplayerror?[{fn:e.onplayerror}]:[],o._onpause=e.onpause?[{fn:e.onpause}]:[],o._onplay=e.onplay?[{fn:e.onplay}]:[],o._onstop=e.onstop?[{fn:e.onstop}]:[],o._onmute=e.onmute?[{fn:e.onmute}]:[],o._onvolume=e.onvolume?[{fn:e.onvolume}]:[],o._onrate=e.onrate?[{fn:e.onrate}]:[],o._onseek=e.onseek?[{fn:e.onseek}]:[],o._onunlock=e.onunlock?[{fn:e.onunlock}]:[],o._onresume=[],o._webAudio=n.usingWebAudio&&!o._html5,void 0!==n.ctx&&n.ctx&&n.autoUnlock&&n._unlockAudio(),n._howls.push(o),o._autoplay&&o._queue.push({event:"play",action:function(){o.play()}}),o._preload&&o.load(),o},load:function(){var e=this,o=null;if(n.noAudio)return void e._emit("loaderror",null,"No audio support.");"string"==typeof e._src&&(e._src=[e._src]);for(var r=0;r<e._src.length;r++){var u,i;if(e._format&&e._format[r])u=e._format[r];else{if("string"!=typeof(i=e._src[r])){e._emit("loaderror",null,"Non-string found in selected audio sources - ignoring.");continue}u=/^data:audio\/([^;,]+);/i.exec(i),u||(u=/\.([^.]+)$/.exec(i.split("?",1)[0])),u&&(u=u[1].toLowerCase())}if(u||console.warn('No file extension was found. Consider using the "format" property or specify an extension.'),u&&n.codecs(u)){o=e._src[r];break}}return o?(e._src=o,e._state="loading","https:"===window.location.protocol&&"http:"===o.slice(0,5)&&(e._html5=!0,e._webAudio=!1),new t(e),e._webAudio&&a(e),e):void e._emit("loaderror",null,"No codec support for selected audio sources.")},play:function(e,o){var t=this,r=null;if("number"==typeof e)r=e,e=null;else{if("string"==typeof e&&"loaded"===t._state&&!t._sprite[e])return null;if(void 0===e&&(e="__default",!t._playLock)){for(var a=0,u=0;u<t._sounds.length;u++)t._sounds[u]._paused&&!t._sounds[u]._ended&&(a++,r=t._sounds[u]._id);1===a?e=null:r=null}}var i=r?t._soundById(r):t._inactiveSound();if(!i)return null;if(r&&!e&&(e=i._sprite||"__default"),"loaded"!==t._state){i._sprite=e,i._ended=!1;var d=i._id;return t._queue.push({event:"play",action:function(){t.play(d)}}),d}if(r&&!i._paused)return o||t._loadQueue("play"),i._id;t._webAudio&&n._autoResume();var _=Math.max(0,i._seek>0?i._seek:t._sprite[e][0]/1e3),s=Math.max(0,(t._sprite[e][0]+t._sprite[e][1])/1e3-_),l=1e3*s/Math.abs(i._rate),c=t._sprite[e][0]/1e3,f=(t._sprite[e][0]+t._sprite[e][1])/1e3,p=!(!i._loop&&!t._sprite[e][2]);i._sprite=e,i._ended=!1;var m=function(){i._paused=!1,i._seek=_,i._start=c,i._stop=f,i._loop=p};if(_>=f)return void t._ended(i);var v=i._node;if(t._webAudio){var h=function(){t._playLock=!1,m(),t._refreshBuffer(i);var e=i._muted||t._muted?0:i._volume;v.gain.setValueAtTime(e,n.ctx.currentTime),i._playStart=n.ctx.currentTime,void 0===v.bufferSource.start?i._loop?v.bufferSource.noteGrainOn(0,_,86400):v.bufferSource.noteGrainOn(0,_,s):i._loop?v.bufferSource.start(0,_,86400):v.bufferSource.start(0,_,s),l!==1/0&&(t._endTimers[i._id]=setTimeout(t._ended.bind(t,i),l)),o||setTimeout(function(){t._emit("play",i._id),t._loadQueue()},0)};"running"===n.state?h():(t._playLock=!0,t.once("resume",h),t._clearTimer(i._id))}else{var y=function(){v.currentTime=_,v.muted=i._muted||t._muted||n._muted||v.muted,v.volume=i._volume*n.volume(),v.playbackRate=i._rate;try{var r=v.play();if(r&&"undefined"!=typeof Promise&&(r instanceof Promise||"function"==typeof r.then)?(t._playLock=!0,m(),r.then(function(){t._playLock=!1,v._unlocked=!0,o||(t._emit("play",i._id),t._loadQueue())}).catch(function(){t._playLock=!1,t._emit("playerror",i._id,"Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."),i._ended=!0,i._paused=!0})):o||(t._playLock=!1,m(),t._emit("play",i._id),t._loadQueue()),v.playbackRate=i._rate,v.paused)return void t._emit("playerror",i._id,"Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");"__default"!==e||i._loop?t._endTimers[i._id]=setTimeout(t._ended.bind(t,i),l):(t._endTimers[i._id]=function(){t._ended(i),v.removeEventListener("ended",t._endTimers[i._id],!1)},v.addEventListener("ended",t._endTimers[i._id],!1))}catch(e){t._emit("playerror",i._id,e)}};"data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA"===v.src&&(v.src=t._src,v.load());var g=window&&window.ejecta||!v.readyState&&n._navigator.isCocoonJS;if(v.readyState>=3||g)y();else{t._playLock=!0;var A=function(){y(),v.removeEventListener(n._canPlayEvent,A,!1)};v.addEventListener(n._canPlayEvent,A,!1),t._clearTimer(i._id)}}return i._id},pause:function(e){var n=this;if("loaded"!==n._state||n._playLock)return n._queue.push({event:"pause",action:function(){n.pause(e)}}),n;for(var o=n._getSoundIds(e),t=0;t<o.length;t++){n._clearTimer(o[t]);var r=n._soundById(o[t]);if(r&&!r._paused&&(r._seek=n.seek(o[t]),r._rateSeek=0,r._paused=!0,n._stopFade(o[t]),r._node))if(n._webAudio){if(!r._node.bufferSource)continue;void 0===r._node.bufferSource.stop?r._node.bufferSource.noteOff(0):r._node.bufferSource.stop(0),n._cleanBuffer(r._node)}else isNaN(r._node.duration)&&r._node.duration!==1/0||r._node.pause();arguments[1]||n._emit("pause",r?r._id:null)}return n},stop:function(e,n){var o=this;if("loaded"!==o._state||o._playLock)return o._queue.push({event:"stop",action:function(){o.stop(e)}}),o;for(var t=o._getSoundIds(e),r=0;r<t.length;r++){o._clearTimer(t[r]);var a=o._soundById(t[r]);a&&(a._seek=a._start||0,a._rateSeek=0,a._paused=!0,a._ended=!0,o._stopFade(t[r]),a._node&&(o._webAudio?a._node.bufferSource&&(void 0===a._node.bufferSource.stop?a._node.bufferSource.noteOff(0):a._node.bufferSource.stop(0),o._cleanBuffer(a._node)):isNaN(a._node.duration)&&a._node.duration!==1/0||(a._node.currentTime=a._start||0,a._node.pause(),a._node.duration===1/0&&o._clearSound(a._node))),n||o._emit("stop",a._id))}return o},mute:function(e,o){var t=this;if("loaded"!==t._state||t._playLock)return t._queue.push({event:"mute",action:function(){t.mute(e,o)}}),t;if(void 0===o){if("boolean"!=typeof e)return t._muted;t._muted=e}for(var r=t._getSoundIds(o),a=0;a<r.length;a++){var u=t._soundById(r[a]);u&&(u._muted=e,u._interval&&t._stopFade(u._id),t._webAudio&&u._node?u._node.gain.setValueAtTime(e?0:u._volume,n.ctx.currentTime):u._node&&(u._node.muted=!!n._muted||e),t._emit("mute",u._id))}return t},volume:function(){var e,o,t=this,r=arguments;if(0===r.length)return t._volume;if(1===r.length||2===r.length&&void 0===r[1]){t._getSoundIds().indexOf(r[0])>=0?o=parseInt(r[0],10):e=parseFloat(r[0])}else r.length>=2&&(e=parseFloat(r[0]),o=parseInt(r[1],10));var a;if(!(void 0!==e&&e>=0&&e<=1))return a=o?t._soundById(o):t._sounds[0],a?a._volume:0;if("loaded"!==t._state||t._playLock)return t._queue.push({event:"volume",action:function(){t.volume.apply(t,r)}}),t;void 0===o&&(t._volume=e),o=t._getSoundIds(o);for(var u=0;u<o.length;u++)(a=t._soundById(o[u]))&&(a._volume=e,r[2]||t._stopFade(o[u]),t._webAudio&&a._node&&!a._muted?a._node.gain.setValueAtTime(e,n.ctx.currentTime):a._node&&!a._muted&&(a._node.volume=e*n.volume()),t._emit("volume",a._id));return t},fade:function(e,o,t,r){var a=this;if("loaded"!==a._state||a._playLock)return a._queue.push({event:"fade",action:function(){a.fade(e,o,t,r)}}),a;e=parseFloat(e),o=parseFloat(o),t=parseFloat(t),a.volume(e,r);for(var u=a._getSoundIds(r),i=0;i<u.length;i++){var d=a._soundById(u[i]);if(d){if(r||a._stopFade(u[i]),a._webAudio&&!d._muted){var _=n.ctx.currentTime,s=_+t/1e3;d._volume=e,d._node.gain.setValueAtTime(e,_),d._node.gain.linearRampToValueAtTime(o,s)}a._startFadeInterval(d,e,o,t,u[i],void 0===r)}}return a},_startFadeInterval:function(e,n,o,t,r,a){var u=this,i=n,d=o-n,_=Math.abs(d/.01),s=Math.max(4,_>0?t/_:t),l=Date.now();e._fadeTo=o,e._interval=setInterval(function(){var r=(Date.now()-l)/t;l=Date.now(),i+=d*r,i=Math.max(0,i),i=Math.min(1,i),i=Math.round(100*i)/100,u._webAudio?e._volume=i:u.volume(i,e._id,!0),a&&(u._volume=i),(o<n&&i<=o||o>n&&i>=o)&&(clearInterval(e._interval),e._interval=null,e._fadeTo=null,u.volume(o,e._id),u._emit("fade",e._id))},s)},_stopFade:function(e){var o=this,t=o._soundById(e);return t&&t._interval&&(o._webAudio&&t._node.gain.cancelScheduledValues(n.ctx.currentTime),clearInterval(t._interval),t._interval=null,o.volume(t._fadeTo,e),t._fadeTo=null,o._emit("fade",e)),o},loop:function(){var e,n,o,t=this,r=arguments;if(0===r.length)return t._loop;if(1===r.length){if("boolean"!=typeof r[0])return!!(o=t._soundById(parseInt(r[0],10)))&&o._loop;e=r[0],t._loop=e}else 2===r.length&&(e=r[0],n=parseInt(r[1],10));for(var a=t._getSoundIds(n),u=0;u<a.length;u++)(o=t._soundById(a[u]))&&(o._loop=e,t._webAudio&&o._node&&o._node.bufferSource&&(o._node.bufferSource.loop=e,e&&(o._node.bufferSource.loopStart=o._start||0,o._node.bufferSource.loopEnd=o._stop)));return t},rate:function(){var e,o,t=this,r=arguments;if(0===r.length)o=t._sounds[0]._id;else if(1===r.length){var a=t._getSoundIds(),u=a.indexOf(r[0]);u>=0?o=parseInt(r[0],10):e=parseFloat(r[0])}else 2===r.length&&(e=parseFloat(r[0]),o=parseInt(r[1],10));var i;if("number"!=typeof e)return i=t._soundById(o),i?i._rate:t._rate;if("loaded"!==t._state||t._playLock)return t._queue.push({event:"rate",action:function(){t.rate.apply(t,r)}}),t;void 0===o&&(t._rate=e),o=t._getSoundIds(o);for(var d=0;d<o.length;d++)if(i=t._soundById(o[d])){t.playing(o[d])&&(i._rateSeek=t.seek(o[d]),i._playStart=t._webAudio?n.ctx.currentTime:i._playStart),i._rate=e,t._webAudio&&i._node&&i._node.bufferSource?i._node.bufferSource.playbackRate.setValueAtTime(e,n.ctx.currentTime):i._node&&(i._node.playbackRate=e);var _=t.seek(o[d]),s=(t._sprite[i._sprite][0]+t._sprite[i._sprite][1])/1e3-_,l=1e3*s/Math.abs(i._rate);!t._endTimers[o[d]]&&i._paused||(t._clearTimer(o[d]),t._endTimers[o[d]]=setTimeout(t._ended.bind(t,i),l)),t._emit("rate",i._id)}return t},seek:function(){var e,o,t=this,r=arguments;if(0===r.length)o=t._sounds[0]._id;else if(1===r.length){var a=t._getSoundIds(),u=a.indexOf(r[0]);u>=0?o=parseInt(r[0],10):t._sounds.length&&(o=t._sounds[0]._id,e=parseFloat(r[0]))}else 2===r.length&&(e=parseFloat(r[0]),o=parseInt(r[1],10));if(void 0===o)return t;if("loaded"!==t._state||t._playLock)return t._queue.push({event:"seek",action:function(){t.seek.apply(t,r)}}),t;var i=t._soundById(o);if(i){if(!("number"==typeof e&&e>=0)){if(t._webAudio){var d=t.playing(o)?n.ctx.currentTime-i._playStart:0,_=i._rateSeek?i._rateSeek-i._seek:0;return i._seek+(_+d*Math.abs(i._rate))}return i._node.currentTime}var s=t.playing(o);s&&t.pause(o,!0),i._seek=e,i._ended=!1,t._clearTimer(o),t._webAudio||!i._node||isNaN(i._node.duration)||(i._node.currentTime=e);var l=function(){t._emit("seek",o),s&&t.play(o,!0)};if(s&&!t._webAudio){var c=function(){t._playLock?setTimeout(c,0):l()};setTimeout(c,0)}else l()}return t},playing:function(e){var n=this;if("number"==typeof e){var o=n._soundById(e);return!!o&&!o._paused}for(var t=0;t<n._sounds.length;t++)if(!n._sounds[t]._paused)return!0;return!1},duration:function(e){var n=this,o=n._duration,t=n._soundById(e);return t&&(o=n._sprite[t._sprite][1]/1e3),o},state:function(){return this._state},unload:function(){for(var e=this,o=e._sounds,t=0;t<o.length;t++)o[t]._paused||e.stop(o[t]._id),e._webAudio||(e._clearSound(o[t]._node),o[t]._node.removeEventListener("error",o[t]._errorFn,!1),o[t]._node.removeEventListener(n._canPlayEvent,o[t]._loadFn,!1),n._releaseHtml5Audio(o[t]._node)),delete o[t]._node,e._clearTimer(o[t]._id);var a=n._howls.indexOf(e);a>=0&&n._howls.splice(a,1);var u=!0;for(t=0;t<n._howls.length;t++)if(n._howls[t]._src===e._src||e._src.indexOf(n._howls[t]._src)>=0){u=!1;break}return r&&u&&delete r[e._src],n.noAudio=!1,e._state="unloaded",e._sounds=[],e=null,null},on:function(e,n,o,t){var r=this,a=r["_on"+e];return"function"==typeof n&&a.push(t?{id:o,fn:n,once:t}:{id:o,fn:n}),r},off:function(e,n,o){var t=this,r=t["_on"+e],a=0;if("number"==typeof n&&(o=n,n=null),n||o)for(a=0;a<r.length;a++){var u=o===r[a].id;if(n===r[a].fn&&u||!n&&u){r.splice(a,1);break}}else if(e)t["_on"+e]=[];else{var i=Object.keys(t);for(a=0;a<i.length;a++)0===i[a].indexOf("_on")&&Array.isArray(t[i[a]])&&(t[i[a]]=[])}return t},once:function(e,n,o){var t=this;return t.on(e,n,o,1),t},_emit:function(e,n,o){for(var t=this,r=t["_on"+e],a=r.length-1;a>=0;a--)r[a].id&&r[a].id!==n&&"load"!==e||(setTimeout(function(e){e.call(this,n,o)}.bind(t,r[a].fn),0),r[a].once&&t.off(e,r[a].fn,r[a].id));return t._loadQueue(e),t},_loadQueue:function(e){var n=this;if(n._queue.length>0){var o=n._queue[0];o.event===e&&(n._queue.shift(),n._loadQueue()),e||o.action()}return n},_ended:function(e){var o=this,t=e._sprite;if(!o._webAudio&&e._node&&!e._node.paused&&!e._node.ended&&e._node.currentTime<e._stop)return setTimeout(o._ended.bind(o,e),100),o;var r=!(!e._loop&&!o._sprite[t][2]);if(o._emit("end",e._id),!o._webAudio&&r&&o.stop(e._id,!0).play(e._id),o._webAudio&&r){o._emit("play",e._id),e._seek=e._start||0,e._rateSeek=0,e._playStart=n.ctx.currentTime;var a=1e3*(e._stop-e._start)/Math.abs(e._rate);o._endTimers[e._id]=setTimeout(o._ended.bind(o,e),a)}return o._webAudio&&!r&&(e._paused=!0,e._ended=!0,e._seek=e._start||0,e._rateSeek=0,o._clearTimer(e._id),o._cleanBuffer(e._node),n._autoSuspend()),o._webAudio||r||o.stop(e._id,!0),o},_clearTimer:function(e){var n=this;if(n._endTimers[e]){if("function"!=typeof n._endTimers[e])clearTimeout(n._endTimers[e]);else{var o=n._soundById(e);o&&o._node&&o._node.removeEventListener("ended",n._endTimers[e],!1)}delete n._endTimers[e]}return n},_soundById:function(e){for(var n=this,o=0;o<n._sounds.length;o++)if(e===n._sounds[o]._id)return n._sounds[o];return null},_inactiveSound:function(){var e=this;e._drain();for(var n=0;n<e._sounds.length;n++)if(e._sounds[n]._ended)return e._sounds[n].reset();return new t(e)},_drain:function(){var e=this,n=e._pool,o=0,t=0;if(!(e._sounds.length<n)){for(t=0;t<e._sounds.length;t++)e._sounds[t]._ended&&o++;for(t=e._sounds.length-1;t>=0;t--){if(o<=n)return;e._sounds[t]._ended&&(e._webAudio&&e._sounds[t]._node&&e._sounds[t]._node.disconnect(0),e._sounds.splice(t,1),o--)}}},_getSoundIds:function(e){var n=this;if(void 0===e){for(var o=[],t=0;t<n._sounds.length;t++)o.push(n._sounds[t]._id);return o}return[e]},_refreshBuffer:function(e){var o=this;return e._node.bufferSource=n.ctx.createBufferSource(),e._node.bufferSource.buffer=r[o._src],e._panner?e._node.bufferSource.connect(e._panner):e._node.bufferSource.connect(e._node),e._node.bufferSource.loop=e._loop,e._loop&&(e._node.bufferSource.loopStart=e._start||0,e._node.bufferSource.loopEnd=e._stop||0),e._node.bufferSource.playbackRate.setValueAtTime(e._rate,n.ctx.currentTime),o},_cleanBuffer:function(e){var o=this,t=n._navigator&&n._navigator.vendor.indexOf("Apple")>=0;if(n._scratchBuffer&&e.bufferSource&&(e.bufferSource.onended=null,e.bufferSource.disconnect(0),t))try{e.bufferSource.buffer=n._scratchBuffer}catch(e){}return e.bufferSource=null,o},_clearSound:function(e){/MSIE |Trident\//.test(n._navigator&&n._navigator.userAgent)||(e.src="data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA")}};var t=function(e){this._parent=e,this.init()};t.prototype={init:function(){var e=this,o=e._parent;return e._muted=o._muted,e._loop=o._loop,e._volume=o._volume,e._rate=o._rate,e._seek=0,e._paused=!0,e._ended=!0,e._sprite="__default",e._id=++n._counter,o._sounds.push(e),e.create(),e},create:function(){var e=this,o=e._parent,t=n._muted||e._muted||e._parent._muted?0:e._volume;return o._webAudio?(e._node=void 0===n.ctx.createGain?n.ctx.createGainNode():n.ctx.createGain(),e._node.gain.setValueAtTime(t,n.ctx.currentTime),e._node.paused=!0,e._node.connect(n.masterGain)):(e._node=n._obtainHtml5Audio(),e._errorFn=e._errorListener.bind(e),e._node.addEventListener("error",e._errorFn,!1),e._loadFn=e._loadListener.bind(e),e._node.addEventListener(n._canPlayEvent,e._loadFn,!1),e._node.src=o._src,e._node.preload="auto",e._node.volume=t*n.volume(),e._node.load()),e},reset:function(){var e=this,o=e._parent;return e._muted=o._muted,e._loop=o._loop,e._volume=o._volume,e._rate=o._rate,e._seek=0,e._rateSeek=0,e._paused=!0,e._ended=!0,e._sprite="__default",e._id=++n._counter,e},_errorListener:function(){var e=this;e._parent._emit("loaderror",e._id,e._node.error?e._node.error.code:0),e._node.removeEventListener("error",e._errorFn,!1)},_loadListener:function(){var e=this,o=e._parent;o._duration=Math.ceil(10*e._node.duration)/10,0===Object.keys(o._sprite).length&&(o._sprite={__default:[0,1e3*o._duration]}),"loaded"!==o._state&&(o._state="loaded",o._emit("load"),o._loadQueue()),e._node.removeEventListener(n._canPlayEvent,e._loadFn,!1)}};var r={},a=function(e){var n=e._src;if(r[n])return e._duration=r[n].duration,void d(e);if(/^data:[^;]+;base64,/.test(n)){for(var o=atob(n.split(",")[1]),t=new Uint8Array(o.length),a=0;a<o.length;++a)t[a]=o.charCodeAt(a);i(t.buffer,e)}else{var _=new XMLHttpRequest;_.open("GET",n,!0),_.withCredentials=e._xhrWithCredentials,_.responseType="arraybuffer",_.onload=function(){var n=(_.status+"")[0];if("0"!==n&&"2"!==n&&"3"!==n)return void e._emit("loaderror",null,"Failed loading audio file with status: "+_.status+".");i(_.response,e)},_.onerror=function(){e._webAudio&&(e._html5=!0,e._webAudio=!1,e._sounds=[],delete r[n],e.load())},u(_)}},u=function(e){try{e.send()}catch(n){e.onerror()}},i=function(e,o){var t=function(){o._emit("loaderror",null,"Decoding audio data failed.")},a=function(e){e&&o._sounds.length>0?(r[o._src]=e,d(o,e)):t()};"undefined"!=typeof Promise&&1===n.ctx.decodeAudioData.length?n.ctx.decodeAudioData(e).then(a).catch(t):n.ctx.decodeAudioData(e,a,t)},d=function(e,n){n&&!e._duration&&(e._duration=n.duration),0===Object.keys(e._sprite).length&&(e._sprite={__default:[0,1e3*e._duration]}),"loaded"!==e._state&&(e._state="loaded",e._emit("load"),e._loadQueue())},_=function(){if(n.usingWebAudio){try{"undefined"!=typeof AudioContext?n.ctx=new AudioContext:"undefined"!=typeof webkitAudioContext?n.ctx=new webkitAudioContext:n.usingWebAudio=!1}catch(e){n.usingWebAudio=!1}n.ctx||(n.usingWebAudio=!1);var e=/iP(hone|od|ad)/.test(n._navigator&&n._navigator.platform),o=n._navigator&&n._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),t=o?parseInt(o[1],10):null;if(e&&t&&t<9){var r=/safari/.test(n._navigator&&n._navigator.userAgent.toLowerCase());(n._navigator&&n._navigator.standalone&&!r||n._navigator&&!n._navigator.standalone&&!r)&&(n.usingWebAudio=!1)}n.usingWebAudio&&(n.masterGain=void 0===n.ctx.createGain?n.ctx.createGainNode():n.ctx.createGain(),n.masterGain.gain.setValueAtTime(n._muted?0:1,n.ctx.currentTime),n.masterGain.connect(n.ctx.destination)),n._setup()}};"function"==typeof define&&define.amd&&define([],function(){return{Howler:n,Howl:o}}),"undefined"!=typeof exports&&(exports.Howler=n,exports.Howl=o),"undefined"!=typeof window?(window.HowlerGlobal=e,window.Howler=n,window.Howl=o,window.Sound=t):"undefined"!=typeof global&&(global.HowlerGlobal=e,global.Howler=n,global.Howl=o,global.Sound=t)}();
    
     } else {
         // not course player do nothing         
     }     
 });
