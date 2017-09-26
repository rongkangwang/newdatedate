function newdatedate(name){
    var datestr = $(name).val();
    if(datestr==""||datestr==null){
        isdateformatvalidate = 1;
        $(name).css("border", " 1px solid #aaa");
    }
    else{
        
        datestr = datestr.replace(new RegExp("/",'gm'),"");
        if(datestr.indexOf("-")==-1){
            var dateresult = getdateresult(datestr,name);
            if(dateresult==false){
                isdateformatvalidate = 0;
                $("#dateredfieldname").val(name);
                return;
            }else{
                isdateformatvalidate = 1;
                $(name).val(dateresult);
            }
        }
        else{
            var datestrarray = datestr.split("-");
            if(datestrarray[0]==datestrarray[1]){
                isdateformatvalidate = 0;
                $("#dateredfieldname").val(name);
                $(name).css("border", "4px solid red");
                $(name).focus();
                return;
            }
            var dateresult1 = getdateresult(datestrarray[0],name);
            if(dateresult1==false){
                isdateformatvalidate = 0;
                $("#dateredfieldname").val(name);
                return;
            }
            var dateresult2 = getdateresult(datestrarray[1],name);
            if(dateresult2==false){
                isdateformatvalidate = 0;
                $("#dateredfieldname").val(name);
                return;
            }
            if(dateresult1.indexOf("-")!=-1&&dateresult2.indexOf("-")!=-1){
                isdateformatvalidate = 1;
                $(name).val(dateresult1.split("-")[0]+"-"+dateresult2.split("-")[1]);
            }else if(dateresult1.indexOf("-")==-1&&dateresult2.indexOf("-")==-1){
                isdateformatvalidate = 1;
                $(name).val(dateresult1+"-"+dateresult2);
            }else{
                isdateformatvalidate = 0;
                $("#dateredfieldname").val(name);
                $(name).css("border", "4px solid red");
                $(name).focus();
                return;
            }
        }
        //alert(datestr);
        
    }
}

function getdateresult(datestr,name){
    var year;
        var month;
        var day;
    for(var i=0;i<datestr.length;i++){
            if(datestr[i]<"0"||datestr[i]>"9"){
                $(name).css("border", "4px solid red");
                $(name).focus();
                return false;
            }
        }
        if(datestr.length==6){
            var monthstr = datestr.substring(0,2);
            month = parseInt(monthstr);
            if(month>12){
                $(name).css("border", "4px solid red");
                $(name).focus();
                return false;
            }
            var yearstr = datestr.substring(2,6);
            year = parseInt(yearstr);
            if(month==2){
                if(year%400==0){
                    //$(name).val("02/01/"+year+"-02/29/"+year);
                    $(name).css("border", " 1px solid #aaa");
                    return "02/01/"+year+"-02/29/"+year;
                }
                else
                {
                    if((year%4==0)&&(year%100!=0))
                    {
                        //$(name).val("02/01/"+year+"-02/29/"+year);
                        $(name).css("border", " 1px solid #aaa");
                        return "02/01/"+year+"-02/29/"+year;
                    }
                    else
                    {
                        //$(name).val("02/01/"+year+"-02/28/"+year);
                        $(name).css("border", " 1px solid #aaa");
                        return "02/01/"+year+"-02/28/"+year;
                    }
                }
            }else{
                if(month==1||month==3||month==5||month==7||month==8||month==10||month==12){
                    //$(name).val(monthstr+"/01/"+year+"-"+monthstr+"/31/"+year);
                    $(name).css("border", " 1px solid #aaa");
                    return monthstr+"/01/"+year+"-"+monthstr+"/31/"+year;
                }else{
                    //$(name).val(monthstr+"/01/"+year+"-"+monthstr+"/30/"+year);
                    $(name).css("border", " 1px solid #aaa");
                    return monthstr+"/01/"+year+"-"+monthstr+"/30/"+year;
                }
            }

        }else if(datestr.length==8){
            var monthstr = datestr.substring(0,2);
            var daystr = datestr.substring(2,4);
            var yearstr = datestr.substring(4,8);
            month = parseInt(monthstr);
            day = parseInt(daystr);
            year = parseInt(yearstr);
            
            if(month>12){
                //$(name).val(monthstr+"/"+daystr+"/"+year);
                $(name).css("border", "4px solid red");
                $(name).focus();
                return false;
            }
            if(day>31){
                //$(name).val(monthstr+"/"+daystr+"/"+year);
                $(name).css("border", "4px solid red");
                $(name).focus();
                return false;
            }
            if((month==2||month==4||month==6||month==9||month==11)&&day>30){
                //$(name).val();
                //$(name).val(monthstr+"/"+daystr+"/"+year);
                $(name).css("border", "4px solid red");
                $(name).focus();
                return false;
            }
            else if(month==2&&day==29){
                if(year%400==0){
                    //$(name).val("02/29/"+year);
                    $(name).css("border", " 1px solid #aaa");
                    return "02/29/"+yearstr;
                }
                else
                {
                    if((year%4==0)&&(year%100!=0))
                    {
                        //$(name).val("02/29/"+year);
                        $(name).css("border", " 1px solid #aaa");
                        return "02/29/"+yearstr;
                    }
                    else
                    {
                        //$(name).val(monthstr+"/"+daystr+"/"+year);
                        $(name).css("border", "4px solid red");
                        $(name).focus();
                        return false;
                    }
                }
            }
            else if(month==2&&day>29){
                //$(name).val(monthstr+"/"+daystr+"/"+year);
                $(name).css("border", "4px solid red");
                $(name).focus();
                return false;
    //            if(((year%4==0)&&(year%100!=0))||year%400==0){
    //                $(name).val(monthstr+"/29"+"/"+year);
    //                $(name).css("border", "4px solid red");
    //                $(name).focus();
    //            }else{
    //                $(name).val(monthstr+"/"+"/"+year);
    //                $(name).css("border", "4px solid red");
    //                $(name).focus();
    //            }
            }else{
                //$(name).val(monthstr+"/"+daystr+"/"+year);
                $(name).css("border", " 1px solid #aaa");
                return monthstr+"/"+daystr+"/"+yearstr;
            }
        }else{
            $(name).css("border", "4px solid red");
            $(name).focus();
            return false;
        }
}

