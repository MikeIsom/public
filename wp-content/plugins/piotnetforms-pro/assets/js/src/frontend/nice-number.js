jQuery(document).ready(function(t){function e(t,e,n){"mousedown"==t?(e.timeout=setTimeout(function(){e.actualInterval=setInterval(function(){n()},100)},200),n()):(e.timeout&&clearTimeout(e.timeout),e.actualInterval&&clearInterval(e.actualInterval))}t.fn.niceNumber=function(n){var a=t.extend({autoSize:!0,autoSizeBuffer:1,buttonDecrement:"-",buttonIncrement:"+",buttonPosition:"around"},n);return this.each(function(){var n=this,u=t(n),o=null,i=null;void 0!==u.attr("max")&&!1!==u.attr("max")&&(o=parseFloat(u.attr("max"))),void 0!==u.attr("min")&&!1!==u.attr("min")&&(i=parseFloat(u.attr("min"))),i&&!n.value&&u.val(i);var r=t("<div/>",{class:"nice-number"}).insertAfter(n),l={},p=t("<button/>").attr("type","button").html(a.buttonDecrement).on("mousedown mouseup mouseleave",function(t){e(t.type,l,function(){(null==i||i<parseFloat(n.value))&&n.value--}),"mouseup"!=t.type&&"mouseleave"!=t.type||u.trigger("input"),u.change()}),c=t("<button/>").attr("type","button").html(a.buttonIncrement).on("mousedown mouseup mouseleave",function(t){e(t.type,l,function(){(null==o||o>parseFloat(n.value))&&n.value++}),"mouseup"!=t.type&&"mouseleave"!=t.type||u.trigger("input"),u.change()});switch(a.buttonPosition){case"left":p.appendTo(r),c.appendTo(r),u.appendTo(r);break;case"right":u.appendTo(r),p.appendTo(r),c.appendTo(r);break;case"around":default:p.appendTo(r),u.appendTo(r),c.appendTo(r)}a.autoSize&&(u.width(u.val().length+a.autoSizeBuffer+"ch"),u.on("keyup input",function(){u.animate({width:u.val().length+a.autoSizeBuffer+"ch"},200)}))})}});

jQuery(document).ready(function($) {

	function initWidgetNumberSpiner($scope, $) {
		var $elements = $scope.find('[data-piotnetforms-spiner] input[type="number"]');

		if (!$elements.length) {
			return;
		}

		$.each($elements, function (i, $element) {
			$($element).niceNumber({
				autoSize: false,
			});
		});
    };

    $(document).on('piotnet-widget-init-Piotnetforms_Field', '[data-piotnet-editor-widgets-item-root]', function(){
		if($(this).find('.nice-number').length == 0) {
			initWidgetNumberSpiner($(this), $);
		}
	});

	//$(window).on('load', function(){
		initWidgetNumberSpiner($('[data-piotnet-widget-preview], #piotnetforms'), $);
	//});

});