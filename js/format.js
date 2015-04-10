module.exports = {
  Crop : function(url, w,h)  {
    url = encodeURIComponent(url);
    url = "https://images1-focus-opensocial.googleusercontent.com/gadgets/proxy?url=" + url + "&container=focus&refresh=31536000&bust=10";
    if(w)
      url += "&resize_w=" + w;
    if(h)
      url += "&resize_h=" + h;
    return url;
  }
};