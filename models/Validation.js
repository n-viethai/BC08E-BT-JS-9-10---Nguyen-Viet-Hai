function Validation () {
    this.kiemTraInput = function (value,inputSelector,name) {

        if(value === '') {
            document.querySelector(inputSelector).innerHTML = name + ' không được bỏ trống!';
            return false;
        } else {
            document.querySelector(inputSelector).innerHTML = '';
            return true;
        }
    }
}