// global settings
var mainFont = "Arial";
var subFont1 = "Calibri";

// global consts
const SLIDE_SCENARIO = 1;
const SLIDE_QUESTION = 2;
const SLIDE_ANSWER = 3;

// global vars
var currentSlide;

// var clipA = $("#B05-0a")[0];
// var clipB = $("#B05-0b")[0];
// var clipC = $("#B05-0c")[0];
// var clipD = $("#B05-0d")[0];

// main
$(document).ready( function() {
	
	$.preload("img/art-lady.png",
		"img/background.png",
		"img/checkmark01.png",
		"img/contactInfo.png",
		"img/contactPage.png",
		"img/dg-logo.png",
		"img/feedback.png",
		"img/guidePage.png",
		"img/guide-small.png",
		"img/navBack.png",
		"img/navBtnBack.png",
		"img/navBtnTime.png",
		"img/navTime.png",
		"img/nextArrow01.png",
		"img/nextArrow02.png",
		"img/questionArrow.png",
		"img/roundPause.png",
		"img/roundPlay.png",
		"img/sectionBlock.png",
		"img/xmark01.png"
	);
	
	displayIntro();
	
	//calls displaySlide after a certain time
	setTimeout(function() {   
		displaySlide(SLIDE_SCENARIO);
	}, 2500);
	
});

function displayIntro() {	
	//$("canvas").clearCanvas();
	
	// background
	$("canvas").drawRect({
		layer: true,	
		fillStyle: "#00afed",
		width: 2400, 
		height: 1200,
		fromCenter: true
	});
	
	// draw rectangle
	$('canvas').drawRect({
		layer: true,
		name: 'myBox',
		strokeStyle: '#fff',
		strokeWidth: 4,
		x: 400, y: 300,
		width: 100,
		height: 100,
		cornerRadius: 10,
		bringToFront: true
	});
	
	// Animate rectangle layer
	$('canvas').animateLayer('myBox', {
		width: 700, height: 500
	}, 1000, 'swing');
	
	//draw text
	$('canvas').drawText({
		layer: true,
		fillStyle: '#fff',
		x: 400, y: 300,
		fontSize: 24,
		fontFamily: mainFont,
		text: 'Our Customers - Food Safety',
		shadowColor: 'rgba(0, 0, 0, 0.6)',
		shadowBlur: 3,
		bringToFront: true
	});	
}

