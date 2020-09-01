
const xdata = {
  default:{
    version: '1.0.0', // don't delete me
    origin: location.origin + '/index.html',
    params: true,
    error: '/error',
    base_path: '/dashboard',
    delete_meta: 10000,
    webmanifest: '',
    base_script_name: 'main',
    styles:[{
      href: './app/css/bootstrap.min.css',
      rel: 'stylesheet'
    },{
      href: './app/css/main.css',
      rel: 'stylesheet'
    }],
    js_head:[],
    js_body:[],
    storage: {
      max_age: 9999999999,
      prefix: 'rt'
    },
    stream: {
      download: {
        type: 'text/plain',
        charset: 'utf-8'
      },
      fetch: {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      }
    }
  },
  dashboard: {
    msg: 'dashboard page'
  },
  forum: {
    msg: 'forum page'
  },
  blog: {
    msg: 'blog page'
  },
  about: {
    msg: 'about page'
  },
  contact: {
    msg: 'contact page'
  },
  terms: {
    msg: 'terms page'
  }
}

export { xdata }
