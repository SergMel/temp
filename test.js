var setCookie = function (cname, cvalue, exphours) {

        var d = new Date();
        d.setTime(d.getTime() + (exphours * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }
	
setCookie("fromCDN", "testValue", 1);