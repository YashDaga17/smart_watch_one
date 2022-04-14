// xxx.js
// xxx.js
import prompt from '@system.prompt';
export default {
    data: {
        weather: '/common/images/partly sunny.png',
        one: '/common/images/1.png',
        two: '/common/images/2.png',
        three: '/common/images/3.png',



    },
    change(e){
        prompt.showToast({
            message: 'value: ' + e.text + ', lines: ' + e.lines + ', height: ' + e.height,
            duration: 3000,
        });
    }

}