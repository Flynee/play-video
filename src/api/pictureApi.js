import request from '@/utils/request';

const pictureApi = {
    /**
    * @description 获取一张图所有点线的数据
    * @param {Body} 接口参数
    */
    getAllGeoData(data = null) {
        return request({
            method: 'POST',
            url: '/getAllData',
            data,
        });
    },

    /**
     * @description 获取boundary 数据
     * @param {Object} params 参数
     */
    getBoundary(params) {
        return request({
            method: 'GET',
            url: 'getBoundary',
            params,
        });
    },
};

export default pictureApi;
