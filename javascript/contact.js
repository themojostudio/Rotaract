function initMap() {
        var myLatLng = {lat: 47.652980, lng: 26.247498};

        var map = new google.maps.Map(document.getElementById('map-contact'), {
          zoom: 17,
          center: myLatLng
        });

        var marker = new google.maps.Marker({
          position: myLatLng,
          map: map,
          title: 'Genesis'
        });
      }

        google.maps.event.addDomListener(window, 'load', initMap);
