    
    
    // Toggle the side navigation  

    $("#menu-toggle").click(function(e){
      
        
        e.preventDefault();$("#wrapper").toggleClass("toggled");});



        $(".slidebar-nav").hover(function(e){
      
        
           $("#wrapper").removeClass("toggled");
        
        
        });


        

        $(".slidebar-nav").mouseleave(function(e){
      
        
            $("#wrapper").addClass("toggled");
  
  
         
         
         });


         

var bar = new ProgressBar.Circle("#prograssBar", {
    color: '#000',
    // This has to be the same size as the maximum width to
    // prevent clipping
    strokeWidth: 6,
    trailWidth: 2,
    easing: 'easeInOut',
    duration: 1600,
    text: {
      autoStyleContainer: false
    },
    from: { color: '#aaa', width: 2 },
    to: { color: '#80E06782', width: 4 },
    // Set default step function for all animate calls
    step: function(state, circle) {
      circle.path.setAttribute('stroke', state.color);
      circle.path.setAttribute('stroke-width', state.width);
  
      var value = Math.round(circle.value() * 100);
      if (value === 0) {
        circle.setText('0%');
      } else {
        circle.setText(value+"%");
      }
  
    }
  });
  bar.text.style.fontSize = '2rem';
  
bar.animate(0.5);  