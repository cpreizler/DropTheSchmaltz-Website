          $(document).ready(function(){
                var url = "http://api.flickr.com/services/feeds/photos_public.gne?format=json&jsoncallback=?&tags=kosher,gym";
        
                $.getJSON(url, function(data){
                    var html = "";
                    $.each(data.items, function(i, item){
                        html += "<div style= \"display: inline-block;\"> <img src="+item.media.m +">";
                        html += "<h5>" + item.title + "</h5></div>";	
                    });
                    $("#mot").html(html);
                });          
            });
