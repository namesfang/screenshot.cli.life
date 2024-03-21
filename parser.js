import { existsSync, readdirSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

const projs = [
  {
    label: '房屋租赁平台-管家端App',
    desc: '主导开发使用UniApp(Vue3+pinia)实现一套代码发布安卓和IOS(已上架到appstore)'
  },
  {
    label: '房屋租赁平台-维修服务',
    desc: '使用小程序原生开发(ts+scss)'
  },
  {
    label: '房屋租赁平台-地图找房',
    desc: '使用原生js+webpack5打包应用；APP端使用webview引入'
  },
  {
    label: '房屋租赁平台-官网',
    desc: '独立开发 | 使用Nuxtjs开发，对SEO友好支持'
  },
  {
    label: '房屋租赁平台-PC端',
    desc: '使用Vue3+TS+Pinia'
  },
  {
    label: '低代码平台',
    desc: '主导使用Vue3+Pinia研发的低代码平台表单JSON渲染引擎'
  },
  {
    label: '电子名片',
    desc: '小程序原生开发；使用腾讯OCR识别',
  },
  {
    label: '雨思忆溯源小程序',
    desc: '全栈开发 自已设计原型 | 小程序原生开发；后端使用PHP(Codeigniter) + SQLite + Redis',
  },
  {
    label: '亨时利门店管理-门店管理小程序',
    desc: '全栈开发 自已设计原型 | 小程序原生开发；后端使用PHP(Laravel) + MySQL + Redis'
  },
  {
    label: '亨时利门店管理-会员小程序',
    desc: '全栈开发 自已设计原型 | 小程序原生开发；后端使用PHP(Laravel) + MySQL + Redis'
  },
  {
    label: '亨时利门店管理-PC端',
    desc: '全栈开发 | 前端使用Vue2+Vuex；后端使用PHP(Laravel) + MySQL + Redis',
  },
  {
    label: '亨时利-官网',
    desc: '自主设计UI，参考多家名表官网。前端使用原生JS+JQ，后端使用PHP(Symfony) + MySQL + Redis',
    url: 'http://herrywatch.com'
  },
  {
    label: '某地方人力资源招聘平台 - 技能人才端',
    desc: '全栈开发 | 小程序原生开发；后端使用PHP(Symfony) + MySQL + Redis；核心功能有：职位浏览和企业信息、投简历、即时消息、个人简历维护等'
  },
  {
    label: '某地方人力资源招聘平台 - 企业端小程序',
    desc: '全栈开发 | 程序原生开发；后端使用PHP(Symfony) + MySQL + Redis；核心功能有：发布职位、企业信息维护、即时消息'
  },
  {
    label: '某地方人力资源招聘平台 - PC管理端',
    desc: '全栈开发 | 前端使用Vue3+pinia；后端使用PHP(Symfony) + MySQL + Redis；企业管理、人才管理、资讯管理等'
  }
]

projs.forEach((t, i) => {
  const dirname = join('static', 'images', t.label);

  t.id = i + 1;

  if (!existsSync(dirname)) {
    t.images = [];
    return ''
  }

  const files = readdirSync(dirname)

  t.images = files.map((name) => {
    return {
      src: `images/${t.label}/${name}`,
      alt: name,
    }
  });
})

writeFileSync(join('src', 'lib', 'data.ts'), 'export const projs = '+ JSON.stringify(projs, null, 2))
