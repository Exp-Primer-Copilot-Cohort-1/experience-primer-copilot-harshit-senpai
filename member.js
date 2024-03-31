function skillsMember() {
  return {
    name: 'skillsMember',
    path: '/skills/member',
    component: () => import('@/views/skills/member'),
    meta: {
      title: '技能管理',
      icon: 'el-icon-s-tools',
      roles: ['admin']
    }
  }
}