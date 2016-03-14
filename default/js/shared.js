var menuBar = $('.menuBar')
var Items = menuBar.find('.menuItem');
var bp = 1152;
var win = $(window)
var iconMenu = $('.iconMenu');
var menu = $('.menu');
var footerMenu = $('.footer-menu');
var language_btn = $('[data-action="toggle_toolLayer_cyc"]');
var service_btn = $('[data-action="toggle_toolLayer_customerservice"]');
var wrapper = $('.toolLayers_wrapper');
var language_panel = wrapper.find('.cyc');
var service_panel = wrapper.find('.customerservice');


language_btn.click(function(e){
	e.preventDefault();
	if(language_panel.hasClass('opened')){
		wrapper.removeClass('wrapper—open');
		language_panel.removeClass('opened');
	}else{
		wrapper.addClass('wrapper—open');
		language_panel.addClass('opened');
		if(service_panel.hasClass('opened')){
			service_panel.removeClass('opened');
		}
	}
})

service_btn.click(function(e){
	e.preventDefault();
	if(service_panel.hasClass('opened')){
		wrapper.removeClass('wrapper—open');
		service_panel.removeClass('opened');
	}else{
		wrapper.addClass('wrapper—open');
		service_panel.addClass('opened');
		if(language_panel.hasClass('opened')){
			language_panel.removeClass('opened');
		}
	}
})

for(var i=0;i<footerMenu.length;i++){
	_footerMenu = $(footerMenu[i]);
	_footerMenu.click(function(e){
		e.preventDefault();
		_fm = $(e.currentTarget);
		menuList = _fm.find('.footer-menu-list');
		if(_fm.hasClass('opened')){
			_fm.removeClass('opened');
			menuList.css({'max-height':'0px'})
		}else{
		_fm.addClass('opened')
		menuList.css({'max-height':'3000px'})
		}
	})
}
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