const menu = $('#menu')
const dips = $('#dips')

$.getJSON('https://raw.githubusercontent.com/noxan-dev/LESK/master/menu.json?token=GHSAT0AAAAAABULC6SXOFRAEJLPIWSQCPAEZNPAAKQ', function (data) {
  $.each(data, function (key, val) {
    dips.append(
      `<div class="max-w-sm rounded overflow-hidden shadow-lg p-2 mx-4 md:m-0 bg-white">
          <img class="w-full" src="" alt="">
          <p><span>Name:</span> ${val.name}</p>
          <p class="flex gap-x-1"><span>About:</span> ${val.description}</p>
          <p>Price: $${val.price}</p>
          <p class="">Size: ${val.size.join(', ')}</p>
      </div>`);
  })
})

// Cache selectors
var lastId,
 topMenu = $("#mainNav"),
 topMenuHeight = topMenu.outerHeight()+1,
 // All list items
 menuItems = topMenu.find("a"),
 // Anchors corresponding to menu items
 scrollItems = menuItems.map(function(){
   var item = $($(this).attr("href"));
    if (item.length) { return item; }
 });
console.log(menuItems)
// Bind click handler to menu items
// so we can get a fancy scroll animation
menuItems.click(function(e){
  var href = $(this).attr("href"),
      offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
  $('html, body').stop().animate({
      scrollTop: offsetTop
  }, 850);
  e.preventDefault();
});

// Bind to scroll
$(window).scroll(function(){
   // Get container scroll position
   var fromTop = $(this).scrollTop()+topMenuHeight;

   // Get id of current scroll item
   var cur = scrollItems.map(function(){
     if ($(this).offset().top < fromTop)
       return this;
   });
   // Get the id of the current element
   cur = cur[cur.length-1];
   var id = cur && cur.length ? cur[0].id : "";

   if (lastId !== id) {
       lastId = id;
       // Set/remove active class
       menuItems
         .parent().removeClass("active")
         .end().filter('[href="#'+id+'"]').parent().addClass("active");
   }
});

