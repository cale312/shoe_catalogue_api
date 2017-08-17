# Shoe Catalogue API

API for accessing shoe stock stored in the database

## Getting Started

Use these AJAX calls like this to access the data from the API.

### Prerequisites

Link jquery library for using AJAX calls on your HTML file

```
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
```

### Using AJAX for calling the API

For getting all the stock from database use :

```
$.ajax({
    type: 'GET',
    url: 'https://api-shoe-catalogue.herokuapp.com/api/shoes',
    success: function(data) {
      console.log(data);
    },
    error: function(err) {
      console.log(err);
    }
  });
```

For adding items to the database use :

```
$.ajax({
    type: 'POST',
    url: 'https://api-shoe-catalogue.herokuapp.com/api/shoes',
    contentType: 'application/json'
    success: function(data) {
      console.log(data);
    },
    error: function(err) {
      console.log(err);
    }
  });
```

For getting a specific brand use :

```
$.ajax({
    type: 'GET',
    url: 'https://api-shoe-catalogue.herokuapp.com/api/shoes' + $brand.val()
    success: function(data) {
      console.log(data);
    },
    error: function(err) {
      console.log(err);
    }
  });
```

For getting a specific size use :

```
$.ajax({
    type: 'GET',
    url: 'https://api-shoe-catalogue.herokuapp.com/api/shoes' + $size.val()
    success: function(data) {
      console.log(data);
    },
    error: function(err) {
      console.log(err);
    }
  });
```

For updating a sold item use :

```
$.ajax({
    type: 'POST',
    url: 'https://api-shoe-catalogue.herokuapp.com/api/shoes/sold/brand/' + $brand.val() + '/size/' + $size.val()
    success: function(data) {
      console.log(data);
    },
    error: function(err) {
      console.log(err);
    }
  });
```

For getting a specific brand and size use :

```
$.ajax({
    type: 'GET',
    url: 'https://api-shoe-catalogue.herokuapp.com/api/shoes/brand/' + $brand.val() + '/size/' + $size.val()
    success: function(data) {
      console.log(data);
    },
    error: function(err) {
      console.log(err);
    }
  });
```

## Built With

* [Express](https://expressjs.com/) - The web framework used
* [Mlab](https://mlab.com/) - Database used to store all the data
* [Mngoose](https://mongoosejs.com/) - Used for easy communication with the Mongo Database
* [NodeJs](https://nodejs.org/en/) - Platform used to write the code

## Author

* **Zikisa Cale Sogaxa** - *Initial work* - [cale312](https://github.com/cale312)

## Acknowledgments

* Hat tip to anyone who's code was used
* Inspiration
* etc
