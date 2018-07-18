/*-------------------------------------------------------------------------------
  PRE LOADER
-------------------------------------------------------------------------------*/

$(window).load(function () {
  $('.preloader').fadeOut(1000); // set duration in brackets    
});

var queryStr = (function () {
  var url = location.search; // 获取url中"?"符后的字串
  var theRequest = {};
  if (url.indexOf('?') !== -1) {
    var str = url.substr(1);
    var strs = str.split('&');
    for (var i = 0; i < strs.length; i++) {
      theRequest[strs[i].split('=')[0]] = decodeURI(strs[i].split('=')[1]);
    }
  }
  return theRequest;
})();

var index = document.querySelectorAll('#index');
var project = document.querySelectorAll('#project');
var about = document.querySelectorAll('#about');
// 导航
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
        }
      ]
    }
  }
});
// 页脚
var footer = new Vue({
  el: '#footer',
  data() {
    return {
      footer: {
        address: 'base: 上海&杭州',
        tel: '17521068776',
        mail: 'qiheyezi.de@163.com'
      }
    }
  }
})
// 关于
if (about) {
  new Vue({
    el: '#about',
    data() {
      return {
        currentJob: [
          '2016.04 至今',
          '1.负责《万达财富》《万达贷》《快易花》等多个理财、贷款、征信类App及相关数据后台、风 险监控平台等产品的交互设计，输出高质量的页面流程图、功能逻辑图、产品高保真等; ',
          '2. 参与大前端统一组件库的规划订制， 制定组件库交互和规范;',
          '3. 参与产品数据分析， 竞品分析， 深化用户画像， 总结用户反馈建议， 建立体验优化backlog， 并推动其执行落地， 不断提高产品的用户体验;',
          '4. 制定工作规范， 组织组内和全员评审， 协调交互设计资源， 把控交互设计质量;',
          '5. 参与产品需求讨论， 协助视觉设计师完成视觉设计。'
        ],
        selfIntro: ['善于发现问题，解决问题。', '沟通能力强。', '工作有计划有目标，注重细节、规范和文档。', '重视团队协作，乐于学习分享。'],
        eduHistory: [
          '南京航空航天大学·硕士·设计学 2011.09 - 2014.04 ',
          '南京航空航天大学·本科·工业设计 2007.09 - 2011.06'
        ],
        skills: [
          'Sketch', 'AI', ' Principle', ' Mockingbot', ' PS', ' Axure', ' Flinto', ' AE', ' CET-6 ', ' OmniGraffle', ' Mindnode'
        ]
      }
    }
  })
}
// 首页
if (index) {
  var index = new Vue({
    el: '#index',
    data() {
      return {
        home: {
          homeText: ['不懂产品不会视觉的交互不是好设计', '专注金融产品用户体验'],
          homeText2: '好的设计，帮助实现产品目标，配合产品规划，提高产品价值。'
        },
        contact: {
          contactShow: false,
          contactText: '嗨，如果有兴趣共事，请戳-->',
          contactLink: 'contact.html'
        },
        projects: [{
          projectName: '系统授权规范',
          projectLink: 'project.html?id=system-auth',
          projectImage: 'images/project-1.jpg'
        }, {
          projectName: '指纹支付流程',
          projectLink: 'project.html?id=fingerprint-payment',
          projectImage: 'images/project-2.jpg'
        }, {
          projectName: 'App键盘规范',
          projectLink: 'project.html?id=keyboard-specification',
          projectImage: 'images/project-6.jpg'
        }, {
          projectName: '模块化配置',
          projectLink: 'project.html?id=modular-config',
          projectImage: 'images/project-5.jpg'
        }, {
          projectName: '消息push流程',
          projectLink: 'project.html?id=push-notification',
          projectImage: 'images/project-4.jpg'
        }, {
          projectName: '支付流程',
          projectLink: 'project.html?id=payment-process',
          projectImage: 'images/project-3.jpg'
        }]
      }
    }
  })
}
// 项目
var id = queryStr.id;
if (project && id) {
  var project = new Vue({
    el: '#single-project',
    data() {
      return {
        projects: {
          "system-auth": {
            title: '系统授权规范',
            description: '定义了常见需要用户授权的权限的等级、询问机制、是否必选、被拒提示等的规范，同时区分iOS和Android系统。以不影响用户使用体验为基础，满足产品业务和功能需求及各设备的系统要求为前提，定义授权规范，不止满足当前产品所需，还解决了产品以后可能新增的各种授权的合理使用问题。',
            images: [{
              link: 'images/system-auth/system-auth001.jpeg',
              size: ''
            }, {
              link: 'images/system-auth/system-auth002.jpeg',
              size: ''
            }, {
              link: 'images/system-auth/system-auth003.jpeg',
              size: ''
            }, {
              link: 'images/system-auth/system-auth004.jpeg',
              size: ''
            }, {
              link: 'images/system-auth/system-auth005.jpeg',
              size: ''
            }, {
              link: 'images/system-auth/system-auth006.jpeg',
              size: ''
            }, {
              link: 'images/system-auth/system-auth007.jpeg',
              size: ''
            }, {
              link: 'images/system-auth/system-auth008.jpeg',
              size: ''
            }, {
              link: 'images/system-auth/system-auth009.jpeg',
              size: ''
            }, {
              link: 'images/system-auth/system-auth010.jpeg',
              size: ''
            }, {
              link: 'images/system-auth/system-auth011.jpeg',
              size: ''
            }]
          },
          "fingerprint-payment": {
            title: '指纹支付流程',
            description: '引导用户打开指纹支付，提高支付效率，同时定义了支付开关，优化了指纹支付使用流程的具体逻辑，提高用户支付效率和支付体验。',
            images: [{
              link: 'images/fingerprint-payment/fingerprint-payment001.jpg',
              size: ''
            }, {
              link: 'images/fingerprint-payment/fingerprint-payment002.jpg',
              size: ''
            }, {
              link: 'images/fingerprint-payment/fingerprint-payment003.jpg',
              size: ''
            }, {
              link: 'images/fingerprint-payment/fingerprint-payment004.jpg',
              size: ''
            }, {
              link: 'images/fingerprint-payment/fingerprint-payment005.jpg',
              size: ''
            }]
          },
          "keyboard-specification": {
            title: '键盘使用规范',
            description: '制定了iOS设备上产品的键盘使用规范，符合用户操作习惯，提高用户使用效率和体验。',
            images: [{
              link: 'images/keyboard-specification/keyboard-specification001.jpg',
              size: ''
            }, {
              link: 'images/keyboard-specification/keyboard-specification002.jpg',
              size: ''
            }, {
              link: 'images/keyboard-specification/keyboard-specification003.jpg',
              size: ''
            }, {
              link: 'images/keyboard-specification/keyboard-specification004.jpg',
              size: ''
            }, {
              link: 'images/keyboard-specification/keyboard-specification005.jpg',
              size: ''
            }, {
              link: 'images/keyboard-specification/keyboard-specification006.jpg',
              size: ''
            }, {
              link: 'images/keyboard-specification/keyboard-specification007.jpg',
              size: ''
            }, {
              link: 'images/keyboard-specification/keyboard-specification008.jpg',
              size: ''
            }, {
              link: 'images/keyboard-specification/keyboard-specification009.jpg',
              size: ''
            }, {
              link: 'images/keyboard-specification/keyboard-specification010.jpg',
              size: ''
            }, {
              link: 'images/keyboard-specification/keyboard-specification011.jpg',
              size: ''
            }, {
              link: 'images/keyboard-specification/keyboard-specification012.jpg',
              size: ''
            }]
          },
          "modular-config": {
            title: '模块化配置',
            description: '根据页面数据分析，为提高个人中心邀请有礼功能转化率，引导用户使用会员特权功能，对现有页面改版的同时特意做了功能入口的模块化设计，为今后产品功能的增删做了有效准备，减少了后续的开发成本，提高团队效能。',
            images: [{
              link: 'images/modular-config/modular-config001.jpg',
              size: ''
            }]
          },
          "push-notification": {
            title: '消息push流程',
            description: '制定了消息推送功能模块的需求，包含我的消息、平台公告、活动精选等消息类型，明确了消息推送系统结构，前端功能结构、消息发送平台功能结构，并制定了交互流程和交互细节，旨在提高消息触达和转化率。',
            images: [{
              link: 'images/push-notification/push-notification001.jpg',
              size: ''
            }, {
              link: 'images/push-notification/push-notification002.jpg',
              size: ''
            }, {
              link: 'images/push-notification/push-notification003.jpg',
              size: ''
            }, {
              link: 'images/push-notification/push-notification004.jpg',
              size: ''
            }, {
              link: 'images/push-notification/push-notification005.jpg',
              size: ''
            }, {
              link: 'images/push-notification/push-notification006.jpg',
              size: ''
            }, {
              link: 'images/push-notification/push-notification007.jpg',
              size: ''
            }, {
              link: 'images/push-notification/push-notification008.jpg',
              size: ''
            }, {
              link: 'images/push-notification/push-notification009.jpg',
              size: ''
            }, {
              link: 'images/push-notification/push-notification010.jpg',
              size: ''
            }, {
              link: 'images/push-notification/push-notification011.jpg',
              size: ''
            }, {
              link: 'images/push-notification/push-notification012.jpg',
              size: ''
            }]
          },
          "payment-process": {
            title: '支付流程',
            description: '明确并优化了支付流程中支付密码输入错误次数、报错规范、找回密码等，提高用户支付效率和支付体验。',
            images: [{
              link: 'images/payment-process/payment-process001.jpg',
              size: ''
            }]
          }
        }
      }
    },
    computed: {
      project() {
        return this.projects[id];
      }
    }
  })
}
