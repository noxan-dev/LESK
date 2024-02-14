const menu = $('#menu')
const dips = $('#dips')

$.getJSON('https://raw.githubusercontent.com/noxan-dev/LESK/master/menu.json?token=GHSAT0AAAAAABULC6SXOFRAEJLPIWSQCPAEZNPAAKQ', function (data) {
  $.each(data, function (key, val) {
    dips.append(
      `<div class="max-w-sm rounded overflow-hidden shadow-lg p-2 mx-4 md:m-0 bg-white">
          <img class="w-full" src="" alt="">
          <p><span>Name:</span> ${val.name}</p>
          <p class="flex gap-x-1"><span>About:</span> ${val.description}</p>
          <p>Price: ${val.price}</p>
          <p>Size: ${val.size}</p>
      </div>`);
  })
})