function displaySlide(slideNum) {
	var clipA = $("#B05-0a")[0];
	var clipB = $("#B05-0b")[0];
	var clipC = $("#B05-0c")[0];
	var clipD = $("#B05-0d")[0];
	var clips = [clipA, clipB, clipD];
	
	currentClip = clips[slideNum - 1]; // call the clip depending on the slideNum
	currentClip.play();

	// animation movement distances
	var scenarioMoveNum;
	var backgroundMoveNum;
	// question/answer box vars
	var questionX = 490;
	var question1Y = 275;
	var question2Y = 342;
	var question3Y = 409;
	var question4Y = 476;
	
	currentSlide = slideNum;
	
	if (slideNum == 1) {
		scenarioMoveNum = 220;
		backgroundMoveNum = 1230;
	} else {
		scenarioMoveNum = 0;
		backgroundMoveNum = 0;
	}
	
	$("canvas").clearCanvas();
	
	// background
	$("canvas").drawImage({
		layer: true,
		name: 'background',		
		source: "img/background.png",
		x: 400-backgroundMoveNum, y: 370,
		width: 800,
		height: 425,
		fromCenter: true	
	});
	
	// purpleBox
	$("canvas").drawRect({
		layer: true,
		name: 'purpleBox',
		fillStyle: "#8a4a8a",
		x: 0, y: 40-scenarioMoveNum,
		width: 800,
		height: 150,
		shadowColor: 'rgba(0, 0, 0, 0.4)',
		shadowBlur: 5,
		shadowY: 5,
		fromCenter: false
	});
	
	// purple box inside border
	$('canvas').drawRect({
		layer: true,
		name: 'purpleBoxBorder',
		strokeStyle: '#fff',
		strokeWidth: 2,
		x: 400, y: 90-scenarioMoveNum,
		width: 780,
		height: 180,
		cornerRadius: 10,
		fromCenter: true
	});
	
	// scenario title
	$("canvas").drawText({
		layer: true,
		name: 'scenarioTitle',
		fillStyle: "#FFFFFF",
		x: 20, y: 52-scenarioMoveNum,
		fontSize: "12pt",
		fontFamily: mainFont,
		//fontWeight: "bold",
		text: "Scenario",
		fromCenter: false,
		bringToFront: false
	});
	
	// scenario text
	var scenarioText = "When Patricia, the Deli Manager, starts her afternoon shift, she verifies the storage temperature of the products in the hot food bar. She knows that Standard Practice requires each day checking temperatures every three hours. After checking it seems that the storage temperature is 50°C. Standard Practice requires that any product that does not meet the storage requirements and whereby after checking is determined that the minimum temperature is below 55°C, needs to be destroyed. However there has never been a problem with the storage temperature and she assumes that the product has been properly prepared.";
	
	$("canvas").drawText({
		layer: true,
		name: 'scenarioText',
		fillStyle: "#FFFFFF",
		x: 20, y: 75-scenarioMoveNum,
		maxWidth: 760,
		fontSize: "12pt",
		fontFamily: subFont1,
		align: 'left',
		text: scenarioText,
		fromCenter: false,
		bringToFront: true
	});
	
	// top banner background
	$("canvas").drawImage({
		layer: true,	
		source: "img/sectionBlock.png",
		x: 401, y: 25
	});

	
	// top banner text
	$('canvas').drawText({
		layer: true,
		fillStyle: '#FFFFFF',
		x: 400, y: 20,
		fontSize: '14pt',
		fontFamily: mainFont,
		text: 'Our Customers - Food Safety',
		shadowColor: 'rgba(0, 0, 0, 0.7)',
		shadowBlur: 3
	});
	
	if (slideNum == SLIDE_SCENARIO) {
		// Animate purpleBox
		$('canvas').animateLayer('purpleBox', {
			y: 40
		}, 1000, 'swing');
		
		// animate purpleBoxBorder
		$('canvas').animateLayer('purpleBoxBorder', {
			y: 90
		}, 1000, 'swing');
		
		// animate scenario title
		$('canvas').animateLayer('scenarioTitle', {
			y: 52
		}, 1000, 'swing');
		
		// animate scenario text
		$('canvas').animateLayer('scenarioText', {
			y: 75
		}, 1000, 'swing');
		
		// Animate background
		$('canvas').animateLayer('background', {
			x: 400
		}, 1000, 'swing');
	}
	
	// timeline
	$("canvas").drawImage({
		layer: true,
		source: "img/navBack.png",
		x: 400, y: 575,
		});
	
	// play/pause button background
	$("canvas").drawImage({
		layer: true,
		source: "img/navBtnBack.png",
		x: 30, y: 575,
		width: 50, height: 50,
		
	});
	
	// timeline background
	$("canvas").drawImage({
		layer: true,
		name: "timelineBack",
		source: "img/navTime.png",
		x: 250, y: 575
	});
	
	// delhaize logo
	$("canvas").drawImage({
		layer: true,	
		source: "img/dg-logo.png",
		x: 450, y: 566,
		fromCenter: false
	});
	
	//timeline button
	$("canvas").drawImage({
		layer: true,
		name:"timelineBtn",
		source: "img/navBtnTime.png",
		width: 14, height: 14,
		x: 80, y:575,
		bringToFront: true
	});
	
	// store the specific audio length for each slide	
	var currentClipLength;
	if (slideNum == SLIDE_SCENARIO) {
		currentClipLength = 44000;
	} else if (slideNum == SLIDE_ANSWER) {	
		currentClipLength = 17500;
	}
		
	// play button 2
	$('canvas').drawImage({
		layer: true,
		name: 'playBtn',
		source: "img/roundPause.png",
		width: 45, height: 45,
		x: 30, y: 575,
		opacity: 1,
		cursors: { 
			mouseover: "pointer",
		},
		mouseover: function(layer) {
			$("canvas").setLayer(layer, {
				opacity: 0.8
			})
		},
		mouseout: function(layer) {
			$("canvas").setLayer(layer, {
				opacity: 1
			})
		},
		click: function(layer) {
			toggleBtn++;
			
			if (toggleBtn%2 == 0) {
				$('canvas').setLayer(layer, {
					source: "img/roundPlay.png"
				});
				
				// pause audio func
				currentClip.pause();
				
				$('canvas').stopLayer('timelineBtn');
			} else {
				$('canvas').setLayer(layer, {
					source: "img/roundPause.png"
				});
				
				// play audio func
				currentClip.play();
				
				animateTimeline(currentClipLength - (currentClip.currentTime*1000));
			}
		},
	});
	
	if (slideNum != SLIDE_QUESTION) {	
		animateTimeline(currentClipLength);
		
	} else {
		// dim the timeline 
		disableTimeline();
	}
	
	// animate timeline button
	function animateTimeline(clipLength) {
		if (currentClip.paused == true) {
			$('canvas').stopLayer('timelineBtn');
		} else {
			$('canvas').animateLayer('timelineBtn', {
				x: 420,
			}, clipLength, 'linear'); // time must be equal to audio clip in seconds clipA = 44 seconds
		}
	}
	
	// lower opactiy of timeline and disable events
	function disableTimeline() {
		$('canvas').setLayer('timelineBack', {
			opacity: 0.4
		});
		
		$('canvas').setLayer('timelineBtn', {
			opacity: 0.4
		});
		
		$('canvas').setLayer('playBtn', {
			opacity: 0.4,
			cursors: {},
			mouseover: function() {},
			mouseout: function() {},
			click: function() {}
		});
	}
	
	//play/pause variables
	var toggleBtn = 1;
	
	switch (slideNum) {		
		case SLIDE_SCENARIO:
			// clip handling
			clipA.addEventListener('ended', function() {
				displaySlide(SLIDE_QUESTION);
			}, true);
			
			setTimeout(function() {   
				displayPatricia();
			}, 2500);
			
			function displayPatricia(){
				// patricia
				$("canvas").drawImage({
					layer: true,
					name: 'patricia',
					source: "img/art-lady.png",
					x:800, y: 210,
					fromCenter: false
				});
				
				// patricia animate
				$('canvas').animateLayer('patricia', {
					x: 400
				}, 1000, 'swing');
			}
			
			break;
		
		case SLIDE_QUESTION:
			//what should patricia do?
			
			// animate distance for each element
			var questionMoveNum = 350;
			
			//patricia is still chillen
			$("canvas").drawImage({
				layer: true,
				name: 'patricia',
				source: "img/art-lady.png",
				x:400, y: 210,
				fromCenter: false
			});
			
			// question background
			$("canvas").drawRect({
				layer: true,
				name: 'questionBackground',
				fillStyle: "#FFFFFF",
				x: 480+questionMoveNum, y: 190,
				width: 320,
				height: 360,
				shadowColor: 'rgba(0, 0, 0, 0.4)',
				shadowBlur: 5,
				shadowX: -5,
				fromCenter: false
			});
			
			//Employee guide
			$("canvas").drawImage({
				layer: true,
				name: 'guide',
				source: 'img/guide-small.png',
				x: 740+questionMoveNum, y: 210,
				scale: 1.0,
				cursors: { 
					mouseover: "pointer",
				},
				mouseover: function(layer) {
					$("canvas").animateLayer(layer, {
						scale: 1.05
					}, 50)
				},
				mouseout: function(layer) {
					$("canvas").animateLayer(layer, {
						scale: 1.0
					}, 50)
				},
				click: function() {
					displayGuide();
				}
			});
			
			// question title
			$("canvas").drawText({
				layer: true,
				name: 'questionTitle',
				fillStyle: "#000000",
				x: questionX+15+questionMoveNum, y: 215,
				maxWidth: 180,
				fontSize: "16pt",
				fontFamily: mainFont,
				text: "What should Patricia do?",
				align: 'left',
				fromCenter: false,
				bringToFront: true
			});
			
			// question 1 box
			$("canvas").drawRect({
				layer: true,
				name: 'question1Box',
				groups: ['questionBoxes'],
				fillStyle: '#00afed',
				x: questionX+questionMoveNum, y: question1Y,
				width: 300,
				height: 62,
				fromCenter: false,
				cursors: { 
					mouseover: "pointer",
				},
				mouseover: function(layer) {
					$("canvas").setLayer(layer, {
						fillStyle: "#0093c7"
					})
				},
				mouseout: function(layer) {
					$("canvas").setLayer(layer, {
						fillStyle: "#00afed"
					})
				},
				click: function(layer) {
					displaySlide(SLIDE_ANSWER);
				}
			});
			
			// question 2 box
			$("canvas").drawRect({
				layer: true,
				name: 'question2Box',
				groups: ['questionBoxes'],
				fillStyle: '#00afed',
				x: questionX+questionMoveNum, y: question2Y,
				width: 300,
				height: 62,
				fromCenter: false,
				cursors: { 
					mouseover: "pointer",
				},
				mouseover: function(layer) {
					$("canvas").setLayer(layer, {
						fillStyle: "#0093c7"
					})
				},
				mouseout: function(layer) {
					$("canvas").setLayer(layer, {
						fillStyle: "#00afed"
					})
				},
				click: function(layer) {
					displaySlide(SLIDE_ANSWER);
				}
			});
			
			// question 3 box
			$("canvas").drawRect({
				layer: true,
				name: 'question3Box',
				groups: ['questionBoxes'],
				fillStyle: '#00afed',
				x: questionX+questionMoveNum, y: question3Y,
				width: 300,
				height: 62,
				fromCenter: false,
				cursors: { 
					mouseover: "pointer",
				},
				mouseover: function(layer) {
					$("canvas").setLayer(layer, {
						fillStyle: "#0093c7"
					})
				},
				mouseout: function(layer) {
					$("canvas").setLayer(layer, {
						fillStyle: "#00afed"
					})
				},
				click: function(layer) {
					displaySlide(SLIDE_ANSWER);
				}
			});
			
			// question 4 box
			$("canvas").drawRect({
				layer: true,
				name: 'question4Box',
				groups: ['questionBoxes'],
				fillStyle: '#00afed',
				x: questionX+questionMoveNum, y: question4Y,
				width: 300,
				height: 62,
				fromCenter: false,
				cursors: { 
					mouseover: "pointer",
				},
				mouseover: function(layer) {
					$("canvas").setLayer(layer, {
						fillStyle: "#0093c7"
					})
				},
				mouseout: function(layer) {
					$("canvas").setLayer(layer, {
						fillStyle: "#00afed"
					})
				},
				click: function(layer) {
					displaySlide(SLIDE_ANSWER);
				}
			});
			
			// question 1 text
			$("canvas").drawText({
				layer: true,
				name: 'question1Text',
				groups: ['questionTexts'],
				fillStyle: "#FFFFFF",
				x: questionX+8+questionMoveNum, y: question1Y + 8,
				maxWidth: 230,
				fontSize: "11pt",
				fontFamily: subFont1,
				text: "Patricia should proceed with her assumption and leave the products at their place.",
				align: 'left',
				fromCenter: false,
				bringToFront: true,
				cursors: { 
					mouseover: "pointer",
				},
				mouseover: function() {
					$("canvas").setLayer("question1Box", {
						fillStyle: "#0093c7"
					})
				},
				mouseout: function() {
					$("canvas").setLayer("question1Box", {
						fillStyle: "#00afed"
					})
				},
				click: function(layer) {
					displaySlide(SLIDE_ANSWER);
				}
			});
			
			// question 2 text
			$("canvas").drawText({
				layer: true,
				name: 'question2Text',
				groups: ['questionTexts'],
				fillStyle: "#FFFFFF",
				x: questionX+8+questionMoveNum, y: question2Y + 8,
				maxWidth: 230,
				fontSize: "11pt",
				fontFamily: subFont1,
				text: "Five degrees difference will not any affect the product! Patricia should do nothing and continue with her tasks.",
				align: 'left',
				fromCenter: false,
				bringToFront: true,
				cursors: { 
					mouseover: "pointer",
				},
				mouseover: function() {
					$("canvas").setLayer("question2Box", {
						fillStyle: "#0093c7"
					})
				},
				mouseout: function() {
					$("canvas").setLayer("question2Box", {
						fillStyle: "#00afed"
					})
				},
				click: function(layer) {
					displaySlide(SLIDE_ANSWER);
				}
			});
			
			// question 3 text
			$("canvas").drawText({
				layer: true,
				name: 'question3Text',
				groups: ['questionTexts'],
				fillStyle: "#FFFFFF",
				x: questionX+8+questionMoveNum, y: question3Y + 8,
				maxWidth: 230,
				fontSize: "11pt",
				fontFamily: subFont1,
				text: "Patricia should discard the products since they were not held at the correct temperature.",
				align: 'left',
				fromCenter: false,
				bringToFront: true,
				cursors: { 
					mouseover: "pointer",
				},
				mouseover: function() {
					$("canvas").setLayer("question3Box", {
						fillStyle: "#0093c7"
					})
				},
				mouseout: function() {
					$("canvas").setLayer("question3Box", {
						fillStyle: "#00afed"
					})
				},
				click: function(layer) {
					//clipC.play();
					
					//$("#B05-0c").on('ended', function() {
						displaySlide(SLIDE_ANSWER);
					//});
				}
			});
			
			// question 4 text
			$("canvas").drawText({
				layer: true,
				name: 'question4Text',
				groups: ['questionTexts'],
				fillStyle: "#FFFFFF",
				x: questionX+8+questionMoveNum, y: question4Y + 8,
				maxWidth: 230,
				fontSize: "11pt",
				fontFamily: subFont1,
				text: "Patricia quickly raises the temperature so that the products attain again the correct temperature.",
				align: 'left',
				fromCenter: false,
				bringToFront: true,
				cursors: { 
					mouseover: "pointer",
				},
				mouseover: function() {
					$("canvas").setLayer("question4Box", {
						fillStyle: "#0093c7"
					})
				},
				mouseout: function() {
					$("canvas").setLayer("question4Box", {
						fillStyle: "#00afed"
					})
				},
				click: function() {	
					displaySlide(SLIDE_ANSWER);
				}
			});
			
			// question 1 check
			$("canvas").drawImage({
				layer: true,	
				groups: ['questionChecks'],
				source: "img/questionArrow.png",
				x: questionX+254+questionMoveNum, y: question1Y+13,
				fromCenter: false,
				scale: 0.85,
				cursors: { 
					mouseover: "pointer",
				},
				mouseover: function() {
					$("canvas").setLayer("question1Box", {
						fillStyle: "#0093c7"
					})
				},
				mouseout: function() {
					$("canvas").setLayer("question1Box", {
						fillStyle: "#00afed"
					})
				}
			});
			
			// question 2 check
			$("canvas").drawImage({
				layer: true,	
				groups: ['questionChecks'],
				source: "img/questionArrow.png",
				x: questionX+254+questionMoveNum, y: question2Y+13,
				fromCenter: false,
				scale: 0.85,
				cursors: { 
					mouseover: "pointer",
				},
				mouseover: function() {
					$("canvas").setLayer("question2Box", {
						fillStyle: "#0093c7"
					})
				},
				mouseout: function() {
					$("canvas").setLayer("question2Box", {
						fillStyle: "#00afed"
					})
				}
			});
			
			// question 3 check
			$("canvas").drawImage({
				layer: true,
				groups: ['questionChecks'],
				source: "img/questionArrow.png",
				x: questionX+254+questionMoveNum, y: question3Y+13,
				fromCenter: false,
				scale: 0.85,
				cursors: { 
					mouseover: "pointer",
				},
				mouseover: function() {
					$("canvas").setLayer("question3Box", {
						fillStyle: "#0093c7"
					})
				},
				mouseout: function() {
					$("canvas").setLayer("question3Box", {
						fillStyle: "#00afed"
					})
				}
			});
			
			// question 4 check
			$("canvas").drawImage({
				layer: true,	
				groups: ['questionChecks'],
				source: "img/questionArrow.png",
				x: questionX+254+questionMoveNum, y: question4Y+13,
				fromCenter: false,
				scale: 0.85,
				cursors: { 
					mouseover: "pointer",
				},
				mouseover: function() {
					$("canvas").setLayer("question4Box", {
						fillStyle: "#0093c7"
					})
				},
				mouseout: function() {
					$("canvas").setLayer("question4Box", {
						fillStyle: "#00afed"
					})
				}
			});
			
			// Animate question background
			$('canvas').animateLayer('questionBackground', {
				x: 480
			}, 1000, 'swing');
			
			// Animate guide
			$('canvas').animateLayer('guide', {
				x: 740
			}, 1000, 'swing');
			
			// Animate question title
			$('canvas').animateLayer('questionTitle', {
				x: questionX+15
			}, 1000, 'swing');
			
			// animate question 1 boxex
			$('canvas').animateLayerGroup('questionBoxes', {
				x: questionX
			}, 1000, 'swing');
			
			// animate question 1 texts
			$('canvas').animateLayerGroup('questionTexts', {
				x: questionX+8
			}, 1000, 'swing');
			
			// animate question 1 checks
			$('canvas').animateLayerGroup('questionChecks', {
				x: questionX+254
			}, 1000, 'swing');
			
			break;
			
		case SLIDE_ANSWER:
			// clip handling			
			clipD.addEventListener('ended', function() {
				// show next button
				$("canvas").drawImage({
					layer: true,	
					source: "img/nextArrow01.png",
					x: 718, y: 554,
					fromCenter: false,
					cursors: { 
						mouseover: "pointer",
					},
					mouseover: function(layer) {
						$("canvas").setLayer(layer, {
							source: "img/nextArrow02.png"
						})
					},
					mouseout: function(layer) {
						$("canvas").setLayer(layer, {
							source: "img/nextArrow01.png"
						})
					},
					click: function() {
						// next part of CBT
						
					}
				});
				
				//disableTimeline();
				
			}, true);
			
			//patricia is still STILL chillen
			$("canvas").drawImage({
				layer: true,
				name: 'patricia',
				source: "img/art-lady.png",
				x:400, y: 210,
				fromCenter: false
			});
			
			// question background
			$("canvas").drawRect({
				layer: true,
				fillStyle: "#FFFFFF",
				x: 480, y: 190,
				width: 320,
				height: 360,
				shadowColor: 'rgba(0, 0, 0, 0.4)',
				shadowBlur: 5,
				shadowX: -5,
				fromCenter: false
			});
			
			//Employee guide Still chillen
			$("canvas").drawImage({
				layer: true,
				name: 'guide',
				source: 'img/guide-small.png',
				x: 740, y: 210,
				scale: 1.0,
				cursors: { 
					mouseover: "pointer",
				},
				mouseover: function(layer) {
					$("canvas").animateLayer(layer, {
						scale: 1.05
					}, 50)
				},
				mouseout: function(layer) {
					$("canvas").animateLayer(layer, {
						scale: 1.0
					}, 50)
				},
				click: function() {
					displayGuide();
				}
			});
			
			// question title
			$("canvas").drawText({
				layer: true,
				fillStyle: "#000000",
				x: questionX + 15, y: 215,
				maxWidth: 180,
				fontSize: "16pt",
				fontFamily: mainFont,
				text: "What should Patricia do?",
				align: 'left',
				fromCenter: false,
				bringToFront: true
			});
			
			// answer 1 box
			$("canvas").drawRect({
				layer: true,
				fillStyle: '#00afed',
				x: questionX, y: question1Y,
				width: 300,
				height: 62,
				fromCenter: false
			});
			// answer 2 box
			$("canvas").drawRect({
				layer: true,
				fillStyle: '#00afed',
				x: questionX, y: question2Y,
				width: 300,
				height: 62,
				fromCenter: false
			});
			
			// answer 3 box
			$("canvas").drawRect({
				layer: true,
				fillStyle: '#8a4a8a',
				x: questionX, y: question3Y,
				width: 300,
				height: 62,
				fromCenter: false
			});
			
			// answer 4 box
			$("canvas").drawRect({
				layer: true,
				fillStyle: '#00afed',
				x: questionX, y: question4Y,
				width: 300,
				height: 62,
				fromCenter: false
			});
			
			// answer 1 text
			$("canvas").drawText({
				layer: true,
				fillStyle: "#FFFFFF",
				x: questionX + 8, y: question1Y + 8,
				maxWidth: 230,
				fontSize: "11pt",
				fontFamily: subFont1,
				text: "Patricia should proceed with her assumption and leave the products at their place.",
				align: 'left',
				fromCenter: false,
				bringToFront: true
			});
			
			// answer 2 text
			$("canvas").drawText({
				layer: true,
				fillStyle: "#FFFFFF",
				x: questionX + 8, y: question2Y + 8,
				maxWidth: 230,
				fontSize: "11pt",
				fontFamily: subFont1,
				text: "Five degrees difference will not any affect the product! Patricia should do nothing and continue with her tasks.",
				align: 'left',
				fromCenter: false,
				bringToFront: true
			});
			
			// answer 3 text
			$("canvas").drawText({
				layer: true,
				fillStyle: "#FFFFFF",
				x: questionX + 8, y: question3Y + 8,
				maxWidth: 230,
				fontSize: "11pt",
				fontFamily: subFont1,
				text: "Patricia should discard the products since they were not held at the correct temperature.",
				align: 'left',
				fromCenter: false,
				bringToFront: true
			});
			
			// answer 4 text
			$("canvas").drawText({
				layer: true,
				fillStyle: "#FFFFFF",
				x: questionX + 8, y: question4Y + 8,
				maxWidth: 230,
				fontSize: "11pt",
				fontFamily: subFont1,
				text: "Patricia quickly raises the temperature so that the products attain again the correct temperature.",
				align: 'left',
				fromCenter: false,
				bringToFront: true
			});
			
			// answer 1 check
			$("canvas").drawImage({
				layer: true,	
				source: "img/xmark01.png",
				x: questionX+248, y: question1Y+15,
				fromCenter: false
			});
			
			// answer 2 check
			$("canvas").drawImage({
				layer: true,	
				source: "img/xmark01.png",
				x: questionX+248, y: question2Y+15,
				fromCenter: false
			});
			
			// answer 3 check
			$("canvas").drawImage({
				layer: true,	
				source: "img/checkmark01.png",
				x: questionX+248, y: question3Y+15,
				fromCenter: false
			});
			
			// answer 4 check
			$("canvas").drawImage({
				layer: true,	
				source: "img/xmark01.png",
				x: questionX+248, y: question4Y+15,
				fromCenter: false
			});
			
			//feedback Background
			$("canvas").drawImage({
				layer: true,
				name: 'feedbackBackground',
				source: 'img/feedback.png',
				x: 220, y: 355,
			});
			
			// feedback text
			var feedbackText = "Patricia should discard all products in question since she cannot confirm it was cooked properly. Food Safety is critically important to our business and to the health of our customers. We should never comprimise food safety by ignoring Standard Practice.";
	
			$("canvas").drawText({
				layer: true,
				fillStyle: "#000",
				x: 50, y: 285,
				maxWidth: 330,
				fontSize: "12pt",
				fontFamily: subFont1,
				align: 'left',
				text: feedbackText,
				lineHeight: 1.3,
				fromCenter: false,
				bringToFront: true
			});
			
			// contact text
			$("canvas").drawText({
				layer: true,
				fillStyle: "#000",
				x: 96, y: 462,
				fontSize: "12pt",
				fontFamily: subFont1,
				align: 'left',
				text: "Important Contact Information  >>",
				lineHeight: 1.6,
				fromCenter: false,
				bringToFront: true				
			});
			
			// contact button
			$("canvas").drawImage({
				layer: true,
				name: "contactBtn",
				source: "img/contactInfo.png",
				x: 380, y: 455,
				scale: 1.0,
				cursors: { 
					mouseover: "pointer",
				},
				mouseover: function(layer) {
					$("canvas").animateLayer(layer, {
						scale: 1.05
					}, 50)
				},
				mouseout: function(layer) {
					$("canvas").animateLayer(layer, {
						scale: 1.0
					}, 50)
				},
				click: function() {
					displayContacts();
					
				}
			});
			
			break;
			
		default: break;
	}
}

