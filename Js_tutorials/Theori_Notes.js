Q) How many ways an HTML element can be accessed in JavaScript code? 

Ans: 1) getElementById()
     2) getElementByClass()
     3) getElementByTagName()
     4) querySelector()

/*
<html>
<head>
    <title>DOM getElementsByTagName() Method</title>
</head>

<body style="text-align: center">
    <p>A computer science portal for geeks.</p>
    <button onclick="geek()">Try it</button>
    <script>
        function geek() {
            let doc = document.getElementsByTagName("p");
            doc[0].style.background = "green";
            doc[0].style.color = "white";
        }
    </script>
</body>
</html>
*/