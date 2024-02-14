const menu = $('#menu')
const dips = $('#dips')

$.getJson('https://raw.githubusercontent.com/noxan-dev/LESK/master/menu.json?token=GHSAT0AAAAAABULC6SXOFRAEJLPIWSQCPAEZNPAAKQ', function (data) {
  $.each(data, function (key, val) {
    console.log(val)
    dips.append(`<div class="">
           <p>${val.name}</p>
         </div>`);
  })
})
