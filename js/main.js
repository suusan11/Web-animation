/*  Autumn Greeting Card -- js */

(function ($) {
	'use strict';

	// declare actors here
	var $backFallingLeaves = $('#brownLeaf, #orangeLeaf, #redLeaf'),
		$textLine1 = $('.text-line-1'),
		$textLine2 = $('.text-line-2'),
		$textGreeting = $('.text-greeting'),
		$treeLeaves = $('[id^=treeleaf]'),
		$flooLeaves = $('[id^=floorleaf]'),
		$bird = $('#Bird'),
		$birdHat = $bird.find('#BirdHat'),
		$birdEyes = $bird.find('#leftEye, #rightEye'),
		$nest = $('#NestAndLeaves'),
		$tree = $('#tree_trunk');

	// clear stage
	function clearStage() {
		var clearTl = new TimelineMax();

		clearTl
			.set($backFallingLeaves, { autoAlpha: 0 })
			.set($textLine1, { autoAlpha: 0 })
			.set($textLine2, { autoAlpha: 0 })
			.set($textGreeting, { autoAlpha: 0 })
			.set($treeLeaves, { autoAlpha: 0 })
			.set($bird, { y: '+=65', autoAlpha: 0 })
			.set($nest, { autoAlpha: 0 })
			.set($tree, { autoAlpha: 0 })
			.set($flooLeaves, { y: '+=275', autoAlpha: 0 })
		return clearTl;
	}
	// enter floor vegetation

	// enter tree

	// enter the greeting text

	// the GO function ...to kick things all off
	function go() {
		var masterTl = new TimelineMax();

		masterTl
			.add(clearStage(), 'scene-clear-stage')
	}

	go();

})(jQuery);


