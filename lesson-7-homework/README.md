# 



**首页 :**

- 轮播图

- 利用sprit图渲染小图标

- 中间聚划算等部分导航由于时间原因简化了，上部分图片保存在本地，断网可正常显示

- 整个APP各组件大小利用vw设置，页面动态响应视口宽度

  ![](./README.images/index1.png)

  - 滚动到下方有推荐商品列表，数据采用getServerSideProps在首页从api/goods信息中传入，**实现SSR**；每个商品链接到二级页面
  - 滚动到下方出现返回顶部图标，点击可返回顶部

  ![](./README.images/index2.png)

  **二级页面** 

  由于未找到商品详情的API，利用api/goods中的商品信息简单做了二级页面。通过首页链接传入商品的id,二级页面通过withRouter接收到的商品id匹配对应商品信息，呈现出商品对应的购买详情

  ![](./README.images/detail1.png)

**LightHouse**

详情在lighthouse文件夹中，其中首屏的性能：

![](./README.images/lighthouse_index.png)

其中time to interactive过长，有较多无用的js代码，有待删除

![](./README.images/youhua.png)