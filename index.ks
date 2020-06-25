<html>

<head>
    <variable Name>Kiwiscripter</variable>
    <variable TimeStamp><timestamp /></variable>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@600&display=swap" rel="stylesheet">
    <style>
        <include>./style.css</include>
    </style>
    <title>
        <echo>Name</echo>
    </title>
</head>

<body>
    <div class="container">
        <div class="row">
            <div class="col-12 navbar">
                <span class="name">
                    <echo>Name</echo>
                </span>
                <a class="nav-button" href="/">Home</a>
            </div>
        </div>
        <div class="row">
            <div class="col-point5"></div>
            <include>./info.html</include>
            <div class="col-2 pic-container">Projects
                <include>./projects.html</include>
            </div>
            <div id="pp">loading</div>
            <div class="col-point5"></div>
        </div>
    </div>
</body>

</html>