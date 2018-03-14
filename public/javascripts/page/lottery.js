var lottery = (function() {
    var Lottery = function() {
        this.init();
    };
    var Dom = {
        username: $(".username"),
        email: $(".email"),
        password: $(".password"),
        repeatPwd: $(".repeat-pwd"),
        registerBtn: $("#registerBtn")
    };
    Lottery.fn = Lottery.prototype = {
        init: function() {
            //用户名验证
            Dom.username.keyup(this.username);
            Dom.email.keyup(this.email);
            Dom.password.keyup(this.password);
            Dom.repeatPwd.blur(this.repeatPassword);
            Dom.registerBtn.click(this.registerSubmit);
        },
        //提示信息封装
        errorMessage: function(obj, regex) {
            var objVal = $.trim(obj.val());
            if (regex.test(objVal)) {
                obj.next('div.error').addClass('hd');
                return true;
            }
            obj.next('div.error').removeClass('hd');
            return false;
        },
        username: function() {
            var regex = /^\S{1,16}$/;
            var flag=lottery.errorMessage(Dom.username, regex);
            return flag;
        },
        email: function() {
            var regex = /^([0-9A-Za-z\-_\.]+)@([0-9a-z]+\.[a-z]{2,3}(\.[a-z]{2})?)$/g;
            var flag=lottery.errorMessage(Dom.email, regex);
            return flag;
        },
        password: function() {
            var regex = /^[A-Za-z0-9]{6,20}$/;
            var flag=lottery.errorMessage(Dom.password, regex);
            return flag;
        },
        repeatPassword: function() {
            var passwordVal = Dom.password.val();
            var repeatPwd = Dom.repeatPwd.val();
            if (passwordVal == repeatPwd) {
                Dom.repeatPwd.next('div.error').addClass('hd');
                return true;
            } else {
                Dom.repeatPwd.next('div.error').removeClass('hd');
                return false;
            }
            return true;

        },
        //注册提交 
        registerSubmit:function(){
        	var submit=lottery.username()  && lottery.email() && lottery.password() && lottery.repeatPassword();
        	console.log(submit)
        	if(submit){
        		console.log("成功");
        		$.ajax({
        			url:'',
        			type:'post',
        			dataType:'json',
        			beforeSend:function(){

        			},
        			success:function(){

        			},
        			error:function(){

        			},
        			complete:function(){

        			}
        		})
        	}
        }




    }
    return new Lottery();
})();