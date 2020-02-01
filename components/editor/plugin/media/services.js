export default {
  bilibili: {
    regex: /https?:\/\/www\.bilibili\.com\/video\/av([\w\W]+)/,
    embedUrl: '//player.bilibili.com/player.html?aid=<%= remote_id %>',
    html: "<iframe width='100%' height='400' scrolling='no' border='0' frameborder='no' framespacing='0' allowtransparency='true' allowfullscreen='true'></iframe>",
    id: val => val[0].split('/')[0].split('?')[0]
  },
  bilih5: {
    regex: /https?:\/\/m\.bilibili\.com\/video\/av([\w\W]+)/,
    embedUrl: '//player.bilibili.com/player.html?aid=<%= remote_id %>',
    html: "<iframe width='100%' height='400' scrolling='no' border='0' frameborder='no' framespacing='0' allowtransparency='true' allowfullscreen='true'></iframe>",
    id: val => val[0].split('.')[0].split('?')[0]
  }
}
