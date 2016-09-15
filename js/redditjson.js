function getWritingPrompt() {
  var url = "https://www.reddit.com/r/writingprompts/random.json";

  $.getJSON(url , function (response) {
    var title = response[0].data.children[0].data.title;
    title = title.replace(/\[(.*?)\]/, '');
    var url = response[0].data.children[0].data.url;
    var commentCount = response[0].data.children[0].data.num_comments - 1;

    $('#prompt').html(title);

    if (commentCount === 1) {
      $('#comments').html('<a href="' + url + '">Read the ' + Number(commentCount) + ' amazing thing someone wrote.').show();
    }
    if (commentCount > 1) {
      $('#comments').html('<a href="' + url + '">Read the ' + Number(commentCount) + ' amazing things others wrote.').show();
    }

    $('#originalThread').html('<a href="' + url + '"><em>Please give some <span id="love"><3</span> to the original thread.</em></a>');
  });
};

getWritingPrompt();

$('#another').click(getWritingPrompt);
