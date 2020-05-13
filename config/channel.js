export default [
  {
    type: 'douga',
    main: true,
    left: {
      slug: 1,
      name: '动画',
      type: 'MainFlowTab'
    },
    right: {
      slug: 1,
      name: '特别推荐',
      type: 'RecommendedSwipe'
    }
  },
  {
    type: 'bangumi',
    main: true,
    left: {
      slug: 5,
      name: '番剧',
      type: 'BangumiSwitcher'
    },
    right: {
      slug: 5,
      type: 'RankSwitcher'
    }
  },
  {
    type: 'bangumi-about',
    main: false,
    left: {
      slug: 8,
      name: '番剧动态',
      type: 'MainFlowTab'
    },
    right: {
      slug: 8,
      type: 'RankDaily'
    }
  },
  {
    type: 'manga',
    main: true,
    left: {
      slug: 4,
      name: '漫画',
      type: 'MainFlowTab'
    },
    right: {
      slug: 4,
      type: 'RankSwitcher'
    }
  },
  {
    type: 'game',
    main: true,
    left: {
      slug: 2,
      name: '游戏',
      type: 'MainFlowTab'
    },
    right: {
      slug: 2,
      type: 'RankSwitcher'
    }
  },
  {
    type: 'novel',
    main: true,
    left: {
      slug: 6,
      name: '帖子',
      type: 'MainFlowTab'
    },
    right: {
      slug: 6,
      type: 'RankDaily'
    }
  },
  {
    type: 'music',
    main: true,
    left: {
      slug: 7,
      name: '音乐',
      type: 'MainFlowTab'
    },
    right: {
      slug: 7,
      type: 'RankSwitcher'
    }
  },
  {
    type: 'life',
    main: true,
    left: {
      slug: 3,
      name: '生活',
      type: 'MainFlowTab'
    },
    right: {
      slug: 3,
      type: 'RankSwitcher'
    }
  }
]
