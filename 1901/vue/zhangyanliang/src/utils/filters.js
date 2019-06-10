const vFilter = {

    //货币格式化
    //value 
    //type

    money: function(value, type) {
        if (!value) {
            return value;
        }
        type = type || "¥";
        // n = n || 2;
        // value = value.toFixed(n);
        value = value.toString().split(".")
        var q = value[0];
        var h = value[1];
        q = q.split('').reverse();
        q = q.map((item, index) => {
            if (index !== 0 && index % 3 == 0) {
                item = item + ","
            }
            return item
        })
        q = q.reverse().join("");
        return type + " " + q + '.' + h;
    },


    //时间格式化
    //time
    //type
    dateFormat: function(time, type) {
        if (!time) {
            return time;
        }
        type = type || "-";
        var date = new Date(time);
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var day = date.getDate();
        var hour = date.getHours();
        var min = date.getMinutes();
        var sec = date.getSeconds();
        return `${year}${type}${month}${type}${day}+":"+${hour}+":"+${min}+":"+${sec}`
    }

}

export default vFilter;