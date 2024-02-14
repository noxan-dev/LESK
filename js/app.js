const menu = $('#menu')
const dips = $('#dips')

$.getJSON('https://raw.githubusercontent.com/noxan-dev/LESK/master/menu.json?token=GHSAT0AAAAAABULC6SXOFRAEJLPIWSQCPAEZNPAAKQ', function (data) {
  $.each(data, function (key, val) {
    dips.append(
      `<div class="max-w-sm rounded overflow-hidden shadow-lg p-4 bg-white">
          <img class="w-full" src="" alt="">
          <p>Name: ${val.name}</p>
          <p>About: ${val.description}</p>
          <p>Price: ${val.price}</p>
      </div>`);
  })
})
