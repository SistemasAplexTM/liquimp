import Index from '@/views/master/Index.vue'
import Master from '@/views/master/Master.vue'
import ControlBook from '@/views/master/ControlBook.vue'
import layouts from '../../layout'

export default {
  path: '/master',
  name: 'master',
  component: Index,
  redirect: { path: '/index',name: 'index' },
  children: [
    {
      path: 'index',
      name: 'index',
      component: Master,
      meta: {
        auth: true,
        layout: layouts.navLeft,
        searchable: true,
        tags: ['Menú Principal'],
        title: 'Guias Master',
        icon: 'file-invoice-dollar'
      }
    },
    {
      path: 'controlbook',
      name: 'controlbook',
      component: ControlBook,
      meta: {
        auth: true,
        layout: layouts.navLeft,
        searchable: true,
        tags: ['Menú Principal'],
        title: 'Libro de control',
        icon: 'book-spells'
      }
    }
  ]
 }
