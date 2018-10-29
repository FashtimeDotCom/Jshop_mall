<?php

return [
    'default_image' => '/static/images/default.png',
    'upload_path' => ROOT_PATH . 'public' . DIRECTORY_SEPARATOR . 'static' . DIRECTORY_SEPARATOR . 'uploads',
    //上传文件限制5M
    'upload_filesize' => 5242880,
    //分页默认数量
    'page_limit' => 10,
    //售后，评论等上传图片数量限制
    'image_max' => 5,
    //商品导入模板
    'goods_import_templete' => ROOT_PATH . 'public' . DS . 'static' . DS . 'templete' .DS. 'goods-csv-import.csv',
    //快递查询配置参数
    'api_express_key' => 'e5572466f046924e506ebf43dbccc786',

    'login_fail_num' => 3,              //登陆失败次数，如果每天登陆失败次数超过次数字，就会显示图片验证码
    'tocash_money_low' => '100' ,       //最低提现金额
    'authorization_url'=>'https://jshop.jihainet.com', //授权查询地址
    'product'=>'Jshop-b2c标准版',//产品名称
    'version'=>'v1.0.1',//版本号
    'sms_password' => '456550wht',          //短信密码，会覆盖项目配置里的此参数，为了保密密码
];