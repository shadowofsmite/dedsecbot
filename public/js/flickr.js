var showFlickr = function(tag) {
  console.log(tag);
  var url = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=dfdaf236db6128f07853bd0d0c28de84&sort=interestingness-desc&per_page=9&format=json&callback=jsonFlickrApi&tags='+tag;
  $.ajax({
    type: 'GET',
    url: url,
    async: false,
    jsonpCallback: 'jsonFlickrApi',
    contentType: "application/json",
    dataType: 'jsonp'
  });

  scrollTo("#section_image_search");
};

var jsonFlickrApi = function(results) {
  var photos = results.photos.photo;
  $.each(photos, function(index, photo) {
    $(document.createElement("img"))
      .attr({ src: 'http://farm'+photo.farm+'.staticflickr.com/'+photo.server+'/'+photo.id+'_'+photo.secret+'_s.jpg' })
      .addClass("flickrGallery")
      .appendTo("#flickr");
    $("#flickr").slideDown("slow");
  });
};
