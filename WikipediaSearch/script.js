var endpoint = 'https://en.wikipedia.org/w/api.php';

$('#search').autocomplete({
  serviceUrl: endpoint,
  dataType: 'jsonp',
  paramName: 'search',
  params: {
    action: 'opensearch',
    limit: 10,
    format: "json"
  },
  transformResult: function(response) {
    return {
      suggestions: $.map(response[1], function(dataItem) {
        return { value: dataItem };
      })
    };    
  }
});

$('#search').keypress(function(key){
  if (key.which === 13) { //ENTER KEY
    $('.searchBtn').click();
  }
});

$('.searchBtn').click(function() {
  var searchString = $('#search').val();
  getJson(searchString);
});

$('.randomBtn').click(function() {
  $.ajax({
      url: 'https://en.wikipedia.org/w/api.php',
      dataType: 'jsonp',
      data: {
        action: 'query',
        list: 'random',
        format: 'json',
        rnnamespace: 0
      },
      success: function(data) {
        var title = data.query.random[0].title;
        $('#search').val(title);
        getJson(title);
      }
  });
});

function getJson(searchString) {
  $.ajax({
      url: 'https://en.wikipedia.org/w/api.php',
      dataType: 'jsonp',
      data: {
        action: 'query',
        list: 'search',
        format: 'json',
        srlimit: 100,
        srsearch: searchString
      },
      success: function(response) {
         parse(response);
      }
  });
}

function parse(obj) {
  if(obj.error) return;
  $('.searchResult').html('');
  var count = obj.query.search.length;
  for(var i = 0; i < count; i++) {
    var title = obj.query.search[i].title,
        desc = obj.query.search[i].snippet;
    showResult(title, desc);
  }
}

function showResult(title, desc) {
  $.ajax({
      url: endpoint,
      dataType: 'jsonp',
      data: {
        action: 'query',
        titles: title,
        prop: 'pageimages',
        format: 'json',
        pithumbsize: 300
      },
      success: function(response) {
        var key = Object.keys(response.query.pages),
            imgUrl = response.query.pages[key].thumbnail.source;
          
        $('.searchResult').append(
          "<div class='box' page='"+title.replace(" ", "_")+"'>" + 
            "<a href='https://en.wikipedia.org/wiki/" +title.replace(" ","_")+ " 'target='_blank'>" + 
          "<div class='thumb' style='background-image: url("+imgUrl+")'></div></a>" + 
              "<div class='info'>" + 
                "<div class='title'>"+title+"</div>" + 
                "<div class='desc'>"+desc+"...</div>" + 
              "</div>" + 
            "</div>" + 
          "</div>"
        );  
      }
  });  
}