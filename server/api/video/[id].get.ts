import video from '@/database/video'
export default defineEventHandler((event) => {
    // 获取路由参数
    const {id}= event.context.params || {}
 return video.find((v)=>v.bvid===id)
})