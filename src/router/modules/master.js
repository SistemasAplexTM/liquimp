import Master from '../../views/master/Index.vue'
import layouts from '../../layout'

export default {
  path: '/master',
  name: 'master',
  component: Master,
  meta: {
   auth: true,
   layout: layouts.navLeft,
   searchable: true,
   tags: ['Menú Principal']
  }
 }
