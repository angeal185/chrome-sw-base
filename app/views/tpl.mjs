import { x } from '../modules/xscript.mjs';
import { xdata } from '../data/xdata.mjs';

const tpl = {
  //nav
  menu_main(router){
    let item = x('nav', {class: 'navbar'});

    return item;
  },
  menu_mobile(router){
    let item = x('div')
    return item;
  },
  //forum
  sidebar_forum(){

  },
  listgroup_forum(){

  },
  listitem_forum(){

  },
  //blog
  sidebar_blog(){

  },
  listgroup_blog(){

  },
  listitem_blog(){

  }
}

export { tpl }
