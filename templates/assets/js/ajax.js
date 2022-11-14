
$("#form").ajaxForm(function (result) {
  if ($("#pdf").get(0).files.length == 0) {
    swal("please insert file(s)");
  } else {
    const {filename} = JSON.parse(result);
    swal({
      title: "PDFs Merged!",
      text: `Download or view your pdf now!`,
      buttons: ["cancel", "GO"]
    })
      .then((go) => {
        if (go) {
          window.location = `http://localhost:3000/static/${filename}.pdf`;
        }
      });
    
  }
});
