$(document).ready(function () {
    console.log("Lyrics Ready");

    $("#listenButton").click(function (e) {
        e.preventDefault();
        console.log("I was clicked");

        var artist = $("#artist").val();
        var song = $("#title").val();
        console.log("Sending Query");
        console.log("The arist is: " + artist);
        console.log("The song name is: " + song);

        var theLyrics = "https://api.lyrics.ovh/v1/" + artist + "/" + song
        console.log("The url is:" + theLyrics);
        $.ajax({
            url: theLyrics ,
            dataType: "json",
            success: function (data) {
                console.log("success");
                console.log(data);
                var results = "";
                results += "<h2>Here are your lyrics</h2>";

                results += data.lyrics;

                console.log(results);
                $("#Response").html(results);
            },
            error: function () {
                console.log("Ajax call failed");
                alert("Cannot get data");
            }



        });




    });

});