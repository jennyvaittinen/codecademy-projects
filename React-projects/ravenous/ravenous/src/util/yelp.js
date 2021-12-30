const apiKey = 'M7kkUrz-3Te4zMnvOBDaMcQt52zU0Vxzuxya_JYqFDuQ42bCTofc7v6tRf7tHljcwtu-BoiwOUV_EJT3vRAR8RY2_y-6XWX2rEUKbVovsEfMMoFMvzBw0nsXn-rNYXYx';

const Yelp = {
    search(term, location, sortBy){
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,{ 
            headers: {
              Authorization: `Bearer ${apiKey}` 
            }
          }).then(response => {return response.json();}).then(jsonResponse => {
              if(jsonResponse.businesses){
               return jsonResponse.businesses.map(business => {
                   console.log(business);
                return {
                    id: business.id,
                    imageSrc: business.image_url,
                    name: business.name,
                    address: business.location.address1,
                    city: business.location.city,
                    state: business.location.state,
                    zipCode: business.location.zip_code,
                    category: business.categories[0].title,
                    rating: business.rating,
                    reviewCount: business.review_count
                  }
               });
              };
          });
    }
};

export default Yelp;