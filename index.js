$(document).on("click","#download", function(){
    // $(this).html("");
    // html2canvas($("#first-page"),{
    //     onrendered: function(canvas) {
    //         firstPage = canvas.toDataURL("image/jpeg", 10);
    //     }
    // });

    // setTimeout(function() {
    //     pdf.addImage(firstPage, "JPEG", 5 , 5, 190 , 500);
    //     pdf.save("CV.pdf");
    // },150);

    var CvHtml = document.getElementById("first-page");

    var opt = {
        margin: 1,
        filename: 'CV-NguyenBaTu.pdf',
        image: {type: 'jpeg', quality: 0.98},
        html2canvas: {scale: 1},
        jsPDF: {unit: 'in', format: 'letter', orientation: 'portrait'}
    };

    html2pdf(CvHtml, opt);


});


$(document).on("click","#redirectGoogleMap", function(e) {
    window.location.href = "https://www.google.com/maps/place/Ng%C3%B5+2+Ph%E1%BA%A1m+V%C4%83n+%C4%90%E1%BB%93ng,+Mai+D%E1%BB%8Bch,+C%E1%BA%A7u+Gi%E1%BA%A5y,+H%C3%A0+N%E1%BB%99i,+Vi%E1%BB%87t+Nam/@21.0430648,105.7779118,17z/data=!3m1!4b1!4m5!3m4!1s0x313454cc9e0c5bb3:0x73c8398b9d7a04c8!8m2!3d21.0430598!4d105.7801005?hl=vi-VN";
});

$(document).on("click","#redirectGithub", function(e) {
    window.location.href = "https://github.com/maialino123";
});