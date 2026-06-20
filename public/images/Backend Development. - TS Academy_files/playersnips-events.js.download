// kapowLessonCompleted: course_id, lesson_id
// kapowProgressChanged: progress
// kapowEnrollmentComplete: 
$( document ).ready(function() {
    let __ps_events = [];
    let __ps_progress = 0;
    let __course = {};
    const trigger_event = function(eventName, eventDetails){
        let _event = new CustomEvent(eventName, {
            detail: eventDetails,
            bubbles: true,
            cancelable: true,
            composed: false,
          });
          document.querySelector(".take").dispatchEvent(_event);        
    }
    const process_status = function(){
        //console.log("processing status by looking at UI")
        // check to see if something changed
        let __ps_status = [];
        $(".course-player__content-item a").each(function(){
            var href=$(this).attr("href");
            var id = href.split("/")[5].split("-")[0];
            var is_complete = $(this).parent().hasClass("content-item__progress--complete");        
            __ps_status.push({
                "lesson_id": id,
                "is_complete": is_complete    
            })
        });
        //console.log("now",__ps_status);
        for (let index = 0; index < __ps_status.length; index++) {
            if(__ps_status[index].is_complete != __ps_events[index].is_complete){
                //console.log("status changed",__ps_events[index], __ps_status[index]);
                if(__ps_status[index].is_complete){
                    //console.log("Lesson Completed",__ps_status[index]);
                    trigger_event("kapowLessonCompleted",{
                        "course_id": __course.id,
                        "lesson_id":__ps_status[index].lesson_id
                    })
                    // set current status
                    __ps_events[index].is_complete =  __ps_status[index].is_complete;
                    var progress = parseInt($(".course-progress__percent-complete span").text());
                    trigger_event("kapowProgressChanged",{
                        "progress": progress
                    });
        
                }
                
                
            }
            
        }  
        //console.log("status after process",__ps_events);        
    }
    if(typeof(CoursePlayerV2) !== 'undefined') {
        CoursePlayerV2.on('hooks:contentDidChange', function(data) {
            //console.log("Content Changed");
            __course = data.course;
           
            if(__ps_events.length==0){
                // first time load up initial status
                $(".course-player__content-item a").each(function(){
                    var href=$(this).attr("href");
                    var id = href.split("/")[5].split("-")[0];
                    var is_complete = $(this).parent().hasClass("content-item__progress--complete");
        
                    __ps_events.push({
                        "lesson_id": id,
                        "is_complete": is_complete    
                    })
                });
                //console.log("starting status",__ps_events);                
            } else {
                process_status();
            }
        });
        CoursePlayerV2.on('hooks:contentWasMarkedIncomplete', function(data) {
            //console.log("Marked incompleted");
            //lets just mark off what has changed
            for (let index = 0; index < __ps_events.length; index++) {
                const element = __ps_events[index];
                if(element.lesson_id==data.lesson.id){
                    //console.log("found lesson - marking incomplete");
                    __ps_events[index].is_complete=false;
                }
            }
            //console.log("status after incomplete",__ps_events); 
            var progress = parseInt($(".course-progress__percent-complete span").text());
            trigger_event("kapowProgressChanged",{
                "progress": progress
            })

            //process_status();
        });
        /* This event is for some reason no longer firing */
        CoursePlayerV2.on('hooks:enrollmentWasCompleted', function(data) {
            //console.log("Enrollment completed",data);
            //process_status();
            // lets go through and see if anything changed
            for (let index = 0; index < __ps_events.length; index++) {
                const element = __ps_events[index];
                if(!element.is_complete){
                    //console.log("Lesson Completed",element);
                    trigger_event("kapowLessonCompleted",{
                        "course_id": __course.id,
                        "lesson_id":element.lesson_id
                    });
                    __ps_events[index].is_complete =  true;
                    var progress = parseInt($(".course-progress__percent-complete span").text());
                    trigger_event("kapowProgressChanged",{
                        "progress": progress
                    })
        
                }
            }
            //console.log("status after enrollment completion",__ps_events); 
        });
        CoursePlayerV2.on('hooks:contentWasCompleted', function(data) {
            var progress = parseInt($(".course-progress__percent-complete span").text());
            //console.log("progress",progress);
            if(progress==100){
                // lets go through and see if anything changed
                for (let index = 0; index < __ps_events.length; index++) {
                    const element = __ps_events[index];
                    if(!element.is_complete){
                        //console.log("Lesson Completed",element);
                        trigger_event("kapowLessonCompleted",{
                            "course_id": __course.id,
                            "lesson_id":element.lesson_id
                        })
                        __ps_events[index].is_complete =  true;
                    }
                }
                //console.log("status after enrollment completion",__ps_events);                 
                var progress = parseInt($(".course-progress__percent-complete span").text());
                trigger_event("kapowProgressChanged",{
                    "progress": progress
                });
                var progress = parseInt($(".course-progress__percent-complete span").text());
                trigger_event("kapowEnrollmentComplete",{
                    
                })
    
    
            } else {
                for (let index = 0; index < __ps_events.length; index++) {
                    const element = __ps_events[index];
                    if(element.lesson_id==data.lesson.id){
                        //console.log("Lesson Completed",element);
                        trigger_event("kapowLessonCompleted",{
                            "course_id": data.course.id,
                            "lesson_id":element.lesson_id
                        })
                        __ps_events[index].is_complete =  true;
                    }
                }


            }
            //console.log("Content was completed",data);
        });
    }
})