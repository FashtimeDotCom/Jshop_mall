<?php
namespace app\api\controller;
use app\common\controller\Api;
use app\common\model\GoodsCat;
use think\facade\Request;

/**
 * 商品分类
 * Class Categories
 * @package app\seller\controller
 * @author keinx
 */
class Categories extends Api
{
    //不需要登录的方法
    protected $noLoginAction = ['getTopCat', 'getChildCat', 'getAllCat'];


    /**
     * 获取顶级分类（弃用）
     * @return array
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\ModelNotFoundException
     * @throws \think\exception\DbException
     */
    public function getTopCat()
    {
        $model = new GoodsCat();
        $data = $model->getChildClass();
        $return = array(
            'status' => false,
            'msg' => '',
            'data' => array(),
        );
        if($data)
        {
            $return['status'] = true;
            $return['data'] = $data;
        }
        else
        {
            $return['msg'] = '获取顶级分类失败';
        }

        return $return;
    }


    /**
     * 获取顶级分类下的子分类（弃用）
     * @return array
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\ModelNotFoundException
     * @throws \think\exception\DbException
     */
    public function getChildCat()
    {
        $parent_id = input('parent_id');
        $model = new GoodsCat();
        $data = $model->getChildClass($parent_id);
        $return = array(
            'status' => false,
            'msg' => '',
            'data' => array(),
        );

        if($data)
        {
            $return['status'] = true;
            $return['data'] = $data;
        }
        else
        {
            $return['msg'] = '获取顶级分类失败';
        }

        return $return;
    }


    /**
     * 获取全部分类树状形式
     * @return array
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\ModelNotFoundException
     * @throws \think\exception\DbException
     */
    public function getAllCat()
    {
        $model = new GoodsCat();
        $data = $model->getAllCat();
        $return = array(
            'status' => false,
            'msg' => '',
            'data' => array(),
        );

        if($data)
        {
            $return['status'] = true;
            $return['data'] = $data;
        }
        else
        {
            $return['msg'] = '获取顶级分类失败';
        }

        return $return;
    }


    /**
     * 获取分类名称
     * @return array
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\ModelNotFoundException
     * @throws \think\exception\DbException
     */
    public function getName()
    {
        $model = new GoodsCat();
        $id = Request::param('id');
        return $model->getNameById($id);
    }
}