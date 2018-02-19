$(document).ready(function () {
    console.log("Spotify Ready");

    $("#listenButton").click(function (e) {
        e.preventDefault();
        console.log("I was clicked");

        var value = $("#artist").val();
        console.log("Sending Query");
        console.log("The value is: " + value);

        var data = "";

        $.ajax({
            url: "https://api.spotify.com/v1/search?q=" + value + "&type=artist",
            beforeSend: function (data) {
                data.setRequestHeader("Authorization", "Bearer BQD2R54h7X4z3WB5CWkXXuOAZfD0AoEvcGKdxxookA_gt3Hn78O7T882jhh0Mj6JjZfZnpdzlvBSsMJiW2mVyKYHMUzE5YzyoShy4L2DK1mO3lcgHqDvz0a5MnIVi--vkBGIqgw7lw3A6XP4");
                console.log("in beforeSend");
                },
            dataType: "json",
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