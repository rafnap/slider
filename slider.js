(function($){
$.fn.slider=function(){

	this.find('li').hide();
	this.find('li.active, li.arrows').show();
	
	var prv='<li class="arrows prev"><span class="glyphicon glyphicon-chevron-left"></span></li>'
	this.prepend(prv);

	var nxt = '<li class="arrows next"><span class="glyphicon glyphicon-chevron-right"></span></li>'
	this.append(nxt);

	var next = $('.slider li.next');
	var prev = $('.slider li.prev');

	$(next).click(() => {

		var activePosition = $('.slider li').index($('li.active'));
		var children = this.children();
		if (children.length-2 === activePosition) {
			$(children[activePosition]).removeClass('active');
			$(children[1]).addClass('active');

		} else {
			$(children[activePosition]).removeClass('active');
			$(children[activePosition + 1]).addClass('active');	
		}
		this.find('li').hide();
		this.find('li.active, li.arrows').show();
	});

	$(prev).click(() => {
		var activePosition = $('.slider li').index($('li.active'));
		var children = this.children();
		if (activePosition === 1) {
			$(children[activePosition]).removeClass('active');
			$(children[children.length-2]).addClass('active');
		} else {
			$(children[activePosition]).removeClass('active');
			$(children[activePosition - 1]).addClass('active');
		}
		this.find('li').hide();
		this.find('li.active, li.arrows').show();
	})

               //      $('.glyphicon-chevron-right').click(function(){
		             //       $(this).find('li:first-child').show();
			            //    $(this).find('li:last-child').show();
				           // $(this).find('li.active').show();
				           // $(this).find('li').hide();
				           // var siblings=$('.active').siblings();
				           // siblings[0].addClass('active');
				           // $('li.active').removeClass('active');


	              //    });

               //     $('.glyphicon-chevron-left').click(()=>{
	              //    	  $(this).find('li:first-child').show();
		         		  // $(this).find('li:last-child').show();
		             //      $(this).find('li.active').show();
		             //      $(this).find('li').hide();
			            //   siblings[1].addClass('active');
		             //      $('li.active').removeClass('active');

	              //   });

	              // 	$(this).find('li.active').show();
	              
	            	// $('li.active').removeClass('active');
	            	// $('li:nth-child(3)').addClass('active');
	            	
             
		 		// $(this).find('li.active').show();
		   //   	$(this).find('li').hide();
		      	//return this;
		         	
		          	
		 //          	//$(this).removeClass('active');;
		       
			//  if('li:nth-child(3)')
			//     {
			//     	$('li:nth-child(3)').addClass('active');
			//     	$(this).find('li.active').show();
			//     	$(this).find('li').hide();
			//     	$('li:nth-child(3)').removeClass('active');

			//     }
			// else 
			//     {
			//     	$('li:nth-child(4)').addClass('active');
			//     	$(this).find('li.active').show();
			//     	$(this).find(li).hide();
			//     	$('li:nth-child(4)').removeClass('active');

			//     }
			    
	      
	
	    
	     
	      //$('li').addClass('active');


			// var previos='<li><span class="glyphicon glyphicon-chevron-left ok"></span></li>'
			// this.prepend(previos);

			// var next = '<li><span class="glyphicon glyphicon-chevron-right"></span></li>'
			// this.append(next);
		 //    console.log("('.li').addClass('active')");
		
		  


	
	  //  $(this).find('li.first').show();
   //        $(this).find('li.last').show();

	  // //  var previos='<li><span class="glyphicon glyphicon-chevron-left ok"></span></li>'
			// // this.prepend(previos);

			// // var next = '<li><span class="glyphicon glyphicon-chevron-right"></span></li>'
			// // this.append(next);


	  //  });
    //  if(body>li:second-child())

			 // {
    //          $('.active').show();
    //          $('li').hide();
			 // }
             //   if()
     //   {

     //    $('img1.jpeg').show();
     //    $('img2.jpeg').hide();
     //    $('img3.jpeg').hide();
     //   }
       
     // });
     // $('next').click(function{


     // });
     // $('.ok').click(function(){

     	// alert("sucessfull");
    

	

	return this;
};
}(jQuery))