function displayGuide() {
	var animateDist = 800;
	
	// guide page
	$("canvas").drawImage({
		layer: true,
		name: 'guidePage',
		source: "img/guidePage.png",
		x: 20, y: 20+animateDist,
		scale: 1.1,
		bringToFront: true,
		fromCenter: false
	});
	
	// close button bg
	$("canvas").drawRect({
		layer: true,
		name: 'closeButtonRect1',
		fillStyle: '#cc0000',
		strokeStyle: 'rgba(0, 0, 0, 0.5)',
		x: 730, y: 36+animateDist,
		width: 36,
		height: 36,
		cornerRadius: 5,
		fromCenter: false,
		cursors: { 
			mouseover: "pointer",
		},
		click: function(layer) {
			// animate each layer
			$('canvas').animateLayer('guidePage', {
				y: 20+animateDist
			}, 1000, 'swing');			
			$('canvas').animateLayer('closeButtonRect1', {
				y: 36+animateDist
			}, 1000, 'swing');

			$('canvas').animateLayer('closeButtonText1', {
				y: 41+animateDist
			}, 1000, 'swing');
			
			// remove all layers after animation is done
			setTimeout(function() {
				$('canvas').removeLayer('guidePage');
				$('canvas').removeLayer('closeButtonRect1');
				$('canvas').removeLayer('closeButtonText1');
			}, 1000);
		}	
	});

	// close button x
	$("canvas").drawText({
		layer: true,
		name: 'closeButtonText1',
		fillStyle: "#fff",
		x: 741, y: 41+animateDist,
		shadowColor: 'rgba(0, 0, 0, 0.8)',
		shadowBlur: 5,
		fontSize: "18pt",
		fontStyle: 'bold',
		fontFamily: subFont1,
		text: "X",
		fromCenter: false,
		bringToFront: true,
		cursors: { 
			mouseover: "pointer",
		},
		click: function(layer) {
			// animate each layer
			$('canvas').animateLayer('guidePage', {
				y: 20+animateDist
			}, 1000, 'swing');			
			$('canvas').animateLayer('closeButtonRect1', {
				y: 36+animateDist
			}, 1000, 'swing');

			$('canvas').animateLayer('closeButtonText1', {
				y: 41+animateDist
			}, 1000, 'swing');
			
			// remove all layers after animation is done
			setTimeout(function() {
				$('canvas').removeLayer('guidePage');
				$('canvas').removeLayer('closeButtonRect1');
				$('canvas').removeLayer('closeButtonText1');
			}, 1000);
		}		
	});
	
	// guide page animate
	$('canvas').animateLayer('guidePage', {
		y: 20
	}, 1000, 'swing');
	
	// close button bg animate
	$('canvas').animateLayer('closeButtonRect1', {
		y: 36
	}, 1000, 'swing');

	// close button x animate
	$('canvas').animateLayer('closeButtonText1', {
		y: 41
	}, 1000, 'swing');
}

