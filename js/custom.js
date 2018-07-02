/*-------------------------------------------------------------------------------
  PRE LOADER
-------------------------------------------------------------------------------*/

$(window).load(function () {
  $('.preloader').fadeOut(1000); // set duration in brackets    
});
var index = document.querySelectorAll('#index');
var project = document.querySelectorAll('#project');
var navbar = new Vue({
  el: '#navbar',
  data() {
    return {
      navbars: [{
          navbarName: '项目',
          navbarLink: 'index.html',

        },
        {
          navbarName: '关于',
          navbarLink: 'about.html'
        },
        {
          navbarName: '博客',
          navbarLink: 'blog.html'
        },
        {
          navbarName: '联系',
          navbarLink: 'contact.html'
        }
      ]
    }
  }
});


var footer = new Vue({
  el: '#footer',
  data() {
    return {
      footer: {
        address: '这里是地址地址地址',
        tel: '17521068776',
        mail: 'qiheyezi.de@163.com'
      }
    }
  }
})



if (index) {
  var index = new Vue({
    el: '#index',
    data() {
      return {
        home: {
          homeText: '不懂产品不会视觉的交互不是好设计专注金融产品用户体验'
        },
        contact: {
          contactShow: true,
          contactText: '嗨,如果有兴趣共事,请戳-->',
          contactLink: 'contact.html'
        },
        projects: [{
          projectName: '系统授权规范',
          projectLink: 'single-project.html',
          projectImage: 'images/project-1.jpg'
        }, {
          projectName: '指纹支付流程',
          projectLink: 'single-project.html',
          projectImage: 'images/project-2.jpg'
        }, {
          projectName: 'App键盘规范',
          projectLink: 'single-project.html',
          projectImage: 'images/project-3.jpg'
        }, {
          projectName: '模块化配置方案',
          projectLink: 'single-project.html',
          projectImage: 'images/project-4.jpg'
        }, {
          projectName: '消息push流程',
          projectLink: 'single-project.html',
          projectImage: 'images/project-5.jpg'
        }, {
          projectName: '支付流程',
          projectLink: 'single-project.html',
          projectImage: 'images/project-6.jpg'
        }]
      }
    }
  })
}
