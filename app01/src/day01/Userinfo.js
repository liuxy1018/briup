import React from 'react';

//用户信息栏 
function UserInfo(props){
    let {user} = props;
    if(user){
        return(
            <div>
                欢迎您
                头像
                哈哈哈
            </div>
        );
    }
    return (
        <div>
            <a href='www.baidu.com'>亲，请登录</a>
        </div>
    );
}

export default UserInfo;