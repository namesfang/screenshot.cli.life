import { existsSync, readdirSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

const projs = [
  {
    label: '房屋租赁平台-管家端App',
    desc: '使用UniApp(Vue3+pinia)实现一套代码发布安卓和IOS(已上架到appstore)'
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
    desc: '使用Nuxtjs开发，对SEO友好支持'
  },
  {
    label: '房屋租赁平台-PC端',
    desc: '使用Vue3+TS+Pinia'
  },
  {
    label: '低代码平台',
    desc: '使用Vue3+Pinia开发的低代码平台表单JSON渲染引擎'
  },
  {
    label: '电子名片',
    desc: '小程序原生开发；使用腾讯OCR识别',
  },
  {
    label: '雨思忆溯源小程序',
    desc: '小程序原生开发；后端使用PHP(Codeigniter) + SQLite + Redis',
  },
  {
    label: '亨时利门店管理-门店管理小程序',
    desc: '小程序原生开发；后端使用PHP(Laravel) + MySQL + Redis'
  },
  {
    label: '亨时利门店管理-会员小程序',
    desc: '小程序原生开发；后端使用PHP(Laravel) + MySQL + Redis'
  },
  {
    label: '亨时利门店管理-PC端',
    desc: '前端使用Vue2+Vuex；后端使用PHP(Laravel) + MySQL + Redis',
  },
  {
    label: '亨时利-官网',
    desc: '后端使用PHP(Symfony) + MySQL + Redis',
    url: 'http://herrywatch.com'
  },
  // {
  //   id: 11,
  //   label: '技能人才端小程序',
  //   desc: '小程序原生开发；后端使用PHP(Symfony) + MySQL + Redis'
  // },
  // {
  //   id: 12,
  //   label: '技能人才企业端小程序',
  //   desc: '小程序原生开发；后端使用PHP(Symfony) + MySQL + Redis'
  // },
  // {
  //   id: 13,
  //   label: '技能人才',
  //   desc: '前端使用Vue3+pinia；后端使用PHP(Symfony) + MySQL + Redis'
  // }
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