function displayContacts() {
	var animateDist = 800;
	
	// contact page
	$("canvas").drawImage({
		layer: true,
		name: 'contactPage',
		source: "img/contactsPage.png",
		x: 35, y: 3+animateDist,
		scale: 1.1,
		bringToFront: true,
		fromCenter: false
	});

	// close button bg
	$("canvas").drawRect({
		layer: true,
		name: 'closeButtonRect2',
		fillStyle: '#cc0000',
		strokeStyle: 'rgba(0, 0, 0, 0.5)',
		x: 730, y: 36+animateDist,
		width: 36,
		height: 36,
		cornerRadius: 5,
		fromCenter: false,
		cursors: { 
			mouseover: "pointer",
		},
		click: function(layer) {
			// animate each layer
			$('canvas').animateLayer('contactPage', {
				y: 3+animateDist
			}, 1000, 'swing');			
			$('canvas').animateLayer('closeButtonRect2', {
				y: 36+animateDist
			}, 1000, 'swing');

			$('canvas').animateLayer('closeButtonText2', {
				y: 41+animateDist
			}, 1000, 'swing');
			
			// remove all layers after animation is done
			setTimeout(function() {
				$('canvas').removeLayer('contactPage');
				$('canvas').removeLayer('closeButtonRect2');
				$('canvas').removeLayer('closeButtonText2');
			}, 1000);
		}	
	});

	// close button x
	$("canvas").drawText({
		layer: true,
		name: 'closeButtonText2',
		fillStyle: "#fff",
		x: 741, y: 41+animateDist,
		shadowColor: 'rgba(0, 0, 0, 0.8)',
		shadowBlur: 5,
		fontSize: "18pt",
		fontStyle: 'bold',
		fontFamily: subFont1,
		text: "X",
		fromCenter: false,
		bringToFront: true,
		cursors: { 
			mouseover: "pointer",
		},
		click: function(layer) {
			// animate each layer
			$('canvas').animateLayer('contactPage', {
				y: 3+animateDist
			}, 1000, 'swing');
			
			$('canvas').animateLayer('closeButtonRect2', {
				y: 36+animateDist
			}, 1000, 'swing');

			$('canvas').animateLayer('closeButtonText2', {
				y: 41+animateDist
			}, 1000, 'swing');
			
			// remove all layers after animation is done
			setTimeout(function() {
				$('canvas').removeLayer('contactPage');
				$('canvas').removeLayer('closeButtonRect2');
				$('canvas').removeLayer('closeButtonText2');
			}, 1000);
		}		
	});
	
	//$("canvas").moveLayer('contactPage', 0);

	// contact page animate
	$('canvas').animateLayer('contactPage', {
		y: 3
	}, 1000, 'swing');

	// close button bg animate
	$('canvas').animateLayer('closeButtonRect2', {
		y: 36
	}, 1000, 'swing');

	// close button x animate
	$('canvas').animateLayer('closeButtonText2', {
		y: 41
	}, 1000, 'swing');
}