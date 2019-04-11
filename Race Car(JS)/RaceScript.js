/**
* Author : Ameur Elmehdi
  email : mehdiameur97@gmail.com

  student computer engineering-Ensa El hociema

*/

$(function()
	{
		var $stopFonction=0;
		$score=0;
		$showGame=$('.show_the_game');
		$HideGame=$('.finish_the_game');
		$play=$('.button_play');
		$pause=$('.button_pause');
		$unpaused=$('.button_unpaused');
		$restart=$('.button_restart');
		$scoreCase=$('.score');

		$road1=$('.white_police_content_1');
		$road2=$('.white_police_content_2');
		$road3=$('.white_police_content_3');
		$road4=$('.white_police_content_4');
		$road5=$('.white_police_content_5');
		$road6=$('.white_police_content_6');
		$car=$('.car');
		$raceBar=$('.race_bar');
		$raceBarFinish=$('.race_bar_finish');
		$moveStop=0;


		$console_up=$('.console_up');
		$console_down=$('.console_down');
		$console_forward=$('.console_forward');
		$console_back=$('.console_back');
		$moveCar=1;

		$startLight=$('.start_light');
		$redLight=$('.red_light');
		$orangeLight=$('.orange_light');
		$greenLight=$('.green_light');

		$isWin=0;
		$loseMessage=$('.you_lose');
		$winMessage=$('.you_win');

		$blackHole=$('.black_hole');
		$bulletHole=$('.bullet_hole');

		$straw=$('.straw');
		
		console.log("I m in");
		
		$('.finish_the_game').click(finishFonction);

		function finishFonction()
		{

				$('.road').slideUp(4000);
				$HideGame.addClass("hide");
				$('.show_the_game').removeClass("hide");
				$restart.addClass("hide");
				$pause.addClass("hide");
				$play.addClass("hide");
				$unpaused.addClass("hide");
				$stopFonction=1;
				$moveStop=1;
				$moveCar=1;
				/*$raceBar.css({left:"80px"});*/
				$redLight.css({opacity:"0.5"});
				$orangeLight.css({opacity:"0.5"});
				$greenLight.css({opacity:"0.5"});
				
				$('.score_last').text('your score : '+$score);
				if($isWin==1){
				$winMessage.removeClass("hide");
				$car.animate({left:"+=1000"},500);
				}
				else
				$loseMessage.removeClass("hide");
		}

		$showGame.click(function()
		{
				$('.road').slideDown(4000);
				$(this).addClass("hide");
				$('.finish_the_game').removeClass("hide");
				$raceBar.css({left:"80px"});
				$raceBarFinish.css({left:"4000px"});
				$play.removeClass("hide");
				$winMessage.addClass("hide");
				$loseMessage.addClass("hide");
				location.reload();
				
		});
	
		$play.click(function()
			{
				$car.css({left:"50px"});
				$car.css({top:"0px"});
				setTimeout(function(){
				console.log("I m in");
				$restart.removeClass("hide");
				$pause.removeClass("hide");
				$play.addClass("hide");
				$raceBar.css({left:"80px"});
				$raceBarFinish.css({left:"1500px"});
				$moveCar=0;
				$score=0;
				$stopFonction=0;
				$moveStop=0;
					timer();
					moveRoad();}
					,3200);

				/** lights on*******/
				setTimeout(function(){
					$redLight.animate({opacity:"1"},500);
				},500);
				
				setTimeout(function(){
					$orangeLight.animate({opacity:"1"},500);
				},1500);

				setTimeout(function(){
					$greenLight.animate({opacity:"1"},500);
				},2800);



			});
		$pause.click(function()
			{
				$stopFonction=1;
				$('.button_unpaused').removeClass("hide");
				$(this).addClass("hide");
				$moveStop=1;
				$moveCar=1;
				

			});
		$unpaused.click(function()
			{
				$('.button_pause').removeClass("hide");
				$unpaused.addClass("hide");
				$('.button_pause').prop('disabled',true);
				setTimeout(function()
					{
					$('.button_pause').prop('disabled',false);
				
					},1000);
				$moveCar=0;
				$stopFonction=0;
				$moveStop=0;
				moveRoad();
				timer();
			});
		$restart.click(function()
		{
			location.reload();
			/*$stopFonction=1;
			$moveStop=1;
			$score=0;
			$('.button_pause').removeClass("hide");
				$('.button_unpaused').addClass("hide");
				$scoreCase.attr('value',$score);
					
				setTimeout(function(){
					  	$stopFonction=0;
					  	$moveStop=0;
					  	$raceBar.css({left:"80px"});
					  	$raceBarFinish.css({left:"4000px"});
					  	$car.css({left:"50px"});
					  	$car.css({top:"0px"});
					  	moveRoad();
     		 			timer();
     					 

  		 				
  					 },5000);*/

					
		});


		function timer(){ 
				
				/*var $leftCar=eval($car.css("left").replace(/[^-\d\.]/g, ''));
				var $leftFinish=eval($raceBarFinish.css("left").replace(/[^-\d\.]/g, ''));
					if($leftCar>$leftFinish){
						$isWin=1;
     		 		finishFonction();
     		 		}*/

     		 	var $leftCar=eval($car.css("left").replace(/[^-\d\.]/g, ''));
				var $topCar=eval($car.css("top").replace(/[^-\d\.]/g, ''));
				var $leftFinish=eval($raceBarFinish.css("left").replace(/[^-\d\.]/g, ''));
				for (var i = 1; i <= 5; i++) {
					var $leftBlackHole=eval($('.hole'+i).css("left").replace(/[^-\d\.]/g, ''));
					var $topBlackHole=eval($('.hole'+i).css("top").replace(/[^-\d\.]/g, ''));

					//console.log($leftBlackHole);
					if($leftCar>$leftFinish-10){
						$isWin=1;
     		 		finishFonction();
     		 		}
     		 		if(($leftCar>=$leftBlackHole-90 && $leftCar<=$leftBlackHole) && ($topBlackHole-25<=$topCar && $topBlackHole+25>=$topCar)    )
     		 		{
     		 			$isWin=0;
     		 			finishFonction();
     		 		}
				}

				/*straw */
					for (var i = 1; i <= 3; i++) {
						var x=$('.straw'+i);
						if(x.length==1){
					var $leftStraw=eval($('.straw'+i).css("left").replace(/[^-\d\.]/g, ''));
					var $topStraw=eval($('.straw'+i).css("top").replace(/[^-\d\.]/g, ''));
					
					
					
     		 		if(($leftCar>=$leftStraw-90 && $leftCar<=$leftStraw) && ($topStraw-25<=$topCar && $topStraw+25>=$topCar)    )
     		 		{
     		 			$score+=1000;
     		 			$('.straw'+i).remove();
     		 		}
     		 		}
				}

			/*	var $leftBlackHole=eval($blackHole.css("left").replace(/[^-\d\.]/g, ''));
				var $topBlackHole=eval($blackHole.css("top").replace(/[^-\d\.]/g, ''));
				console.log($leftBlackHole);
					if($leftCar>$leftFinish){
						$isWin=1;
     		 		finishFonction();
     		 		}
     		 		if(($leftCar>=$leftBlackHole-90 && $leftCar<=$leftBlackHole) && ($topBlackHole-25<=$topCar && $topBlackHole+25>=$topCar)    )
     		 		{
     		 			$isWin=0;
     		 			finishFonction();
     		 		}*/


  		 	setTimeout(function(){
  		 		
     		 $scoreCase.attr('value',$score);
     		 if($stopFonction==0){
     		 	$raceBar.animate({left:"-=10"},500);
     		 	$raceBarFinish.animate({left:"-=10"},500);
     		 	$blackHole.animate({left:"-=10"},400);
     		 	$bulletHole.animate({left:"-=10"},400);
     		 	$straw.animate({left:"-=10"},400);
     		 	$score++;
     		 	/*** tester Win */
     		 	
     		 	timer();
     		 }
  					 },500);
					
  		 	
 
			}

		function moveRoad()
		{		
				if($moveStop==0){
				setTimeout(function()
					{
						$road1.addClass("hide");
						$road2.removeClass("hide");
					},250);

				setTimeout(function()
					{
						$road2.addClass("hide");
						$road3.removeClass("hide");
					},500);
				setTimeout(function()
					{
						$road3.addClass("hide");
						$road4.removeClass("hide");
					},750);
				setTimeout(function()
					{
						$road4.addClass("hide");
						$road5.removeClass("hide");
						$road6.removeClass("hide");
					},1000);
				setTimeout(function()
					{
						$road5.addClass("hide");
						$road6.addClass("hide");
						$road1.removeClass("hide");

					},1250);
				setTimeout(function()
					{
						
						moveRoad();

					},1250);
				}

			/*	$road1.addClass("hide");
				$road2.removeClass("hide");
				$road2.addClass("hide");
				$road3.removeClass("hide");
				$road3.addClass("hide");
				$road4.removeClass("hide");
				$road4.addClass("hide");
				$road5.removeClass("hide");
				$road6.removeClass("hide");
				$road5.addClass("hide");
				$road6.addClass("hide");
				$road1.removeClass("hide");*/


		}
				
			
			
			function moveDown()
			{
				$car.animate({top:"+=5"},1);

			}
			function moveUp()
			{
				$car.animate({top:"-=5"},1);
			}
			function forward()
			{
				$car.animate({left:"+=5"},1);	
			}
			function back()
			{
				$car.animate({left:"-=5"},1);	
			}

			$console_up.click(moveUp);
			$console_down.click(moveDown);
			$console_forward.click(forward);
			$console_back.click(back);
			
			$('body').keydown(function(e)
				{
					
					/*maxForward=$car.css("top");
					console.log(maxForward);*/
					if($moveCar==0){
					
					var code=e.keyCode;
					console.log(code);
					if(code==38){
						
						if($car.css("top").replace(/[^-\d\.]/g, '')>0)
						{
						moveUp();
						}

					
					}
					if(code==37)
					{
						if($car.css("left").replace(/[^-\d\.]/g, '')>-70)
						{
						back();
						}
						
					}
					if(code==39)
					{
						if($car.css("left").replace(/[^-\d\.]/g, '')<1000)
						{
						forward();
						}
						
					}
					if(code==40)
					{
						if($car.css("top").replace(/[^-\d\.]/g, '')<180)
						{
						moveDown();
						}
					}

					}
				});
	});