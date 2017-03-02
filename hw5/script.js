$(window).load(function() { //start after HTML, images have loaded
 
    var InfiniteRotator =
    {
        init: function()
        {
            // Initial fade-in time (in milliseconds)
            var initialFadeIn = 500;
 
            // Default interval between items (in milliseconds)
            var itemInterval = 3000;
 
            // Cross-fade time (in milliseconds)
            var fadeTime = 500;
 
            // Count number of items
            var numberOfItems = $('.rotating-item').length;
 
            // Set current item
            var currentItem = 0;

            // Show first item
            $('.rotating-item').eq(currentItem).fadeIn(initialFadeIn);

            // Rotate forever
            while(1) {
                $('.rotating-item').eq(currentItem).delay(1000).fadeIn(fadeTime);

                // Variable display intervals should be:
                // 3000 ms - JavaScript
                // 5000 ms - Perl
                // 3000 ms - PHP
                // 7000 ms - MySQL
                switch (currentItem) {
                    case 0: itemInterval = 3000;
                        break;
                    case 1: itemInterval = 5000;
                        break;
                    case 2: itemInterval = 3000;
                        break;
                    case 3: itemInterval = 7000;
                        break;
                }

                if(currentItem == numberOfItems -1){
                    currentItem = 0;
                }else{
                    currentItem++;
                }

                $('.rotating-item').eq(currentItem).delay(1000).fadeOut(fadeTime);
            }
 
            // Loop through the items
            /*var infiniteLoop = setInterval(function(){
                $('.rotating-item').eq(currentItem).fadeOut(fadeTime);
 
                if(currentItem == numberOfItems -1){
                    currentItem = 0;
                }else{
                    currentItem++;
                }
                $('.rotating-item').eq(currentItem).fadeIn(fadeTime);
 
            }, itemInterval);
        }*/
    };
 
    InfiniteRotator.init();
 
});