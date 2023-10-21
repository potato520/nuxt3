<script setup lang="ts">
import type { VideoItem } from '@/types/video';


const { data: channelList } = await useFetch('/api/channel')
// console.log(channelList);
// 获取视频列表数据
const { data: videoList } = await useFetch('/api/video')


const list = ref<VideoItem[]>([]);
const loading = ref(false);
const finished = ref(false);

let page = 1
let pageSize = 20
const onLoad = () => {
    // 正在加载
    loading.value = false
    // console.log('触底了');
    // 根据页码提取数据
    const data = videoList.value?.slice((page - 1) * pageSize, page * pageSize) as VideoItem[]
    // 最佳到页面数组中
    list.value.push(...data)
    page++
    if (videoList.value?.length === list.value.length) {
        finished.value = true
    }
}

// 初始化，主动请求前20条数据,方便SEO
onLoad()
</script>
<template>

    <!-- 公共头部 -->
    <AppHeader />
    <!-- 频道模块 -->
    <van-tabs>
        <van-tab v-for="item in channelList" :key="item.id" :title="item.name" />
    </van-tabs>

    <!-- 内容视频区域 -->
    <van-list v-model:loading="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
        <!-- <van-cell v-for="item in list" :key="item" :title="item" /> -->
        <div class="video-list">
            <AppVideo v-for="item in list" :key="item.bvid" :item="item"/>
        </div>
    </van-list>
</template>
<style lang="scss">

// 视频列表
.video-list {
    display: flex;
    flex-wrap: wrap;
    padding: 10px 5px;
}


</style>