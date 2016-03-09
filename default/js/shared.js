var menuBar = $('.menuBar')
var Items = menuBar.find('.menuItem');
var bp = 1152;
var win = $(window)
var iconMenu = $('.iconMenu');
var menu = $('.menu');
win.resize(function(){
	if(menu.hasClass('opened')){menu.removeClass('opened');}
	if(win.width()>bp){
		if(win.data('size')!=='desktop'){
			win.data('size','desktop');
			Items.unbind('click');
			for(var i=0;i<Items.length;i++){
				item = $(Items[i]);
				item.unbind().hover(function(e){
					$(e.currentTarget).addClass('opened');
				},function(e){
					$(e.currentTarget).removeClass('opened');
				})
			}
			iconMenu.unbind('click');
		}
	}else{
		if(win.data('size')!=='mobile') {
			win.data('size','mobile');
			Items.unbind('hover');
			for(var i=0;i<Items.length;i++){
				item = $(Items[i]);
				item.unbind().click(function(e){
					e.preventDefault();
					$(e.currentTarget).siblings().removeClass('opened')
					$(e.currentTarget).toggleClass('opened');
				})
			}
			iconMenu.click(function(e){
				e.preventDefault();
				menu.toggleClass('opened');
			})
		}	

	}
});
win.resize();
// for(var i=0;i<Items.length;i++){
// 	item = $(Items[i]);
// 	item.hover(function(e){$(e.currentTarget).addClass('opened');},function(e){$(e.currentTarget).removeClass('opened');})
// }