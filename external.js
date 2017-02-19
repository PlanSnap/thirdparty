$(".caps.cond.decoration-none.xs-fill-white.rounded.xs-border-red.xs-border.xs-float-right.xs-text-8.xs-px4.xs-py2").each(function( index ) {
  var clone = $(this).clone().insertBefore( $(this) );
 // $( "<p>Test</p>" ).insertBefore( $(this) );
 var data = JSON.stringify($(this).data());
 var url = 'http://plansnapdata/?data=' + encodeURIComponent(data);
 //clone.attr("href", "http://www.google.com/")
  var el = $(clone.context);
  el.attr("href", url)
  el.text('PlanSnap This');
  //window.test = el;
});