import Vue from 'vue';
import VeeValidate,{Validator} from 'vee-validate';
import zh_CN from 'vee-validate/dist/locale/zh_CN'
Vue.use(VeeValidate);

Validator.locale ==="en" ? "zh_CN" : "en";
Validator.localize(Validator.locale,{
    messages: zh_CN.messages,
    attributes:{
        phone:'手机号',
        code:'验证码'
    }
});
Validator.extend('phone', {
    getMessage: (field, [args]) => `请输入正确的手机号码`,
    validate: (value, [args]) =>{
        const reg = /^((13|14|15|17|18)[0-9]{1}\d{8})$/;
        return reg.test(value)
    }
});
Validator.extend('code', {
    getMessage: (field, [args]) => `验证码不合法`,
    validate: (value, [args]) =>{
        const reg = /^\d{6}$/;
        return reg.test(value)
    }
});
Validator.extend('captcha', {
    getMessage: (field, [args]) => `验证码不合法`,
    validate: (value, [args]) =>{
        const reg = /^[a-z0-9]{4}$/i
        return reg.test(value)
    }
});
Validator.extend('user', {
    getMessage: (field, [args]) => `用户名不合法`,
    validate: (value, [args]) =>{
        const reg = /^\w{4}$/
        return reg.test(value)
    }
});
