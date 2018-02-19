$(document).ready(function () {
    console.log("Spotify Ready");

    $("#listenButton").click(function (e) {

        console.log("I was clicked");

        var value = $("#artist").val();
        console.log("Sending Query");
        console.log("The value is: " + value);
        var spotifyAccessToken = "BQDdeLdqtHRFHYpVyvh8U3DVplAfNC2iRQaOHzGV8z5sbNuXApZMI_5zJInceHGQsIMnz2BFhJGJZXlumRaWuQPOrjjfN1_m0SEYkn0gAZrlqrONEjb4gYD3Ohjr89faUMa-NokL7Oe9GwoA";

        $.ajaxSetup({
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Accept", "application/json");
                xhr.setRequestHeader ("Authorization", spotifyAccessToken);
                console.log("In before send");
            }

        });


        $.ajax({
            url: "https://api.spotify.com/v1/search?q=" + value + "&type=artist",
            dataType: 'json',
            type:'GET',

            success: function (data) {

                console.log("success");
                console.log(data);
                var results = "";
                results += "<h2>Response from Spotify</h2>"

                if(data.artists.length == 0)
                    results += "Not Results Found!"

                else{
                    for(var i = 0; i < data.artists.items.length; i++){
                        console.log("I")

                        results += "<p>" + data.artists.items[i].name + "<br>";
                        // language=HTML
                        results += "<a href=" + data.artists.items[i].external_urls +">Listen on the Web</a>" + "<br>"
                        results += "<a href=" + data.artists.items[i].uri+"> Listen on Spotify App</a>"
                        results += "</p>";
                    }
                }

                console.log(results);
                $("#Response2").html(results);
            },
            error: function () {
            alert("Cannot get data");
            }



        });
    });

});