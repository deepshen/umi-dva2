export default {
  plugins: [
    'umi-plugin-dva',
    ['umi-plugin-routes',{
      exclude:[
        /models/,
        /servers/,
        /component/,
      ]
    }]
  ],
}
