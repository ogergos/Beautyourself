$(document).ready(function(){
    var imgs = $(".imgs");
    var pagination = $(".page-item");
    var length = imgs.length;

    imgs.hide();
    
    for(i=0; i < length / 3; i++){
        imgs.eq(i).show();
        pagination.eq(1).addClass("active");
    };

    pagination.eq(0).click(function(){
                pagination.not(1).removeClass("active");
                imgs.not(0,1,2,3,4,5).hide();
        
                for(i = 0; i < length / 3; i++){
                    imgs.eq(i).fadeIn("slow");
                    pagination.eq(1).addClass("active");
                };
    });

    pagination.eq(1).click(function(){
        pagination.not(1).removeClass("active");
        imgs.not(0,1,2,3,4,5).hide();

        for(i = 0; i < length / 3; i++){
            imgs.eq(i).fadeIn("slow");
            pagination.eq(1).addClass("active");
        };
    });

    pagination.eq(2).click(function(){
        imgs.not(6,7,8,9,10,11).hide();
        pagination.not(2).removeClass("active");
        for(i = length / 3; i < 2 * (length / 3); i++){
            imgs.eq(i).fadeIn("slow");
            pagination.eq(2).addClass("active");
        };
    });

    pagination.eq(3).click(function(){
        imgs.not(12,13,14,15,16,17).hide();
        pagination.not(3).removeClass("active");
        for(i = 2 * (length / 3); i < length; i++){
            imgs.eq(i).fadeIn("slow");
            pagination.eq(3).addClass("active");
        };
    });

    pagination.eq(4).click(function(){
                imgs.not(12,13,14,15,16,17).hide();
                pagination.not(3).removeClass("active");
                for(i = 2 * (length / 3); i < length; i++){
                    imgs.eq(i).fadeIn("slow");
                    pagination.eq(3).addClass("active");
                };        
    });
})