var db = require('mongoose');
db.connect('mongodb://localhost/dangdang_db');
db.Promise = global.Promise;



var Blog = db.model('blog',{
	title:String,
	description:String,
	content:String,
	view_times:{type:Number,default:0},
	create_time:{type:Date,default:Date.now}
})

var dalData = {};

dalData.Blog = Blog;

/**
 * 获取所有数据
 * @param  {[type]} callBack [回调函数]
 * @return {[type]}          [description]
 */
dalData.getData = function(callBack){
	Blog.find().exec()
		.then(res=>{
			callBack(res);
		}).catch(err=>{
			console.log(err);
			callBack([]);
		})
}

/**
 * 根据id获取数据
 * @param  {[type]} id       [id]
 * @param  {[type]} callBack [回调函数]
 * @return {[type]}          [description]
 */
dalData.getDataByID = function(id,callBack){
	Blog.findById(id).exec()
		.then(res=>{
			callBack(res);
		})
		.catch(err=>{
			console.log(err);
			callBack({});
		})
}

/**
 * 根据id更新数据,如果数据不存在 则新增
 * @param  {[type]} id       [id]
 * @param  {[type]} data     [保存的数据]
 * @param  {[type]} callBack [回调函数]
 * @return {[type]}          [description]
 */
dalData.updateOne = function(id,data,callBack){
	Blog.findByIdAndUpdate(id,data,{upsert:true})
		.then(res=>{
			console.log('成功');
			callBack(true);
		})
		.catch(err=>{
			console.log('失败');
			console.log(err);
			callBack(false);
		})
}

/**
 * 根据id删除数据
 * @param  {[type]} id       [id]
 * @param  {[type]} callBack [回调函数]
 * @return {[type]}          [description]
 */
dalData.delByID = function(id,callBack){
	Blog.findByIdAndRemove(id)
		.then(res=>{
			callBack(res);
		})
		.catch(err=>{
			console.log(err);
			callBack({});
		})
}

/**
 * 根据id更新浏览记录
 * @param  {[type]} id       [id]
 * @param  {[type]} callBack [回调函数]
 * @return {[type]}          [description]
 */
dalData.updateViewTimes = function(id,callBack){
	Blog.findByIdAndUpdate(id,{'$inc':{'view_times':1}})
		.then(res=>{
			console.log('成功');
			callBack(true);
		})
		.catch(err=>{
			console.log('失败');
			console.log(err);
			callBack(false);
		})
}

module.exports = dalData;

