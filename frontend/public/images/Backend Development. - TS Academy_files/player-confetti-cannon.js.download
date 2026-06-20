$( document ).ready(function() {
    var JSConfetti=function(){"use strict";function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function i(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}function n(t){return+t.replace(/px/,"")}function s(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,n=Math.random()*(e-t)+t;return Math.floor(n*Math.pow(10,i))/Math.pow(10,i)}function o(t){return t[s(0,t.length)]}var a=["#fcf403","#62fc03","#f4fc03","#03e7fc","#03fca5","#a503fc","#fc03ad","#fc03c2"];function r(t){return Math.log(t)/Math.log(1920)}var h=function(){function e(i){t(this,e);var n=i.initialPosition,a=i.direction,h=i.confettiRadius,c=i.confettiColors,u=i.emojis,l=i.emojiSize,d=i.canvasWidth,f=s(.9,1.7,3)*r(d);this.confettiSpeed={x:f,y:f},this.finalConfettiSpeedX=s(.2,.6,3),this.rotationSpeed=u.length?.01:s(.03,.07,3)*r(d),this.dragForceCoefficient=s(5e-4,9e-4,6),this.radius={x:h,y:h},this.initialRadius=h,this.rotationAngle="left"===a?s(0,.2,3):s(-.2,0,3),this.emojiSize=l,this.emojiRotationAngle=s(0,2*Math.PI),this.radiusYUpdateDirection="down";var m="left"===a?s(82,15)*Math.PI/180:s(-15,-82)*Math.PI/180;this.absCos=Math.abs(Math.cos(m)),this.absSin=Math.abs(Math.sin(m));var v=s(-150,0),p={x:n.x+("left"===a?-v:v)*this.absCos,y:n.y-v*this.absSin};this.currentPosition=Object.assign({},p),this.initialPosition=Object.assign({},p),this.color=u.length?null:o(c),this.emoji=u.length?o(u):null,this.createdAt=(new Date).getTime(),this.direction=a}return i(e,[{key:"draw",value:function(t){var e=this.currentPosition,i=this.radius,n=this.color,s=this.emoji,o=this.rotationAngle,a=this.emojiRotationAngle,r=this.emojiSize,h=window.devicePixelRatio;n?(t.fillStyle=n,t.beginPath(),t.ellipse(e.x*h,e.y*h,i.x*h,i.y*h,o,0,2*Math.PI),t.fill()):s&&(t.font="".concat(r,"px serif"),t.save(),t.translate(h*e.x,h*e.y),t.rotate(a),t.textAlign="center",t.fillText(s,0,0),t.restore())}},{key:"updatePosition",value:function(t,e){var i=this.confettiSpeed,n=this.dragForceCoefficient,s=this.finalConfettiSpeedX,o=this.radiusYUpdateDirection,a=this.rotationSpeed,r=this.createdAt,h=this.direction,c=e-r;i.x>s&&(this.confettiSpeed.x-=n*t),this.currentPosition.x+=i.x*("left"===h?-this.absCos:this.absCos)*t,this.currentPosition.y=this.initialPosition.y-i.y*this.absSin*c+.00125*Math.pow(c,2)/2,this.rotationSpeed-=this.emoji?1e-4:1e-5*t,this.rotationSpeed<0&&(this.rotationSpeed=0),this.emoji?this.emojiRotationAngle+=this.rotationSpeed*t%(2*Math.PI):"down"===o?(this.radius.y-=t*a,this.radius.y<=0&&(this.radius.y=0,this.radiusYUpdateDirection="up")):(this.radius.y+=t*a,this.radius.y>=this.initialRadius&&(this.radius.y=this.initialRadius,this.radiusYUpdateDirection="down"))}},{key:"getIsVisibleOnCanvas",value:function(t){return this.currentPosition.y<t+100}}]),e}();function c(){var t=document.createElement("canvas");return t.style.position="fixed",t.style.width="100%",t.style.height="100%",t.style.top="0",t.style.left="0",t.style.zIndex="1000",t.style.pointerEvents="none",document.body.appendChild(t),t}function u(t){var e=t.confettiRadius,i=void 0===e?6:e,n=t.confettiNumber,s=void 0===n?t.confettiesNumber||(t.emojis?40:250):n,o=t.confettiColors,r=void 0===o?a:o,h=t.emojis,c=void 0===h?t.emojies||[]:h,u=t.emojiSize,l=void 0===u?80:u;return t.emojies&&console.error("emojies argument is deprecated, please use emojis instead"),t.confettiesNumber&&console.error("confettiesNumber argument is deprecated, please use confettiNumber instead"),{confettiRadius:i,confettiNumber:s,confettiColors:r,emojis:c,emojiSize:l}}var l=function(){function e(i){var n=this;t(this,e),this.canvasContext=i,this.shapes=[],this.promise=new Promise((function(t){return n.resolvePromise=t}))}return i(e,[{key:"getBatchCompletePromise",value:function(){return this.promise}},{key:"addShapes",value:function(){var t;(t=this.shapes).push.apply(t,arguments)}},{key:"complete",value:function(){var t;return!this.shapes.length&&(null===(t=this.resolvePromise)||void 0===t||t.call(this),!0)}},{key:"processShapes",value:function(t,e,i){var n=this,s=t.timeDelta,o=t.currentTime;this.shapes=this.shapes.filter((function(t){return t.updatePosition(s,o),t.draw(n.canvasContext),!i||t.getIsVisibleOnCanvas(e)}))}}]),e}();return function(){function e(){var i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};t(this,e),this.activeConfettiBatches=[],this.canvas=i.canvas||c(),this.canvasContext=this.canvas.getContext("2d"),this.requestAnimationFrameRequested=!1,this.lastUpdated=(new Date).getTime(),this.iterationIndex=0,this.loop=this.loop.bind(this),requestAnimationFrame(this.loop)}return i(e,[{key:"loop",value:function(){var t,e,i,s,o;this.requestAnimationFrameRequested=!1,t=this.canvas,e=window.devicePixelRatio,i=getComputedStyle(t),s=n(i.getPropertyValue("width")),o=n(i.getPropertyValue("height")),t.setAttribute("width",(s*e).toString()),t.setAttribute("height",(o*e).toString());var a=(new Date).getTime(),r=a-this.lastUpdated,h=this.canvas.offsetHeight,c=this.iterationIndex%10==0;this.activeConfettiBatches=this.activeConfettiBatches.filter((function(t){return t.processShapes({timeDelta:r,currentTime:a},h,c),!c||!t.complete()})),this.iterationIndex++,this.queueAnimationFrameIfNeeded(a)}},{key:"queueAnimationFrameIfNeeded",value:function(t){this.requestAnimationFrameRequested||this.activeConfettiBatches.length<1||(this.requestAnimationFrameRequested=!0,this.lastUpdated=t||(new Date).getTime(),requestAnimationFrame(this.loop))}},{key:"addConfetti",value:function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=u(t),i=e.confettiRadius,n=e.confettiNumber,s=e.confettiColors,o=e.emojis,a=e.emojiSize,r=this.canvas.getBoundingClientRect(),c=r.width,d=r.height,f=5*d/7,m={x:0,y:f},v={x:c,y:f},p=new l(this.canvasContext),g=0;g<n/2;g++){var y=new h({initialPosition:m,direction:"right",confettiRadius:i,confettiColors:s,confettiNumber:n,emojis:o,emojiSize:a,canvasWidth:c}),C=new h({initialPosition:v,direction:"left",confettiRadius:i,confettiColors:s,confettiNumber:n,emojis:o,emojiSize:a,canvasWidth:c});p.addShapes(y,C)}return this.activeConfettiBatches.push(p),this.queueAnimationFrameIfNeeded(),p.getBatchCompletePromise()}},{key:"clearCanvas",value:function(){this.activeConfettiBatches=[]}}]),e}()}();    

    if(typeof(CoursePlayerV2) !== 'undefined') {
        const jsConfetti = new JSConfetti();
          
        document.querySelector(".take").addEventListener("kapowLessonCompleted", (event) => {
            console.log("******** kapowLessonCompleted",event);
            var data = event.detail;
        //CoursePlayerV2.on('hooks:contentWasCompleted', function(data) {
            console.log("Content was completed",data);
            // check if any match in window.__confetti_canon_lesson_complete
            if(typeof(window.__confetti_canon_lesson_complete)!="undefined"){
                console.log("window.__confetti_canon_lesson_complete",window.__confetti_canon_lesson_complete);
                window.__confetti_canon_lesson_complete.forEach(function(confetti){
                    console.log("confetti",confetti);
                    if(confetti.course_id==data.course_id && confetti.lesson_id==data.lesson_id){
                        console.log("found match",confetti);
                        if(typeof(confetti.options.confettiColors)!="undefined"){
                            var options = {
                                confettiColors: confetti.options.confettiColors
                            }
                                if(typeof(confetti.options.confettiRadius)!="undefined"){
                                    options.confettiRadius = parseInt(confetti.options.confettiRadius);
                                }
                                if(typeof(confetti.options.confettiNumber)!="undefined"){
                                    options.confettiNumber = parseInt(confetti.options.confettiNumber);
                                }                                
                            jsConfetti.addConfetti(options); 

                        }
                        if(typeof(confetti.options.emojis)!="undefined"){
                            var emoji_options = {
                                emojis: confetti.options.emojis
                            }
                            if(typeof(confetti.options.emojiSize)!="undefined"){
                                emoji_options.emojiSize = parseInt(confetti.options.emojiSize);
                            }
                            if(typeof(confetti.options.confettiNumber)!="undefined"){
                                emoji_options.confettiNumber = parseInt(confetti.options.confettiNumber);
                            }                                
                            jsConfetti.addConfetti(emoji_options);                         
                        }
                        
                    }
                })
            }
        }); 
        CoursePlayerV2.on('hooks:contentDidChange', function(data) {
            //console.log("Content changed",data);
            window.setTimeout(function(){
               if($(".take .kapow-confetti").length>0){
                  //console.log("Confetti Detected");
                  $(".take .kapow-confetti").each(function(){
                      console.log("found",$(this));
                      var colors = $(this).data("color");
                      var emojis = $(this).data("emojis");
                      var trigger = $(this).data("trigger");
                      var confettiNumber = $(this).data("number");
                      
                      var options = {};
                      if(typeof(colors)!="undefined"){
                            var is_predefined_color=false;

                            if(colors=="fall"){
                                options.confettiColors= [
                                    '#44355b', '#31263e', '#221e22', '#eca72c', '#ee5622', '#ee5622',
                                    ]
                                    is_predefined_color=true;
                            }
                            if(colors=="halloween"){
                                options.confettiColors= [
                                    '#ff6d00', '#9d4edd', '#ff8500', '#5a189a', '#ff9e00', '#240046',
                                ]
                                is_predefined_color=true;
                            }  
                            if(colors=="xmas"){
                                options.confettiColors= [
                                    '#ba0c0c', '#27a300', '#ff0000', '#005c00', '#27a300', '#ba0c0c',
                                ]
                                is_predefined_color=true;
                            }    
                            if(colors=="gold"){
                                options.confettiColors= [
                                    '#76520e', '#926c15', '#c9a227', '#edc531', '#ffe169', '#edc531',
                                ]
                                is_predefined_color=true;
                            }   
                            if(colors=="silver"){
                                options.confettiColors= [
                                    '#343a40', '#495057', '#6c757d', '#adb5bd', '#ced4da', '#dee2e6',
                                ]
                                is_predefined_color=true;
                            }   
                            if(colors=="pride"){
                                options.confettiColors= [
                                    '#ff595e', '#ffca3a', '#8ac926', '#1982c4', '#6a4c93'
                                ]
                                is_predefined_color=true;
                            } 
                            if(colors=="winter"){
                                options.confettiColors= [
                                    '#03045e', '#023e8a', '#0077b6', '#0096c7', '#00b4d8','#48cae4','#90e0ef','#ade8f4','#caf0f8'
                                ]
                                is_predefined_color=true;
                            }  
                            if(colors=="spring"){
                                options.confettiColors= [
                                    '#d3f8e2', '#e4c1f9', '#f694c1', '#ede7b1', '#a9def9'
                                ]
                                is_predefined_color=true;
                            }                                                                                                                                                                                                
                            if(colors=="summer"){
                                options.confettiColors= [
                                    '#0081a7', '#00afb9', '#fdfcdc', '#fed9b7', '#f07167'
                                ]
                                is_predefined_color=true;
                            }                                                                                                                                                                                                
                            if(colors=="bright"){
                                options.confettiColors= [
                                    '#ffbe0b', '#fb5607', '#ff006e', '#8338ec', '#3a86ff'
                                ]
                                is_predefined_color=true;
                            }                                                                                                                                                                                                
                            if(colors=="muted"){
                                options.confettiColors= [
                                    '#ff99c8', '#fcf6bd', '#d0f4de', '#a9def9', '#e4c1f9'
                                ]
                                is_predefined_color=true;
                            }                                                                                                                                                                                                
                            if(colors=="explosion"){
                                options.confettiColors= [
                                    '#ff0000', '#ff8700', '#ffd300', '#deff0a', '#a1ff0a','#0aff99','#0aefff','#147df5','#580aff','#be0aff'
                                ]
                                is_predefined_color=true;
                            }                                                                                                                                                                                                
                            if(colors=="love"){
                                options.confettiColors= [
                                    '#ff0a54', '#ff477e','#ff5c8a', '#ff7096', '#ff85a1','#ff99ac','#fbb1bd','#f7cad0'
                                ]
                                is_predefined_color=true;
                            }                                                                                                                                                                                                

                            try {
                                if(!is_predefined_color){
                                    options.confettiColors = colors.split(" ")
                                } 
                                var confettiRadius = $(this).data("size");
                                if(typeof(confettiRadius)!="undefined"){
                                    options.confettiRadius = parseInt(confettiRadius);
                                }
                                if(typeof(confettiNumber)!="undefined"){
                                    options.confettiNumber = parseInt(confettiNumber);
                                }                                
                                
                                if(trigger=="lesson_start"){
                                    jsConfetti.addConfetti(options); 
                                }                    
                                    
                            } catch (error) {
                                console.log("Error confetti colors",error)
                            } 
                        
                      }
                      if(typeof(emojis)!="undefined"){
                        var is_predefined_emoji=false;

                        if(emojis=="fall"){
                            options.emojis= [
                                '🦃','🍁','🎃'
                                ]
                                is_predefined_emoji=true;
                        }
                        if(emojis=="halloween"){
                            options.emojis= [
                                '👻','💀','🎃'
                                ]
                                is_predefined_emoji=true;
                        }
                        if(emojis=="xmas"){
                            options.emojis= [
                                "🎄","🎅","❄️","🎁"
                                ]
                                is_predefined_emoji=true;
                        } 
                        if(emojis=="pride"){
                            options.emojis= [
                                "🌈 "
                                ]
                                is_predefined_emoji=true;
                        }                         
                        if(emojis=="winter"){
                            options.emojis= [
                                "❄️","⛄️"
                                ]
                                is_predefined_emoji=true;
                        } 
                        if(emojis=="spring"){
                            options.emojis= [
                                "🌼","🌸","🌺"
                                ]
                                is_predefined_emoji=true;
                        }     
                        if(emojis=="summer"){
                            options.emojis= [
                                "🏖","😎", "☀️"
                                ]
                                is_predefined_emoji=true;
                        } 
                        if(emojis=="celebrate"){
                            options.emojis= ["🎊","🎉","⏰"]
                                is_predefined_emoji=true;
                        }   
                        if(emojis=="money"){
                            options.emojis= ["💸","💰","💵","🤑"]
                                is_predefined_emoji=true;
                        }   
                        if(emojis=="unicorns"){
                            options.emojis= [ "🌈"," 🦄" ]
                                is_predefined_emoji=true;
                        }
                        if(emojis=="highfives"){
                            options.emojis= ["🙌","👏","👊"]
                                is_predefined_emoji=true;
                        }
                        if(emojis=="highfivesdark"){
                            options.emojis= ["👏🏾","🙌🏾","👊🏾"]
                                is_predefined_emoji=true;
                        } 
                        if(emojis=="no-time-for-bs"){
                            options.emojis= ["⏰","🐂","💩"]
                                is_predefined_emoji=true;
                        }      
                        if(emojis=="gotime"){
                            options.emojis= ["😎","🚀","🚨","🎯"]
                                is_predefined_emoji=true;
                        }    
                        if(emojis=="tickettosuccess"){
                            options.emojis= ["🎟","💰","🔓"]
                                is_predefined_emoji=true;
                        }
                        if(emojis=="rockstar"){
                            options.emojis= ["🎸","🗿","⭐️"]
                                is_predefined_emoji=true;
                        } 
                        if(emojis=="luck"){
                            options.emojis= ["🍀"]
                                is_predefined_emoji=true;
                        } 
                        if(emojis=="stars"){
                            options.emojis= ["💫","✨","🌜"]
                                is_predefined_emoji=true;
                        }     
                        if(emojis=="inbox"){
                            options.emojis=  ["📬","📨"]
                                is_predefined_emoji=true;
                        } 
                        if(emojis=="calendar"){
                            options.emojis=  ["📌","📝","📅"]
                                is_predefined_emoji=true;
                        }                                                                                                                                                                                                                                                                                                                                                                                                                                   

                        try {
                            if(!is_predefined_emoji){
                                options.emojis = emojis.split(" ");          
                            } 
                            var emojiSize = $(this).data("size");
                            if(typeof(emojiSize)!="undefined"){
                                options.emojiSize = parseInt(emojiSize);
                            }
                            if(typeof(confettiNumber)!="undefined"){
                                options.confettiNumber = parseInt(confettiNumber);
                            }                               

                            if(trigger=="lesson_start"){
                                jsConfetti.addConfetti(options); 
                            }                              
                        
                        } catch (error) {
                            console.log("Error confetti emojis",error)                                      
                                
                        }

                      }
                      if(trigger=="lesson_complete"){
                        var confetti_canon_options =     {
                                "course_id":data.course.id,
                                "lesson_id":data.lesson.id,
                                "options":options
                            }    
                          
                        if(typeof(window.__confetti_canon_lesson_complete)!="undefined" ){
                            
                        } else {
                            window.__confetti_canon_lesson_complete=[];
                        }     
                        var already_added = false;
                        window.__confetti_canon_lesson_complete.forEach(function(confetti){
                            console.log("confetti",confetti);
                            if(confetti.course_id==data.course.id && confetti.lesson_id==data.lesson.id){
                                console.log("already added");
                                already_added = true; 
                                
                            }
                        })
                        if(!already_added){
                            console.log("Not Added - add to list")
                            window.__confetti_canon_lesson_complete.push(confetti_canon_options);    
                        }
                        
                      } else {
                                            
                      }
                      
                      
                  })             
               }            
            }, 1000)           
    
    
        });      
    
     } else {
         // not course player do nothing         
     }     
 });