function newdatedatesingle(name){
    var datestr = $(name).val();
    if(datestr==""||datestr==null){
        isdateformatvalidate = 1;
        $(name).css("border", " 1px solid #aaa");
    }
    else{
        datestr = datestr.replace(new RegExp("/",'gm'),"");
        var year;
        var month;
        var day;
        for(var i=0;i<datestr.length;i++){
            if(datestr[i]<"0"||datestr[i]>"9"){
                isdateformatvalidate = 0;
                $("#dateredfieldname").val(name);
                $(name).css("border", "4px solid red");
                $(name).focus();
                return;
            }
        }
        if(datestr.length==8){
            var monthstr = datestr.substring(0,2);
            var daystr = datestr.substring(2,4);
            var yearstr = datestr.substring(4,8);
            month = parseInt(monthstr);
            day = parseInt(daystr);
            year = parseInt(yearstr);
            
            if(month>12){
                //$(name).val(monthstr+"/"+daystr+"/"+year);
                isdateformatvalidate = 0;
                $("#dateredfieldname").val(name);
                $(name).css("border", "4px solid red");
                $(name).focus();
                return;
            }
            if(day>31){
                //$(name).val(monthstr+"/"+daystr+"/"+year);
                isdateformatvalidate = 0;
                $("#dateredfieldname").val(name);
                $(name).css("border", "4px solid red");
                $(name).focus();
                return;
            }
            if((month==2||month==4||month==6||month==9||month==11)&&day>30){
                //$(name).val();
                //$(name).val(monthstr+"/"+daystr+"/"+year);
                isdateformatvalidate = 0;
                $("#dateredfieldname").val(name);
                $(name).css("border", "4px solid red");
                $(name).focus();
                return;
            }
            else if(month==2&&day==29){
                if(year%400==0){
                    isdateformatvalidate = 1;
                    $(name).val("02/29/"+year);
                    $(name).css("border", " 1px solid #aaa");
                    //return "02/29/"+yearstr;
                }
                else
                {
                    if((year%4==0)&&(year%100!=0))
                    {
                        isdateformatvalidate = 1;
                        $(name).val("02/29/"+year);
                        $(name).css("border", " 1px solid #aaa");
                        //return "02/29/"+yearstr;
                    }
                    else
                    {
                        //$(name).val(monthstr+"/"+daystr+"/"+year);
                        isdateformatvalidate = 0;
                $("#dateredfieldname").val(name);
                        $(name).css("border", "4px solid red");
                        $(name).focus();
                        return;
                    }
                }
            }
            else if(month==2&&day>29){
                //$(name).val(monthstr+"/"+daystr+"/"+year);
                isdateformatvalidate = 0;
                $("#dateredfieldname").val(name);
                $(name).css("border", "4px solid red");
                $(name).focus();
                return;
    //            if(((year%4==0)&&(year%100!=0))||year%400==0){
    //                $(name).val(monthstr+"/29"+"/"+year);
    //                $(name).css("border", "4px solid red");
    //                $(name).focus();
    //            }else{
    //                $(name).val(monthstr+"/"+"/"+year);
    //                $(name).css("border", "4px solid red");
    //                $(name).focus();
    //            }
            }else{
                isdateformatvalidate = 1;
                $(name).val(monthstr+"/"+daystr+"/"+year);
                $(name).css("border", " 1px solid #aaa");
                //return monthstr+"/"+daystr+"/"+yearstr;
            }
        }else{
            isdateformatvalidate = 0;
            $("#dateredfieldname").val(name);
            $(name).css("border", "4px solid red");
            $(name).focus();
            return;
        }
    }
}

