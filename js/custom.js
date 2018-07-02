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
          homeText: '有创造力的网站&移动端设计,专注于极致的用户体验与品牌设计'
        },
        contact: {
          contactShow: true,
          contactText: '嗨,如果有兴趣共事,请戳-->',
          contactLink: 'contact.html'
        },
        projects: [{
          projectName: '案例1',
          projectLink: 'single-project.html',
          projectImage: 'images/portfolio-img1.jpg'
        }, {
          projectName: '案例2',
          projectLink: 'single-project.html',
          projectImage: 'images/portfolio-img2.jpg'
        }, {
          projectName: '案例3',
          projectLink: 'single-project.html',
          projectImage: 'images/portfolio-img3.jpg'
        }, {
          projectName: '案例4',
          projectLink: 'single-project.html',
          projectImage: 'images/portfolio-img4.jpg'
        }, {
          projectName: '案例5',
          projectLink: 'single-project.html',
          projectImage: 'images/portfolio-img5.jpg'
        }, {
          projectName: '案例6',
          projectLink: 'single-project.html',
          projectImage: 'images/portfolio-img6.jpg'
        }]
      }
    }
  })
}
