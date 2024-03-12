import { existsSync, readdirSync } from 'node:fs'
import { join } from 'node:path'

export type Image = {
  alt: string;
  src: string;
}

export type Item = {
  id: number;
  label: string;
  images: Image[];
  desc: string;
  url?: string;
}

export const load = ()=> {

  const projs: Item[] = [
    {
      id: 1,
      label: '房屋租赁平台-管家端App',
      images: [],
      desc: '使用UniApp(Vue3+pinia)实现一套代码发布安卓和IOS(已上架到appstore)'
    },
    {
      id: 2,
      label: '房屋租赁平台-维修服务',
      images: [],
      desc: '使用小程序原生开发(ts+scss)'
    },
    {
      id: 3,
      label: '房屋租赁平台-地图找房',
      images: [],
      desc: '使用原生js+webpack5打包应用；APP端使用webview引入'
    },
    // {
    //   id: 4,
    //   label: '租赁官网',
    //   dirname: '租赁平台',
    //   desc: '使用Nuxtjs开发，对SEO友好支持（未上线）'
    // },
    {
      id: 5,
      label: '房屋租赁平台-PC端',
      images: [],
      desc: '使用Vue3+TS+Pinia'
    },
    {
      id: 6,
      label: '电子名片',
      desc: '小程序原生开发；使用腾讯OCR识别',
      images: [],
    },
    {
      id: 7,
      label: '亨时利门店管理-门店管理小程序',
      images: [],
      desc: '小程序原生开发；后端使用PHP(Laravel) + MySQL + Redis'
    },
    {
      id: 8,
      label: '亨时利门店管理-会员小程序',
      images: [],
      desc: '小程序原生开发；后端使用PHP(Laravel) + MySQL + Redis'
    },
    {
      id: 9,
      images: [],
      label: '亨时利门店管理-PC端',
      desc: '前端使用Vue2+Vuex；后端使用PHP(Laravel) + MySQL + Redis',
    },
    {
      id: 10,
      label: '亨时利-官网',
      images: [],
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

  projs.forEach((t)=> {
    const dirname = join('static', 'images', t.label);

    if(!existsSync(dirname)) {
      return ''
    }

    const files = readdirSync(dirname)

    t.images = files.map((name)=> {
      return {
        src: `images/${t.label}/${name}`,
        alt: name,
      }
    });
  })

  return {
    projs,
  }
}