function newphone(name){
    var phonestr = $(name).val();
    
    if(phonestr==""||phonestr==null){
        isdateformatvalidate = 1;
        $(name).css("border", " 1px solid #aaa");
    }else{
        phonestr = phonestr.replace(new RegExp("-",'gm'),"");
        phonestr = phonestr.replace(new RegExp("\\(",'gm'),"");
        phonestr = phonestr.replace(new RegExp("\\)",'gm'),"");
        for(var i=0;i<phonestr.length;i++){
            if(phonestr[i]<"0"||phonestr[i]>"9"){
                isdateformatvalidate = 0;
                $("#dateredfieldname").val(name);
                $(name).css("border", "4px solid red");
                $(name).focus();
                return;
            }
        }
        if(phonestr.length==10){
            isdateformatvalidate = 1;
            
            $(name).val("("+phonestr.substring(0,3)+")"+phonestr.substring(3,6)+"-"+phonestr.substring(6,10));
            $(name).css("border", " 1px solid #aaa");
        }else{
            isdateformatvalidate = 0;
            $("#dateredfieldname").val(name);
            $(name).css("border", "4px solid red");
            $(name).focus();
            return;
        }
    }
}

function newtime(name){
    var timestr = $(name).val();
    
    if(timestr==""||timestr==null){
        isdateformatvalidate = 1;
        $(name).css("border", " 1px solid #aaa");
    }else{
        timestr = timestr.replace(new RegExp(":",'gm'),"");
        for(var i=0;i<timestr.length;i++){
            if(timestr[i]<"0"||timestr[i]>"9"){
                isdateformatvalidate = 0;
                $("#dateredfieldname").val(name);
                $(name).css("border", "4px solid red");
                $(name).focus();
                return;
            }
        }
        if(timestr.length==4){
            var hourstr = timestr.substring(0,2);
            var hour = parseInt(hourstr);
            var minstr = timestr.substring(2,4)
            var min = parseInt(minstr);
            if(hour>23){
                //$(name).val(monthstr+"/"+daystr+"/"+year);
                isdateformatvalidate = 0;
                $("#dateredfieldname").val(name);
                $(name).css("border", "4px solid red");
                $(name).focus();
                return;
            }
            if(min>59){
                //$(name).val(monthstr+"/"+daystr+"/"+year);
                isdateformatvalidate = 0;
                $("#dateredfieldname").val(name);
                $(name).css("border", "4px solid red");
                $(name).focus();
                return;
            }
            isdateformatvalidate = 1;
            
            $(name).val(hourstr+":"+minstr);
            $(name).css("border", " 1px solid #aaa");
        }else{
            isdateformatvalidate = 0;
            $("#dateredfieldname").val(name);
            $(name).css("border", "4px solid red");
            $(name).focus();
            return;
        }
    }
}
(function($){
$.fn.extend({
    newdatedate:function(options){
        if(options == null){
            $(this).blur(function(){
                newdatedate(this);
            });
        }else{
            if(options.type == "range"){
                $(this).blur(function(){
                    newdatedate(this);
                });
            }else if(ptions.type == "single"){
                $(this).blur(function(){
                    newdatedatesingle(this);
                });
            }else{

            }
        }
    },
    newdatedatesingle:function(options){
        $(this).blur(function(){
            newdatedatesingle(this);
        });
    },
    newphone:function(options){
        $(this).blur(function(){
            newphone(this);
        });
    },
    newtime:function(options){
        $(this).blur(function(){
            newtime(this);
        });
    }
});
})(jQuery);