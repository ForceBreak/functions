var useragents=[
    'android','astel','audiovox','blackberry','chtml','docomo',
    'ericsson','hand','iphone ','ipod','2me','ava','j-phone',
    'kddi','lg','midp','mini','minimo','mobi','mobile',
    'mobileexplorer','mot-e','motorola','mot-v','netfront',
    'nokia','palm','palmos','palmsource','pda','pdxgw','phone',
    'plucker','portable','portalmmm','sagem','samsung','sanyo',
    'sgh','sharp','sie-m','sie-s','smartphone','softbank',
    'sprint','symbian','telit','tsm','vodafone','wap',
    'windowsce','wml','xiino'
];
var agt=navigator.userAgent.toLowerCase();
var isMobile=false;
for(var i=0;i<useragents.length;i++){
    if(agt.indexOf(useragents[i])!=-1){
        isMobile=true;
        break;
    }
}
