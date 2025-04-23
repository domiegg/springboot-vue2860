const base = {
    get() {
        return {
            url : "http://localhost:8080/wuzhihuaxuexipingtai/",
            name: "wuzhihuaxuexipingtai",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/wuzhihuaxuexipingtai/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "无纸化学习平台"
        } 
    }
}
export default base
