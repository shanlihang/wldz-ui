export const getSideBarList = (pathname: string) => {
  if (['/base', '/form', '/feedback','/show','/other'].includes(pathname)) {
      return [
        {
          text: '基础组件',
          items: [
            { text: '按钮', link: '/components/button' },
            { text: '图标', link: '/basic/basic1' },
          ]
        },
        {
          text: '表单组件',
          items: [
            { text: '输入框', link: '/components/button' },
            { text: '选择器', link: '/basic/basic1' },
          ]
        },
        {
          text: '反馈组件',
          items: [
            { text: '弹窗', link: '/components/button' },
            { text: '抽屉', link: '/basic/basic1' },
          ]
        },
        {
          text: '展示组件',
          items: [
            { text: '卡片', link: '/components/button' },
            { text: '标签', link: '/basic/basic1' },
          ]
        },
        {
          text: '其他组件',
          items: [
            { text: '1', link: '/components/button' },
            { text: '2', link: '/basic/basic1' },
          ]
        },
      ]
  }
  if (['/guide'].includes(pathname)) {
    return [
      {
        text: '入门',
        items: [
          { text: '依赖导入', link: '/teach/index' },
          { text: '快速开始', link: '/teach/index' },
        ]
      },
      {
        text: '设计原则',
        items: [
          { text: '总结篇', link: '/summarize/index' },
          { text: '总结篇1', link: '/summarize/summarize1' }
        ]
      }
    ]
  }
  return []
}