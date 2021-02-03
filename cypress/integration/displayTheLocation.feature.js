describe('Display the location', () => {
  beforeEach(() => {
    cy.server()
    cy.route('GET', 'https://api.opencagedata.com/geocode/v1**', 'fx:virum_location_response.json')
    cy.route('GET', 'https://api.openweathermap.org/data/**', 'fx:virum_weather_response.json')
  })

  it('on initial render', () => {
    cy.visit('/', ({
      onBeforeLoad(window) {
        const stubLocation = {
          coords: {
            latitude: 55.7842,
            longitude: 12.4518
          }
        };
        cy.stub(window.navigator.geolocation, "getCurrentPosition").callsFake(
          callback => {
            return callback(stubLocation)
          }
        )
      }
    }))
    cy.get('[data-cy="weather-display"]').within(()=>{
      cy.get('[data-cy="location"]').should('contain', 'Virum')
      cy.get('[data-cy="temp"]').should('contain', "22℃")  
    }) 
  });
});


//cy.get('[data-cy=""]') 