const menu = $('#menu')
const dips = $('#dips')
// https://raw.githubusercontent.com/noxan-dev/LESK/master/menu.json?token=GHSAT0AAAAAABULC6SXOFRAEJLPIWSQCPAEZNPAAKQ
$.getJSON('./menu.json', function (data) {
  $.each(data, function (key, val) {
    const div = $(`
      <div class="card max-w-sm rounded overflow-hidden shadow-lg p-2 mx-4 md:m-0 bg-white">
<!--        <details name="dip-image">-->
<!--          <summary class="">Image</summary>-->
<!--          <img class="w-full rounded" src="" alt="">-->
<!--        </details>-->
        <p><span>Name:</span> ${val.name}</p>
        <p class="flex gap-x-1"><span>About:</span> ${val.description}</p>
        <ul class="list-none p-0">${val.price.map(item => `<li>Size: ${Object.keys(item)[0]}, Price: $${Object.values(item)[0]}</li>`).join('')}</ul>
      </div>`);
    if (val.hasOwnProperty("image")) {
      div.find("img").attr("src", val.image);
    }
    $("#dips").append(div);
  })
})

// Cache selectors
var lastId,
  topMenu = $("#mainNav"),
  topMenuHeight = topMenu.outerHeight() + 1,
  // All list items
  menuItems = topMenu.find("a"),
  // Anchors corresponding to menu items
  scrollItems = menuItems.map(function () {
    var item = $($(this).attr("href"));
    if (item.length) {
      return item;
    }
  });
// Bind click handler to menu items
// so we can get a fancy scroll animation
menuItems.click(function (e) {
  var href = $(this).attr("href"),
    offsetTop = href === "#" ? 0 : $(href).offset().top - topMenuHeight + 1;
  $('html, body').stop().animate({
    scrollTop: offsetTop
  }, 150);
  e.preventDefault();
});

// Bind to scroll
$(window).scroll(function () {
  // Get container scroll position
  var fromTop = $(this).scrollTop() + topMenuHeight;

  // Get id of current scroll item
  var cur = scrollItems.map(function () {
    if ($(this).offset().top < fromTop)
      return this;
  });
  // Get the id of the current element
  cur = cur[cur.length - 1];
  var id = cur && cur.length ? cur[0].id : "";

  if (lastId !== id) {
    lastId = id;
    // Set/remove active class
    menuItems
      .parent().removeClass("active")
      .end().filter('[href="#' + id + '"]').parent().addClass("active");
  }
});

