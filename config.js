'use strict';

require('dotenv').config();

module.exports = {
  url: 'https://woogler.netlify.app',
  pathPrefix: '/',
  title: "Woogler's blog",
  subtitle: '백수 이상욱의 블로그입니다.',
  copyright: '이상욱의 소유, Designed by alxshelepenok',
  facebookAppId: process.env.FB_APP_ID,
  postsPerPage: 10,
  googleAnalyticsId: 'UA-73379983-2',
  useKatex: false,
  menu: [
    {
      label: '내 프로필',
      path: '/pages/about'
    },
    {
      label: '모든 글',
      path: '/'
    },
    {
      label: 'Typography',
      path: '/category/typography'
    }
  ],
  author: {
    name: '이상욱',
    photo: '/photo.png',
    bio: '현 백수',
    contacts: {
      email: 'leesang627@gmail.com',
      facebook: 'woogler',
      telegram: '',
      twitter: '',
      github: 'wooogler',
      rss: '',
      vkontakte: '',
      linkedin: 'sangwook-lee',
      instagram: 'sang.woogler',
      line: '',
      gitlab: '',
      weibo: '',
      codepen: '',
      youtube: '',
      soundcloud: '',
    }
  }
};
