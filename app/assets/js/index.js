function doSearch() {
    getCityCode(document.querySelector('input').value);
}

var cityCode = '';

function getCityCode(city) {
    $.ajax({
        url: 'http://apis.baidu.com/apistore/weatherservice/cityinfo',
        data: {
            cityname: city

        },
        method: 'get',
        headers: {
            apikey: '019e2a1a60bfcf8d1109c1aae43cd809'
        },
        dataType: 'json',
        success: function(res) {
            // console.log(res);
            // var keys = Object.keys(res.retData);
            cityCode = res.retData['cityCode'];
            // cityName = res.retData['cityName'];
            // keys.forEach(function(item) {
            //     if (item = "cityCode") {
            //         cityCode = res.retData[item];
            //     }
            // })】
              getDayStatus(cityCode, city)
        },
        error: function(err) {
            console.log(err);
        },
    });

}

function getDayStatus(code, city) {
    $.ajax({
        url: 'http://apis.baidu.com/apistore/weatherservice/recentweathers',
        data: {
            cityname: city,
            cityid: code
        },
        method: 'get',
        headers: {
            apikey: '019e2a1a60bfcf8d1109c1aae43cd809'
        },
        dataType: 'json',
        success: function(res) {
            console.log(res);
            var arr = [];
            var keys = Object.keys(res.retData);
            forecast = res.retData['forecast'];
            old = res.retData['history'];
            today = res.retData['today'];
            arr = old.concat(today).concat(forecast);
            // var obj = {};
            // var temArr = [];
            // arr.forEach(function(item){
            //   obj.date = item['date'];
            //   obj.week = item['week'];
            //   obj.hightemp = item['hightemp'];
            //   obj.fengxiang = item['fengxiang'];
            //   obj.fengli = item['fengli'];
            //   obj.Ttype = item['type'];
            //   temArr.push(obj)
            //
             //})
            // localStorage.myData = JSON.stringify(arr);
            // console.log(temArr);
            // var arr2 = a'r
//             var html  = template('table',{list:arr});
//             document.querySelector('#listBody').innerHTML = template('tbody', {
//     list: arr

            document.querySelector('#listBody').innerHTML = template('tbody', {
    list:arr});




        },
        error: function(err) {
            console.log(err);
        },
    })
}
