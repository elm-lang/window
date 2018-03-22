var _elm_lang$window$Native_Window = function()
{

var size = _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)	{
	callback(_elm_lang$core$Native_Scheduler.succeed({
		width: window.innerWidth,
		height: window.innerHeight
	}));
});

var scrollTo = function(x, y) {
  return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)	{
    window.scrollTo(x, y);
    callback(_elm_lang$core$Native_Scheduler.succeed());
  });
};
  
return {
  size: size,
  scrollTo: F2(scrollTo)
};

}();
