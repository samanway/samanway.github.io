//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

var myOptions = {
      zoom: 14,
                center: new google.maps.LatLng(13.01668, 77.56673),
                    mapTypeId: google.maps.MapTypeId.ROADMAP,
                        styles: [
                          {
                            "featureType": "water",
                            "elementType": "geometry",
                            "stylers": [
                            {
                              "visibility": "on"
                            },
                            {
                              "color": "#aee2e0"
                            }
                            ]
                          },
                          {
                            "featureType": "landscape",
                            "elementType": "geometry.fill",
                            "stylers": [
                            {
                              "color": "#abce83"
                            }
                            ]
                          },
                          {
                            "featureType": "poi",
                            "elementType": "geometry.fill",
                            "stylers": [
                            {
                              "color": "#769E72"
                            }
                            ]
                          },
                          {
                            "featureType": "poi",
                            "elementType": "labels.text.fill",
                            "stylers": [
                            {
                              "color": "#7B8758"
                            }
                            ]
                          },
                          {
                            "featureType": "poi",
                            "elementType": "labels.text.stroke",
                            "stylers": [
                            {
                              "color": "#EBF4A4"
                            }
                            ]
                          },
                          {
                            "featureType": "poi.park",
                            "elementType": "geometry",
                            "stylers": [
                            {
                              "visibility": "simplified"
                            },
                            {
                              "color": "#8dab68"
                            }
                            ]
                          },
                          {
                            "featureType": "road",
                            "elementType": "geometry.fill",
                            "stylers": [
                            {
                              "visibility": "simplified"
                            }
                            ]
                          },
                          {
                            "featureType": "road",
                            "elementType": "labels.text.fill",
                            "stylers": [
                            {
                              "color": "#5B5B3F"
                            }
                            ]
                          },
                          {
                            "featureType": "road",
                            "elementType": "labels.text.stroke",
                            "stylers": [
                            {
                              "color": "#ABCE83"
                            }
                            ]
                          },
                          {
                            "featureType": "road",
                            "elementType": "labels.icon",
                            "stylers": [
                            {
                              "visibility": "off"
                            }
                            ]
                          },
                          {
                            "featureType": "road.local",
                            "elementType": "geometry",
                            "stylers": [
                            {
                              "color": "#A4C67D"
                            }
                            ]
                          },
                          {
                            "featureType": "road.arterial",
                            "elementType": "geometry",
                            "stylers": [
                            {
                              "color": "#9BBF72"
                            }
                            ]
                          },
                          {
                            "featureType": "road.highway",
                            "elementType": "geometry",
                            "stylers": [
                            {
                              "color": "#EBF4A4"
                            }
                            ]
                          },
                          {
                            "featureType": "transit",
                            "stylers": [
                            {
                              "visibility": "off"
                            }
                            ]
                          },
                          {
                            "featureType": "administrative",
                            "elementType": "geometry.stroke",
                            "stylers": [
                            {
                              "visibility": "on"
                            },
                            {
                              "color": "#87ae79"
                            }
                            ]
                          },
                          {
                            "featureType": "administrative",
                            "elementType": "geometry.fill",
                            "stylers": [
                            {
                              "color": "#7f2200"
                            },
                            {
                              "visibility": "off"
                            }
                            ]
                          },
                          {
                            "featureType": "administrative",
                            "elementType": "labels.text.stroke",
                            "stylers": [
                            {
                              "color": "#ffffff"
                            },
                            {
                              "visibility": "on"
                            },
                            {
                              "weight": 4.1
                            }
                            ]
                          },
                          {
                            "featureType": "administrative",
                            "elementType": "labels.text.fill",
                            "stylers": [
                            {
                              "color": "#495421"
                            }
                            ]
                          },
                          {
                            "featureType": "administrative.neighborhood",
                            "elementType": "labels",
                            "stylers": [
                            {
                              "visibility": "off"
                            }
                            ]
                          }
            ]
};

var map = new google.maps.Map(document.getElementById('map'), myOptions);
        

