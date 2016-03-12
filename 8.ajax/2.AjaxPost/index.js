window.onload = function(){
    //先注册监听
    document.querySelector('#regBtn').addEventListener('click',function(){
        var xhr = new XMLHttpRequest();
        xhr.open('POST','/reg2',true);
        //设置响应类型
        xhr.responseType = 'text';
        xhr.onreadystatechange = function(){
            if(xhr.readyState == 4 && /2\d{2}/.test(xhr.status)){
                console.log(xhr.responseText);
                var img = document.createElement('img');
                img.src = xhr.responseText;
                document.body.appendChild(img);
                //把上传后的图片显示出来
                /**
                 * 1.在服务器端，把files里的avatar里的path读出来，复制到imgs目录下。
                 * 2. 把此图片的路径返回浏览器端
                 * 3. 浏览器端构建一个img元素，追加到body上，并且指定img的src属性
                 * 4. 服务器端可以接收客户端发出的请求图片的请求，返回图片的内容。
                 */
            }
        };
        //准备发送给服务器的数据
        var formData = new FormData();
        //给这个表单对象增加一个表单元素
        formData.append('username',document.querySelector('input[name=username]').value);
        //给这个表单对象增加一个表单元素
        formData.append('password',document.querySelector('input[name=password]').value);
        var avatar = document.querySelector('input[name=avatar]')
        //给这个表单对象增加一个文件元素
        formData.append('avatar',avatar.files[0]);
        xhr.send(formData);
        return false;
    })
}
