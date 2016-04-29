var CronJob = require('cron').CronJob;
var job = new CronJob('0 */30 * * * *',function(){
    console.log('每秒执行一次');
});
job.start();