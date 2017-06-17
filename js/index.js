// 請 jQuery 抓 button 元件，並且設定當 click 事件發生後，要執行的程式碼
$('button').on('click', function() {
    // 取得personal rating的input
    var d = $('#damage').val()
        // 取得total damage的input
    var r = $('#rank').val()
        // 取得rank in game的input
    var random = function(start = 1, end = 50) {
            return Math.floor(Math.random() * 19) + 10000
        }
        // 定義team mates配對的機率母值
    d = Number(d)
        // 將取得的total damage轉成數字
    r = (1 / Number(r)) * 200000
        // 將取得的rank in game轉成數字並且加權
    p = random()
        // 將取得的team mates配對機率母值轉成數字
    rv = d + r + p
        // 計算person rating的raw value
    pr = (rv * (r / d)) / 100
        // 計算 本場戰鬥的個人貢獻(personal rating)
    $('#result').val(pr)
        // 將計算結束顯示在 id=result 的元件上
})
