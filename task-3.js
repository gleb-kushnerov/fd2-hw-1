(function () {
    'use strict';

    let sourceStr = 'Lorem.\nIpsum dolor sit amet.\nConsectetur adipisicing elit.\nCommodi,' +
        ' cupiditate dolores dolorum.';

    function strToHtml(str) {
        let sourceArr = str.split('\n'),
            [firstStr, ... rest] = sourceArr,
            restStr = ``;

        rest.forEach((element => restStr += `<p>${element}</p>\n`));

        return `<h1>${firstStr}</h1>\n${restStr}`;
    }

    console.log(strToHtml(sourceStr));

}());