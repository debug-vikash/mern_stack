<!DOCTYPE html>
<html lang="en">
<head>
    
    <title>Document</title>
</head>
<body>



<script>
    function add(num){
        let sum = 0;
        while(num > 0){
            rem = num % 10;
            sum += rem;
            num = Math.floor(num / 10);
        }
        windows.alert(sum);
    }
    add(1234);
</script>
</body>
</html>