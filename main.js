console.clear();

http.__okhttp__.setTimeout(10000);

let url = [
    'http://cdn.sec-an.cn/Better-Auto-XXQG/UI.js',
    'https://github.secan.workers.dev/https://raw.githubusercontent.com/sec-an/Better-Auto-XXQG/main/UI.js',
    'https://cdn.jsdelivr.net/gh/sec-an/Better-Auto-XXQG@main/UI.js',
    'https://raw.githubusercontent.com/sec-an/Better-Auto-XXQG/main/UI.js',
];

for (var i = 0; i < url.length; i++) {
    try {
        let res = http.get(url[i]);
        console.log(res.statusCode);
        if (res.statusCode == 200) {
            var UI = res.body.string();
            break;
        } else {
            toast('UI脚本:地址' + i + '下载失败');
            console.log('UI脚本:地址' + i + '下载失败');
        }
    } catch (error) {}
}

engines.execScript("UI", UI);