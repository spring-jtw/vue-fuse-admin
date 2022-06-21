// 日期 YYYYMMDD
export const DateYMD = () => {
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    return `${year}${month < 10 ? "0" + month : month}${day < 10 ? "0" + day : day
		}`;
}

export const isEmpty = (value) => !Object.keys(value).length;