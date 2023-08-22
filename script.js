var amt;
        var year;
        var rate = 0.085;
        var month;
        var emi;
        var otp;
        var name;
        var email;

        function total_emi() {
            amt = parseInt(document.getElementById('amount').value);
            year = parseInt(document.getElementById('year').value);
            month = parseInt(year * 12);

            emi = parseInt(((amt) + (amt * rate * year)) / month);

            document.getElementById('result').innerHTML = "Rs." + " " + emi + " " + "/month";
        }

        function clr() {
            document.getElementById('result').innerHTML = " ";

        }

        function submit_data() {
            name = document.getElementById('name').value;
            email = document.getElementById('email').value;
            otp = Math.ceil(1000 + Math.random() * 10000);

            sessionStorage.setItem("firstName", name);
            sessionStorage.setItem("Email", email);
            sessionStorage.setItem("Otp", otp);

        }