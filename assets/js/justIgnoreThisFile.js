let convenientItemCrossSign=document.getElementById('convenientLinks');
let convenientItemMenu=document.getElementById('convenientItems');
convenientItemCrossSign.onclick=function(){
    convenientItemMenu.classList.toggle('active'); /*khi CrossSign được bấm, thì class của ItemMenu sẽ được thay đổi (thêm bớt 'tapThis')*/
}
/*Giải thích cơ chế:
        khi bấm vào '+' thì thẻ <div id="ItemMenu"> sẽ được thêm class="tapThis"
        Khi mà <div> đó là 'id="ItemMenu" class="tapThis"' thì sẽ chạy khối lệnh dưới, còn bộ chọn ở cuối thì tùy theo cách đặt thẻ nào sẽ được thêm/bớt class
        Còn khi mà nó vẫn chỉ là 'id="ItemMenu" và không có class, thì nó sẽ chạy theo khối css không có class'*/