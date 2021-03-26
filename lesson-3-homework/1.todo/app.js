window.addEventListener('load', function() {
    var btn = document.querySelector('button');
    var input = document.querySelector('input');
    var cl = document.querySelector('#clear');
    var ul = document.querySelector('ul');

    load();

    // 按下ADD提交TODO显示
    btn.addEventListener('click', function() {
        if (input.value == '') {
            alert('您没有输入内容');
            return false;
        } else {
            // 先读取本地存储原来的数据
            var local = getDate();
            // console.log(local);
            // 把local数组进行更新数据 把最新的数据追加给local数组
            local.push({ title: input.value, done: false });

            // 把这个数组local 存储给本地存储
            saveDate(local);

            // 本地存储数据渲染加载到页面
            load();
            input.value = "";
        }
    })


    // 保存数据到本地
    function saveDate(data) {
        localStorage.setItem("lists", JSON.stringify(data));
    }

    //读取本地数据
    function getDate() {
        var data = localStorage.getItem("lists");
        if (data !== null) {
            // 本地存储里面的数据是字符串格式,转化为对象格式
            return JSON.parse(data);
        } else {
            return [];
        }
    }



    //清空
    cl.onclick = function() {
        localStorage.clear();
        load();
    }

    // 渲染加载数据
    function load() {
        // 读取本地存储的数据
        var data = getDate();
        // console.log(data);
        // 遍历之前清空ul里面的元素内容
        ul.innerHTML = "";

        // 遍历这个数据
        for (let i = 0; i < data.length; i++) {
            var li = document.createElement('li');

            if (data[i].done) {
                li.innerHTML = "<input type='checkbox' checked='checked' class='check'></input><span class='finish'>" + data[i].title + "</span><a href='javascript:;' class='delete' id=" + i + ">X</a>";
            } else {
                li.innerHTML = "<input type='checkbox' class='check'></input><span class=''>" + data[i].title + "</span><a href='javascript:;' class='delete' id=" + i + ">X</a>";
            }

            ul.insertBefore(li, ul.children[0]);
        }

        //删除元素 删除的是当前链接的li
        var lis = document.querySelectorAll('li');
        var del = document.querySelectorAll('.delete');
        var check = document.querySelectorAll('.check');

        for (let i = 0, len = lis.length; i < len; i++) {
            del[i].onclick = function() {
                var index = this.getAttribute("id");
                data.splice(index, 1);
                saveDate(data);
                load();
            }
            check[i].onclick = function() {
                var index = this.nextSibling.nextSibling.getAttribute("id");
                if (check[i].checked === true) {
                    this.nextSibling.classList.add("finish");
                    data[index].done = true;

                } else {
                    this.nextSibling.classList.remove("finish");
                    data[index].done = false;
                }

                saveDate(data);
                load();
            }
        }

    }

})