
jQuery(document).ready(function(){
  new fullpage('#fullpage', {
    licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
    autoScrolling:true,
		scrollHorizontally: true,
    anchors: ['firstPage', 'SecondPage', 'thirdPage'],
    lockAnchors: false,
    menu: "#main",
    afterload: function(anchorLink, index) {
      jQuery('.fullPage-anchor').removeClass(anchor-active);
      jQuery('a[href="#"]'+index["anchor"] +']').addClass('anchor-active');
    }
  })
// $(document).ready(function() {
// 	$('#fullpage').fullpage({

	// });

  fullpage_api.setAllowScrolling(true);
});
