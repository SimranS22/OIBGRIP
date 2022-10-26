var screen = document.querySelector('#screen');
    var btn = document.querySelectorAll('.calc-btn');

    for (item of btn) {
        item.addEventListener('click', (e) => {
            btntext = e.target.innerText;

            if (btntext == '×') {
                btntext = '*';
            }

            if (btntext == '÷') {
                btntext = '/';
            }
            screen.value += btntext;
        });
    }

    // Functions of operations for row 1
    function squareroot() {
        screen.value = Math.sqrt(screen.value);
    }
    function logbaseten() {
        screen.value = Math.log10(screen.value);
    }
    function naturallog() {
        screen.value = Math.log(screen.value)
    }

    // Functions of operations for row 2
    function squared() {
        screen.value = Math.pow(screen.value, 2);
    }
    function backspc() {
        screen.value = screen.value.substr(0, screen.value.length - 1);
    }
    function plus_minus() {
        screen.value = 0 - screen.value;
    }
    
    // Functions of operations for row 3
    function factorial() {
        var i, n = screen.value , fac = 1;
        for (i = 1; i <= n; i++) {
            fac = fac * i;
        }
        screen.value = fac;
    }
    
    // Functions of operations for row 4
    function reciprocal() {
        screen.value = 1/screen.value;
    }

    // Functions of operations for row 5
    function PI() {
        screen.value = 3.141592;
    }

    // Functions of operations for row 6
    function e() {
        screen.value = 2.718281;
    }

    function percent(){
        screen.value /= 100; 
    }

    
