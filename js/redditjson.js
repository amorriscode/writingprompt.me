function getWritingPrompt() {
  var url = "http://www.reddit.com/r/writingprompts/random.json";

  $.getJSON(url , function (response) {
    var title = response[0].data.children[0].data.title;
    title = title.replace('[WP]', '');
    var url = response[0].data.children[0].data.url;
    var commentCount = response[0].data.children[0].data.num_comments;

    $('#prompt').html(title);
    $('#comments').html('<a href="' + url + '">Human Comments (' + (Number(commentCount) - 1) + ')');
  });
};

getWritingPrompt();

$('#another').click(getWritingPrompt);
